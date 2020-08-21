declare module "*.ico";
declare module "*.png";
declare module "*.pdf";

type Repo = {
    name: string;
    onClickHref?: string;
    description: string;
    noAccess: boolean;
}
type Page = { name: string }

type ArticleConfig = {
    keywords: number,
    tags: number,
    threshold: number,
    number: number
}