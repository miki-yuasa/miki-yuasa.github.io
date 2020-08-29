import { Page } from "../../@types";

const pageData: Page[] = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Research",
  },
  {
    name: "Software",
  },
  {
    name: "Blog",
  },
  {
    name: "Contact",
  },
];

export function getPageData() {
  return pageData;
}
