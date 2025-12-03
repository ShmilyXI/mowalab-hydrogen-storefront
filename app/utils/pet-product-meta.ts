/**
 * Pet Product Metafields Utilities
 *
 * Use Shopify metafields to store product-specific configuration
 * that can be managed in Shopify Admin.
 */

export interface PetProductMetafields {
  // Hero section
  heroHeading?: string;
  heroSubheading?: string;
  heroBadge?: string;
  heroImage?: string;

  // Benefits
  benefits?: string[]; // Stored as JSON array in metafield

  // Features
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Custom data
  customBadges?: string[];
  specialOffer?: {
    text: string;
    validUntil: string;
  };
}

/**
 * Parse product metafields into structured configuration
 */
export function parsePetProductMeta(product: any): PetProductMetafields {
  const metafields = product.metafields || [];

  const config: PetProductMetafields = {};

  // Parse metafields
  for (const field of metafields) {
    if (field.namespace === "pet_product") {
      switch (field.key) {
        case "hero_heading":
          config.heroHeading = field.value;
          break;
        case "hero_subheading":
          config.heroSubheading = field.value;
          break;
        case "hero_badge":
          config.heroBadge = field.value;
          break;
        case "benefits":
          try {
            config.benefits = JSON.parse(field.value);
          } catch {
            config.benefits = [];
          }
          break;
        case "features":
          try {
            config.features = JSON.parse(field.value);
          } catch {
            config.features = [];
          }
          break;
        case "custom_badges":
          try {
            config.customBadges = JSON.parse(field.value);
          } catch {
            config.customBadges = [];
          }
          break;
      }
    }
  }

  return config;
}

/**
 * Get default configuration if no metafields exist
 */
export function getDefaultPetProductMeta(): PetProductMetafields {
  return {
    benefits: [
      "High Quality Materials",
      "Safe for Pets",
      "Easy to Clean",
      "Satisfaction Guaranteed",
    ],
  };
}
