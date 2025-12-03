import { Analytics, getSeoMeta } from "@shopify/hydrogen";
import type { LoaderFunctionArgs, MetaArgs } from "@shopify/remix-oxygen";
import { useLoaderData } from "react-router";
import invariant from "tiny-invariant";
import { routeHeaders } from "~/utils/cache";
import { seoPayload } from "~/utils/seo.server";
import { WeaverseContent } from "~/weaverse";

export const headers = routeHeaders;

const PET_COLLECTION_HANDLE = "pet-products";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const { storefront } = context;

  // Load the pet-products collection
  const { collection } = await storefront.query(PET_COLLECTION_QUERY, {
    variables: {
      handle: PET_COLLECTION_HANDLE,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  });

  invariant(collection, "Pet products collection not found");

  // Load Weaverse page data
  const weaverseData = await context.weaverse.loadPage({
    type: "COLLECTION",
    handle: PET_COLLECTION_HANDLE,
  });

  const seo = seoPayload.collection({ collection, url: request.url });

  return {
    collection,
    weaverseData,
    seo,
  };
}

export const meta = ({ matches }: MetaArgs<typeof loader>) => {
  return getSeoMeta(
    ...matches.map((match) => (match.data as any)?.seo).filter(Boolean),
  );
};

export default function PetProductsIndex() {
  const { collection } = useLoaderData<typeof loader>();

  return (
    <>
      <WeaverseContent />
      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </>
  );
}

const PET_COLLECTION_QUERY = `#graphql
  query PetCollection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 1) {
        nodes {
          handle
        }
      }
    }
  }
` as const;
