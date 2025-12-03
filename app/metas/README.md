# Pet Products Configuration System

这个配置系统允许你为每个宠物产品创建独立的页面配置，控制不同 section 的显示和参数。

## 📁 文件结构

```
app/metas/
├── types.ts                          # TypeScript 类型定义
├── pet-products/
│   ├── index.ts                      # 配置加载器
│   ├── dog-collar.ts                 # 狗项圈产品配置
│   ├── cat-toy.ts                    # 猫玩具产品配置
│   └── [your-product-handle].ts      # 添加更多产品配置
└── README.md                         # 本文档
```

## 🚀 快速开始

### 1. 为新产品创建配置文件

在 `app/metas/pet-products/` 目录下创建新文件，文件名必须与产品的 handle 匹配：

```typescript
// app/metas/pet-products/bird-cage.ts
import type { PetProductPageConfig } from "../types";

export const config: PetProductPageConfig = {
  handle: "bird-cage",

  meta: {
    title: "Spacious Bird Cage - Safe & Comfortable",
    description: "Large bird cage perfect for parrots and other pet birds",
  },

  sections: {
    hero: {
      enabled: true,
      background: "bg-gradient-to-r from-sky-50 to-blue-50",
      heading: "Premium Bird Cages",
    },

    productInfo: {
      enabled: true,
      showVendor: true,
      badges: ["Spacious", "Easy Clean", "Durable"],
    },

    features: {
      enabled: true,
      title: "Cage Features",
      items: [
        {
          icon: "🏠",
          title: "Spacious Design",
          description: "Plenty of room for your bird to move",
        },
      ],
    },
  },
};

export default config;
```

### 2. 注册配置文件

在 `app/metas/pet-products/index.ts` 中添加你的配置：

```typescript
const configs = {
  "dog-collar": () => import("./dog-collar"),
  "cat-toy": () => import("./cat-toy"),
  "bird-cage": () => import("./bird-cage"),  // 👈 添加这行
};
```

### 3. 在组件中使用配置

配置会自动加载到路由的 loader 中：

```typescript
// 在 Weaverse section 组件中
import { useLoaderData } from "react-router";

export default function MySection() {
  const { petConfig } = useLoaderData<typeof loader>();

  // 访问配置
  const heroConfig = petConfig.sections?.hero;
  const features = petConfig.sections?.features?.items;

  if (!heroConfig?.enabled) {
    return null;  // Section 被禁用
  }

  return (
    <div className={heroConfig.background}>
      <h1>{heroConfig.heading}</h1>
      {features?.map((feature) => (
        <div key={feature.title}>
          <span>{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## 📋 可配置的 Section 类型

### Hero Section
```typescript
hero: {
  enabled: true,
  background: "bg-gradient-to-r from-blue-50 to-indigo-50",
  imageUrl: "https://...",
  heading: "Custom Heading",
  subheading: "Custom Subheading",
  ctaText: "Shop Now",
  ctaLink: "/collections/pet-products",
}
```

### Product Info Section
```typescript
productInfo: {
  enabled: true,
  showVendor: true,
  showProductType: true,
  badges: ["Badge 1", "Badge 2"],
  features: ["Feature 1", "Feature 2"],
}
```

### Features Section
```typescript
features: {
  enabled: true,
  title: "Why Choose This Product?",
  items: [
    {
      icon: "🌟",
      title: "Feature Title",
      description: "Feature description",
    },
  ],
}
```

### Size Guide Section
```typescript
sizeGuide: {
  enabled: true,
  title: "Size Guide",
  chart: [
    {
      size: "Small",
      measurements: {
        dimension1: "10-12 inches",
        dimension2: "5-7 lbs",
      },
    },
  ],
  notes: "How to measure your pet",
}
```

### Care Instructions
```typescript
careInstructions: {
  enabled: true,
  title: "Care Instructions",
  instructions: [
    "Instruction 1",
    "Instruction 2",
  ],
  accordion: false,  // 显示为列表或手风琴
}
```

### Related Products
```typescript
relatedProducts: {
  enabled: true,
  heading: "You May Also Like",
  limit: 4,
  collectionHandle: "pet-accessories",
  tags: ["dog", "collar"],
}
```

### Reviews Section
```typescript
reviews: {
  enabled: true,
  showSummary: true,
  initialCount: 5,
  allowPhotos: true,
}
```

## 🎨 自定义 Section

你可以添加完全自定义的 section：

```typescript
sections: {
  // 标准 sections...
  hero: { ... },

  // 自定义 section
  customWarranty: {
    enabled: true,
    years: 2,
    coverage: "Full replacement",
    className: "bg-yellow-50 p-6",
  },

  customShipping: {
    enabled: true,
    freeShippingOver: 50,
    estimatedDays: "3-5",
  },
}
```

然后在组件中访问：

```typescript
const warrantyConfig = petConfig.sections?.customWarranty;

