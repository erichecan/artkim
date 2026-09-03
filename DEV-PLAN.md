# DEV-PLAN — 图书销售站(占位内容版)

## 读取的文档
项目根目录当前没有任何产品文档(PRD/需求等),本计划基于对话中确认的信息编写:
- 目标:7 本书的简单销售页,面向加拿大西人读者(英文内容)
- 风格方向:方案 A(书封撑满 hero,如 Rupi Kaur / James Clear)+ 方案 C(灰色圆形衬底书目网格,如 Brandon Sanderson)的融合,已在对话中通过截图核实
- 已确认的设计 token(见下)已通过用户逐项确认,不再重复询问

## 技术栈(已确认:极简静态方案)
| 层级 | 方案 |
| :-- | :-- |
| 框架 | Next.js(App Router)+ TypeScript |
| 数据 | 无数据库,书籍数据写死在 `src/data/books.ts` 一个文件里 |
| 样式 | Tailwind CSS |
| 支付 | Stripe Payment Links(每本书一个链接,按钮直接跳转,当前用占位链接 `#`) |
| 部署 | 暂不涉及,真正部署时再定(遵照 CLAUDE.md 惯例) |

不用 Prisma/Postgres/后台管理界面——以后加书/改价直接改 `books.ts` 重新部署即可,7 本书量级不需要数据库。

## 设计 Token(已在对话中逐项确认)
- **画面基调**:暖米白纸质调(canvas `#F8F4EC` 左右,非纯白、非渐变)
- **墨色/正文**:暖黑 `#211C16` 左右
- **强调色(仅用于 CTA 按钮 / 价格)**:深酒红(仿精装书封烫金/织带既视感),不用于装饰性大面积铺色
- **圆形衬底**:统一浅暖灰,7 本书用同一个颜色,不做每本书单独配色——避免网格显乱,呼应 Sanderson 参考
- **字体**:标题/展示用文学感衬线(Newsreader 或同类),导航/按钮/价格等 UI 文案用中性无衬线(Inter 或同类),两者对比制造"编辑排版感"
- **禁用项**:不用渐变背景、不用紫色/靛蓝默认配色、不做装饰性大字号异体字换色(refero anti-slop 规则)

## 占位内容来源
你提议去 Indigo.ca 找畅销书做占位,已核实到以下 7 本真实在售畅销书(标题/作者为公开事实信息,仅作占位展示用):

1. *Wild Dark Shore* — Charlotte McConaghy(小说)
2. *The Life Intended* — Kristin Harmel(小说)
3. *The Knave and the Moon* — Rachel Gillig(奇幻爱情)
4. *Scion* — James Islington(奇幻)
5. *The Neverfear* — Katherine Rundell(冒险/奇幻)
6. *Situated* — Angela Duckworth(非虚构/自我提升)
7. *The Killer Isn't Alice* — Iris Starling(悬疑解谜书)

**封面处理**:不会抓取/盗用 Indigo 上的真实封面图片(版权问题,且占位阶段没必要)。改用代码生成的"排版风格占位封面"——书名 + 作者用设计好的版式排在暖色卡片上,视觉上模拟精装书封的质感,后续换成你真实书籍的封面图时直接替换图片资源即可,不用改版式代码。
价格用合理估算的 CAD 价格占位(如 $24.99–$36.99),后续替换为真实价格与 Stripe 链接。

## 模块拆解
1. **数据层** `src/data/books.ts` — Book 类型 + 7 条占位数据(slug/title/author/tagline/description/priceCAD/paymentLink/coverTint)
2. **占位封面组件** `src/components/BookCover.tsx` — 接收书籍数据,渲染排版风格占位封面(替代真实封面图前的过渡方案)
3. **首页** `src/app/page.tsx` — Hero(精选 1 本书,大封面 + 圆形衬底 + 一句话卖点 + CTA)+ 书目网格(7 本书,圆形衬底 + 3 列响应式)
4. **详情页** `src/app/books/[slug]/page.tsx` — 大封面 + 书名/作者/简介 + 价格 + Stripe 按钮(占位链接)+ 返回首页
5. **全局样式/字体** `src/app/layout.tsx` + `globals.css` — 引入 Newsreader + Inter,定义 Tailwind 主题 token(色板/圆角)

## 路由清单
| 路由 | 说明 |
| :-- | :-- |
| `/` | 首页:hero + 7 本书网格 |
| `/books/[slug]` | 单本书详情页,7 个静态路径 |

无 API 路由(Payment Links 方案不需要后端接口)。

## 风险点
- 占位封面是排版设计,不是真实书封图片——上线前必须替换成真实书籍的封面图和真实版权内容,否则不能作为真实商用页面
- Payment Link 目前是占位 `#`,按钮可点击但不会真正跳转支付,需要你在 Stripe 后台建好 7 个产品后替换真实链接
- 静态数据方案以后如果书籍量增长到几十本以上,或需要非技术人员自主上下架,会需要重新评估是否加数据库/后台——目前 7 本书场景下不需要

---

📋 计划已生成,以上技术栈、Stripe 方案、设计 token 均已在对话中确认;占位内容用 Indigo 畅销书书目 + 排版风格占位封面(不抓真实封面图)。如果没问题,回复"确认,开始开发"我就开始搭建。
