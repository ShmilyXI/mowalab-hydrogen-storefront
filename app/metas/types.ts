/**
 * Pet Product Page Configuration Types
 *
 * Define custom configurations for individual pet product pages.
 * Each product can have different section settings and component parameters.
 */

/**
 * Base configuration for any section
 */
export interface SectionConfig {
  /** Whether this section is enabled/visible */
  enabled?: boolean;
  /** Custom CSS classes for the section */
  className?: string;
  /** Any additional custom properties */
  [key: string]: any;
}

/**
 * Hero section configuration
 */
export interface HeroSectionConfig extends SectionConfig {
  /** Background color or gradient */
  background?: string;
  /** Hero image URL */
  imageUrl?: string;
  /** Heading text override */
  heading?: string;
  /** Subheading text */
  subheading?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button link */
  ctaLink?: string;
}

/**
 * Product info section configuration
 */
export interface ProductInfoSectionConfig extends SectionConfig {
  /** Show vendor name */
  showVendor?: boolean;
  /** Show product type */
  showProductType?: boolean;
  /** Custom badges to display */
  badges?: string[];
  /** Highlight features */
  features?: string[];
}

/**
 * Product features section
 */
export interface FeaturesSectionConfig extends SectionConfig {
  /** Section title */
  title?: string;
  /** List of features */
  items?: Array<{
    icon?: string;
    title: string;
    description: string;
  }>;
}

/**
 * Related products section
 */
export interface RelatedProductsConfig extends SectionConfig {
  /** Section heading */
  heading?: string;
  /** Number of products to show */
  limit?: number;
  /** Filter by collection */
  collectionHandle?: string;
  /** Filter by tags */
  tags?: string[];
}

/**
 * Reviews section configuration
 */
export interface ReviewsSectionConfig extends SectionConfig {
  /** Show rating summary */
  showSummary?: boolean;
  /** Number of reviews to display initially */
  initialCount?: number;
  /** Allow photo uploads */
  allowPhotos?: boolean;
}

/**
 * Care instructions section
 */
export interface CareInstructionsConfig extends SectionConfig {
  /** Section title */
  title?: string;
  /** Instructions list */
  instructions?: string[];
  /** Show as accordion */
  accordion?: boolean;
}

/**
 * Size guide section
 */
export interface SizeGuideConfig extends SectionConfig {
  /** Guide title */
  title?: string;
  /** Size chart data */
  chart?: Array<{
    size: string;
    measurements: Record<string, string>;
  }>;
  /** Additional notes */
  notes?: string;
}

/**
 * Complete pet product page configuration
 */
export interface PetProductPageConfig {
  /** Product handle (must match Shopify product handle) */
  handle: string;

  /** Page meta information */
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };

  /** Section configurations */
  sections?: {
    hero?: HeroSectionConfig;
    productInfo?: ProductInfoSectionConfig;
    features?: FeaturesSectionConfig;
    relatedProducts?: RelatedProductsConfig;
    reviews?: ReviewsSectionConfig;
    careInstructions?: CareInstructionsConfig;
    sizeGuide?: SizeGuideConfig;
    /** Any custom sections */
    [key: string]: SectionConfig | undefined;
  };

  /** Custom data specific to this product */
  customData?: Record<string, any>;
}

/**
 * Default configuration that will be used if no product-specific config exists
 */
export const DEFAULT_PET_PRODUCT_CONFIG: Partial<PetProductPageConfig> = {
  sections: {
    hero: {
      enabled: true,
      background: "bg-gradient-to-r from-blue-50 to-indigo-50",
    },
    productInfo: {
      enabled: true,
      showVendor: true,
      showProductType: true,
    },
    features: {
      enabled: true,
      title: "Product Features",
    },
    relatedProducts: {
      enabled: true,
      heading: "You May Also Like",
      limit: 4,
    },
    reviews: {
      enabled: true,
      showSummary: true,
      initialCount: 5,
      allowPhotos: true,
    },
  },
};
