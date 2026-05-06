export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
  heroAlt: string;
  supportPage: {
    label: string;
    href: string;
  };
  keywords: string[];
  intro: string;
  takeaways: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "moq-for-apparel-production",
    title: "How to Choose the Right MOQ for Apparel Production",
    excerpt:
      "A practical guide to matching minimum order quantity with fabric type, style complexity, and launch risk.",
    category: "MOQ",
    readTime: "5 min read",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
    heroImage: "/images/home/capability-knit.jpg",
    heroAlt: "Knit garment production and fabric handling",
    supportPage: {
      label: "Review manufacturing capabilities",
      href: "/capabilities",
    },
    keywords: [
      "apparel MOQ guide",
      "minimum order quantity clothing",
      "low MOQ apparel manufacturer",
    ],
    intro:
      "MOQ should not be treated as a random factory rule. It is a planning tool that tells you whether a style is ready for launch, whether the margin works, and how much complexity the factory has to absorb.",
    takeaways: [
      "Use MOQ to check launch risk before you sample.",
      "More complex styles usually need higher MOQ to stay efficient.",
      "The right MOQ is the one that protects quality and pricing together.",
    ],
    sections: [
      {
        heading: "Start with product complexity",
        paragraphs: [
          "A simple tee and a structured jacket do not belong in the same MOQ conversation. More pattern pieces, trims, wash processes, and finishing steps all raise the operational load on the factory.",
          "If you are launching a new style, compare the construction effort against your expected sell-through. That gives you a more realistic MOQ target than asking for the lowest possible number.",
        ],
        bullets: [
          "Basic knit basics can usually support lower starting quantities.",
          "Woven garments often require more planning because of fit and finishing complexity.",
          "Denim and washed products need extra allowance for shrinkage, wash trials, and quality control.",
        ],
      },
      {
        heading: "Use MOQ as a financial filter",
        paragraphs: [
          "MOQ should reflect the smallest quantity that still keeps production efficient. If the quantity is too low, your unit cost rises and the factory may struggle to maintain consistency.",
          "A practical MOQ protects both sides. You get a more stable quote, and the factory can schedule the work without cutting corners on materials or finishing.",
        ],
        callout:
          "If a style can only work at a higher quantity, that is a useful answer. It tells you whether to simplify the design, bundle the style into a larger order, or defer the launch.",
      },
      {
        heading: "What to ask before you commit",
        paragraphs: [
          "Before you approve a sample, ask the factory to explain the MOQ in the context of fabric availability, machine setup, and styling complexity. You want a number that can actually be produced, not just quoted.",
        ],
        bullets: [
          "What is the MOQ by color and by style?",
          "Does sampling change the final MOQ or lead time?",
          "What happens if you combine multiple colors or sizes?",
          "Is the MOQ different for knit, woven, and denim constructions?",
        ],
      },
    ],
    relatedSlugs: ["apparel-compliance-checklist", "apparel-production-capacity-guide"],
  },
  {
    slug: "apparel-production-capacity-guide",
    title: "How to Read a Garment Factory Capacity Sheet",
    excerpt:
      "Understand lines, output, seasonality, and lead times before you confirm an order.",
    category: "Capacity",
    readTime: "6 min read",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
    heroImage: "/images/home/factory2.jpeg",
    heroAlt: "Garment factory production floor",
    supportPage: {
      label: "See production capacity",
      href: "/capacity",
    },
    keywords: [
      "garment factory capacity",
      "apparel production planning",
      "lead time factory guide",
    ],
    intro:
      "Capacity is more than a monthly output number. A strong capacity sheet shows how the factory handles peak periods, how production is split by product type, and how realistic the promised lead time is.",
    takeaways: [
      "Look at capacity by style, not only by total monthly output.",
      "Lead time should be read together with sampling and bulk planning.",
      "Ask whether the quoted capacity is peak, average, or reserved.",
    ],
    sections: [
      {
        heading: "Read the line count and output together",
        paragraphs: [
          "A factory can have many lines, but the real question is how those lines are allocated. Some may handle knit, some woven, and some may be reserved for finishing or specialized runs.",
          "When you compare capacity sheets, ask how the production lines are distributed and whether the output reflects normal operating conditions or a peak estimate.",
        ],
        bullets: [
          "Production lines tell you how much parallel work can happen at once.",
          "Monthly output should be broken down by category if possible.",
          "Different garment types will have different real throughput.",
        ],
      },
      {
        heading: "Check seasonality and bottlenecks",
        paragraphs: [
          "The best capacity sheet also tells you when the factory slows down. Fabric delays, wash loading, and inspection queues can all affect the true start date.",
          "If a factory gives you one fixed number without context, you are probably not seeing the full production picture. A more useful answer explains where the bottlenecks usually appear.",
        ],
        callout:
          "Good capacity planning reduces surprises. It helps you know whether the factory can absorb your order without pushing other buyers off schedule.",
      },
      {
        heading: "Ask the right planning questions",
        paragraphs: [
          "A buyer should not only ask, 'Can you make it?' The better question is, 'Can you make it within my target window without changing the quality standard?'",
        ],
        bullets: [
          "How much of your capacity is already booked?",
          "What is the lead time for my specific category?",
          "Do wash or finishing processes extend the schedule?",
          "How do you manage sample and bulk overlap?",
        ],
      },
    ],
    relatedSlugs: ["moq-for-apparel-production", "knit-vs-woven-vs-denim"],
  },
  {
    slug: "apparel-compliance-checklist",
    title: "Buyer’s Compliance Checklist for Apparel Manufacturing",
    excerpt:
      "The certifications, audit documents, and quality controls buyers should verify before production.",
    category: "Compliance",
    readTime: "5 min read",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
    heroImage: "/images/home/compliance-audit.png",
    heroAlt: "Factory compliance audit and quality documentation review",
    supportPage: {
      label: "Review compliance and certifications",
      href: "/compliance",
    },
    keywords: [
      "apparel compliance checklist",
      "BSCI compliant factory",
      "WRAP certified garment manufacturer",
    ],
    intro:
      "Compliance is not just a badge on a webpage. It is the proof trail that shows the factory can support your market, your customers, and your internal sourcing standards.",
    takeaways: [
      "Ask for evidence, not just certification names.",
      "Quality control documents matter as much as audit logos.",
      "The right compliance checklist protects your brand before production starts.",
    ],
    sections: [
      {
        heading: "Verify the document trail",
        paragraphs: [
          "A strong compliance review starts with asking for recent audit reports, factory registration details, and any current certification status. If those documents are current and consistent, you know the factory has a real operating system behind the claims.",
        ],
        bullets: [
          "Audit reports or certification summaries",
          "Factory registration and legal entity details",
          "Quality control workflow and inspection records",
          "Lab test or material verification documents when needed",
        ],
      },
      {
        heading: "Match compliance to the market",
        paragraphs: [
          "Different buyers need different proof points. A brand selling into Europe may care about one mix of standards while a U.S. buyer may focus more heavily on social compliance and supplier transparency.",
          "That is why compliance should be matched to the market, not copied from a generic checklist.",
        ],
        callout:
          "When compliance is tied to your destination market, it becomes a sourcing filter, not just a paperwork exercise.",
      },
      {
        heading: "Use compliance to lower order risk",
        paragraphs: [
          "A compliant factory is easier to onboard, easier to audit, and easier to trust at scale. That reduces friction during sampling, production, and shipment.",
        ],
        bullets: [
          "Confirm social compliance before the first purchase order.",
          "Review whether quality checks happen inline and at final inspection.",
          "Ask how non-conforming goods are isolated and reworked.",
        ],
      },
    ],
    relatedSlugs: ["moq-for-apparel-production", "apparel-production-capacity-guide"],
  },
  {
    slug: "knit-vs-woven-vs-denim",
    title: "Knit vs Woven vs Denim: Which Product Route Fits Your Order?",
    excerpt:
      "A comparison guide for sourcing teams deciding where a style belongs and how to plan sampling.",
    category: "Product Mix",
    readTime: "6 min read",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
    heroImage: "/images/home/capability-woven.jpg",
    heroAlt: "Woven garment manufacturing in factory",
    supportPage: {
      label: "Compare manufacturing capabilities",
      href: "/capabilities",
    },
    keywords: [
      "knit vs woven vs denim",
      "garment product selection guide",
      "apparel manufacturing categories",
    ],
    intro:
      "Choosing the right product route early saves time, sampling cost, and unnecessary rework. Knit, woven, and denim products behave differently during development, so the best manufacturing plan starts with the construction type.",
    takeaways: [
      "Knit items usually favor flexibility and faster development.",
      "Woven garments need tighter planning around fit and finishing.",
      "Denim requires special attention to wash, shade, and shrinkage.",
    ],
    sections: [
      {
        heading: "Knit garments are built for flexibility",
        paragraphs: [
          "Knit fabrics stretch and recover, which makes them a strong fit for basics, casualwear, and high-volume programs. They are also easier to adapt when you need a cleaner development path or lower MOQ.",
        ],
        bullets: [
          "T-shirts, polos, hoodies, and sweatshirts",
          "Great for launch programs and repeat basics",
          "Often easier to scale once fit is approved",
        ],
      },
      {
        heading: "Woven garments need tighter planning",
        paragraphs: [
          "Woven products often involve more structure, more pattern accuracy, and more finishing detail. That makes them ideal for shirts, pants, and jackets where fit and presentation matter more than stretch.",
        ],
        callout:
          "If the style is structured, polished, or detail-heavy, woven is often the right route.",
      },
      {
        heading: "Denim needs wash and finish discipline",
        paragraphs: [
          "Denim programs are shaped by shade consistency, wash effect, and shrinkage control. That is why denim order planning should include wash approval and test development from the beginning.",
        ],
        bullets: [
          "Confirm wash style before bulk quotation",
          "Check whether the factory handles rigid and stretch denim differently",
          "Plan for shrinkage, shade variation, and finishing tolerances",
        ],
      },
    ],
    relatedSlugs: ["moq-for-apparel-production", "apparel-production-capacity-guide"],
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort((left, right) => {
    return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime();
  });
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
