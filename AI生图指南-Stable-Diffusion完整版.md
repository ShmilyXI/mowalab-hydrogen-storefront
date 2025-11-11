# Stable Diffusion AI生图完整指南 - 宠物电商产品摄影

## 📋 目录

1. [环境准备与安装](#环境准备)
2. [推荐模型与LoRA](#推荐模型)
3. [基础参数配置](#基础参数)
4. [梳毛手套场景生图](#手套生图)
5. [玩具球场景生图](#玩具球生图)
6. [ControlNet高级应用](#controlnet)
7. [批量生成与优化](#批量生成)
8. [常见问题解决](#常见问题)

---

## 🔧 环境准备与安装

### 方案A: Stable Diffusion WebUI(本地运行,推荐)

#### 系统要求
```
最低配置:
- GPU: NVIDIA GTX 1660 (6GB VRAM)
- RAM: 16GB
- 硬盘: 50GB可用空间
- 系统: Windows 10/11, Linux, macOS (M1/M2)

推荐配置:
- GPU: NVIDIA RTX 3060 (12GB VRAM) 或更高
- RAM: 32GB
- 硬盘: 100GB+ SSD
- 系统: Windows 11 或 Ubuntu 22.04
```

#### 安装步骤(Windows)

**1. 安装Git**
```bash
# 下载Git: https://git-scm.com/download/win
# 安装后验证:
git --version
```

**2. 安装Python 3.10.6**
```bash
# 下载: https://www.python.org/downloads/release/python-3106/
# ⚠️ 安装时勾选"Add Python to PATH"
# 验证:
python --version
```

**3. 克隆Stable Diffusion WebUI**
```bash
# 打开命令提示符(CMD)或PowerShell
cd C:\
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
cd stable-diffusion-webui
```

**4. 首次运行(自动下载依赖)**
```bash
# 双击运行
webui-user.bat

# 或命令行运行:
.\webui-user.bat

# 首次运行需要10-30分钟(下载依赖)
# 成功后会显示: Running on local URL: http://127.0.0.1:7860
```

**5. 访问WebUI**
```
浏览器打开: http://127.0.0.1:7860
```

---

### 方案B: 云端运行(无需本地GPU)

#### Google Colab(免费,有限制)
```
优点:
✅ 完全免费
✅ 无需本地GPU
✅ 快速启动(5分钟)

缺点:
⚠️ 每次会话12小时限制
⚠️ 需要每次重新加载模型
⚠️ 速度较慢(免费T4 GPU)

推荐Colab Notebook:
https://github.com/camenduru/stable-diffusion-webui-colab
(搜索"Stable Diffusion Colab"找最新版)
```

#### RunPod / Vast.ai(付费,性价比高)
```
RunPod:
- 价格: $0.39/小时(RTX 3090)
- 快速部署模板
- 按需付费

Vast.ai:
- 价格: $0.20-0.50/小时
- 竞价租用GPU
- 更便宜但配置稍复杂

推荐: RunPod(新手友好)
```

---

## 🎨 推荐模型与LoRA

### 基础模型(Checkpoint)选择

#### 1. Realistic Vision V5.1(最推荐,真实摄影风格)

**下载链接**:
- Civitai: https://civitai.com/models/4201/realistic-vision-v51
- Hugging Face: `SG161222/Realistic_Vision_V5.1_noVAE`

**特点**:
- ✅ 真实摄影风格(接近单反拍摄)
- ✅ 宠物生成效果极佳
- ✅ 光线自然,不过度修饰
- ✅ 适合电商产品图

**适用场景**:
- 所有生活方式场景图
- 宠物与产品互动场景
- UGC风格真实照片

**下载后放置位置**:
```
stable-diffusion-webui/models/Stable-diffusion/
文件名: realisticVisionV51_v51VAE.safetensors
```

---

#### 2. DreamShaper 8(通用,风格可控)

**下载链接**:
- Civitai: https://civitai.com/models/4384/dreamshaper

**特点**:
- ✅ 风格灵活(从真实到艺术)
- ✅ 出图稳定性高
- ✅ 色彩鲜艳
- ✅ 新手友好

**适用场景**:
- 产品主图(需要更鲜艳的色彩)
- 广告创意图
- 信息图背景

---

#### 3. ChilloutMix(亚洲面孔优化)

**下载链接**:
- Civitai: https://civitai.com/models/6424/chilloutmix

**特点**:
- ✅ 亚洲人脸优化(如果需要亚洲模特)
- ✅ 真实摄影感
- ✅ 适合生活方式场景

**适用场景**:
- 需要真人出镜的场景
- 家庭生活场景
- 带主人的宠物场景

---

### LoRA推荐(强化特定元素)

#### 1. Product Photography LoRA(产品摄影专用)

**下载链接**:
- Civitai搜索: "Product Photography LoRA"
- 推荐: `epiCPhotoGasm` LoRA

**功能**:
- 增强产品细节
- 专业摄影光线
- 背景虚化控制

**使用方法**:
```
提示词中添加:
<lora:epiCPhotoGasm:0.7>
(数字0.7表示强度,范围0.1-1.0)
```

**放置位置**:
```
stable-diffusion-webui/models/Lora/
```

---

#### 2. Pet Photography LoRA(宠物摄影专用)

**推荐LoRA名称**:
- `add_detail` (增强细节,通用)
- `realistic_pet_v2` (宠物真实感)

**功能**:
- 宠物毛发细节
- 宠物表情自然化
- 减少AI感

**使用方法**:
```
提示词中添加:
<lora:add_detail:0.5> <lora:realistic_pet_v2:0.6>
```

**下载**:
- Civitai搜索: "pet photography" 或 "animal detail"
- 选择评分高、下载量大的

---

#### 3. Lifestyle Photography LoRA(生活方式场景)

**推荐**:
- `lifestyle_interior` (室内家居场景)
- `natural_lighting` (自然光效果)

**功能**:
- 真实家居环境
- 自然光影
- 减少"摆拍感"

**使用方法**:
```
<lora:lifestyle_interior:0.6> <lora:natural_lighting:0.5>
```

---

#### 4. UGC Style LoRA(用户生成内容风格)

**推荐**:
- `smartphone_photo` (手机拍摄风格)
- `amateur_photography` (业余摄影感)

**功能**:
- 模拟手机拍摄质感
- 轻微模糊/噪点(真实感)
- 非完美构图

**使用方法**:
```
<lora:smartphone_photo:0.7>
```

**查找**:
- Civitai搜索: "iPhone photo" 或 "amateur style"

---

### 嵌入式(Textual Inversion / Embedding)

#### Negative Embedding(负面提示词优化)

**推荐下载**:
1. **EasyNegative**
   - 作用: 一键去除常见问题(畸形、模糊等)
   - 下载: Civitai搜索 "EasyNegative"
   - 使用: 负面提示词中加 `EasyNegative`

2. **BadDream + UnrealisticDream**
   - 作用: 去除不真实元素
   - 使用: 负面提示词中加 `BadDream, UnrealisticDream`

**放置位置**:
```
stable-diffusion-webui/embeddings/
```

**使用示例**:
```
Negative Prompt:
EasyNegative, BadDream, UnrealisticDream, (worst quality:1.4), (low quality:1.4), (monochrome:1.1)
```

---

## ⚙️ 基础参数配置

### WebUI界面参数详解

#### 采样器(Sampler)推荐
```
电商产品图推荐:
1. DPM++ 2M Karras (最推荐)
   - 速度快
   - 细节好
   - 稳定

2. Euler a
   - 创意性强
   - 适合生活场景
   - 每次结果略有不同

3. DDIM
   - 传统稳定
   - 可预测性高

避免:
❌ PLMS (过时)
❌ LMS (质量不稳定)
```

---

#### 采样步数(Sampling Steps)
```
推荐值: 20-30

解释:
- 20步: 快速预览(质量够用)
- 25步: 平衡(推荐)
- 30步: 高质量(提升有限)
- 50+步: 浪费时间(收益递减)

新手建议: 25步
```

---

#### CFG Scale(提示词相关性)
```
推荐值: 7-9

解释:
- 5-6: 更有创意,但可能跑偏
- 7: 平衡(最常用)
- 8-9: 严格遵循提示词
- 10+: 过度饱和,细节丢失

不同场景:
- 生活场景: 7
- 产品特写: 8
- UGC风格: 6
```

---

#### 分辨率(Resolution)
```
推荐设置:

1. 正方形(1:1) - Instagram Feed
   512×512 (快速预览)
   768×768 (最终输出) ⭐
   1024×1024 (高清,需要强大GPU)

2. 竖屏(4:5) - Instagram Post
   640×800 ⭐
   768×960

3. 竖屏(9:16) - TikTok/Story
   432×768
   540×960 ⭐

4. 横屏(16:9) - Banner/桌面
   912×512
   1280×720

⚠️ 注意:
- 基础模型训练尺寸通常是512×512
- 超过768需要更多VRAM(显存)
- 可以先生成512,再用高清修复放大
```

---

#### Batch Size vs Batch Count
```
Batch Count(推荐用这个):
- 定义: 连续生成N张图
- 每张图独立随机种子
- 用途: 测试不同效果
- 推荐: 4-8张

Batch Size(慎用):
- 定义: 一次性生成N张图
- 并行处理(更快但耗显存)
- 需要大显存(每+1图需+2GB VRAM)
- 推荐: 1(除非你有24GB+显存)

新手设置:
Batch Count: 4
Batch Size: 1
```

---

#### Seed(随机种子)
```
-1 = 随机(每次不同)
固定数字 = 可复现(相同提示词+seed=相同图)

使用场景:
- 测试阶段: -1(随机,多样性)
- 找到好图: 记录seed
- 微调提示词: 使用相同seed对比

技巧:
1. 生成4张图(seed=-1)
2. 选最好的一张,记录其seed
3. 固定seed,微调提示词
4. 达到完美效果
```

---

#### Clip Skip
```
定义: 跳过CLIP文本编码器的最后N层

推荐值: 2

不同模型:
- 大部分真实系模型: 1或2
- 动漫模型: 2
- 不确定: 保持默认1

位置: Settings → Stable Diffusion → Clip skip
```

---

#### VAE(Variational Autoencoder)
```
作用: 颜色和细节解码器

推荐:
- 如果模型自带VAE: 选 "Automatic"
- 如果模型无VAE: 下载 vae-ft-mse-840000-ema-pruned.safetensors

下载VAE:
https://huggingface.co/stabilityai/sd-vae-ft-mse-original

放置位置:
stable-diffusion-webui/models/VAE/

设置位置:
Settings → Stable Diffusion → SD VAE
```

---

### 推荐预设配置

#### 配置1: 快速预览(测试用)
```
Checkpoint: Realistic Vision V5.1
Sampler: DPM++ 2M Karras
Steps: 20
CFG Scale: 7
Resolution: 512×512
Batch Count: 8
Hires. fix: OFF
```

#### 配置2: 高质量输出(最终使用)
```
Checkpoint: Realistic Vision V5.1
Sampler: DPM++ 2M Karras
Steps: 25
CFG Scale: 7-8
Resolution: 768×768 (或目标尺寸)
Batch Count: 4
Hires. fix: ON
  - Upscaler: R-ESRGAN 4x+
  - Upscale by: 1.5x
  - Denoising: 0.5
```

#### 配置3: UGC真实风格
```
Checkpoint: Realistic Vision V5.1
LoRA: <lora:smartphone_photo:0.7>
Sampler: Euler a
Steps: 20
CFG Scale: 6
Resolution: 540×960 (手机竖屏)
Negative: (perfect:1.3), professional photography
(故意添加"不要太完美"到负面)
```

---

## 🐾 梳毛手套场景生图(Stable Diffusion版)

### 场景1: 温馨家庭场景(真实摄影风)

#### 完整提示词
```
Positive Prompt:
a cozy modern living room, warm afternoon sunlight streaming through large window, a happy orange tabby cat sitting on cream-colored fabric sofa, a woman's hand wearing blue silicone pet grooming glove gently brushing the cat, cat hair being collected on the glove surface, cat's eyes half-closed in contentment, peaceful domestic atmosphere, soft bokeh background, lifestyle pet photography, natural lighting, warm color temperature, shallow depth of field, Canon 50mm f/1.8 lens effect, 4k photo quality, detailed texture, <lora:add_detail:0.5> <lora:realistic_pet_v2:0.6>

中文翻译:
舒适的现代客厅,温暖的午后阳光透过大窗户照射进来,一只快乐的橙色虎斑猫坐在奶油色布艺沙发上,一只女性的手戴着蓝色硅胶宠物梳毛手套轻柔地梳理猫咪,手套表面收集到猫毛,猫咪眼睛半闭表示满足,宁静的家庭氛围,柔和的背景虚化,生活方式宠物摄影,自然光线,暖色调,浅景深,佳能50mm f/1.8镜头效果,4k照片质量,细节纹理

Negative Prompt:
EasyNegative, BadDream, UnrealisticDream, (worst quality:1.4), (low quality:1.4), (normal quality:1.3), lowres, bad anatomy, bad hands, ((monochrome)), ((grayscale)), collapsed eyeshadow, multiple eyebrows, (cropped), oversaturated, extra limb, missing limbs, deformed hands, long neck, long body, imperfect, (bad hands), signature, watermark, username, artist name, conjoined fingers, deformed fingers, ugly eyes, imperfect eyes, skewed eyes, unnatural face, unnatural body, error, painting by bad-artist, cartoon, anime, 3d render, artificial lighting, harsh shadows

中文翻译(负面):
避免低质量,解剖错误,坏手,单色,灰度,过饱和,多余肢体,畸形,长脖子,长身体,不完美的手,签名,水印,用户名,艺术家名字,连指,畸形手指,丑陋的眼睛,不自然的脸,不自然的身体,错误,卡通,动漫,3D渲染,人工照明,强烈阴影
```

#### 参数设置
```
Model: Realistic Vision V5.1
Sampler: DPM++ 2M Karras
Steps: 25
CFG Scale: 7
Seed: -1 (随机)
Size: 768×960 (4:5竖屏,适合Instagram)
Clip skip: 2
VAE: Automatic

高清修复(Hires. fix):
☑ Enable
Upscaler: R-ESRGAN 4x+
Upscale by: 1.5x (最终1152×1440)
Hires steps: 15
Denoising strength: 0.5
```

#### 生成步骤
```
1. 复制Positive Prompt到提示词框
2. 复制Negative Prompt到负面提示词框
3. 设置参数(如上)
4. Batch Count设为4(生成4张)
5. 点击"Generate"按钮
6. 等待1-3分钟(取决于GPU)
7. 在右侧查看生成的4张图
8. 选择最佳效果的图,记录seed值
```

#### 提示词微调技巧
```
如果想调整:

猫的品种:
- orange tabby cat → persian cat (波斯猫)
- orange tabby cat → british shorthair (英短)
- orange tabby cat → maine coon (缅因猫)

手套颜色:
- blue silicone → pink silicone
- blue silicone → green silicone

时间/光线:
- afternoon sunlight → morning golden light
- afternoon sunlight → evening warm glow

房间风格:
- modern living room → scandinavian interior
- modern living room → rustic farmhouse style
```

---

### 场景2: 对比效果图(Before & After分屏)

#### 方法A: 分别生成再拼接(推荐)

**Before场景提示词**
```
Positive:
a messy living room covered with cat hair, cat hair on grey fabric sofa, cat hair on carpet floor, frustrated young woman looking at the mess, indoor natural lighting, realistic home photography, slightly chaotic atmosphere, dull color tone, Canon 50mm, <lora:add_detail:0.4>

Parameters:
Model: Realistic Vision V5.1
Steps: 25
CFG: 7
Size: 768×768
Seed: -1

Negative:
EasyNegative, (worst quality:1.4), clean, tidy, perfect, vibrant colors
(注意:负面中加入"clean, tidy"避免生成干净场景)
```

**After场景提示词**
```
Positive:
a clean tidy living room, happy young woman sitting on clean grey sofa, holding blue pet grooming glove covered with collected cat hair, satisfied smile, orange tabby cat sitting beside her peacefully, organized home interior, bright natural lighting, lifestyle photography, warm cheerful atmosphere, <lora:add_detail:0.5>

Parameters:
Model: Realistic Vision V5.1
Steps: 25
CFG: 7
Size: 768×768
Seed: [使用与Before相同的seed,保持人物/环境一致性]

Negative:
EasyNegative, messy, chaotic, dirty, frustrated expression
```

**拼接步骤**(使用Photoshop/GIMP/Canva)
```
1. 打开Canva(或Photoshop)
2. 创建1536×768画布(左右分屏)
3. 左侧放Before图
4. 右侧放After图
5. 添加文字:
   - 左上角: "Before ❌"
   - 右上角: "After ✅"
6. 中间分割线(可选)
7. 导出为PNG
```

---

#### 方法B: 使用Regional Prompter扩展(高级)

如果安装了Regional Prompter扩展:

```
Prompt:
[LEFT]
messy living room, cat hair everywhere, frustrated woman
[BREAK]
[RIGHT]
clean living room, happy woman with grooming glove, collected cat hair on glove
[BREAK]
ADDROW

Parameters:
Size: 1536×768 (横向分屏)
其他参数同上
```

---

### 场景3: 使用步骤图(4步教程)

#### 步骤1: 戴上手套
```
Positive:
close-up shot of woman's hands putting on blue silicone pet grooming glove, adjusting velcro strap at wrist, clean white background, product photography style, soft even lighting, detailed texture, sharp focus on hands and glove, shallow depth of field, <lora:product_photo:0.7> <lora:add_detail:0.5>

Parameters:
Size: 768×768
CFG: 8 (产品特写需要更高CFG)
Steps: 25
```

#### 步骤2: 温柔梳理
```
Positive:
woman's hand wearing blue grooming glove gently stroking orange cat's back, cat's fur texture visible, cat looks relaxed with eyes half-closed, soft natural lighting, close-up view, warm cozy atmosphere, pet care photography, <lora:realistic_pet_v2:0.6>

Parameters:
Size: 768×768
CFG: 7
Steps: 25
```

#### 步骤3: 展示效果
```
Positive:
close-up of blue grooming glove palm covered with collected orange cat fur, hand turning palm upward to camera, demonstrating effectiveness, clean blurred background, product demonstration photography, natural lighting, <lora:product_photo:0.6>

Parameters:
Size: 768×768
CFG: 8
Steps: 25
```

#### 步骤4: 清洁手套
```
Positive:
woman's hand peeling off collected cat fur from blue grooming glove over a white trash bin, easy cleaning demonstration, clean home background, natural lighting, instructional photography style, <lora:add_detail:0.4>

Parameters:
Size: 768×768
CFG: 7
Steps: 25
```

**组合成信息图**: 使用Canva将4张图排列成2×2网格,添加步骤编号和文字说明。

---

### 场景4: 户外场景(拓展使用)

```
Positive:
a young couple hiking on forest trail with golden retriever dog, woman carrying small backpack with blue pet grooming glove visible in side pocket, dog walking happily beside them, autumn foliage, dappled sunlight through trees, lifestyle outdoor photography, natural colors, Canon 35mm lens, <lora:lifestyle_outdoor:0.5> <lora:add_detail:0.4>

Parameters:
Model: Realistic Vision V5.1
Size: 768×960 (4:5)
CFG: 7
Steps: 25
Sampler: DPM++ 2M Karras

Negative:
EasyNegative, indoor, studio lighting, artificial background, posed, professional model
```

---

### 场景5: UGC风格客户评价

```
Positive:
amateur smartphone photo, slightly imperfect composition, woman taking casual selfie while holding blue grooming glove covered with cat fur, grey cat visible in background on sofa, real home setting, natural window light, Instagram story style authentic moment, slightly grainy texture, not professionally staged, <lora:smartphone_photo:0.8>

Parameters:
Model: Realistic Vision V5.1
Size: 540×960 (9:16手机竖屏)
CFG: 6 (降低CFG增加随机性)
Steps: 20
Sampler: Euler a (增加变化性)

Negative:
(perfect composition:1.3), professional photography, studio lighting, perfect focus, no grain, overly polished, model photoshoot
(故意让负面排除"完美"元素)
```

**UGC增强技巧**:
```
后期处理(Photoshop/手机App):
1. 添加轻微噪点(滤镜→添加杂色→2-5%)
2. 降低饱和度5-10%
3. 添加Instagram滤镜效果(可选)
4. 添加手机UI元素(时间、电量图标等)
5. 添加文字叠加:"OMG this works! 😍"
```

---

## 🎾 玩具球场景生图(Stable Diffusion版)

### 场景1: 宠物玩耍场景(动态抓拍)

#### 猫咪版本
```
Positive:
playful orange tabby cat batting transparent blue treat ball toy on hardwood floor, cat's paw mid-motion touching the ball, kibble treats visible inside the transparent ball, bright modern living room with large windows, afternoon sunlight, action shot frozen in time, shallow depth of field, pet photography, Canon 50mm f/1.4, natural lighting, warm color grading, <lora:realistic_pet_v2:0.6> <lora:add_detail:0.5>

Parameters:
Model: Realistic Vision V5.1
Size: 768×960 (4:5)
CFG: 7
Steps: 25
Sampler: DPM++ 2M Karras

Negative:
EasyNegative, BadDream, static pose, no action, blurry toy, opaque ball, dark lighting, artificial studio setup
```

#### 狗狗版本
```
Positive:
golden retriever dog pushing blue treat ball toy with nose on carpet floor, dog's expression focused and excited, ball rolling forward with motion blur effect, living room background slightly blurred, kibble treats visible through transparent ball, pet action photography, natural window light, cozy home atmosphere, <lora:realistic_pet_v2:0.7>

Parameters:
Model: Realistic Vision V5.1
Size: 768×960 (4:5)
CFG: 7
Steps: 25

Negative:
EasyNegative, static, no motion, dark room, professional studio, artificial lighting
```

#### 多宠互动版本
```
Positive:
two cats playing together, one orange tabby and one grey british shorthair, both interacting with blue treat balls on living room floor, playful interaction between cats, one cat pawing the ball while other watches, cozy home setting with natural afternoon sunlight, heartwarming pet moment, lifestyle pet photography, <lora:realistic_pet_v2:0.6>

Parameters:
Size: 960×768 (5:4横向,展示互动)
CFG: 7
Steps: 25
```

---

### 场景2: 对比场景(无聊 vs 开心)

#### Before: 无聊的狗
```
Positive:
bored sad-looking golden retriever lying on grey couch staring at empty food bowl on floor, lonely pet at home alone, messy living room, owner away at work, dull ambient lighting, melancholic atmosphere, desaturated colors, realistic pet photography, <lora:add_detail:0.4>

Parameters:
Model: Realistic Vision V5.1
Size: 768×768
CFG: 7
Steps: 25

Negative:
happy, excited, energetic, bright colors, toys, playing, vibrant
(负面排除积极元素)
```

#### After: 开心玩球
```
Positive:
happy excited golden retriever playing energetically with blue treat ball toy, tail wagging motion blur, jumping dynamic action, ball rolling on floor with treats inside visible, bright vibrant living room, joyful pet at home, energetic atmosphere, warm natural lighting, pet action photography, <lora:realistic_pet_v2:0.6>

Parameters:
Model: Realistic Vision V5.1
Size: 768×768
CFG: 7
Steps: 25
Seed: [保持与Before场景接近,微调]

Negative:
bored, sad, static, lying down, low energy, dull colors
```

---

### 场景3: 教育信息图(How It Works)

#### 步骤1: 装填零食
```
Positive:
close-up hands unscrewing the top lid of blue transparent treat ball toy, pouring dog kibble treats into the ball, clean white background, product instruction photography, well-lit with soft diffused lighting, detailed texture of hands and toy, instructional photo style, <lora:product_photo:0.7>

Parameters:
Size: 768×768
CFG: 8
Steps: 25
```

#### 步骤2: 调整难度(如适用)
```
Positive:
close-up of hands adjusting treat dispenser opening on blue ball toy, fingers turning adjustment dial, showing difficulty level mechanism, product detail shot, white background, instructional photography, sharp focus, <lora:product_photo:0.7>

若产品无此功能,改成"旋紧盖子":
close-up hands securing the lid tightly on blue treat ball, ensuring it's closed properly, instructional photography
```

#### 步骤3: 放置地面
```
Positive:
woman's hand gently placing blue treat ball toy on wooden floor in front of curious golden retriever dog, dog's interested expression looking at the toy, natural home setting, pet owner's perspective, lifestyle photography, <lora:add_detail:0.5>

Parameters:
Size: 768×768
CFG: 7
Steps: 25
```

#### 步骤4: 宠物玩耍
```
Positive:
happy golden retriever pushing blue treat ball toy with paw, kibble treat falling out of ball opening as it rolls, dog's excited expression, action photography capturing the moment of reward, natural lighting, pet activity shot, <lora:realistic_pet_v2:0.6>

Parameters:
Size: 768×768
CFG: 7
Steps: 25
```

---

### 场景4: 生活方式场景(Work From Home)

```
Positive:
modern minimalist home office, young woman and man working on laptops at wooden desk, their golden retriever happily playing with blue treat ball toy on floor nearby, floor-to-ceiling windows with city skyline view, bright natural daylight, work-life balance concept, lifestyle magazine photography style, clean contemporary aesthetic, warm natural colors, shallow depth of field with focus on dog and toy, <lora:lifestyle_interior:0.6> <lora:add_detail:0.4>

Parameters:
Model: Realistic Vision V5.1
Size: 960×768 (5:4横向,展示场景)
CFG: 7
Steps: 25
Sampler: DPM++ 2M Karras

Negative:
EasyNegative, cluttered, messy, dark, artificial lighting, studio setup, no windows, claustrophobic space, professional photoshoot
```

**变体场景**:

**家庭亲子时光**:
```
Positive:
cozy family scene, 8-year-old child sitting cross-legged on beige carpet watching corgi puppy play with pink treat ball toy, parents smiling in background on grey sofa, warm afternoon sunlight through window, heartwarming family moment, Hallmark greeting card style photography, soft warm tones, <lora:lifestyle_interior:0.5>

Size: 768×960 (4:5)
```

**退休老人陪伴**:
```
Positive:
senior woman in her 60s sitting in comfortable beige armchair reading book, small white maltese dog playing with blue treat ball toy at her feet, cozy cottage living room with wooden bookshelves, peaceful afternoon, companionship concept, soft natural window lighting, editorial lifestyle photography, <lora:add_detail:0.4>

Size: 768×960 (4:5)
```

---

### 场景5: UGC风格首次使用

```
Positive:
amateur iPhone photo taken from above owner's perspective, golden retriever puppy encountering blue treat ball toy for first time, curious confused expression, puppy sniffing the ball, casual home floor background, natural indoor lighting, slightly off-center composition, candid authentic moment, smartphone camera quality with slight grain, <lora:smartphone_photo:0.8> <lora:realistic_pet_v2:0.5>

Parameters:
Model: Realistic Vision V5.1
Size: 540×960 (9:16手机竖屏)
CFG: 6
Steps: 20
Sampler: Euler a

Negative:
(perfect photography:1.3), professional, studio lighting, DSLR quality, perfect composition, overly sharp, no grain
```

**增加"首次尝试"感**:
```
生成多张seed,选择包含以下元素的:
- 宠物困惑的表情
- 宠物用鼻子/爪子试探玩具
- 宠物头歪一边(疑惑)
- 主人的手出现在画面边缘(引导)
```

---

## 🎮 ControlNet高级应用(精确控制)

### 什么是ControlNet?

```
作用:
通过参考图控制生成图的构图、姿势、轮廓等

适用场景:
✅ 需要精确产品位置
✅ 需要特定宠物姿势
✅ 需要匹配特定构图
✅ 图生图需要保持原图结构

安装:
1. Extensions → Available → 搜索"ControlNet"
2. Install
3. 重启WebUI
4. 下载ControlNet模型(见下文)
```

---

### ControlNet模型推荐下载

#### 1. Canny(边缘检测,最常用)

**用途**: 保持物体轮廓和构图

**下载**:
- 模型: `control_v11p_sd15_canny.pth`
- 链接: https://huggingface.co/lllyasviel/ControlNet-v1-1

**放置位置**:
```
stable-diffusion-webui/extensions/sd-webui-controlnet/models/
```

**使用场景**:
- 已有产品照片,想换背景
- 保持产品位置,改变周围环境

---

#### 2. OpenPose(姿势控制)

**用途**: 控制人物/动物姿势

**下载**:
- 模型: `control_v11p_sd15_openpose.pth`

**使用场景**:
- 控制宠物特定姿势(坐/站/玩耍)
- 控制人手特定动作

---

#### 3. Depth(深度图)

**用途**: 控制3D空间结构

**下载**:
- 模型: `control_v11f1p_sd15_depth.pth`

**使用场景**:
- 保持场景空间感
- 控制前景/背景关系

---

### ControlNet实战案例

#### 案例1: 已有产品白底图,生成使用场景

**步骤1: 准备参考图**
```
1. 打开你拍摄的产品白底图(手套或玩具球)
2. 用Photoshop或在线工具简单抠图
3. 将产品放置在画布的目标位置
4. 其余部分填充纯色或保持透明
5. 导出为PNG
```

**步骤2: 使用Canny ControlNet**
```
WebUI设置:
1. 上传准备好的参考图到ControlNet区域
2. Enable: ☑
3. Control Type: Canny
4. Preprocessor: canny
5. Model: control_v11p_sd15_canny
6. Weight: 0.8-1.0 (越高越严格)
7. Control Mode: Balanced

Prompt:
[你的场景描述],产品在画面中的位置要包含在提示词中

例如:
a blue pet grooming glove held by woman's hand in center of frame, cozy living room background, cat sitting on sofa, natural lighting

Parameters:
正常设置(CFG 7, Steps 25等)
```

**效果**:
- 产品位置、形状、颜色严格按照参考图
- 背景和环境根据提示词生成
- 实现"产品不变,场景自由"

---

#### 案例2: 控制宠物姿势(OpenPose)

**步骤1: 获取姿势参考图**
```
方法A: 使用现有照片
- 上传你家宠物照片
- ControlNet自动提取姿势骨架

方法B: 使用OpenPose Editor(推荐)
- WebUI中ControlNet区域有姿势编辑器
- 手动拖拽骨骼节点创建目标姿势
```

**步骤2: 生成**
```
ControlNet设置:
1. Enable: ☑
2. Control Type: OpenPose
3. Upload: 姿势参考图
4. Preprocessor: openpose_full
5. Model: control_v11p_sd15_openpose
6. Weight: 0.6-0.8

Prompt:
golden retriever dog in [描述动作], playing with blue treat ball, living room

Parameters:
正常设置
```

**效果**:
- 狗狗姿势完全按照你的设计
- 其他元素(毛色、环境)根据提示词

---

#### 案例3: 保持场景结构(Depth)

**用途**: 你有一张现有场景图(客厅、公园等),想替换其中元素

**步骤**:
```
1. Upload现有场景图到ControlNet
2. Control Type: Depth
3. Preprocessor: depth_midas
4. Model: control_v11f1p_sd15_depth
5. Weight: 0.5-0.7

Prompt:
描述你想要的新元素,但保持空间结构

例如原图是:
"woman sitting on sofa"

新提示词:
"woman sitting on sofa holding blue grooming glove, cat beside her"
(空间结构不变,添加手套和猫)
```

---

### ControlNet高级组合

#### 组合1: Canny + OpenPose
```
同时使用两个ControlNet:
1. Canny控制产品位置
2. OpenPose控制宠物姿势

设置:
ControlNet Unit 0:
- Canny (产品参考图)
- Weight: 1.0

ControlNet Unit 1:
- OpenPose (宠物姿势)
- Weight: 0.7

结果:
产品和宠物位置/姿势双重精确控制
```

#### 组合2: Depth + Canny
```
ControlNet Unit 0:
- Depth (场景空间结构)
- Weight: 0.6

ControlNet Unit 1:
- Canny (产品轮廓)
- Weight: 0.9

结果:
在保持场景3D结构的同时,精确放置产品
```

---

## 🚀 批量生成与优化工作流

### 批量生成策略

#### 方法1: X/Y/Z Plot(参数对比测试)

**用途**: 测试不同参数组合,找最佳设置

**使用步骤**:
```
1. Script下拉菜单 → 选择"X/Y/Z plot"

2. 设置X轴(例如测试CFG):
   X type: CFG Scale
   X values: 5, 7, 9, 11

3. 设置Y轴(例如测试Steps):
   Y type: Steps
   Y values: 20, 25, 30

4. 点击Generate

5. 生成矩阵对比图:
   ┌──────┬──────┬──────┬──────┐
   │ C5S20│ C7S20│ C9S20│C11S20│
   ├──────┼──────┼──────┼──────┤
   │ C5S25│ C7S25│ C9S25│C11S25│
   ├──────┼──────┼──────┼──────┤
   │ C5S30│ C7S30│ C9S30│C11S30│
   └──────┴──────┴──────┴──────┘

6. 直观看出最佳组合
```

**推荐测试组合**:
```
测试1: CFG vs Sampler
- X: CFG (5, 7, 9)
- Y: Sampler (DPM++ 2M, Euler a, DDIM)

测试2: Steps vs Denoising
- X: Steps (20, 25, 30)
- Y: Denoising (0.4, 0.5, 0.6)

测试3: LoRA Weight
- X: LoRA1 weight (0.3, 0.5, 0.7, 0.9)
- Y: LoRA2 weight (0.3, 0.5, 0.7, 0.9)
```

---

#### 方法2: Prompt S/R(提示词批量替换)

**用途**: 同一构图,批量生成不同颜色/品种的变体

**使用步骤**:
```
1. Script → Prompt S/R

2. 原始Prompt:
   "a [COLOR] cat playing with [TOYCOLOR] treat ball"

3. Search: [COLOR]
4. Replace:
   orange tabby, grey british shorthair, white persian, black cat
   (用逗号分隔)

5. 第二个S/R:
   Search: [TOYCOLOR]
   Replace: blue, pink, green

6. Generate

7. 自动生成所有组合:
   - orange tabby cat + blue ball
   - orange tabby cat + pink ball
   - orange tabby cat + green ball
   - grey cat + blue ball
   - ... (4×3=12张图)
```

**实用案例**:
```
案例1: 批量生成不同宠物品种
Search: [BREED]
Replace: golden retriever, labrador, border collie, german shepherd

案例2: 批量生成不同时间/光线
Search: [LIGHTING]
Replace: morning golden light, afternoon sunlight, evening warm glow, overcast daylight

案例3: 批量生成不同房间风格
Search: [STYLE]
Replace: modern minimalist, scandinavian, rustic farmhouse, industrial loft
```

---

#### 方法3: Queue(任务队列)

**用途**: 设置多个不同任务,自动连续生成

**使用步骤**(需要安装Queue扩展):
```
1. Extensions → Available → 搜索"queue"
2. 安装"Batch Queue"扩展
3. 重启WebUI

使用:
1. 设置第一个任务(Prompt+参数)
2. 点击"Add to Queue"
3. 修改Prompt和参数为第二个任务
4. 再次"Add to Queue"
5. 重复添加多个任务
6. 点击"Process Queue"
7. 去喝咖啡,等全部完成
```

---

### 高效工作流程推荐

#### 工作流程1: 快速筛选流程
```
目标: 从100个创意中找出10个好图

Step 1: 快速生成(512×512, Steps 20)
- Batch Count: 8-16
- 生成50-100张预览图
- 时间: 30-60分钟

Step 2: 人工筛选
- 浏览所有预览图
- 标记5-10张有潜力的
- 记录它们的seed值

Step 3: 高清重绘(768×768, Steps 25, Hires fix)
- 使用记录的seed
- 微调提示词
- 生成最终高质量版本
- 时间: 10-20分钟

总时间: 1-2小时得到10张精品图
```

---

#### 工作流程2: 产品变体批量生产
```
目标: 为一个产品生成20个不同场景图

Step 1: 准备提示词模板库
- 创建文本文件保存5个场景模板
- 每个模板包含Positive+Negative

Step 2: 使用Prompt S/R批量替换变量
- [PET], [COLOR], [ROOM], [LIGHTING]等
- 自动组合生成

Step 3: X/Y Plot测试最佳参数
- 每个场景找到最佳CFG+Sampler

Step 4: Queue批量生成
- 添加所有任务到队列
- 一次性生成所有变体

Step 5: 后期筛选+修图
- 使用Photoshop/Canva统一调色
- 添加品牌元素

总时间: 3-4小时得到20+张图
```

---

### 节省时间的技巧

#### 技巧1: 使用Styles(风格预设)
```
1. 创建好的Positive+Negative组合
2. 点击Styles下拉框 → "Save Style"
3. 命名: "Pet Product Photography"
4. 下次直接选择Style,无需重新输入

推荐创建的Styles:
- "Pet Lifestyle Scene"
- "Product Close-up"
- "UGC Smartphone Photo"
- "Before After Comparison"
- "Educational Infographic"
```

---

#### 技巧2: 使用Wildcards(随机变量)

**安装**:
```
1. 创建文件夹:
   stable-diffusion-webui/extensions/sd-dynamic-prompts/wildcards/

2. 创建文本文件: pets.txt
   内容(每行一个):
   golden retriever
   labrador
   border collie
   german shepherd

3. 创建文件: colors.txt
   内容:
   blue
   pink
   green
   orange
```

**使用**:
```
Prompt中写:
a __pets__ playing with __colors__ treat ball

生成时自动随机选择:
- "a golden retriever playing with blue treat ball"
- "a labrador playing with pink treat ball"
- "a border collie playing with green treat ball"
...

每次生成都不同,快速生成多样性!
```

---

#### 技巧3: 保存生成参数(PNG Info)

```
每张生成的图片自动包含所有参数信息

查看方法:
1. PNG Info标签页
2. 拖入生成的图片
3. 所有参数显示(Prompt, Seed, CFG等)
4. 点击"Send to txt2img"
5. 一键复现

用途:
- 复现好图
- 学习他人参数
- 建立自己的参数库
```

---

## ❓ 常见问题解决

### 问题1: Out of Memory(显存不足)

**错误提示**:
```
RuntimeError: CUDA out of memory
```

**解决方案**:

**方案1: 降低分辨率**
```
768×768 → 512×512
或使用Hires fix分两步生成:
1. 先生成512×512
2. 再upscale到768×768
```

**方案2: 减小Batch Size**
```
Batch Size: 1 (不要并行)
Batch Count: 4 (一张张生成)
```

**方案3: 启用优化参数**
```
Settings → Optimizations:
☑ xformers (最重要!)
☑ Medvram (中等显存优化)
或
☑ Lowvram (激进显存优化,会变慢)

☑ Do not keep models in RAM
```

**方案4: 清理显存**
```
每生成10-20张图后:
System → Unload Model
释放显存
```

---

### 问题2: 生成的宠物/产品变形/多余肢体

**常见问题**:
- 宠物有3只耳朵
- 手套有6根手指
- 玩具球形状怪异

**解决方案**:

**方案1: 优化负面提示词**
```
Negative中添加:
bad anatomy, extra limbs, extra legs, extra arms, extra ears, extra tail, malformed limbs, deformed, mutated, mutation, disfigured, ugly, gross proportions

针对手:
bad hands, fused fingers, too many fingers, extra fingers, missing fingers

针对宠物:
extra ears, extra legs, multiple tails, deformed paws
```

**方案2: 降低CFG Scale**
```
CFG过高(>10)容易产生畸形
建议: 7-9
```

**方案3: 使用EasyNegative embedding**
```
下载并使用(见前文)
一键解决大部分畸形问题
```

**方案4: 使用Inpainting修复**
```
1. 生成的图除了局部畸形,其他都好
2. 使用Inpainting功能:
   - img2img标签
   - Inpainting子标签
   - 上传图片
   - 用画笔涂抹畸形部分
   - 提示词描述正确的样子
   - Denoising: 0.7-0.9
   - 重新生成仅涂抹区域
```

---

### 问题3: 产品颜色/外观不对

**问题描述**:
- 手套颜色不是我想要的蓝色
- 玩具球不透明

**解决方案**:

**方案1: 强调关键词**
```
使用权重语法:
(blue:1.3) 或 (blue silicone:1.4)

数字越大越强调(最高2.0)

例如:
(bright blue:1.5) silicone pet grooming glove

负面也可以用:
(green:1.3), (pink:1.3), (purple:1.3)
(避免生成其他颜色)
```

**方案2: 使用ControlNet + 参考图**
```
1. 拍摄或找到正确颜色的产品图
2. 使用Canny ControlNet
3. Weight: 0.8-1.0
4. 颜色会严格按照参考图
```

**方案3: 后期调色**
```
使用Photoshop:
1. 选择工具 → 魔棒选中产品
2. 调整 → 色相/饱和度
3. 勾选"着色"
4. 调整色相滑块到目标颜色
5. 调整饱和度和明度
```

---

### 问题4: 背景太假/太完美

**问题描述**:
- 生成的客厅太像3D渲染
- 没有真实生活感

**解决方案**:

**方案1: 添加"不完美"元素到提示词**
```
Positive添加:
slightly messy, lived-in, authentic home, not staged, casual setting, everyday life, realistic clutter

例如:
a cozy living room, slightly messy with pet toys scattered, lived-in authentic home setting, not professionally staged
```

**方案2: 负面排除"完美"**
```
Negative添加:
(perfect:1.3), pristine, spotless, showroom, interior design magazine, professional staging, 3d render, cgi
```

**方案3: 使用UGC风格LoRA**
```
<lora:smartphone_photo:0.7>

效果:
- 轻微色彩偏差
- 细微模糊
- 真实手机拍摄感
```

**方案4: 后期添加"生活元素"**
```
Photoshop:
1. 添加轻微杂物(书、杯子、遥控器)
2. 添加轻微灰尘/阴影(真实感)
3. 降低饱和度5-10%
4. 添加轻微噪点
```

---

### 问题5: 文字/水印出现在图中

**问题描述**:
- 生成图上有乱码文字
- 出现品牌logo水印

**解决方案**:

**方案1: 负面排除文字**
```
Negative添加:
text, watermark, signature, logo, username, artist name, copyright, letters, words, typography, caption
```

**方案2: 如果需要特定文字**
```
SD原生不擅长生成文字
改用后期添加:
1. 生成无文字版本
2. 用Canva/PS添加文字
3. 使用品牌字体
4. 更可控,更专业
```

---

### 问题6: 生成速度慢

**问题描述**:
- 每张图需要5-10分钟

**解决方案**:

**方案1: 启用xFormers(最重要!)**
```
Settings → Optimizations
☑ xformers

效果: 速度提升50-100%!

如果没有xformers选项:
命令行运行:
pip install xformers

重启WebUI
```

**方案2: 降低Steps**
```
30 steps → 20 steps
质量差异<5%,速度提升30%
```

**方案3: 使用更快的采样器**
```
DPM++ 2M Karras (推荐)
或
LCM采样器(需要LCM LoRA,4-8步即可)
```

**方案4: 关闭Hires fix(测试时)**
```
测试阶段:
- 直接生成512×512
- 找到好图后再高清化
```

**方案5: 升级硬件(终极方案)**
```
GPU对比(768×768, 25 steps):
- GTX 1660 (6GB): ~5分钟
- RTX 3060 (12GB): ~1-2分钟
- RTX 4090 (24GB): ~15-20秒

考虑:
- 租用云GPU(RunPod $0.39/小时)
- 升级本地GPU
```

---

## 📚 学习资源与社区

### 学习网站
```
1. Civitai (模型/LoRA下载+教程)
   https://civitai.com

2. Stable Diffusion Art (详细教程)
   https://stable-diffusion-art.com

3. /r/StableDiffusion (Reddit社区)
   https://reddit.com/r/StableDiffusion

4. OpenArt (提示词灵感)
   https://openart.ai

5. Lexica (Prompt搜索引擎)
   https://lexica.art
```

### 中文社区
```
1. Bilibili UP主推荐:
   - "秋葉aaaki" (安装教程)
   - "nenly同学" (进阶技巧)
   - "AI绘画研究院"

2. 微信公众号:
   - "AI艺术实验室"
   - "Stable Diffusion中文站"

3. QQ群/Discord:
   - 搜索"Stable Diffusion中文"
   - 加入活跃社区
```

---

## 🎓 进阶学习路径

### Level 1: 新手(第1-2周)
```
目标: 能生成基础可用的产品图

学习内容:
✅ 安装Stable Diffusion WebUI
✅ 下载基础模型(Realistic Vision)
✅ 理解基础参数(Steps, CFG, Size)
✅ 学会写基础Prompt
✅ 生成50-100张图,熟悉流程

推荐练习:
- 复现本文档中的所有案例提示词
- 每个场景生成10张变体
- 总共生成100+张图
```

### Level 2: 进阶(第3-4周)
```
目标: 精确控制生成效果

学习内容:
✅ 下载和使用LoRA
✅ 学习提示词权重语法
✅ 使用Hires fix放大
✅ 使用Inpainting修复
✅ X/Y/Z Plot参数测试

推荐练习:
- 测试5个不同LoRA的效果
- 使用X/Y Plot找到你的最佳参数
- 修复10张有瑕疵的图
```

### Level 3: 高级(第5-8周)
```
目标: 掌握ControlNet,实现商业级输出

学习内容:
✅ 安装和使用ControlNet
✅ Canny, OpenPose, Depth应用
✅ 图生图高级技巧
✅ 批量生成工作流
✅ 后期处理流程

推荐练习:
- 用ControlNet生成20张精确控制的图
- 建立自己的批量生成workflow
- 完成一个完整产品的50张图库
```

### Level 4: 专家(2-3个月)
```
目标: 训练自己的模型/LoRA

学习内容:
✅ LoRA训练原理
✅ 使用Kohya SS训练工具
✅ 数据集准备和标注
✅ 训练参数优化
✅ 模型融合技术

推荐项目:
- 训练专门的"宠物产品摄影"LoRA
- 训练你家宠物的专属模型
- 分享到Civitai社区
```

---

## 📞 快速开始建议

### 第一天任务清单(3小时)
```
[ ] 1. 安装Stable Diffusion WebUI (30分钟)
[ ] 2. 下载Realistic Vision V5.1模型 (20分钟)
[ ] 3. 下载EasyNegative embedding (5分钟)
[ ] 4. 测试生成第一张图(15分钟)
    - 用本文档的手套场景1提示词
    - 检查是否成功
[ ] 5. 生成20张测试图(60分钟)
    - 手套场景×10张
    - 玩具球场景×10张
    - 熟悉界面和流程
[ ] 6. 学习查看PNG Info(10分钟)
[ ] 7. 保存最喜欢的3张图的参数(10分钟)
```

### 第一周任务清单
```
Day 1: 环境搭建+基础生成(见上)
Day 2: 生成手套所有5个场景(各5张变体)
Day 3: 生成玩具球所有5个场景(各5张变体)
Day 4: 下载2-3个LoRA,测试效果
Day 5: 学习X/Y Plot,找最佳参数
Day 6: 学习Inpainting,修复5张图
Day 7: 总结本周,筛选出最佳10张图

目标: 第一周结束有10张可用的产品图
```

---

## 💡 最后的建议

### 1. 不要追求完美
```
AI生图不可能100%完美
关键是:
- 70分的图用10分钟生成
- 后期PS修到90分(再花10分钟)
- 总共20分钟得到可用图

VS

- 在AI里调参追求95分(花2小时)
- 不如早点生成,后期修图
```

### 2. 建立自己的素材库
```
每次生成的好图:
1. 保存图片
2. 记录Prompt和参数(PNG Info)
3. 整理到文件夹分类:
   - /lifestyle-scenes/
   - /product-closeups/
   - /ugc-style/
   - /before-after/
4. 建立"提示词库.txt"文档
5. 下次直接复用
```

### 3. 先批量生成,后筛选
```
策略:
生成100张 → 筛选10张 → 后期修5张 → 最终用3张

而不是:
反复调参想生成完美的1张(浪费时间)
```

### 4. AI图仅用于冷启动
```
建议时间线:
- Day 1-30: 用AI图快速上线测试
- Day 30-60: 混合(AI图+真实UGC)
- Day 60+: 100%真实客户照片

原因:
- AI图适合快速验证市场
- 真实UGC才能长期建立信任
- 符合广告法规
```

---

**祝你生成出完美的产品图!** 🎨🚀

如有任何问题,欢迎随时提问!

---

**文档版本**: v1.0
**创建日期**: 2025年
**适用软件**: Stable Diffusion WebUI (AUTOMATIC1111)
**推荐GPU**: NVIDIA RTX 3060+ (12GB VRAM)

---