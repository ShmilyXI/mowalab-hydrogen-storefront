import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { cn } from "~/utils/cn";

interface ProductBenefitsProps extends HydrogenComponentProps {
  heading: string;
  description: string;
  backgroundColor: string;
}

const benefits = [
  {
    icon: "🐾",
    title: "GENTLE YET EFFECTIVE",
    description: "Soft silicone tips massage while removing loose fur, making grooming feel like petting. Your pet will purr with joy instead of running away.",
  },
  {
    icon: "✨",
    title: "95% HAIR COLLECTION RATE",
    description: "Unlike brushes that scatter hair everywhere, our glove captures loose fur in one place. Just 5 minutes = a cleaner home and happier pet.",
  },
  {
    icon: "👋",
    title: "ONE-HANDED SIMPLICITY",
    description: "Adjustable velcro strap fits any hand size. Groom your pet while watching TV, reading, or relaxing. No special skills needed.",
  },
  {
    icon: "🧼",
    title: "EASY CLEANUP",
    description: "Collected hair peels off in seconds. No more picking fur out of bristles or cleaning complicated tools. Rinse with water and air dry.",
  },
  {
    icon: "🐕",
    title: "WORKS FOR ALL PETS",
    description: "Perfect for cats and dogs of all sizes and coat types. Short hair, long hair, thick fur, or fine coat - it works on everything.",
  },
  {
    icon: "🛡️",
    title: "DURABLE & SAFE",
    description: "Made from premium food-grade silicone that's safe for sensitive skin. Built to last through hundreds of grooming sessions.",
  },
  {
    icon: "📉",
    title: "REDUCES SHEDDING BY 60%",
    description: "Regular use (2-3 times per week) significantly reduces the amount of hair left on furniture, clothes, and carpets.",
  },
  {
    icon: "💚",
    title: "PROMOTES HEALTHY COAT",
    description: "Gentle massage stimulates blood circulation and distributes natural oils, leaving your pet's coat shiny and healthy.",
  },
];

const ProductBenefits = forwardRef<HTMLElement, ProductBenefitsProps>((props, ref) => {
  const { heading, description, backgroundColor, ...rest } = props;

  return (
    <section
      ref={ref}
      {...rest}
      className={cn("py-16 md:py-24", backgroundColor)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-4 text-5xl">{benefit.icon}</div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 transition-all duration-300 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-2xl font-bold text-gray-900">
            Join 15,000+ Happy Pet Parents
          </p>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Get Your Grooming Glove Now
          </button>
        </div>
      </div>
    </section>
  );
});

export default ProductBenefits;

export const schema = createSchema({
  type: "pet-product-benefits",
  title: "Pet Product Benefits",
  inspector: [
    {
      group: "Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "Why Pet Parents Love This Glove",
          placeholder: "Why Pet Parents Love This Glove",
        },
        {
          type: "textarea",
          name: "description",
          label: "Description",
          defaultValue: "Discover the features that make this grooming glove a must-have for every pet owner",
          placeholder: "Section description",
        },
        {
          type: "color",
          name: "backgroundColor",
          label: "Background Color",
          defaultValue: "bg-gray-50",
        },
      ],
    },
  ],
});
