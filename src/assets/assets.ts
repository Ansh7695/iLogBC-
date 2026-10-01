import heroBackground from "./Hero Bg.png"

import servicesHero from "./services hero image.png"

import industriesVideo from "./Industries page bg.mp4"

import whyVideo from "./why iLogBC section.mp4"

import threePlsFourPls from "./connected industries/3PLs & 4PLs.jpg"
import coldChain from "./connected industries/Cold Chain & Temperature-Controlled.png"
import ecommerceRetail from "./connected industries/E-commerce & Retail.jpg"
import freightForwarders from "./connected industries/Freight Forwarders.jpg"
import globalCompanies from "./connected industries/Global Companies Entering India.jpg"
import investorsPeFunds from "./connected industries/Investors & PE Funds.jpg"
import logisticsTechnology from "./connected industries/Logistics Technology & SaaS.jpg"
import manufacturing from "./connected industries/Manufacturing — Auto, Industrial & FMCG.jpg"
import portTerminalOperations from "./connected industries/Port & Terminal Operations.jpg"
import railLogistics from "./connected industries/Rail Logistics Operations.jpg"
import shippingLines from "./connected industries/Shipping Lines, Carriers & NVOCCs.jpg"

export const assets = {
  heroBackground,

  servicesHero,

  industriesVideo,

  whyVideo,

  connectedIndustries: {
    "Shipping Lines, Carriers & NVOCCs": shippingLines,
    "Freight Forwarders": freightForwarders,
    "3PLs & 4PLs": threePlsFourPls,
    "Port & Terminal Operations": portTerminalOperations,
    "Rail Logistics Operations": railLogistics,
    "Manufacturing — Auto, Industrial & FMCG": manufacturing,
    "E-commerce & Retail": ecommerceRetail,
    "Cold Chain & Temperature-Controlled": coldChain,
    "Logistics Technology & SaaS": logisticsTechnology,
    "Global Companies Entering India": globalCompanies,
    "Investors & PE Funds": investorsPeFunds,
  },
} as const
