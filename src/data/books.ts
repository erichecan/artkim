export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorBio?: string;
  genre: string;
  tagline: string;
  description: string;
  isbn: string;
  priceCAD: number | null;
  paymentLink: string;
  coverImage: string;
  coverTint: string;
  featured?: boolean;
};

export const books: Book[] = [
  {
    slug: "immersive-technology-in-virtual-art",
    title: "Immersive Technology in Virtual Art",
    subtitle: "In Virtual Art",
    author: "David Liu",
    authorBio:
      "David Liu is a researcher and practitioner in immersive technology and virtual art, focusing on the intersection of digital media, spatial design, and emerging technologies.",
    genre: "Art & Technology",
    tagline:
      "Exploring the future of art through immersive technology and blockchain innovation.",
    description:
      "Immersive Technology in Virtual Art transcends the transformative intersection of art, technology, and digital innovation in the 21st century. As virtual reality, augmented reality, and blockchain technologies continue to evolve, artists and institutions are redefining how art is created, experienced, and owned.\n\nThrough critical analysis and real-world insights, David Liu examines how immersive media expands artistic boundaries — through virtual exhibitions, interactive installations, and decentralized ownership and emerging digital economies. The book offers a forward-looking perspective on the evolving landscape of contemporary art in increasingly virtual environments.\n\nBridging theory and practice, Immersive Technology in Virtual Art is essential reading for artists, designers, technologists, and innovators seeking to understand and help shape the future of creative expression.",
    isbn: "978-1-0694463-9-8",
    priceCAD: 19.99,
    paymentLink: "#",
    coverImage: "/covers/immersive-technology-in-virtual-art.jpg",
    coverTint: "#141033",
    featured: true,
  },
  {
    slug: "the-emotional-world-of-doudou",
    title: "The Emotional World of DouDou",
    subtitle: "A Happy Day with DouDou",
    author: "DouDou",
    genre: "Children's / Emotional Wellness",
    tagline:
      "The Emotional World of DouDou is a gentle and heartfelt exploration of everyday feelings.",
    description:
      "Through soft reflections and simple moments, this book invites readers to understand emotions such as joy, sadness, anxiety, and calm in a compassionate and comforting way.\n\nLike a quiet conversation with oneself, it offers a space to pause, feel, and reconnect with inner balance.\n\nPerfect for readers seeking emotional clarity, warmth, and healing in their daily lives.",
    isbn: "978-1-0694463-7-4",
    priceCAD: null,
    paymentLink: "#",
    coverImage: "/covers/the-emotional-world-of-doudou.jpg",
    coverTint: "#8FA9C4",
  },
  {
    slug: "the-arts-of-indigenous-health-and-well-being",
    title: "The Arts of Indigenous Health and Well-Being",
    subtitle: "Cultural Practices, Healing Traditions, and Community Resilience",
    author: "JiuJiu",
    genre: "Indigenous Health & Culture",
    tagline: "Cultural Practices, Healing Traditions, and Community Resilience.",
    description:
      "This book explores the intersection of art, culture, and health within Indigenous communities, highlighting traditional healing practices and contemporary approaches to well-being.\n\nIt examines how artistic expression contributes to emotional, spiritual, and community resilience, offering valuable insights for researchers, practitioners, and policymakers.",
    isbn: "978-1-0694463-6-7",
    priceCAD: null,
    paymentLink: "#",
    coverImage: "/covers/the-arts-of-indigenous-health-and-well-being.jpg",
    coverTint: "#B08F6B",
  },
  {
    slug: "first-birthday-for-you",
    title: "First Birthday For You",
    subtitle: "A Memory Book to Celebrate Baby's First Year",
    author: "Xiao Hai",
    genre: "Children's / Keepsake",
    tagline:
      "Celebrate your baby's very first year with love, joy, and unforgettable memories.",
    description:
      "First Birthday For You is a heartwarming keepsake book designed to capture every precious moment — from tiny milestones to big celebrations.\n\nA beautiful memory to cherish today, and a treasure to look back on forever.\n\nBecause the first year only happens once. Xiao Hai creates heartfelt books that celebrate childhood, family, and meaningful life moments.",
    isbn: "978-1-0694463-0-5",
    priceCAD: 11.99,
    paymentLink: "#",
    coverImage: "/covers/first-birthday-for-you.jpg",
    coverTint: "#F6DDB8",
  },
  {
    slug: "expressive-arts-therapy-for-traumatized-children",
    title: "Expressive Arts Therapy for Traumatized Children and Adolescents",
    subtitle: "Assessment, Intervention, and Healing Through Creative Practices",
    author: "DADA",
    genre: "Clinical Practice / Psychology",
    tagline: "Assessment, Intervention, and Healing Through Creative Practices.",
    description:
      "Part of the Clinical Practice Series. Expressive Arts Therapy for Traumatized Children and Adolescents is a clinical guide to assessment, intervention, and healing through creative practices — written for practitioners working with young trauma survivors.",
    isbn: "978-1-0694463-4-3",
    priceCAD: null,
    paymentLink: "#",
    coverImage: "/covers/expressive-arts-therapy-for-traumatized-children.jpg",
    coverTint: "#2A3F73",
  },
  {
    slug: "the-design-of-everyday-things",
    title: "The Design of Everyday Things",
    subtitle: "Human-Centered Principles for Better Product Experiences",
    author: "Da Wei",
    genre: "UX / UI Design",
    tagline:
      "Everyday objects and digital interfaces are designed to do one thing well: make our lives easier.",
    description:
      "This book reveals the timeless principles behind that ease. Through real-world examples and thoughtful analysis, it shows how great design emerges from understanding people — their goals, behaviors, and contexts.\n\nFrom the satisfying click of a doorknob to the subtle animation of a toggle, you'll see how affordance, feedback, clarity, and simplicity shape experiences we often take for granted.\n\nA practical guide for designers, product thinkers, and anyone curious about the design of everyday things.\n\nAffordance — Make actions obvious through form and context.\n\nFeedback — Communicate status and build confidence.\n\nSimplicity — Remove what's unnecessary so what matters stands out.",
    isbn: "978-1-0694463-1-2",
    priceCAD: 39.95,
    paymentLink: "#",
    coverImage: "/covers/the-design-of-everyday-things.jpg",
    coverTint: "#EDE7DC",
  },
  {
    slug: "north-america-real-estate",
    title: "北美房地产",
    subtitle: "Bei Mei Fang Di Chan — 投资·置业·管理·未来",
    author: "David Liu",
    genre: "Real Estate & Investment",
    tagline: "把握机遇，稳健增值，实现财富自由。",
    description:
      "本书全面解析北美房地产市场，涵盖住宅、商业、投资等领域，结合最新数据与实战经验，帮助读者深入了解市场趋势，掌握投资策略，规避风险，做出明智决策。\n\n市场趋势分析 — 深入剖析北美房地产市场现状与未来发展趋势，把握投资先机。\n\n投资策略与案例 — 分享成功投资案例与实用策略，助您实现资产稳健增长。\n\n置业与交易指南 — 从选房、贷款到交易流程，提供全方位实用指导，让置业更轻松。\n\n物业管理与增值 — 专业物业管理建议，提升物业价值，保障长期投资回报。",
    isbn: "978-1-0694463-8-1",
    priceCAD: 26.99,
    paymentLink: "#",
    coverImage: "/covers/north-america-real-estate.jpg",
    coverTint: "#0F1B33",
  },
  {
    slug: "green-building-design",
    title: "Green Building Design",
    subtitle: "Principles, Strategies, and Sustainable Practices",
    author: "Da Da",
    genre: "Sustainable Design / Architecture",
    tagline: "Building a better future. Designing with purpose.",
    description:
      "Green building design represents a critical approach to addressing environmental challenges within the built environment. This book explores the principles and strategies for designing energy-efficient, resource-conscious, and environmentally responsible buildings.\n\nIt covers passive design, sustainable materials, renewable energy integration, and lifecycle performance. Designed for professionals and academic use in architecture and planning.\n\nPassive Design — Optimize site, orientation, and natural systems to reduce energy demand.\n\nSustainable Materials — Choose low-impact, durable, and responsibly sourced materials.\n\nRenewable Energy — Integrate clean energy systems to power sustainable buildings.\n\nLifecycle Performance — Evaluate and improve environmental performance across the building life.\n\nHealthy Built Environments — Design spaces that support health, well-being, and occupant comfort.\n\n\"Sustainable buildings are not just structures — they are commitments to a better world.\"",
    isbn: "978-1-0694463-4-3",
    priceCAD: 23.99,
    paymentLink: "#",
    coverImage: "/covers/green-building-design.jpg",
    coverTint: "#1F3320",
  },
  {
    slug: "sustainable-urban-development",
    title: "Sustainable Urban Development",
    subtitle: "Planning, Policy, and Future Cities",
    author: "Da Shi",
    genre: "Urban Planning & Policy",
    tagline:
      "Building livable, resilient, and equitable cities for generations to come.",
    description:
      "Cities are home to more than half of the world's population, and their future will define our future. Sustainable Urban Development, Planning, Policy, and Future Cities explores how thoughtful planning, forward-looking policies, and innovative solutions can create cities that are inclusive, resilient, and environmentally responsible.\n\nThis book provides a comprehensive guide for students, professionals, policymakers, and community leaders working toward sustainable urban futures.\n\nIntegrated Planning — Align land use, transportation, housing, and environment through integrated, long-term planning.\n\nSmart Policies — Develop effective policies that promote sustainability, equity, and economic vitality.\n\nFuture-Ready Cities — Leverage technology and innovation to build adaptable, resilient, and livable cities.\n\nEnvironmental Resilience — Protect natural resources, reduce emissions, and enhance climate resilience.\n\nCommunity Well-Being — Create inclusive, healthy, and vibrant communities where everyone can thrive.\n\n\"The future of our cities depends on the decisions we make today.\"",
    isbn: "978-1-0694463-3-6",
    priceCAD: 19.99,
    paymentLink: "#",
    coverImage: "/covers/sustainable-urban-development.jpg",
    coverTint: "#12271A",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getFeaturedBook(): Book {
  return books.find((book) => book.featured) ?? books[0];
}
