import {
  Award,
  BarChart3,
  Building2,
  CalendarDays,
  Calculator,
  ChefHat,
  ClipboardCheck,
  Compass,
  Landmark,
  LayoutDashboard,
  MessageSquareText,
  Palmtree,
  Presentation,
  Trophy,
  UserPlus,
  Users,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const seo = {
  title: "Virtual Hospitality Group | F&B Consulting & Project Management",
  description:
    "Food & beverage experts who have operated 150+ restaurants, bars and QSRs. Program management, consulting and embedded executives for complex venues.",
} as const;

export const company = {
  name: "Virtual Hospitality Group",
  legalName: "Virtual Hospitality Group, LLC",
  tagline: "Your Food & Beverage Experts, Project Specialists",
  definition:
    "[Virtual Hospitality] (noun): The ability to produce exceptional experiences wherever and whenever needed",
} as const;

export type NavItem = {
  label: string;
  href: string | null;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: null },
  { label: "Services", href: "#services" },
  { label: "Press & Publications", href: null },
  { label: "Training Resources & Library", href: null },
  { label: "Client Experience", href: "#sectors" },
  { label: "Contact Us", href: "#contact" },
];

export const stats = [
  { value: 150, suffix: "+", label: "Restaurants, bars and QSRs operated" },
  {
    value: 50,
    suffix: "+",
    label: "Government, business & industry F&B programs",
  },
  { value: 25, suffix: "+", label: "Native American venue F&B operations" },
  { value: 100, suffix: "+", label: "Clients served" },
] as const;

export const services: { number: string; title: string; icon: LucideIcon }[] = [
  { number: "01", title: "Full Food & Beverage Onsite Operations", icon: ChefHat },
  {
    number: "02",
    title: "Pre-Opening Food & Beverage Design & Development",
    icon: Compass,
  },
  {
    number: "03",
    title: "Employee Recruitment, Training and Support",
    icon: Users,
  },
  {
    number: "04",
    title: 'Food & Beverage Operational "Health Check" Assessments',
    icon: ClipboardCheck,
  },
  { number: "05", title: "Brand Development", icon: Award },
  { number: "06", title: "Operating Plan Development", icon: FileText },
  { number: "07", title: "P&L Proforma Development", icon: Calculator },
  { number: "08", title: "POS Setup/Analytics Models", icon: BarChart3 },
];

export const engagementModels: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Full program management",
    description: "We can provide full food & beverage program management.",
    icon: LayoutDashboard,
  },
  {
    title: "Consulting",
    description: "We can work on a consulting basis.",
    icon: MessageSquareText,
  },
  {
    title: "Embedded executives",
    description: "We can embed our executives into your food & beverage team.",
    icon: UserPlus,
  },
];

export const sectors: { title: string; icon: LucideIcon }[] = [
  { title: "Business & Industry", icon: Building2 },
  { title: "Government", icon: Landmark },
  { title: "Convention and Conference Centers", icon: Presentation },
  { title: "Leisure (Resorts, Casinos & Attractions)", icon: Palmtree },
  { title: "Sports & Entertainment", icon: Trophy },
  { title: "Special Events", icon: CalendarDays },
];

export const experienceProof = [
  "150+ restaurants, bars and QSRs operated",
  "50+ government / business & industry F&B programs",
  "25+ Native American venue F&B operations",
] as const;

export const copy = {
  primaryCta: "Book a consultation",
  secondaryCta: "See our services",
  submitCta: "Send message",
  servicesEyebrow: "Services",
  engagementEyebrow: "How we work",
  sectorsEyebrow: "Client experience",
  whyEyebrow: "Why Virtual Hospitality Group",
  contactEyebrow: "Get in touch",
  nameLabel: "Name",
  emailLabel: "Email",
  companyLabel: "Company",
  messageLabel: "Message",
  requiredError: "Please complete this field.",
  emailError: "Enter a valid email address.",
  headerMenuOpen: "Open navigation menu",
  headerMenuClose: "Close navigation menu",
  heroEyebrow: "Food & beverage consulting and project management",
  heroDescription:
    "We specialize in delivering exceptional customer experiences, while efficiently controlling costs in complex hospitality environments.",
  heroModelsLabel: "Ways we work",
  servicesTitle:
    "Everything a food & beverage operation needs, from pre-opening to performance",
  servicesIntro:
    "Working closely with clients, we determine the type and level of support needed for their individual operation.",
  engagementTitle: "Three ways to work with us",
  sectorsTitle: "Experience across complex venues",
  sectorsIntro:
    "We have worked with more than 100 clients in a variety of industries including:",
  whyTitle: "Hands-on, because we have run these operations ourselves",
  whyClaim:
    "As project managers and restaurant owners, we have more hands-on experience than any other company or consultant in the industry.",
  clientPlaceholder: "Client logos and testimonials placeholder",
  contactTitle: "Book a consultation",
  contactIntro:
    "Tell us about your operation and we will determine the type and level of support you need.",
  contactSuccess:
    "Thanks. This is a design concept, so this form does not send anything.",
  footerTagline: "Food & Beverage Experts, Project Specialists",
  footerNavTitle: "Explore",
  footerCopyright: "© 2026 Virtual Hospitality Group, LLC",
  footerNote: "Design concept by Altrextech. Not the official website.",
} as const;
