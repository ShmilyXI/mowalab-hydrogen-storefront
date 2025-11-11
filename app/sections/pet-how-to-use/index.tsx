import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { cn } from "~/utils/cn";

interface HowToUseProps extends HydrogenComponentProps {
  heading: string;
  description: string;
  backgroundColor: string;
}

const steps = [
  {
    number: "01",
    title: "Put On & Adjust",
    description: "Slide on the glove and adjust the velcro strap for a comfortable, secure fit. Works for both left and right hands.",
    image: "http://iph.href.lu/400x400?text=Step+1+Adjust",
    tips: "Make sure it's snug but not too tight. You should be able to move your fingers freely.",
  },
  {
    number: "02",
    title: "Gently Brush Your Pet",
    description: "Pet your cat or dog with gentle, natural stroking motions in the direction of hair growth. Your pet will think it's just cuddle time!",
    image: "http://iph.href.lu/400x400?text=Step+2+Brush",
    tips: "Start with 2-3 minute sessions if your pet is new to grooming. Gradually increase time.",
  },
  {
    number: "03",
    title: "See The Magic",
    description: "Watch as loose fur collects on the glove palm. Most pets are completely deshedded in just 5 minutes.",
    image: "http://iph.href.lu/400x400?text=Step+3+Results",
    tips: "Use during shedding season (spring & fall) for best results. Regular use reduces shedding by 60%.",
  },
  {
    number: "04",
    title: "Easy Cleanup",
    description: "Peel off the collected fur in one piece and toss in the trash. Rinse the glove under water if needed. Done!",
    image: "http://iph.href.lu/400x400?text=Step+4+Clean",
    tips: "The silicone is naturally antibacterial. Just air dry after rinsing.",
  },
];

const HowToUse = forwardRef<HTMLElement, HowToUseProps>((props, ref) => {
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

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                index % 2 === 1 && "lg:flex-row-reverse",
              )}
            >
              {/* Image Side */}
              <div className={cn("order-2", index % 2 === 1 && "lg:order-1")}>
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -left-4 -top-4 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-extrabold text-white shadow-xl">
                    {step.number}
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-50" />
                </div>
              </div>

              {/* Content Side */}
              <div className={cn("order-1", index % 2 === 1 && "lg:order-2")}>
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Pro Tip */}
                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                    <div className="flex items-start gap-3">
                      <svg className="mt-1 h-6 w-6 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="mb-1 font-bold text-blue-900">Pro Tip</div>
                        <p className="text-sm text-blue-800">{step.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h3 className="mb-4 text-3xl font-extrabold">Ready to Get Started?</h3>
          <p className="mb-8 text-xl">
            Join 15,000+ pet parents who have made grooming easier and more enjoyable
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Order Now - $29.99
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-blue-600"
            >
              Watch Video Tutorial
            </button>
          </div>

          {/* Trust Elements */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Shipping Over $35</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HowToUse;

export const schema = createSchema({
  type: "pet-how-to-use",
  title: "Pet How To Use",
  inspector: [
    {
      group: "Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "How To Use Your Grooming Glove",
          placeholder: "How To Use Your Grooming Glove",
        },
        {
          type: "textarea",
          name: "description",
          label: "Description",
          defaultValue: "Follow these simple steps for the best grooming experience",
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