if (warrantyConfig?.enabled) {
  return (
    <div className={warrantyConfig.className}>
      <h3>{warrantyConfig.years} Year Warranty</h3>
      <p>{warrantyConfig.coverage}</p>
    </div>
  );
}
```

## 🔧 高级用法

### 条件显示 Section

```typescript
// 在组件中
const { petConfig, product } = useLoaderData<typeof loader>();

// 根据配置决定是否显示
if (!petConfig.sections?.features?.enabled) {
  return null;
}

// 根据产品价格显示不同内容
const showPremiumFeatures = product.priceRange.minVariantPrice.amount > 100;
```

### 访问自定义数据

```typescript
const { petConfig } = useLoaderData<typeof loader>();

// 访问自定义数据
const videoUrl = petConfig.customData?.videoUrl;
const warranty = petConfig.customData?.warranty;
const returnPolicy = petConfig.customData?.returnPolicy;
```

### 默认配置

如果产品没有特定配置文件，系统会使用默认配置（定义在 `types.ts` 中的 `DEFAULT_PET_PRODUCT_CONFIG`）。

## 📝 最佳实践

1. **文件命名**：配置文件名必须与 Shopify 产品 handle 完全匹配
2. **类型安全**：使用 TypeScript 类型获得自动补全和类型检查
3. **渐进增强**：先使用默认配置，然后为特定产品定制
4. **组件检查**：始终检查 `enabled` 标志和配置是否存在
5. **性能优化**：配置在服务端加载，不会增加客户端负担

## 🎯 实际应用场景

### 场景 1：不同产品显示不同功能

```typescript
// dog-collar.ts
sections: {
  sizeGuide: { enabled: true },      // 狗项圈需要尺寸指南
  careInstructions: { enabled: true }, // 需要护理说明
}

// cat-toy.ts
sections: {
  sizeGuide: { enabled: false },     // 玩具不需要尺寸指南
  careInstructions: { enabled: true },
}
```

### 场景 2：定制营销内容

```typescript
// premium-dog-bed.ts
sections: {
  hero: {
    background: "bg-gradient-to-r from-purple-100 to-pink-100",
    heading: "Luxury Sleep for Your Best Friend",
    subheading: "Orthopedic Memory Foam Dog Bed",
  },
  features: {
    items: [
      { icon: "💎", title: "Premium Materials", ... },
      { icon: "🏆", title: "Award Winning", ... },
    ],
  },
}
```

### 场景 3：特定产品的优惠

```typescript
customData: {
  specialOffer: {
    enabled: true,
    text: "Buy 2 Get 1 Free!",
    validUntil: "2024-12-31",
  },
}
```

## 🐛 调试

在开发服务器中查看加载的配置：

```typescript
console.log("Pet Config:", petConfig);
console.log("Hero Config:", petConfig.sections?.hero);
console.log("Has Custom Config:", hasCustomConfig(handle));
```

## 📚 TypeScript 类型

所有类型定义在 `app/metas/types.ts` 中：
- `PetProductPageConfig` - 完整页面配置
- `SectionConfig` - 基础 section 配置
- `HeroSectionConfig` - Hero section
- `FeaturesSectionConfig` - Features section
- 等等...

## 🔄 更新和维护

添加新产品配置的步骤：
1. 创建 `app/metas/pet-products/[handle].ts`
2. 在 `index.ts` 的 `configs` 对象中注册
3. 重启开发服务器
4. 访问 `/pet-products/[handle]` 查看效果

## 💡 提示

- 配置文件支持代码拆分，只有访问的产品配置才会被加载
- 所有配置在服务端加载，SEO 友好
- 可以在配置中使用环境变量和动态数据
- 配置会与默认配置深度合并，只需定义需要覆盖的部分
