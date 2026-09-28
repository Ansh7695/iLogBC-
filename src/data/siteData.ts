export type Page = 'home' | 'industries' | 'services'

export const services = [
  { id: 'supply-chain', number: '01', name: 'Supply Chain Management', short: 'End-to-end visibility and control of your global supply chain.', description: 'We design, implement, and manage resilient supply chains that reduce cost, compress lead times, and eliminate single points of failure.', capabilities: ['Network design & optimisation', 'Supplier relationship management', 'Inventory & demand planning', 'Control tower setup'] },
  { id: 'strategic-advisory', number: '02', name: 'Strategic Advisory', short: 'Senior counsel for your most consequential decisions.', description: 'Our senior advisors bring decades of C-suite experience to complex strategic challenges and deliver actionable insight that moves the needle.', capabilities: ['Market entry strategy', 'M&A due diligence', 'Competitive positioning', 'Executive workshops'] },
  { id: 'risk-compliance', number: '03', name: 'Risk & Compliance', short: 'Identify, quantify, and manage enterprise-wide risk.', description: 'From trade sanctions to environmental compliance, we help organisations navigate a complex regulatory landscape without sacrificing commercial performance.', capabilities: ['Sanctions & trade compliance', 'ESG risk assessment', 'Insurance optimisation', 'Regulatory change management'] },
  { id: 'digital', number: '04', name: 'Digital Transformation', short: 'Technology-led change that delivers tangible business outcomes.', description: 'We help logistics and industrial companies select, implement, and scale technology solutions that make operations clearer and faster.', capabilities: ['TMS / WMS implementation', 'AI & predictive analytics', 'Process automation', 'Digital twin modelling'] },
  { id: 'operations', number: '05', name: 'Operations Excellence', short: 'Lean, agile, and continuously improving operations.', description: 'We help clients eliminate waste, accelerate throughput, and build a culture of continuous improvement that lasts.', capabilities: ['Lean & Six Sigma programmes', 'Warehouse optimisation', 'Labour productivity', 'KPI framework design'] },
  { id: 'market-entry', number: '06', name: 'Market Entry & Expansion', short: 'Launch and scale in new geographies with confidence.', description: 'Our on-the-ground presence in 40+ countries helps clients navigate local regulation, establish distribution, and build trusted partner networks.', capabilities: ['Country feasibility studies', 'Local partner sourcing', 'Regulatory licensing', 'Go-to-market execution'] },
] as const

export const industries = [
  ['Oil & Gas', 'Upstream, midstream, and downstream logistics with real-time cargo tracking.', ['1.2M tons/yr managed', '18 refineries served', '99.4% on-time']],
  ['Maritime & Shipping', 'Full-cycle maritime logistics from vessel chartering to port coordination.', ['400+ vessels', '140 ports covered', '$2.8B freight managed']],
  ['Aviation & Aerospace', 'Precision logistics for aerospace components, MRO supply chains, and time-critical air cargo.', ['72hr SLA guarantee', '35 airports', 'AOG response < 4hrs']],
  ['Healthcare & Pharma', 'Cold-chain logistics, GDP-compliant distribution, and clinical trial supply management.', ['Cold chain 2–8°C', 'GDP certified', '200+ pharma clients']],
  ['Financial Services', 'Strategic consulting for banks, asset managers, and fintechs navigating cross-border markets.', ['$450B AUM advised', '60+ institutions', 'Basel IV ready']],
  ['Manufacturing & Industrials', 'JIT supply chain design, supplier qualification, and lean transformation programmes.', ['22% avg cost reduction', '400+ suppliers', '18 countries']],
  ['Energy & Utilities', 'Infrastructure logistics and strategic advisory for renewable energy projects.', ['15GW projects supported', '42 energy clients', 'Net-zero advisory']],
  ['Agriculture & Agribusiness', 'Bulk commodity logistics and agricultural trade advisory across emerging markets.', ['5M tonnes grains', '12 emerging markets', 'GASC certified']],
] as const

export const clients = ['Kuehne + Nagel', 'HPH Trust', 'MOL', 'ZIM', 'Maersk Line', 'ABP', 'Adani', 'DP World', 'NYK Group', 'AET', 'Stolt-Nielsen', 'Matson', 'P&O Nedlloyd']
