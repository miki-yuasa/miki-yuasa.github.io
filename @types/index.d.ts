import { MarkdownRemarkFrontmatter } from "./graphql-types";

declare module "*.ico";
declare module "*.png";
declare module "*.pdf";

type Repo = {
  name: string;
  onClickHref?: string;
  description: string;
  noAccess: boolean;
};
type Page = { name: string };

type ArticleConfig = {
  keywords: number;
  tags: number;
  threshold: number;
  number: number;
};

type TagOrDate = "tag" | "date";

type itemObj = {
  key: string;
  item: string;
};
type itemsObj = {
  key: string;
  items: string[];
};

type CountedItemObj = {
  key: string;
  item: string;
  totalCount: number;
};

type CountedItemsObj = {
  key: string;
  items: string[];
  totalCount: number;
};

type GroupedInfo = {
  key: string;
  items: string[];
};

type Article = {
  node: {
    frontmatter?: Maybe<
      Pick<
        MarkdownRemarkFrontmatter,
        "date" | "title" | "description" | "tags" | "slug"
      >
    >;
  };
};

type CrumbItem = {
  text: string;
  href?: string;
};
