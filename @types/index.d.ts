import { MarkdownRemarkFrontmatter } from "./graphql-types";

declare module "*.ico";
declare module "*.png";
declare module "*.pdf";

type Lab = {
  name: string;
  pi: string;
  piTitle: string;
  href: string;
  affiliation: string;
  workingStatus: 'previous' | 'current';
}

type Profile = {
  name: string;
  affiliation: string;
  labs: Lab[];
  keywords: string;
  email: string;
};

type Repo = {
  name: string;
  onClickHref?: string;
  description: string;
  noAccess: boolean;
};
type Page = { name: string };

type Publication = {
  authors: string[];
  year: number;
  title: string;
  journal: string;
  details: string;
  links?: PubLink[];
};

type Award = {
  years: string;
  name: string;
  amount?: string;
}

type PubLink = {
  text: string;
  href: string;
};

type ArticleConfig = {
  keywords: number;
  tags: number;
  threshold: number;
  number: number;
};

type TagOrDate = "tag" | "date";

type ItemObj = {
  key: string;
  item: string;
};
type ItemsObj = {
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
  itemCounts: ItemCount[];
};

type ItemCount = {
  item: string;
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
