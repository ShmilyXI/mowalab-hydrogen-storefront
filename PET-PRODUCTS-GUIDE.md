# Pet Products 路由和配置完整指南

## 📖 目录

1. [系统概述](#系统概述)
2. [路由配置](#路由配置)
3. [内容配置方案](#内容配置方案)
4. [推荐工作流程](#推荐工作流程)
5. [常见问题](#常见问题)

---

## 系统概述

你的项目现在有两个产品路由系统：

| 路由 | 用途 | 模板 |
|------|------|------|
| `/products/[handle]` | 标准产品页 | 使用默认产品模板 |
| `/pet-products/[handle]` | 宠物产品专属页 | 使用自定义宠物产品模板 |

### 已创建的文件

```
app/
├── routes/
│   ├── ($locale).products.$productHandle.tsx       # 标准产品路由
│   └── ($locale).pet-products.$productHandle.tsx   # 宠物产品路由 ✨
│
├── sections/                                       # Weaverse 组件
│   ├── pet-product-hero/                          # 宠物产品 Hero ✨
│   ├── pet-product-benefits/                       # 产品优势 ✨
│   ├── pet-product-faq/                           # FAQ ✨
│   ├── pet-how-to-use/                            # 使用指南 ✨
│   ├── pet-customer-testimonials/                  # 客户评价 ✨
│   ├── pet-before-after/                          # 前后对比 ✨
│   └── pet-trust-badges/                          # 信任徽章 ✨
│
├── metas/                                         # 可选的配置系统
│   ├── types.ts                                   # 类型定义
│   ├── README.md                                  # 完整文档
│   ├── QUICKSTART.md                              # 快速开始
│   └── pet-products/
│       ├── index.ts                               # 配置加载器
│       ├── dog-collar.ts                          # 示例配置
│       └── cat-toy.ts                             # 示例配置
│
└── utils/
    └── pet-product-meta.ts                        # Metafields 工具 ✨
```

---

## 路由配置

### ✅ 已完成

1. ✅ 创建了 `/pet-products/[handle]` 路由
2. ✅ 支持所有产品通过此路由访问
3. ✅ 集成了 Weaverse 页面加载
4. ✅ 可以在 Weaverse Studio 中配置 "Pet Products" 模板

### 如何使用

#### 在 Weaverse Studio 中配置：

1. **创建模板**：
   - 登录 Weaverse Studio
   - 创建新的 Product 类型模板
   - 命名为 "Pet Products"
   - 设置 Custom prefix 为 `pet-products`

2. **添加组件**：
   - 从组件库添加宠物产品专属组件：
     - Pet Product Hero
     - Pet Product Benefits
     - Pet Product FAQ
     - Pet How To Use
     - Pet Customer Testimonials
     - Pet Before After
     - Pet Trust Badges

3. **配置每个组件**：
   - 点击组件
   - 在右侧面板调整参数
   - 上传图片、修改文字、调整颜色等

4. **保存并发布**

---

## 内容配置方案

你有 **三种方案** 可以选择，根据你的需求和团队情况选择最适合的：

### 🎨 方案 1: Weaverse Studio（最推荐 ⭐⭐⭐⭐⭐）

**适合场景**：
- ✅ 需要可视化编辑
- ✅ 团队中有非技术人员
- ✅ 希望实时预览效果
- ✅ 每个产品需要精细定制

**工作流程**：

```
Weaverse Studio
    ↓
创建/编辑产品页面
    ↓
配置组件参数
    - Heading: "Premium Dog Collar"
    - Price: "$29.99"
    - Badge: "50% OFF"
    - Background: 选择颜色
    - 上传图片
    ↓
保存并发布
    ↓
访问 /pet-products/dog-collar 查看效果
```

**为不同产品配置不同内容**：

**方法 A：为每个产品分配不同页面**
```
Studio → Create Page → "Dog Collar Page"
  → 配置组件 → Assign to Products → 选择 "dog-collar"

Studio → Create Page → "Cat Toy Page"
  → 配置组件 → Assign to Products → 选择 "cat-toy"
```

**方法 B：使用同一模板，手动配置每个产品**
```
访问 Studio → 选择产品 "dog-collar"
  → 点击 Hero 组件 → 修改文字和图片
  → 保存

访问 Studio → 选择产品 "cat-toy"
  → 点击 Hero 组件 → 修改文字和图片
  → 保存
```

**优点**：
- ✅ 无需写代码
- ✅ 可视化编辑，所见即所得
- ✅ 实时预览
- ✅ 非技术人员可以操作
- ✅ 支持 A/B 测试
- ✅ 配置保存在云端

**缺点**：
- ❌ 不适合批量操作
- ❌ 需要逐个产品配置

---

### 🗄️ 方案 2: Shopify Metafields

**适合场景**：
- ✅ 需要批量管理产品
- ✅ 有 100+ 产品需要配置
- ✅ 需要程序化更新
- ✅ 需要 API 集成

**设置步骤**：

**1. 在 Shopify Admin 创建 Metafield 定义**

```
Settings → Custom data → Products → Add definition

定义 1:
  Namespace: pet_product
  Key: hero_heading
  Type: Single line text
  Description: 产品 Hero 标题

定义 2:
  Namespace: pet_product
  Key: hero_badge
  Type: Single line text
  Description: 徽章文字（如 "50% OFF"）

定义 3:
  Namespace: pet_product
  Key: benefits
  Type: JSON
  Description: 产品特性列表
```

**2. 为产品添加 Metafield 值**

```
Products → 选择产品 → Metafields 部分

pet_product.hero_heading: "Premium Organic Dog Food"
pet_product.hero_badge: "NEW ARRIVAL"
pet_product.benefits: ["100% Organic", "Vet Approved", "Grain Free"]
```

**3. 批量编辑（可选）**

使用 Shopify Bulk Editor：
```
Products → 全选产品 → Bulk edit → 选择 metafield
  → 批量设置相同的徽章 "Summer Sale"
```

**4. 组件自动读取**

组件代码已经支持读取 metafields（参考 `app/utils/pet-product-meta.ts`）

**优点**：
- ✅ 适合批量管理
- ✅ 可以用 API 更新
- ✅ 在 Shopify Admin 统一管理
- ✅ 支持 Bulk Editor

**缺点**：
- ❌ 需要技术配置
- ❌ 无实时预览
- ❌ 需要更新 GraphQL 查询

---

### 📁 方案 3: Metas 配置文件（已创建，可选）

**适合场景**：
- ✅ 开发环境需要快速测试
- ✅ 配置需要版本控制
- ✅ 有复杂的配置逻辑

**工作流程**：

**1. 创建配置文件**

```typescript
// app/metas/pet-products/premium-dog-food.ts
import type { PetProductPageConfig } from "../types";

export const config: PetProductPageConfig = {
  handle: "premium-dog-food",

  sections: {
    hero: {
      enabled: true,
      heading: "Premium Organic Dog Food",
      background: "bg-gradient-to-r from-green-50 to-lime-50",
    },

    productInfo: {
      badges: ["Organic", "Vet Approved", "Grain Free"],
    },
  },
};

export default config;
```

**2. 注册配置**

```typescript
// app/metas/pet-products/index.ts
const configs = {
  "dog-collar": () => import("./dog-collar"),
  "premium-dog-food": () => import("./premium-dog-food"), // 👈 添加
};
```

**3. 组件访问配置**

```typescript
const { petConfig } = useLoaderData<typeof loader>();
const heading = petConfig.sections?.hero?.heading;
```

**优点**：
- ✅ 配置纳入版本控制
- ✅ 支持 TypeScript 类型检查
- ✅ 开发环境快速测试
- ✅ 可以写复杂逻辑

**缺点**：
- ❌ 需要写代码
- ❌ 需要部署才能生效
- ❌ 非技术人员无法使用

---

## 推荐工作流程

### 🎯 根据团队情况选择

#### 情况 1: 小团队（1-5人），产品数量少（<50）

**推荐**：**Weaverse Studio**

**理由**：
- 快速上手
- 无需技术知识
- 可视化编辑效率高

**工作流程**：
```
营销人员 → Weaverse Studio → 编辑产品页
开发人员 → 创建新组件 → 在 Studio 中使用
```

---

#### 情况 2: 中型团队（5-20人），产品数量多（50-500）

**推荐**：**Weaverse Studio + Shopify Metafields**

**理由**：
- Weaverse 用于精品产品
- Metafields 用于批量管理

**工作流程**：
```
重点产品（10-20个）:
  营销人员 → Weaverse Studio → 精心定制

普通产品（30-480个）:
  产品经理 → Shopify Admin → Bulk Editor → 批量设置 metafields
```

**配置优先级**：
```
Weaverse Studio 手动配置
    ↓ (如果为空)
Shopify Metafields
    ↓ (如果为空)
产品实际数据（价格、标题）
    ↓ (如果为空)
默认值
```

---

#### 情况 3: 大型团队（20+人），产品数量很多（500+）

**推荐**：**Shopify Metafields + API 自动化**

**理由**：
- 规模化管理
- 程序化更新
- 系统集成

**工作流程**：
```
产品导入时 → API 自动设置 metafields
定期更新 → 脚本批量更新 metafields
特殊促销 → 营销人员在 Weaverse Studio 覆盖配置
```

---

## 常见问题

### Q1: 我应该删除 `metas` 文件夹吗？

**答案**：根据你的需求：

- **如果你只用 Weaverse Studio**：可以删除，完全不需要
- **如果你需要版本控制的配置**：保留
- **如果你想要混合方案**：保留作为备用

**推荐**：保留，不影响性能，以后可能用到

---

### Q2: 不同产品如何显示不同的 Hero 文字？

**方案 A：Weaverse Studio**
```
1. 为每个产品创建单独的页面
2. 或在模板中为每个产品手动配置组件参数
```

**方案 B：Shopify Metafields**
```
1. 设置 pet_product.hero_heading metafield
2. 组件自动读取并显示
```

**方案 C：组件中使用产品数据**
```typescript
// 在组件中
const { product } = useLoaderData();
<h1>{props.heading || product.title}</h1>
```

---

### Q3: 如何为所有产品批量添加 "Free Shipping" 徽章？

**最简单方法：Weaverse Studio 模板**
```
1. 编辑 "Pet Products" 模板
2. 在 Hero 组件设置 badge: "Free Shipping"
3. 所有使用此模板的产品自动显示
```

**编程方法：Shopify Metafields + Bulk Editor**
```
1. 选择所有产品
2. Bulk edit → pet_product.hero_badge
3. 设置为 "Free Shipping"
```

---

### Q4: 我创建的组件在 Weaverse Studio 中看不到？

**检查清单**：
1. ✅ 组件是否导出了 `schema`？
2. ✅ 组件是否在 `app/weaverse/components.ts` 注册？
3. ✅ 是否重启了开发服务器？
4. ✅ 是否在 Weaverse Studio 刷新了页面？

**解决方法**：
```typescript
// app/weaverse/components.ts
import * as PetProductHero from "~/sections/pet-product-hero";

export const components = [
  // ... 其他组件
  PetProductHero,  // 👈 确保添加了
];
```

---

### Q5: 能否在 Weaverse 组件中使用产品的实时数据？

**可以！**

```typescript
import { useLoaderData } from "react-router";

const MyComponent = forwardRef((props, ref) => {
  const { product, petConfig } = useLoaderData<typeof loader>();

  // 使用实时产品数据
  const price = product.priceRange.minVariantPrice.amount;
  const title = product.title;
  const inStock = product.availableForSale;

  // 结合配置和实时数据
  const heading = props.heading || petConfig.sections?.hero?.heading || title;

  return (
    <section>
      <h1>{heading}</h1>
      <span>${price}</span>
      {inStock ? "In Stock" : "Sold Out"}
    </section>
  );
});
```

---

### Q6: 如何为促销活动临时修改产品页面？

**推荐方法：Weaverse Studio**

**场景 1：所有产品添加促销横幅**
```
1. 在模板中添加 Banner 组件
2. 配置促销信息
3. 促销结束后移除组件
```

**场景 2：特定产品特殊优惠**
```
1. 为该产品创建单独页面
2. 自定义促销内容
3. 促销结束后切回标准模板
```

---

### Q7: 组件参数太多，能否分组？

**可以！已经实现**

查看 `app/sections/pet-product-hero/index.tsx` 的 schema：

```typescript
export const schema = createSchema({
  type: "pet-product-hero",
  title: "Pet Product Hero",
  inspector: [
    {
      group: "Hero Content",  // 👈 分组 1
      inputs: [
        { type: "text", name: "heading", ... },
        { type: "text", name: "subheading", ... },
      ],
    },
    {
      group: "Styling",       // 👈 分组 2
      inputs: [
        { type: "color", name: "backgroundColor", ... },
        { type: "color", name: "textColor", ... },
      ],
    },
  ],
});
```

---

## 📚 相关文档

- **Weaverse 使用指南**: [app/sections/pet-product-hero/USAGE.md](app/sections/pet-product-hero/USAGE.md)
- **Metas 配置系统**: [app/metas/README.md](app/metas/README.md)
- **快速开始**: [app/metas/QUICKSTART.md](app/metas/QUICKSTART.md)
- **Weaverse 官方文档**: https://docs.weaverse.io/

---

## 🎉 总结

你现在有一个完整的宠物产品系统：

✅ **专属路由**: `/pet-products/[handle]`
✅ **自定义组件**: 7+ 个宠物产品专属组件
✅ **灵活配置**: 3 种配置方案可选
✅ **可视化编辑**: Weaverse Studio 支持
✅ **批量管理**: Shopify Metafields 支持
✅ **类型安全**: 完整的 TypeScript 类型

**推荐工作流程**：

1. **首选**: 使用 Weaverse Studio 可视化配置
2. **如需批量管理**: 结合 Shopify Metafields
3. **开发测试**: 使用 Metas 配置文件

祝你开发顺利！🚀
