import type { LucideIcon } from 'lucide-react'
import {
  ShoppingBag,
  Settings2,
  Megaphone,
  Share2,
  Gavel,
  Store,
  Target,
  TrendingUp,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Shopify', href: '#shopify' },
  { label: 'eBay', href: '#ebay' },
  { label: 'Meta Ads', href: '#meta-ads' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '1000+', label: 'Clients' },
  { value: '7+', label: 'Years Experience' },
  { value: '100+', label: 'E-commerce Projects' },
  { value: 'International', label: 'Clients' },
]

export const expertiseTags = [
  'Shopify',
  'Meta Ads',
  'eBay',
  'Social Media Marketing',
  'E-commerce',
  'Google Ads',
]

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Array<Service> = [
  {
    icon: ShoppingBag,
    title: 'Shopify Store Development',
    description:
      'Custom-built, conversion-focused Shopify stores designed around your brand, product and buyer journey.',
  },
  {
    icon: Settings2,
    title: 'Shopify Store Management',
    description:
      'Ongoing store upkeep — product uploads, inventory, apps, speed and day-to-day operations handled for you.',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads Management',
    description:
      'Facebook and Instagram ad campaigns built on research, testing and continuous optimization toward ROAS.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Content strategy and channel management that builds brand presence and feeds your sales funnel.',
  },
  {
    icon: Gavel,
    title: 'eBay Consulting',
    description:
      'Strategic guidance on listings, policies, account health and positioning for sellers on eBay.',
  },
  {
    icon: Store,
    title: 'eBay Store Management',
    description:
      'Hands-on management of your eBay store — listings, pricing, fulfillment workflow and store health.',
  },
  {
    icon: Target,
    title: 'Google Ads',
    description:
      'Search and shopping campaigns structured to capture high-intent buyers and reduce wasted spend.',
  },
  {
    icon: TrendingUp,
    title: 'E-commerce Marketing',
    description:
      'Full-funnel marketing strategy connecting your store, ads and channels into one growth plan.',
  },
]

export type ShopifyProject = {
  code: string
  name: string
  industry: string
  services: Array<string>
  image: string
  href: string
}

export const shopifyProjects: Array<ShopifyProject> = [
  {
    code: 'Project 01',
    name: 'Shopify E-commerce Store',
    industry: 'General Retail',
    services: ['Store Setup', 'Theme Customization', 'Product Upload'],
    image: '/projects/shopify-01.svg',
    href: '#',
  },
  {
    code: 'Project 02',
    name: 'Fashion Shopify Store',
    industry: 'Fashion & Apparel',
    services: ['UI/UX Design', 'App Integration', 'Store Management'],
    image: '/projects/shopify-02.svg',
    href: '#',
  },
  {
    code: 'Project 03',
    name: 'Beauty & Personal Care Store',
    industry: 'Beauty & Cosmetics',
    services: ['Store Development', 'Conversion Optimization', 'SEO'],
    image: '/projects/shopify-03.svg',
    href: '#',
  },
  {
    code: 'Project 04',
    name: 'General E-commerce Store',
    industry: 'Multi-category',
    services: ['Store Migration', 'Apps & Automation', 'Ongoing Support'],
    image: '/projects/shopify-04.svg',
    href: '#',
  },
]

export const ebayCategories = [
  'eBay Store Setup',
  'Product Research',
  'Listing Optimization',
  'eBay SEO',
  'Store Management',
  'Sales Strategy',
]

export type EbayProject = {
  code: string
  title: string
  focus: string
}

export const ebayProjects: Array<EbayProject> = [
  { code: 'eBay Project 01', title: 'Store Setup & Branding', focus: 'Account structure, policies and store branding' },
  { code: 'eBay Project 02', title: 'Listing Optimization', focus: 'Titles, item specifics and search visibility' },
  { code: 'eBay Project 03', title: 'Ongoing Store Management', focus: 'Daily operations and store health monitoring' },
]

export const metaAdsMetrics = [
  { label: 'Ad Spend', value: '--' },
  { label: 'Revenue', value: '--' },
  { label: 'Orders', value: '--' },
  { label: 'ROAS', value: '--' },
  { label: 'Cost Per Purchase', value: '--' },
  { label: 'Campaign Duration', value: '--' },
]

