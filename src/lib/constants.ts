export const siteConfig = {
  name: "PROMATEL",
  pro: "PRO",
  matel: "MATEL",
  tagline: "Production et Maintenance des infrastructures Télécoms",
  slogan: "Pour une gestion efficace de vos infrastructures réseaux",
  description:
    "PROMATEL accompagne les opérateurs et entreprises dans la production, l'installation et la maintenance de leurs infrastructures télécoms et réseaux.",
  email: "contact@promatelsn.com",
  phone: "+221 77 298 01 05",
  whatsapp: "+221 77 298 01 05",
  hours: "08:00 - 17:00",
  address: "Dakar, Sénégal",
  credit: {
    name: "KAHFI SN",
    url: "https://abdouazizdiop.vercel.app/",
  },
};

export const socialLinks = [
  { href: "#", label: "Facebook", network: "facebook" as const },
  { href: "#", label: "Instagram", network: "instagram" as const },
  { href: "#", label: "X (Twitter)", network: "x" as const },
  { href: "#", label: "LinkedIn", network: "linkedin" as const },
] as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "reseaux",
    title: "Réseaux et équipement",
    description:
      "Conception, déploiement et supervision de réseaux filaires et sans fil, avec sélection d'équipements adaptés à vos besoins métiers.",
    image:
      "https://promatelsn.com/wp-content/uploads/2021/10/15581-network-cables-1920x1200-computer-wallpaper-1920x500-1-1024x267.jpg",
  },
  {
    id: "installations",
    title: "Installations",
    description:
      "Mise en service sur site, câblage structuré, racks, baies et terminaux — dans le respect des normes et des délais.",
    image:
      "https://promatelsn.com/wp-content/uploads/2021/10/9d13507a12809cdef769f0eff6088fb0.jpeg",
  },
  {
    id: "travaux",
    title: "Travaux et autres",
    description:
      "Extensions, migrations, travaux neufs et interventions ponctuelles pour maintenir la continuité de service.",
    image:
      "https://promatelsn.com/wp-content/uploads/2021/10/Connexion-reseau-1024x680.jpg",
  },
  {
    id: "expertise",
    title: "Expertises et conseils",
    description:
      "Audit, études de faisabilité et recommandations pour optimiser vos investissements infrastructure.",
    image:
      "https://promatelsn.com/wp-content/uploads/2021/10/images-1.jpg",
  },
] as const;

export const partners = [
  {
    name: "Orange",
    logo: "/Orange-logo-500x500.webp",
  },
  {
    name: "Yas",
    logo: "/yas-tanzania-logo-png_seeklogo-566393.webp",
  },
  {
    name: "Expresso",
    logo: "/logo-expresso.webp",
  },
] as const;

export const heroSlides = [
  {
    background:
      "https://promatelsn.com/wp-content/uploads/2021/10/fond-technologie-blanc_23-2148388954.jpg",
    product: "/yealink-t54w.png",
    productAlt: "Téléphone IP Yealink T54W",
    title: "Production et Maintenance des infrastructures Télécoms",
  },
  {
    background:
      "https://promatelsn.com/wp-content/uploads/2021/10/molecules-abstraites-fond-gris-doux-structures-moleculaires-brin-adn-reseau-neuronal-genie-genetique-concept-scientifique-technologique_120542-594.jpg",
    product: "/unnamed-2.png",
    productAlt: "Infrastructure réseau et fibre optique",
    title: "Pour une gestion efficace de vos infrastructures réseaux",
  },
  {
    background:
      "https://promatelsn.com/wp-content/uploads/2021/10/laboratoire_telecom-1.jpg",
    product: "/eecefcd3-50f9-4caa-a47c-b84f0f58c929.png",
    productAlt: "Câble réseau professionnel",
    title: "Production et maintenance des infrastructures réseaux",
  },
] as const;

export const logoUrl =
  "https://promatelsn.com/wp-content/uploads/2021/10/proma_logo1.png";
