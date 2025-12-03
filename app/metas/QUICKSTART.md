# 快速开始指南 - Pet Products 配置系统

## ⚡ 5分钟快速上手

### 步骤 1: 创建产品配置文件

假设你的产品 handle 是 `premium-dog-food`，创建文件：

**`app/metas/pet-products/premium-dog-food.ts`**

```typescript
import type { PetProductPageConfig } from "../types";

export const config: PetProductPageConfig = {
  handle: "premium-dog-food",

  sections: {
    hero: {
      enabled: true,
      background: "bg-gradient-to-r from-green-50 to-lime-50",
      heading: "优质狗粮 健康每一天",
    },

    productInfo: {
      enabled: true,
      badges: ["有机认证", "营养均衡", "无添加剂"],
    },

    features: {
      enabled: true,
      title: "产品特点",
      items: [
        {
          icon: "🥩",
          title: "真实肉类",
          description: "80% 真实鸡肉含量",
        },
        {
          icon: "🌾",
          title: "无谷物配方",
          description: "适合敏感肠胃",
        },
      ],
    },
  },
};

export default config;
```

### 步骤 2: 注册配置

编辑 **`app/metas/pet-products/index.ts`**：

```typescript
const configs = {
  "dog-collar": () => import("./dog-collar"),
  "cat-toy": () => import("./cat-toy"),
  "premium-dog-food": () => import("./premium-dog-food"), // 👈 添加这行
};
```

### 步骤 3: 在组件中使用

在你的 Weaverse section 组件中：

```typescript
import { useLoaderData } from "react-router";

export default function HeroSection() {
  const { petConfig } = useLoaderData<typeof loader>();

  const heroConfig = petConfig.sections?.hero;

  if (!heroConfig?.enabled) {
    return null;
  }

  return (
    <section className={heroConfig.background}>
      <h1>{heroConfig.heading}</h1>
    </section>
  );
}
```

### 步骤 4: 测试

启动开发服务器并访问：

```bash
npm run dev

# 访问 http://localhost:3456/pet-products/premium-dog-food
```

## 📋 常见配置示例

### 示例 1: 简单配置（只改标题和徽章）

```typescript
export const config: PetProductPageConfig = {
  handle: "simple-product",

  sections: {
    productInfo: {
      badges: ["新品上市", "限时优惠"],
    },
  },
};
```

### 示例 2: 禁用某些 section

```typescript
export const config: PetProductPageConfig = {
  handle: "minimal-product",

  sections: {
    sizeGuide: { enabled: false },      // 不显示尺寸指南
    careInstructions: { enabled: false }, // 不显示护理说明
    relatedProducts: { enabled: false },  // 不显示相关产品
  },
};
```

### 示例 3: 完整定制

```typescript
export const config: PetProductPageConfig = {
  handle: "luxury-cat-bed",

  meta: {
    title: "奢华猫窝 - 给猫咪最好的睡眠",
    description: "记忆棉猫窝，舒适透气",
  },

  sections: {
    hero: {
      enabled: true,
      background: "bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50",
      heading: "奢华猫窝系列",
      subheading: "为爱猫打造的梦幻睡眠空间",
    },

    productInfo: {
      enabled: true,
      showVendor: true,
      badges: ["记忆棉", "可机洗", "防滑底座"],
      features: [
        "高密度记忆棉填充",
        "可拆卸清洗外套",
        "防滑硅胶底座",
        "多种尺寸可选",
      ],
    },

    features: {
      enabled: true,
      title: "为什么选择我们的猫窝？",
      items: [
        {
          icon: "💤",
          title: "舒适睡眠",
          description: "记忆棉材质，完美贴合猫咪身形",
        },
        {
          icon: "🧼",
          title: "易于清洁",
          description: "外套可拆卸，机洗烘干",
        },
        {
          icon: "🛡️",
          title: "安全材料",
          description: "无毒环保材料，通过安全认证",
        },
      ],
    },

    sizeGuide: {
      enabled: true,
      title: "尺寸选择指南",
      chart: [
        {
          size: "小号",
          measurements: {
            dimensions: "45 x 35 x 15 cm",
            weight: "适合 3kg 以下猫咪",
          },
        },
        {
          size: "大号",
          measurements: {
            dimensions: "60 x 45 x 20 cm",
            weight: "适合 3-8kg 猫咪",
          },
        },
      ],
    },

    careInstructions: {
      enabled: true,
      title: "护理说明",
      instructions: [
        "外套可机洗，水温不超过 30°C",
        "记忆棉内芯不可水洗，可用吸尘器清洁",
        "放置在通风处自然晾干",
        "避免阳光直射",
      ],
    },

    relatedProducts: {
      enabled: true,
      heading: "搭配推荐",
      limit: 4,
      tags: ["cat", "accessories"],
    },
  },

  customData: {
    warranty: "2年质保",
    shipping: "包邮",
    returns: "7天无理由退换",
  },
};
```

