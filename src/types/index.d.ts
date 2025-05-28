export type AuthorProps = {
  name: string;
  url?: string;
  affiliation: string;
};

export type LinkProps = {
  paper?: string;
  arxiv?: string;
  github?: string;
  demo?: string;
};

export type ProjectProps = {
  title: string;
  slug: string;
  date: string;
  authors: AuthorProps[];
  links: LinkProps;
  venue: string;
  abstract: string;
};
