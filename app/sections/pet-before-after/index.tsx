import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { cn } from "~/utils/cn";

interface BeforeAfterComparisonProps extends HydrogenComponentProps {
  heading: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDescription: string;
  afterDescription: string;
  backgroundColor: string;
}

const BeforeAfterComparison = forwardRef<HTMLElement, BeforeAfterComparisonProps>((props, ref) => {
  const {
    heading,
    beforeImage,
    afterImage,
    beforeLabel,
    afterLabel,
    beforeDescription,
    afterDescription,
    backgroundColor,
    ...rest
  } = props;

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
            See the dramatic difference in just 5 minutes
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Before */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-red-100 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {beforeLabel}
            </div>

            {/* Image */}
            <div className="mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={beforeImage || "http://iph.href.lu/600x450?text=Cat+Hair+Everywhere"}
                alt="Before grooming"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-900">The Problem</h3>
              <p className="text-lg leading-relaxed text-red-800">
                {beforeDescription}
              </p>
              <ul className="space-y-2">
                {[
                  "Cat hair everywhere on furniture",
                  "Constant vacuuming still not enough",
                  "Pet resists traditional brushes",
                  "Hair flying around during grooming",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {afterLabel}
            </div>

            {/* Image */}
            <div className="mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={afterImage || "http://iph.href.lu/600x450?text=Clean+Home+Happy+Pet"}
                alt="After grooming"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-900">The Solution</h3>
              <p className="text-lg leading-relaxed text-green-800">
                {afterDescription}
              </p>
              <ul className="space-y-2">
                {[
                  "Clean furniture & no scattered hair",
                  "5 minutes to collect 95% of fur",
                  "Pet purrs and enjoys the process",
                  "Easy cleanup - just peel and toss",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight Effect */}
            <div className="absolute -right-8 -top-8 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-5xl font-extrabold text-blue-600">5 min</div>
            <div className="text-lg font-medium text-gray-600">Average Grooming Time</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-extrabold text-blue-600">95%</div>
            <div className="text-lg font-medium text-gray-600">Hair Collection Rate</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-extrabold text-blue-600">60%</div>
            <div className="text-lg font-medium text-gray-600">Shedding Reduction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Transform Your Grooming Experience
          </button>
        </div>
      </div>
    </section>
  );
});

export default BeforeAfterComparison;

export const schema = createSchema({
  type: "pet-before-after",
  title: "Pet Before After",
  inspector: [
    {
      group: "Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "The Difference is Clear",
          placeholder: "The Difference is Clear",
        },
        {
          type: "image",
          name: "beforeImage",
          label: "Before Image",
        },
        {
          type: "image",
          name: "afterImage",
          label: "After Image",
        },
        {
          type: "text",
          name: "beforeLabel",
          label: "Before Label",
          defaultValue: "Before",
        },
        {
          type: "text",
          name: "afterLabel",
          label: "After Label",
          defaultValue: "After 5 Minutes",
        },
        {
          type: "textarea",
          name: "beforeDescription",
          label: "Before Description",
          defaultValue: "Frustrated with pet hair covering your couch, clothes, and floors. Traditional brushes scatter hair everywhere and your pet runs away.",
        },
        {
          type: "textarea",
          name: "afterDescription",
          label: "After Description",
          defaultValue: "Just 5 minutes with the grooming glove and you've collected all loose fur in one place. Your home stays cleaner and your pet actually enjoyed it!",
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
