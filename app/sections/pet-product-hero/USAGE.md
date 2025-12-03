# Pet Product Hero - 使用指南

这个组件支持多种配置方式，可以根据你的需求选择最适合的方案。

## 🎨 方案 1: 纯 Weaverse Studio 配置（推荐）

### 步骤：

1. **在 Weaverse Studio 中**：
   - 选择要编辑的产品页面
   - 添加 "Pet Product Hero" 组件
   - 在右侧面板配置所有参数：
     - Heading: "Premium Dog Collar"
     - Subheading: "Comfort meets style"
     - Price: "$29.99"
     - Badge: "50% OFF"
     - Hero Image: 上传产品图片
     - Background Color: 选择背景色
     - Text Color: 选择文字颜色

2. **保存并发布**

3. **访问产品页面查看效果**

### 为不同产品配置不同内容：

**方法 A: 为每个产品创建单独的页面**
- 在 Weaverse Studio 创建新页面
- 设置页面分配到特定产品
- 每个页面独立配置组件

**方法 B: 使用条件显示（高级）**
- 在同一模板中添加多个 Hero 组件
- 使用 Weaverse 的条件显示功能
- 根据产品属性显示不同组件

---

## 🔧 方案 2: 结合 Shopify Metafields

如果你需要在 Shopify 后台管理配置：

### 1. 在 Shopify Admin 设置 Metafields

**Settings → Custom data → Products → Add definition**

创建以下 metafields：

```
Namespace: pet_product
Key: hero_heading
Type: Single line text

Namespace: pet_product
Key: hero_subheading
Type: Single line text

Namespace: pet_product
Key: hero_badge
Type: Single line text

Namespace: pet_product
Key: benefits
Type: JSON
```

### 2. 为产品添加 Metafield 值

在产品编辑页面：
- 找到 "Metafields" 部分
- 填写配置值

例如：
```json
// benefits metafield
[
  "Made from organic materials",
  "Veterinarian recommended",
  "Satisfaction guaranteed"
]
```

### 3. 更新组件代码

修改 `app/sections/pet-product-hero/index.tsx`：

```typescript
import { useLoaderData } from "react-router";
import { parsePetProductMeta } from "~/utils/pet-product-meta";

const PetProductHero = forwardRef<HTMLElement, PetProductHeroProps>((props, ref) => {
  const { product } = useLoaderData<typeof loader>();

  // 解析产品的 metafields
  const productMeta = parsePetProductMeta(product);

  const {
    heading,    // Weaverse Studio 配置
    subheading,
    price,
    badge,
    heroImage,
    ...rest
  } = props;

  // 优先级：Weaverse配置 > Metafield配置 > 产品数据 > 默认值
  const finalHeading = heading || productMeta.heroHeading || product.title;
  const finalSubheading = subheading || productMeta.heroSubheading;
  const finalBadge = badge || productMeta.heroBadge;
  const benefits = productMeta.benefits || [
    "5-Minute Deshedding Solution",
    "95% Hair Collection Rate",
    "Your Pet Will Love It",
  ];

  return (
    <section {...rest}>
      <h1>{finalHeading}</h1>
      <p>{finalSubheading}</p>
      {finalBadge && <span>{finalBadge}</span>}

      <div>
        {benefits.map((benefit, i) => (
          <div key={i}>{benefit}</div>
        ))}
      </div>
    </section>
  );
});
```

### 4. 更新 GraphQL 查询

修改 `app/graphql/queries.ts` 中的 `PRODUCT_QUERY`：

```graphql
product(handle: $handle) {
  id
  title
  # ... 其他字段

  # 添加 metafields 查询
  metafields(identifiers: [
    { namespace: "pet_product", key: "hero_heading" }
    { namespace: "pet_product", key: "hero_subheading" }
    { namespace: "pet_product", key: "hero_badge" }
    { namespace: "pet_product", key: "benefits" }
  ]) {
    namespace
    key
    value
  }
}
```

---

