import { Icons } from "@/components/Icons";

export const siteConfig = {
  title: "ecommerce",
  nav: [
    {
      title: "home",
      path: "/",
    },
    {
      title: "categories",
      path: "/categories",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ],
  features: [
    {
      icon: <Icons.Delivery />,
      title: "Free Shipping",
      description:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      icon: <Icons.StarBadge />,
      title: "Satisfaction Guarantee",
      description:
        "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    },
    {
      icon: <Icons.ShieldCheck />,
      title: "Secure Payment",
      description:
        "Your security is our priority. Your payments are secure with us.",
    },
  ],
  footer: [
    {
      title: "support",
      links: [
        {
          title: "FAQ",
          path: "/faq",
        },
        {
          title: "Term of use",
          path: "/term",
        },
        {
          title: "Privacy Policy",
          path: "/privacy",
        },
      ],
    },
    {
      title: "company",
      links: [
        {
          title: "About us",
          path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
        },
        {
          title: "Careers",
          path: "/careers",
        },
      ],
    },
    {
      title: "shop",
      links: [
        {
          title: "My Account",
          path: "/account",
        },
        {
          title: "Checkout",
          path: "/checkout",
        },
        {
          title: "Cart",
          path: "/cart",
        },
      ],
    },
  ],
};
