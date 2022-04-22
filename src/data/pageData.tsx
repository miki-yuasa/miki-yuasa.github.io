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
    name: "Publications"
  },
  {
    name: "Software",
  },
  {
    name: "Blog",
  },
];

export function getPageData() {
  return pageData;
}
