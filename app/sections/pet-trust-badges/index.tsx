import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { cn } from "~/utils/cn";

interface TrustBadgesProps extends HydrogenComponentProps {
  backgroundColor: string;
  layout: "horizontal" | "grid";
}

const badges = [
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: "30-DAY MONEY-BACK GUARANTEE",
    description: "Not satisfied? Return it for a full refund, no questions asked.",
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
      </svg>
    ),
    title: "FREE SHIPPING",
    description: "On all orders over $35 (add a second glove to qualify!)",
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    title: "4.8/5 STARS",
    description: "Based on 2,847 verified customer reviews",
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
      </svg>
    ),
    title: "VET-APPROVED",
    description: "Recommended by veterinarians for at-home grooming",
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
    title: "ECO-FRIENDLY",
    description: "Durable design reduces waste from disposable lint rollers",
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: "SECURE CHECKOUT",
    description: "Encrypted payment processing for your safety",
  },
];

const TrustBadges = forwardRef<HTMLElement, TrustBadgesProps>((props, ref) => {
  const { backgroundColor, layout, ...rest } = props;

  return (
    <section
      ref={ref}
      {...rest}
      className={cn("py-12 md:py-16", backgroundColor)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid gap-8",
            layout === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-6",
          )}
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 text-blue-600">
                {badge.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-900">
                {badge.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TrustBadges;

export const schema = createSchema({
  type: "pet-trust-badges",
  title: "Pet Trust Badges",
  inspector: [
    {
      group: "Layout",
      inputs: [
        {
          type: "toggle-group",
          name: "layout",
          label: "Layout",
          configs: {
            options: [
              { label: "Horizontal", value: "horizontal" },
              { label: "Grid", value: "grid" },
            ],
          },
          defaultValue: "horizontal",
        },
        {
          type: "color",
          name: "backgroundColor",
          label: "Background Color",
          defaultValue: "bg-white",
        },
      ],
    },
  ],
});
