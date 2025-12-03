# 如何为不同产品配置不同的组件参数

## 🎯 三种配置方法

### 方法 1: 产品级别配置（最灵活）⭐⭐⭐⭐⭐

为每个产品创建独立的页面，完全自定义。

---

## 📖 方法 1 详细步骤：产品级别配置

### 场景：你有 5 个宠物产品，每个产品需要不同的展示内容

**产品列表**：
1. Premium Dog Collar - 需要展示 "50% OFF" 徽章
2. Interactive Cat Toy - 需要展示 "NEW" 徽章
3. Organic Dog Food - 需要展示营养成分
4. Cat Scratching Post - 需要展示尺寸指南
5. Pet Bed Deluxe - 需要展示 "Free Shipping" 信息

---

### 步骤 1: 在 Weaverse Studio 创建第一个产品页面

```
1. 登录 Weaverse Studio (https://studio.weaverse.io)
   ↓
2. 选择你的项目
   ↓
3. 左侧菜单 → Pages
   ↓
4. 点击 "Create Page" 按钮
   ↓
5. 填写表单:
   • Page Name: "Dog Collar - Premium"
   • Page Type: 选择 "Product"
   • Template: 选择 "Pet Products" (如果有) 或 "Default Product"
   ↓
6. 点击 "Create"
```

### 步骤 2: 分配页面给产品

```
在新创建的页面中:
   ↓
1. 找到 "Page Assignment" 或 "Assign to Products" 区域
   ↓
2. 搜索框输入: "dog-collar"
   ↓
3. 从搜索结果中选择你的产品
   ↓
4. 点击 "Save Assignment" 或 "Assign"
```

**重要提示**：产品 handle 必须与你 Shopify 中的产品 handle 完全匹配！

### 步骤 3: 添加和配置组件

#### 3.1 添加 Pet Product Hero 组件

```
在页面编辑器中:
   ↓
1. 左侧组件库找到 "Pet Product Hero"
   ↓
2. 拖拽到页面上，或点击添加
   ↓
3. 组件被添加到页面
```

#### 3.2 配置组件参数

```
点击刚添加的 "Pet Product Hero" 组件
   ↓
右侧面板显示配置选项
   ↓
填写参数:

【Hero Content 组】
  • Heading: "Premium Dog Collar"
    (如果留空，会自动显示产品标题)

  • Subheading: "Comfort meets style for your best friend"
    (可选，添加副标题)

  • Price: "$29.99"
    (如果留空，会自动显示产品实际价格)

  • Compare Price: "$49.99"
    (显示划线价格，制造优惠感)

  • Badge Text: "50% OFF"
    (显示在产品图片上的徽章)

  • Hero Image: 点击上传按钮
    → 选择狗项圈的产品图片
    (如果留空，会使用产品的 Featured Image)

【Styling 组】
  • Background Color: 点击颜色选择器
    → 选择 "bg-gradient-to-r from-blue-50 to-purple-50"
    或自定义颜色

  • Text Color: "text-gray-900"
    (深灰色文字)
```

#### 3.3 添加更多组件

```
继续添加其他组件:

1. "Pet Product Benefits"
   → 配置产品优势列表
   → 上传图标
   → 填写标题和描述

2. "Pet Trust Badges"
   → 配置信任标识
   → "30-Day Money Back"
   → "Free Shipping"
   → "Secure Checkout"

3. "Pet Customer Testimonials"
   → 添加客户评价
   → 上传客户照片
   → 填写评价内容
```

### 步骤 4: 保存并预览

```
1. 点击右上角 "Save" 按钮
   ↓
2. 点击 "Preview" 查看效果
   ↓
3. 满意后点击 "Publish"
```

### 步骤 5: 测试效果

```
打开浏览器访问:
http://localhost:3456/pet-products/dog-collar

你应该看到:
  ✅ 标题显示 "Premium Dog Collar"
  ✅ 价格显示 "$29.99"
  ✅ 左上角显示 "50% OFF" 徽章
  ✅ 背景是蓝紫色渐变
  ✅ 显示你上传的产品图片
```

---

### 步骤 6: 为第二个产品重复配置