export const socialGalleryCategories = [
  'Facebook Designs',
  'Instagram Posts',
  'Reels',
  'Promotional Campaigns',
  'Brand Content',
  'Social Media Strategy',
]

export type CaseStudy = {
  id: string
  category: 'Shopify' | 'eBay' | 'Meta Ads' | 'Social Media'
  client: string
  industry: string
  challenge: string
  strategy: string
  services: Array<string>
  execution: string
  results: string
}

export const caseStudies: Array<CaseStudy> = [
  {
    id: 'cs-shopify-01',
    category: 'Shopify',
    client: 'Client name to be added',
    industry: 'Fashion & Apparel',
    challenge: 'Editable placeholder — describe the client\'s starting problem here.',
    strategy: 'Editable placeholder — outline the strategic approach used.',
    services: ['Shopify Store Development', 'Conversion Optimization'],
    execution: 'Editable placeholder — describe how the project was delivered.',
    results: 'Real results will appear here once client data is added.',
  },
  {
    id: 'cs-ebay-01',
    category: 'eBay',
    client: 'Client name to be added',
    industry: 'Home & Living',
    challenge: 'Editable placeholder — describe the client\'s starting problem here.',
    strategy: 'Editable placeholder — outline the strategic approach used.',
    services: ['eBay Store Management', 'Listing Optimization'],
    execution: 'Editable placeholder — describe how the project was delivered.',
    results: 'Real results will appear here once client data is added.',
  },
  {
    id: 'cs-meta-01',
    category: 'Meta Ads',
    client: 'Client name to be added',
    industry: 'Beauty & Cosmetics',
    challenge: 'Editable placeholder — describe the client\'s starting problem here.',
    strategy: 'Editable placeholder — outline the strategic approach used.',
    services: ['Meta Ads Management', 'Creative Testing'],
    execution: 'Editable placeholder — describe how the project was delivered.',
    results: 'Real results will appear here once client data is added.',
  },
  {
    id: 'cs-social-01',
    category: 'Social Media',
    client: 'Client name to be added',
    industry: 'General E-commerce',
    challenge: 'Editable placeholder — describe the client\'s starting problem here.',
    strategy: 'Editable placeholder — outline the strategic approach used.',
    services: ['Social Media Marketing', 'Content Strategy'],
    execution: 'Editable placeholder — describe how the project was delivered.',
    results: 'Real results will appear here once client data is added.',
  },
]

export const caseStudyFilters = ['All', 'Shopify', 'eBay', 'Meta Ads', 'Social Media'] as const

export const whyReasons = [
  {
    title: 'Practical E-commerce Experience',
    description: 'Years of hands-on work inside real Shopify and eBay stores, not just theory.',
  },
  {
    title: 'Result-Focused Strategy',
    description: 'Every campaign and store decision is tied back to growth, not vanity metrics.',
  },
  {
    title: 'International Client Experience',
    description: 'Comfortable working across time zones, markets and cross-border e-commerce.',
  },
  {
    title: 'Shopify Expertise',
    description: 'Deep familiarity with themes, apps and the Shopify ecosystem end to end.',
  },
  {
    title: 'Performance Marketing',
    description: 'Meta and Google Ads managed with structured testing and clear reporting.',
  },
  {
    title: 'Personalized Solutions',
    description: 'No generic packages — every strategy is built around your product and market.',
  },
]

export type Testimonial = {
  name: string
  country: string
  business: string
  quote: string
}

export const testimonials: Array<Testimonial> = [
  { name: 'Client name pending', country: 'Country pending', business: 'Business name pending', quote: 'Your real client testimonial will appear here.' },
  { name: 'Client name pending', country: 'Country pending', business: 'Business name pending', quote: 'Your real client testimonial will appear here.' },
  { name: 'Client name pending', country: 'Country pending', business: 'Business name pending', quote: 'Your real client testimonial will appear here.' },
]

export const serviceOptions = [
  'Shopify',
  'Meta Ads',
  'eBay',
  'Social Media Marketing',
  'Google Ads',
  'E-commerce Marketing',
  'Other',
]

export const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/10000000000' },
  { label: 'Email', href: 'mailto:hello@fouziakousar.com' },
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
]