## 🎯 在组件中访问不同配置

### 访问基础配置

```typescript
const { petConfig } = useLoaderData<typeof loader>();

// 访问 section 配置
const heroEnabled = petConfig.sections?.hero?.enabled;
const heroHeading = petConfig.sections?.hero?.heading;
const badges = petConfig.sections?.productInfo?.badges;
```

### 访问自定义数据

```typescript
const { petConfig } = useLoaderData<typeof loader>();

const warranty = petConfig.customData?.warranty;
const shipping = petConfig.customData?.shipping;
```

### 条件渲染

```typescript
export default function SizeGuideSection() {
  const { petConfig } = useLoaderData<typeof loader>();

  const sizeGuide = petConfig.sections?.sizeGuide;

  // Section 被禁用
  if (!sizeGuide?.enabled) {
    return null;
  }

  // 没有尺寸数据
  if (!sizeGuide.chart || sizeGuide.chart.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>{sizeGuide.title}</h2>
      {sizeGuide.chart.map((item) => (
        <div key={item.size}>
          <h3>{item.size}</h3>
          {Object.entries(item.measurements).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))}
        </div>
      ))}
      {sizeGuide.notes && <p>{sizeGuide.notes}</p>}
    </section>
  );
}
```

## 🔥 高级技巧

### 技巧 1: 根据产品类型显示不同内容

```typescript
const { product, petConfig } = useLoaderData<typeof loader>();

// 根据产品类型调整显示
const isFood = product.productType === "Pet Food";
const isToy = product.tags.includes("toy");

if (isFood && petConfig.sections?.nutritionInfo) {
  // 显示营养信息
}
```

### 技巧 2: 动态样式

```typescript
const { petConfig } = useLoaderData<typeof loader>();

const heroClasses = cn(
  "hero-section",
  petConfig.sections?.hero?.background,
  petConfig.sections?.hero?.className,
);

return <section className={heroClasses}>...</section>;
```

### 技巧 3: 合并默认值

```typescript
const { petConfig } = useLoaderData<typeof loader>();

// 使用配置值或默认值
const heading = petConfig.sections?.hero?.heading || "默认标题";
const limit = petConfig.sections?.relatedProducts?.limit || 4;
```

## 📝 检查清单

创建新产品配置时，确保：

- [ ] 文件名与产品 handle 完全匹配
- [ ] 在 `index.ts` 中注册了配置
- [ ] 导出了 `config` 或 `default`
- [ ] 使用了正确的 TypeScript 类型
- [ ] 重启了开发服务器
- [ ] 在浏览器中测试了效果

## 🐛 常见问题

**Q: 配置不生效？**
- 确认文件名与产品 handle 匹配
- 确认已在 `index.ts` 注册
- 重启开发服务器

**Q: TypeScript 报错？**
- 确保导入了正确的类型
- 检查配置结构是否符合类型定义

**Q: 如何调试配置？**
```typescript
console.log("Pet Config:", petConfig);
```

## 📚 更多信息

查看完整文档：[README.md](./README.md)