```
回到 Weaverse Studio
   ↓
Create Page → "Cat Toy - Interactive"
   ↓
Assign to: "cat-toy" 产品
   ↓
添加 "Pet Product Hero" 组件
   ↓
配置不同的参数:

【Hero Content】
  • Heading: "Interactive Cat Toy"
  • Subheading: "Keep your cat entertained for hours"
  • Price: "$19.99"
  • Compare Price: "" (留空，不显示划线价)
  • Badge: "NEW"
  • Hero Image: 上传猫玩具图片

【Styling】
  • Background Color: "bg-gradient-to-r from-purple-50 to-pink-50"
  • Text Color: "text-gray-900"
   ↓
Save & Publish
```

### 步骤 7: 测试第二个产品

```
访问: http://localhost:3456/pet-products/cat-toy

你应该看到:
  ✅ 标题显示 "Interactive Cat Toy"
  ✅ 价格显示 "$19.99"
  ✅ 左上角显示 "NEW" 徽章
  ✅ 背景是紫粉色渐变
  ✅ 完全不同的产品图片
```

---

## 🎨 配置的优先级逻辑

组件现在支持智能默认值：

```
Weaverse Studio 手动配置
    ↓ (如果为空)
Shopify 产品数据
    ↓ (如果为空)
组件默认值
```

### 例子：

**标题 (Heading)**
```
如果你在 Weaverse 填写: "Premium Dog Collar"
  → 显示: "Premium Dog Collar"

如果你在 Weaverse 留空:
  → 显示产品标题: "Dog Collar" (来自 Shopify)
```

**价格 (Price)**
```
如果你在 Weaverse 填写: "$29.99"
  → 显示: "$29.99"

如果你在 Weaverse 留空:
  → 显示实际产品价格: "$24.99" (来自 Shopify)
```

**图片 (Hero Image)**
```
如果你在 Weaverse 上传图片:
  → 显示你上传的图片

如果你在 Weaverse 不上传:
  → 显示产品的 Featured Image (来自 Shopify)
```

---

## 💡 实用技巧

### 技巧 1: 快速复制页面配置

```
如果多个产品需要类似的配置:

1. 配置好第一个产品页面
   ↓
2. 在 Pages 列表中找到这个页面
   ↓
3. 点击 "Duplicate" 或 "Copy"
   ↓
4. 修改页面名称
   ↓
5. 重新分配给新产品
   ↓
6. 只修改需要改变的部分
```

### 技巧 2: 使用组件预设

```
如果某些组件配置经常重复使用:

1. 配置好一个组件
   ↓
2. 右键点击组件 → "Save as Preset"
   ↓
3. 给预设起个名字: "Summer Sale Badge"
   ↓
4. 在其他页面添加这个组件时
   → 从 "Presets" 选项卡选择
   → 配置自动应用
```

### 技巧 3: 留空使用产品数据

```
对于标准信息，留空让组件自动获取:

标题 → 留空 → 自动使用产品标题
价格 → 留空 → 自动使用实时价格
图片 → 留空 → 自动使用产品主图

只配置特殊的:
  • Badge (徽章)
  • Subheading (副标题)
  • Background Color (背景色)
```

### 技巧 4: 条件显示组件

```
某些组件只在特定产品显示:

产品 A: 显示 "Size Guide"
产品 B: 不显示 "Size Guide"

方法:
1. 产品 A 的页面: 添加 "Size Guide" 组件
2. 产品 B 的页面: 不添加这个组件

每个产品页面可以有完全不同的组件组合！
```

---

## 📋 完整示例：5 个产品配置

### 产品 1: Dog Collar

```yaml
Page Name: "Dog Collar Premium"
Assigned to: dog-collar

Pet Product Hero:
  Heading: "Premium Dog Collar"
  Subheading: "Comfort meets style"
  Price: "$29.99"
  Compare Price: "$49.99"
  Badge: "50% OFF"
  Background: Blue gradient
  Image: dog-collar-main.jpg

Pet Product Benefits:
  - Eco-friendly materials
  - Adjustable fit
  - Reflective stitching

Size Guide: ✅ 显示
```

### 产品 2: Cat Toy

