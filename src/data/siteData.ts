export type Page = "home" | "industries" | "services"

export const services = [
  {
    id: "logistics",
    number: "01",
    name: "Logistics & Supply Chain",
    short: "Design and improve the networks that keep goods moving.",
    description:
      "Specialist support for supply chain design, transport optimisation, freight operations and multimodal networks across India.",
    capabilities: [
      "Supply Chain Design",
      "Transport Optimisation",
      "Export–Import Logistics",
      "Multimodal Network Design",
    ],
  },

  {
    id: "infrastructure",
    number: "02",
    name: "Infrastructure & Terminals",
    short: "Commercial and operational advice for critical logistics assets.",
    description:
      "Advisory for ports, terminals, rail logistics and infrastructure investments, from opportunity assessment through implementation.",
    capabilities: [
      "Port & Terminal Strategy",
      "Rail Logistics & Operations",
      "Infrastructure Assessment",
      "Investment Support",
    ],
  },

  {
    id: "manufacturing",
    number: "03",
    name: "Manufacturing & Trading",
    short: "Build resilient supply chains for complex industrial businesses.",
    description:
      "Practical support for manufacturers and trading businesses managing inbound, outbound and cross-border flows across India.",
    capabilities: [
      "Network Design",
      "Partner Optimisation",
      "Manufacturing Logistics",
      "Trade Flow Assessment",
    ],
  },

  {
    id: "market-entry",
    number: "04",
    name: "Market Entry & India",
    short: "Enter and grow in India with confidence.",
    description:
      "Practical support for market evaluation, business setup, partner identification and sustainable growth in India.",
    capabilities: [
      "Market Assessment",
      "Opportunity Evaluation",
      "Partner Identification",
      "Business Setup",
      "Regulatory Navigation",
      "Growth Support",
    ],
  },

  {
    id: "legal",
    number: "05",
    name: "Legal & Compliance",
    short: "Navigate rules, contracts and commercial risk with clarity.",
    description:
      "Specialist support for regulatory navigation, compliance planning and the commercial decisions that shape logistics and infrastructure businesses.",
    capabilities: [
      "Regulatory Navigation",
      "Trade Compliance",
      "Contract Review",
      "Risk Assessment",
    ],
  },

  {
    id: "finance",
    number: "06",
    name: "Trade Finance & Investment",
    short: "Turn commercial opportunities into investable decisions.",
    description:
      "Market intelligence, investment assessment and practical support for businesses, lenders and investors active in logistics and infrastructure.",
    capabilities: [
      "Investment Assessment",
      "Trade Finance Support",
      "Market Intelligence",
      "Commercial Due Diligence",
    ],
  },

  {
    id: "transactions",
    number: "07",
    name: "M&A & Transactions",
    short: "Make better decisions through complex transactions.",
    description:
      "Commercial and sector expertise for acquisitions, partnerships, transactions and growth opportunities across the logistics value chain.",
    capabilities: [
      "Transaction Strategy",
      "Commercial Due Diligence",
      "Partner Assessment",
      "Integration Planning",
    ],
  },

  {
    id: "specialised",
    number: "08",
    name: "Specialised Services",
    short: "Focused answers for situations that do not fit a standard brief.",
    description:
      "Tailored specialist support for shipping, logistics, infrastructure, manufacturing and supply-chain businesses facing complex commercial decisions.",
    capabilities: [
      "Strategic Reviews",
      "Opportunity Mapping",
      "Sector Research",
      "Executive Advisory",
    ],
  },
] as const

export const industries = [
  [
    "Cold Chain & Temperature-Controlled",
    "Temperature-sensitive logistics, storage and distribution networks.",
    ["Cold chain design", "Network optimisation", "India market support"],
  ],

  [
    "Logistics Technology & SaaS",
    "Technology businesses building the next generation of logistics operations.",
    ["Market entry", "Partner strategy", "Commercial advisory"],
  ],

  [
    "Global Companies Entering India",
    "Practical support for businesses evaluating and building an India presence.",
    ["Market assessment", "Business setup", "Partner identification"],
  ],

  [
    "Investors & PE Funds",
    "Sector intelligence and commercial support for logistics and infrastructure investment.",
    ["Deal assessment", "Due diligence", "Growth planning"],
  ],

  [
    "Logistics & Supply Chain",
    "Businesses managing complex physical and commercial flows across India.",
    ["Network design", "Transport strategy", "Operations support"],
  ],

  [
    "Shipping Lines, Carriers & NVOCCs",
    "Specialist support across shipping strategy, freight and market opportunities.",
    ["Carrier strategy", "Trade flows", "Market intelligence"],
  ],

  [
    "Freight Forwarders",
    "Commercial and operating support for freight forwarding businesses.",
    ["Partner optimisation", "Growth strategy", "Network design"],
  ],

  [
    "3PLs & 4PLs",
    "Advisory for integrated logistics providers and control tower operations.",
    ["Operating model", "Customer strategy", "Supply chain design"],
  ],

  [
    "Port & Terminal Operations",
    "Commercial and operational support for ports and terminal businesses.",
    ["Asset strategy", "Terminal operations", "Investment support"],
  ],

  [
    "Rail Logistics Operations",
    "Rail freight, multimodal networks and dedicated freight corridor opportunities.",
    ["Rail strategy", "Network planning", "Operations optimisation"],
  ],

  [
    "Manufacturing — Auto, Industrial & FMCG",
    "Manufacturers managing complex inbound and outbound supply chains across India.",
    ["Supply chain design", "Transport optimisation", "Partner strategy"],
  ],

  [
    "E-commerce & Retail",
    "High-volume fulfilment, distribution and last-mile networks.",
    ["Network design", "Fulfilment strategy", "Delivery optimisation"],
  ],
] as const

export const clients = [
  "NYK Group",
  "AET",
  "Stolt-Nielsen",
  "Matson",
  "P&O Nedlloyd",
  "Kuehne + Nagel",
  "HPH Trust",
  "MOL",
  "ZIM",
  "Maersk Line",
  "ABP",
  "Adani",
  "DP World",
]
