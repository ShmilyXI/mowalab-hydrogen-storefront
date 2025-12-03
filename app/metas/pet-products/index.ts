/**
 * Pet Products Configuration Loader
 *
 * This module dynamically loads product-specific configurations.
 * Add new product configs by creating new files in this directory.
 */

import type { PetProductPageConfig } from "../types";
import { DEFAULT_PET_PRODUCT_CONFIG } from "../types";

/**
 * Import all product configurations
 * Add your new product configs here
 */
const configs = {
  "dog-collar": () => import("./dog-collar"),
  "cat-toy": () => import("./cat-toy"),
  // Add more product configs here:
  // "bird-cage": () => import("./bird-cage"),
  // "fish-tank": () => import("./fish-tank"),
};

/**
 * Deep merge two objects
 */
function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const result = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMerge(
        result[key] || ({} as any),
        source[key] as any,
      );
    } else if (source[key] !== undefined) {
      result[key] = source[key] as any;
    }
  }

  return result;
}

/**
 * Load configuration for a specific product handle
 *
 * @param handle - Product handle (e.g., "dog-collar")
 * @returns Product configuration merged with defaults
 *
 * @example
 * ```typescript
 * const config = await loadPetProductConfig("dog-collar");
 * console.log(config.sections.hero.heading);
 * ```
 */
export async function loadPetProductConfig(
  handle: string,
): Promise<PetProductPageConfig> {
  try {
    // Check if config exists for this handle
    const configLoader = configs[handle as keyof typeof configs];

    if (configLoader) {
      const module = await configLoader();
      const productConfig = module.config || module.default;

      // Merge with default config
      return deepMerge(
        { ...DEFAULT_PET_PRODUCT_CONFIG, handle } as PetProductPageConfig,
        productConfig,
      );
    }

    // Return default config if no specific config exists
    return {
      handle,
      ...DEFAULT_PET_PRODUCT_CONFIG,
    } as PetProductPageConfig;
  } catch (error) {
    console.error(`Error loading config for ${handle}:`, error);

    // Return default config on error
    return {
      handle,
      ...DEFAULT_PET_PRODUCT_CONFIG,
    } as PetProductPageConfig;
  }
}

/**
 * Check if a product has a custom configuration
 *
 * @param handle - Product handle
 * @returns True if custom config exists
 */
export function hasCustomConfig(handle: string): boolean {
  return handle in configs;
}

/**
 * Get list of all products with custom configurations
 *
 * @returns Array of product handles
 */
export function getConfiguredProducts(): string[] {
  return Object.keys(configs);
}

/**
 * Synchronously get config (for server-side only)
 * Note: This requires the config files to be pre-loaded
 */
export function getConfigSync(handle: string): PetProductPageConfig | null {
  try {
    // This is a synchronous version - use with caution
    // It will only work if configs are already loaded in memory
    const configKey = handle as keyof typeof configs;
    if (configKey in configs) {
      return {
        handle,
        ...DEFAULT_PET_PRODUCT_CONFIG,
      } as PetProductPageConfig;
    }
    return null;
  } catch {
    return null;
  }
}

export { configs };