## 🎯 方案 3: 混合方案（最灵活）

结合两种方式的优势：

### 配置优先级：

```
Weaverse Studio 手动配置
    ↓ (如果为空)
Shopify Metafields
    ↓ (如果为空)
产品实际数据
    ↓ (如果为空)
默认值
```

### 实现代码：

```typescript
const PetProductHero = forwardRef<HTMLElement, PetProductHeroProps>((props, ref) => {
  const { product } = useLoaderData<typeof loader>();
  const productMeta = parsePetProductMeta(product);

  // 智能合并配置
  const config = {
    heading: props.heading || productMeta.heroHeading || product.title,
    subheading: props.subheading || productMeta.heroSubheading || "",
    price: props.price || `$${product.priceRange.minVariantPrice.amount}`,
    badge: props.badge || productMeta.heroBadge || "",
    benefits: productMeta.benefits || defaultBenefits,
  };

  return (
    <section>
      <h1>{config.heading}</h1>
      <p>{config.subheading}</p>
      {/* ... */}
    </section>
  );
});
```

### 使用场景：

**使用 Weaverse Studio 配置**：
- 特殊促销产品
- 需要精确控制视觉效果
- 快速 A/B 测试

**使用 Shopify Metafields**：
- 批量管理大量产品
- 需要程序化更新
- 多语言/多地区配置
- 第三方系统集成

**使用产品数据**：
- 标准产品信息（价格、标题）
- 动态更新的内容

---

## 📊 方案对比

| 特性 | Weaverse Studio | Shopify Metafields | 产品数据 |
|------|----------------|-------------------|---------|
| 易用性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 灵活性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 批量管理 | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 实时预览 | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐ |
| 技术要求 | ⭐ | ⭐⭐⭐ | ⭐⭐ |

---

## 💡 推荐工作流程

### 对于不同团队角色：

**市场营销团队**：
→ 使用 Weaverse Studio
- 无需技术知识
- 可视化编辑
- 实时预览效果

**产品管理团队**：
→ 使用 Shopify Metafields
- 在 Shopify Admin 统一管理
- 批量更新产品信息
- 与现有工作流集成

**开发团队**：
→ 设置好混合方案
- 提供灵活的配置选项
- 确保合理的回退机制
- 优化性能

---

## 🚀 快速决策指南

**如果你想要**：
- ✅ 快速为单个产品定制页面 → **使用 Weaverse Studio**
- ✅ 批量管理 100+ 产品配置 → **使用 Shopify Metafields**
- ✅ 让非技术人员能够修改 → **使用 Weaverse Studio**
- ✅ 程序化生成内容 → **使用 Shopify Metafields**
- ✅ 最大灵活性 → **使用混合方案**

---

## 🔨 实际案例

### 案例 1: 单个高端产品

**目标**：为一款高端狗粮创建精美的产品页

**推荐方案**：Weaverse Studio

**步骤**：
1. 在 Studio 创建新的产品页面
2. 分配给该产品
3. 添加 Pet Product Hero 组件
4. 精心配置每个参数
5. 添加高质量图片
6. 保存并发布

---

### 案例 2: 100 款宠物玩具

**目标**：为所有玩具添加统一的 "适合所有年龄" 徽章

**推荐方案**：Shopify Metafields

**步骤**：
1. 在 Shopify 创建 metafield 定义
2. 使用 Shopify Bulk Editor 批量添加
3. 组件自动读取并显示

---

### 案例 3: 季节性促销

**目标**：夏季促销期间，所有产品显示 "夏季特惠" 徽章

**推荐方案**：Weaverse Studio 模板

**步骤**：
1. 在模板中配置徽章
2. 所有使用该模板的产品自动显示
3. 促销结束后一键移除

---

## 📚 更多资源

- [Weaverse 官方文档](https://docs.weaverse.io/)
- [Shopify Metafields 文档](https://shopify.dev/docs/apps/custom-data/metafields)
- 项目示例：查看 `app/sections/pet-product-hero/index.tsx`
