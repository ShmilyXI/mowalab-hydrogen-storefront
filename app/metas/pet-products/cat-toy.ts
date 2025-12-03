import type { PetProductPageConfig } from "../types";

/**
 * Configuration for cat-toy product page
 * This shows a different configuration for cat products
 */
export const config: PetProductPageConfig = {
  handle: "cat-toy",

  meta: {
    title: "Interactive Cat Toy - Keep Your Cat Entertained",
    description: "Engaging cat toy designed to stimulate your cat's natural hunting instincts.",
    keywords: ["cat toy", "interactive toy", "cat supplies", "pet entertainment"],
  },

  sections: {
    hero: {
      enabled: true,
      background: "bg-gradient-to-r from-purple-50 to-pink-50",
      heading: "Interactive Cat Toy Collection",
      subheading: "Hours of fun for your feline friend",
    },

    productInfo: {
      enabled: true,
      showVendor: true,
      showProductType: true,
      badges: ["Interactive", "Safe Materials", "Indoor Use"],
      features: [
        "Stimulates natural hunting instincts",
        "Made from non-toxic materials",
        "Easy to clean",
        "Suitable for all cat ages",
      ],
    },

    features: {
      enabled: true,
      title: "Features Your Cat Will Love",
      items: [
        {
          icon: "🎮",
          title: "Interactive Design",
          description: "Keeps cats engaged and active for hours",
        },
        {
          icon: "✅",
          title: "Safe Materials",
          description: "Non-toxic, pet-safe materials for worry-free play",
        },
        {
          icon: "🧼",
          title: "Easy to Clean",
          description: "Washable design for maintaining hygiene",
        },
        {
          icon: "🐱",
          title: "All Ages",
          description: "Perfect for kittens and adult cats alike",
        },
      ],
    },

    careInstructions: {
      enabled: true,
      title: "Care & Maintenance",
      instructions: [
        "Wipe clean with damp cloth after each use",
        "Machine washable on gentle cycle",
        "Inspect regularly for damage",
        "Keep away from water if electronic",
      ],
      accordion: true,
    },

    relatedProducts: {
      enabled: true,
      heading: "More Cat Toys",
      limit: 6,
      tags: ["cat", "toys"],
    },

    reviews: {
      enabled: true,
      showSummary: true,
      initialCount: 8,
      allowPhotos: true,
    },

    // Size guide disabled for toys
    sizeGuide: {
      enabled: false,
    },
  },

  customData: {
    ageRecommendation: "All ages",
    playType: "Interactive",
    batteryRequired: false,
  },
};

export default config;