```yaml
Page Name: "Cat Toy Interactive"
Assigned to: cat-toy

Pet Product Hero:
  Heading: "Interactive Cat Toy"
  Subheading: "Hours of fun"
  Price: "$19.99"
  Badge: "NEW"
  Background: Purple gradient
  Image: cat-toy-main.jpg

Pet Product Benefits:
  - Stimulates hunting instincts
  - Safe materials
  - Easy to clean

Size Guide: ❌ 不显示
```

### 产品 3: Dog Food

```yaml
Page Name: "Organic Dog Food"
Assigned to: organic-dog-food

Pet Product Hero:
  Heading: "Premium Organic Dog Food"
  Subheading: "Nutrition your dog deserves"
  Price: (留空，使用实际价格)
  Badge: "Vet Approved"
  Background: Green gradient
  Image: dog-food-main.jpg

Nutrition Info: ✅ 显示
  - Protein: 28%
  - Fat: 15%
  - Fiber: 4%
```

### 产品 4: Cat Scratching Post

```yaml
Page Name: "Cat Scratching Post"
Assigned to: cat-scratching-post

Pet Product Hero:
  Heading: (留空，使用产品标题)
  Price: (留空，使用实际价格)
  Badge: "Best Seller"
  Background: Brown gradient
  Image: scratching-post.jpg

Size Guide: ✅ 显示
  - Small: 45cm
  - Medium: 60cm
  - Large: 80cm
```

### 产品 5: Pet Bed

```yaml
Page Name: "Pet Bed Deluxe"
Assigned to: pet-bed-deluxe

Pet Product Hero:
  Heading: "Luxury Pet Bed"
  Subheading: "Memory foam comfort"
  Price: "$89.99"
  Compare Price: "$129.99"
  Badge: "Free Shipping"
  Background: Pink gradient
  Image: pet-bed-main.jpg

Care Instructions: ✅ 显示
  - Machine washable cover
  - Air dry recommended
```

---

## ✅ 检查清单

为每个产品配置时，确保：

- [ ] 页面已分配给正确的产品 (handle 匹配)
- [ ] 至少配置了 Hero 组件
- [ ] 上传了产品特定的图片（如果需要自定义）
- [ ] 填写了特殊的徽章或标语
- [ ] 选择了合适的背景颜色
- [ ] 保存并发布了页面
- [ ] 在浏览器中测试了效果

---

## 🐛 常见问题

### Q: 为什么我的配置没有生效？

检查：
1. ✅ 页面是否正确分配给了产品？
2. ✅ 页面是否已发布（不是草稿）？
3. ✅ 产品 handle 是否完全匹配？
4. ✅ 是否刷新了浏览器缓存？

### Q: 如何知道产品的 handle？

```
方法 1: 在 Shopify Admin 查看
  Products → 选择产品 → URL 中的最后一部分

方法 2: 在产品页面 URL
  产品 URL: /products/dog-collar
  handle 就是: dog-collar
```

### Q: 配置会实时更新吗？

```
在 Weaverse Studio 中修改并保存后:
  ✅ 生产环境: 立即生效
  ⚠️ 开发环境: 可能需要刷新页面
```

### Q: 可以为所有产品批量设置默认值吗？

```
可以！在模板中设置:

1. 编辑 "Pet Products" 模板
2. 配置组件的默认值
3. 所有使用此模板的产品都会继承这些值
4. 单个产品页面可以覆盖这些默认值
```

---

## 🚀 下一步

1. **练习配置你的第一个产品**
   - 从最重要的产品开始
   - 配置 Hero 组件
   - 测试效果

2. **逐步添加更多产品**
   - 每次配置 1-2 个产品
   - 观察哪些配置效果最好

3. **优化和调整**
   - 根据用户反馈调整
   - A/B 测试不同配置
   - 持续改进

---

## 📚 相关资源

- **Weaverse 官方文档**: https://docs.weaverse.io/
- **完整项目指南**: [PET-PRODUCTS-GUIDE.md](./PET-PRODUCTS-GUIDE.md)
- **组件使用说明**: [app/sections/pet-product-hero/USAGE.md](./app/sections/pet-product-hero/USAGE.md)

祝你配置顺利！🎉
