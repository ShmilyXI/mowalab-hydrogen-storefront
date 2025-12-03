import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { useLoaderData } from "react-router";
import { cn } from "~/utils/cn";

interface PetProductHeroProps extends HydrogenComponentProps {
  heading: string;
  subheading: string;
  price: string;
  comparePrice: string;
  badge: string;
  heroImage: string;
  backgroundColor: string;
  textColor: string;
}

const PetProductHero = forwardRef<HTMLElement, PetProductHeroProps>((props, ref) => {
  const loaderData = useLoaderData<any>();
  const product = loaderData?.product;

  const {
    heading,
    subheading,
    price,
    comparePrice,
    badge,
    heroImage,
    backgroundColor,
    textColor,
    ...rest
  } = props;

  // Smart defaults: use Weaverse config or fall back to product data
  const displayHeading = heading || product?.title || "Product Name";
  const displayPrice = price || (product?.priceRange?.minVariantPrice?.amount
    ? `$${product.priceRange.minVariantPrice.amount}`
    : "$0.00");
  const displayImage = heroImage || product?.featuredImage?.url || "http://iph.href.lu/800x800?text=Product";
  const displayComparePrice = comparePrice || (product?.compareAtPriceRange?.maxVariantPrice?.amount
    ? `$${product.compareAtPriceRange.maxVariantPrice.amount}`
    : "");

  return (
    <section
      ref={ref}
      {...rest}
      className={cn("relative overflow-hidden py-16 md:py-24", backgroundColor)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Product Images */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Badge */}
              {badge && (
                <div className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {badge}
                </div>
              )}

              {/* Main Product Image */}
              <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                  src={displayImage}
                  alt={displayHeading}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Images - Decorative */}
              <div className="absolute -right-8 top-1/4 hidden h-32 w-32 overflow-hidden rounded-xl border-4 border-white shadow-xl lg:block">
                <img
                  src="http://iph.href.lu/200x200?text=Happy+Cat"
                  alt="Happy cat"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -left-8 bottom-1/4 hidden h-32 w-32 overflow-hidden rounded-xl border-4 border-white shadow-xl lg:block">
                <img
                  src="http://iph.href.lu/200x200?text=Happy+Dog"
                  alt="Happy dog"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className={cn("mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl", textColor)}>
              {displayHeading}
            </h1>

            {subheading && (
              <p className={cn("mb-6 text-xl sm:text-2xl", textColor)}>
                {subheading}
              </p>
            )}

            {/* Rating */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className={cn("text-sm font-medium", textColor)}>
                4.8/5 (2,847 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 flex items-baseline gap-4">
              <span className={cn("text-5xl font-bold", textColor)}>
                {displayPrice}
              </span>
              {displayComparePrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {displayComparePrice}
                </span>
              )}
            </div>

            {/* Key Benefits - Quick List */}
            <div className="mb-8 space-y-3">
              {[
                "5-Minute Deshedding Solution",
                "95% Hair Collection Rate",
                "Your Pet Will Love It",
                "Easy Cleanup - Just Peel & Toss",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={cn("text-lg font-medium", textColor)}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Add to Cart - {displayPrice}
              </button>

              <button
                type="button"
                className="rounded-lg border-2 border-blue-600 bg-transparent px-8 py-4 text-lg font-bold text-blue-600 transition-all hover:bg-blue-50"
              >
                Learn More
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={cn("text-sm font-medium", textColor)}>30-Day Guarantee</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className={cn("text-sm font-medium", textColor)}>Free Shipping $35+</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={cn("text-sm font-medium", textColor)}>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PetProductHero;

export const schema = createSchema({
  type: "pet-product-hero",
  title: "Pet Product Hero",
  inspector: [
    {
      group: "Hero Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "Pet Grooming Glove",
          placeholder: "Pet Grooming Glove",
        },
        {
          type: "text",
          name: "subheading",
          label: "Subheading",
          defaultValue: "Turn Grooming Into Bonding Time",
          placeholder: "Turn Grooming Into Bonding Time",
        },
        {
          type: "text",
          name: "price",
          label: "Price",
          defaultValue: "$29.99",
          placeholder: "$29.99",
        },
        {
          type: "text",
          name: "comparePrice",
          label: "Compare Price",
          defaultValue: "$49.99",
          placeholder: "$49.99",
        },
        {
          type: "text",
          name: "badge",
          label: "Badge Text",
          defaultValue: "47% OFF",
          placeholder: "47% OFF",
        },
        {
          type: "image",
          name: "heroImage",
          label: "Hero Image",
        },
      ],
    },
    {
      group: "Styling",
      inputs: [
        {
          type: "color",
          name: "backgroundColor",
          label: "Background Color",
          defaultValue: "bg-gradient-to-br from-blue-50 to-purple-50",
        },
        {
          type: "color",
          name: "textColor",
          label: "Text Color",
          defaultValue: "text-gray-900",
        },
      ],
    },
  ],
});
