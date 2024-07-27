export type TLink = {
  id: number;
  label: string;
  path: string;
};

export type TNavLinks = TLink[];

export const navigationLinks: TNavLinks = [
  {
    id: 1,
    label: "Products",
    path: "#products",
  },
  {
    id: 2,
    label: "Home",
    path: "/",
  },
  {
    id: 3,
    label: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    label: "Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    label: "Customers",
    path: "/customers",
  },
  {
    id: 6,
    label: "Contacts",
    path: "/contacts",
  },
];
