import type { PetProductPageConfig } from "../types";

/**
 * Configuration for dog-collar product page
 * This is an example configuration showing all available options
 */
export const config: PetProductPageConfig = {
  handle: "dog-collar",

  meta: {
    title: "Premium Dog Collar - Comfortable & Durable",
    description: "High-quality dog collar made from eco-friendly materials. Perfect for daily walks and training.",
    keywords: ["dog collar", "pet accessories", "dog supplies", "eco-friendly"],
  },

  sections: {
    hero: {
      enabled: true,
      background: "bg-gradient-to-r from-amber-50 to-orange-50",
      heading: "Premium Dog Collar Collection",
      subheading: "Comfort meets style for your furry friend",
    },

    productInfo: {
      enabled: true,
      showVendor: true,
      showProductType: true,
      badges: ["Eco-Friendly", "Durable", "Adjustable"],
      features: [
        "Made from recycled materials",
        "Adjustable fit for all sizes",
        "Weather-resistant",
        "Reflective stitching for night safety",
      ],
    },

    features: {
      enabled: true,
      title: "Why Choose Our Dog Collar?",
      items: [
        {
          icon: "🌱",
          title: "Eco-Friendly Materials",
          description: "Made from 100% recycled polyester, reducing environmental impact",
        },
        {
          icon: "💪",
          title: "Built to Last",
          description: "Reinforced stitching and durable hardware for years of use",
        },
        {
          icon: "🎯",
          title: "Perfect Fit",
          description: "Adjustable design fits neck sizes from 12 to 20 inches",
        },
        {
          icon: "🌙",
          title: "Night Safety",
          description: "Reflective stitching keeps your dog visible in low light",
        },
      ],
    },

    sizeGuide: {
      enabled: true,
      title: "Size Guide",
      chart: [
        {
          size: "Small",
          measurements: {
            neck: "12-14 inches",
            recommended: "Small breeds (Chihuahua, Yorkie)",
          },
        },
        {
          size: "Medium",
          measurements: {
            neck: "14-18 inches",
            recommended: "Medium breeds (Beagle, Cocker Spaniel)",
          },
        },
        {
          size: "Large",
          measurements: {
            neck: "18-22 inches",
            recommended: "Large breeds (Labrador, Golden Retriever)",
          },
        },
      ],
      notes: "Measure your dog's neck at the widest point for the best fit.",
    },

    careInstructions: {
      enabled: true,
      title: "Care Instructions",
      instructions: [
        "Hand wash with mild soap and warm water",
        "Air dry completely before next use",
        "Check hardware regularly for wear",
        "Replace if showing signs of damage",
      ],
      accordion: false,
    },

    relatedProducts: {
      enabled: true,
      heading: "Complete Your Dog's Collection",
      limit: 4,
      tags: ["dog", "collar-accessories"],
    },

    reviews: {
      enabled: true,
      showSummary: true,
      initialCount: 10,
      allowPhotos: true,
    },
  },

  customData: {
    // Any additional custom data for this specific product
    videoUrl: "https://example.com/videos/dog-collar-demo.mp4",
    warranty: "1 year manufacturer warranty",
    returnPolicy: "30-day money-back guarantee",
  },
};

export default config;
