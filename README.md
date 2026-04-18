# ukashi.github.io

个人主页，技术极客风，纯 HTML/CSS/JS，托管在 GitHub Pages。

## 本地预览

直接双击 `index.html` 用浏览器打开即可。或者用 VS Code 的 Live Server 插件启动本地服务。

也可以用 Python 快速起一个本地服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 部署到 GitHub Pages

### 首次部署

1. **在 GitHub 创建仓库**
   - 仓库名必须是 `ukashi.github.io`（和你的用户名一致）
   - 设为 Public

2. **推送代码**

   ```bash
   cd C:\Users\wuyz\ukashi.github.io
   git init
   git add .
   git commit -m "init: personal homepage"
   git branch -M main
   git remote add origin https://github.com/ukashi/ukashi.github.io.git
   git push -u origin main
   ```

3. **开启 GitHub Pages**
   - 进入仓库 → Settings → Pages
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main` / `/ (root)`
   - 保存

4. **访问**
   - 等待 1-2 分钟，访问 `https://ukashi.github.io`

### 后续更新

修改文件后，推送即可自动更新：

```bash
git add .
git commit -m "update: 更新内容"
git push
```

## 需要修改的内容

现在的内容都是占位符，你需要替换成自己的信息。主要修改 `index.html` 的以下位置：

### 1. 基础信息
- `<title>` 标签 — 浏览器标签显示的标题
- Hero 区域的 profile 信息（Name / Role / Location / Status）
- "关于我" 段落

### 2. 数据统计
- `.about-stats` 里的三个数字和标签

### 3. 技术栈
- `.skills-grid` 里三个分类的标签，按你会的技术替换

### 4. 项目经历
- `.projects-grid` 里三个 `.project-card`
- 每张卡片的：项目名、描述、技术栈标签、GitHub/Demo 链接

### 5. 工作经历
- `.timeline` 里的三个 `.timeline-item`
- 日期、职位、公司、描述

### 6. 联系方式
- 替换 GitHub / Email / Twitter / Blog 的链接

### 7. 可选的个性化
- `style.css` 里的 `:root` CSS 变量可以调整主题颜色
- `script.js` 里可以修改控制台彩蛋内容

## 文件结构

```
ukashi.github.io/
├── index.html      主页
├── style.css       样式
├── script.js       交互脚本
└── README.md       说明文档
```

## 技术说明

- 纯静态页面，无需构建工具
- 使用 Google Fonts 加载 JetBrains Mono 和 Noto Sans SC
- 响应式设计，移动端友好
- 暗色主题，仿终端界面
- 添加了滚动淡入、打字机、扫描线等交互效果

## 自定义域名（可选）

如果你有自己的域名（如 `ukashi.dev`），可以：

1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
2. 在你的域名 DNS 里添加 A 记录指向 GitHub Pages 的 IP：
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. 或用 CNAME 记录指向 `ukashi.github.io`
