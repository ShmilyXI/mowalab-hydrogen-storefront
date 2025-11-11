import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef, useState } from "react";
import { cn } from "~/utils/cn";

interface ProductFaqProps extends HydrogenComponentProps {
  heading: string;
  description: string;
  backgroundColor: string;
}

const faqs = [
  {
    question: "Will my pet actually like this?",
    answer: "Yes! 95% of our customers report their pets love it or tolerate it much better than traditional brushes. The soft silicone feels like gentle petting, not harsh brushing. Even anxious pets usually calm down within 30 seconds. If your pet is new to grooming, start with short 2-minute sessions and gradually increase.",
  },
  {
    question: "Does it work for long-haired cats/dogs?",
    answer: "Absolutely! It works exceptionally well on long-haired breeds. The 0.5-0.8cm silicone tips penetrate through the topcoat to remove loose undercoat without pulling or tangling. Customers with Persian cats, Maine Coons, Golden Retrievers, and Huskies love it.",
  },
  {
    question: "How often should I use it?",
    answer: "For best results, use 2-3 times per week (5-10 minutes each session). During heavy shedding seasons (spring & fall), you can use it daily. Regular grooming reduces shedding by up to 60% and prevents hairballs in cats.",
  },
  {
    question: "Is it easy to clean?",
    answer: "Super easy! The collected hair peels off like a sheet in one motion. For deep cleaning, just rinse under water and air dry. The silicone is naturally antibacterial and won't trap odors.",
  },
  {
    question: "What if it doesn't fit my hand?",
    answer: "The adjustable velcro strap fits hand circumferences from 6\" to 10\" (kids to large adult hands). It's designed to be worn comfortably for extended grooming sessions without fatigue.",
  },
  {
    question: "My pet has sensitive skin. Is this safe?",
    answer: "Yes, it's made from food-grade silicone that's hypoallergenic and gentle on sensitive skin. Unlike metal bristle brushes, there are no sharp edges that could scratch or irritate. Many customers with pets who have skin allergies prefer this over traditional tools.",
  },
  {
    question: "Can I use it on rabbits, guinea pigs, or other small pets?",
    answer: "Yes! While designed for cats and dogs, many customers successfully use it on rabbits, guinea pigs, and even horses. Just use lighter pressure on smaller or more delicate animals.",
  },
  {
    question: "How long does it last?",
    answer: "With proper care, the glove lasts 1-2 years of regular use. The silicone is durable and the velcro remains strong through hundreds of grooming sessions. We offer a 30-day money-back guarantee and 12-month warranty.",
  },
  {
    question: "Does it really reduce shedding, or just collect existing loose fur?",
    answer: "It does both! It immediately collects loose fur that would otherwise end up on your furniture. Regular massage also promotes healthier skin and coat, which naturally reduces excessive shedding over time. Think of it as preventive + reactive solution.",
  },
  {
    question: "Is there a left-hand and right-hand version?",
    answer: "The design is universal and works for both hands. For maximum efficiency, we recommend buying the 2-pack (one for each hand) so you can groom faster using both hands simultaneously.",
  },
];

const ProductFaq = forwardRef<HTMLElement, ProductFaqProps>((props, ref) => {
  const { heading, description, backgroundColor, ...rest } = props;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      {...rest}
      className={cn("py-16 md:py-24", backgroundColor)}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            {description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* Question Button */}
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-lg font-bold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={cn(
                    "h-6 w-6 flex-shrink-0 text-blue-600 transition-transform duration-200",
                    openIndex === index && "rotate-180",
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Panel */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <div className="border-t-2 border-gray-100 p-6 pt-4">
                  <p className="leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Still Have Questions?</h3>
          <p className="mb-6 text-lg">
            We're here to help! Contact our support team anytime.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              className="rounded-lg bg-white px-6 py-3 font-bold text-blue-600 shadow-lg transition-all hover:bg-gray-100"
            >
              Contact Support
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-blue-600"
            >
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProductFaq;

export const schema = createSchema({
  type: "pet-product-faq",
  title: "Pet Product FAQ",
  inspector: [
    {
      group: "Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "Frequently Asked Questions",
          placeholder: "Frequently Asked Questions",
        },
        {
          type: "textarea",
          name: "description",
          label: "Description",
          defaultValue: "Everything you need to know about the grooming glove",
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
