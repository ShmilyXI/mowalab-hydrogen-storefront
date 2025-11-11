import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { cn } from "~/utils/cn";

interface CustomerTestimonialsProps extends HydrogenComponentProps {
  heading: string;
  description: string;
  backgroundColor: string;
}

const testimonials = [
  {
    rating: 5,
    title: "MY CAT ACTUALLY PURRS NOW!",
    content: "I've tried every grooming tool on the market. This is the ONLY one my grumpy Persian cat tolerates. She actually purrs and leans into it now. The amount of hair it collects in 5 minutes is insane!",
    author: "Sarah M.",
    location: "California",
    image: "http://iph.href.lu/100x100?text=SM",
    verified: true,
  },
  {
    rating: 5,
    title: "SAVES ME $50/MONTH",
    content: "Used to take my Golden Retriever to the groomer every month for $50-60. Now I just use this glove 2x a week and his coat looks amazing. Paid for itself in the first month!",
    author: "David R.",
    location: "Texas",
    image: "http://iph.href.lu/100x100?text=DR",
    verified: true,
  },
  {
    rating: 5,
    title: "LIFE-CHANGING FOR SHEDDING SEASON",
    content: "I have 3 cats. My couch used to be covered in hair no matter how much I vacuumed. Since using these gloves, I've cut vacuuming from daily to twice a week. My allergies are even better!",
    author: "Emily T.",
    location: "New York",
    image: "http://iph.href.lu/100x100?text=ET",
    verified: true,
  },
  {
    rating: 5,
    title: "SO EASY TO USE",
    content: "I'm 67 and have arthritis. Regular brushes hurt my hands. This glove is so comfortable and easy - I can groom my cat while watching my shows. Best purchase I've made this year!",
    author: "Margaret L.",
    location: "Florida",
    image: "http://iph.href.lu/100x100?text=ML",
    verified: true,
  },
  {
    rating: 5,
    title: "WORKS ON STUBBORN SHORT-HAIRED DOGS",
    content: "My Pitbull mix sheds like crazy despite having short hair. Regular brushes barely touched the undercoat. This glove removes SO much fur I didn't even know was there. Highly recommend!",
    author: "Jason K.",
    location: "Colorado",
    image: "http://iph.href.lu/100x100?text=JK",
    verified: true,
  },
  {
    rating: 5,
    title: "MY DOG THINKS IT'S PLAYTIME",
    content: "Best part? My dog gets excited when he sees the glove now. He thinks it's part of our bonding time. No more running away from grooming sessions!",
    author: "Lisa P.",
    location: "Washington",
    image: "http://iph.href.lu/100x100?text=LP",
    verified: true,
  },
];

const CustomerTestimonials = forwardRef<HTMLElement, CustomerTestimonialsProps>((props, ref) => {
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

          {/* Aggregate Rating */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-8 w-8 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-gray-900">4.8 out of 5</div>
              <div className="text-sm text-gray-600">Based on 2,847 reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Rating Stars */}
              <div className="mb-4 flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {testimonial.title}
              </h3>

              {/* Content */}
              <p className="mb-6 leading-relaxed text-gray-600">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    {testimonial.verified && (
                      <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>

              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Verified Purchase
                </div>
              )}

              {/* Decorative Element */}
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 transition-all duration-300 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white shadow-2xl sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-5xl font-extrabold">15,000+</div>
            <div className="text-lg">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-extrabold">98%</div>
            <div className="text-lg">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-extrabold">4.8/5</div>
            <div className="text-lg">Average Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-2xl font-bold text-gray-900">
            Join Thousands of Happy Pet Parents
          </p>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Order Your Glove Today
          </button>
          <p className="mt-4 text-sm text-gray-600">
            30-Day Money-Back Guarantee | Free Shipping Over $35
          </p>
        </div>
      </div>
    </section>
  );
});

export default CustomerTestimonials;

export const schema = createSchema({
  type: "pet-customer-testimonials",
  title: "Pet Customer Testimonials",
  inspector: [
    {
      group: "Content",
      inputs: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
          defaultValue: "What Pet Parents Are Saying",
          placeholder: "What Pet Parents Are Saying",
        },
        {
          type: "textarea",
          name: "description",
          label: "Description",
          defaultValue: "Real reviews from real customers who love their grooming glove",
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
