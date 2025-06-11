import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import {
  getAllDirPosts,
  markdownToHtml,
  getPostBySlug,
  ResearchPost,
} from "@/lib/mdx";
import { Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Article from "@mui/icons-material/Article";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import { ArXiv } from "@/components/Icons";
import {
  MediaButton,
  MediaButtonProps,
} from "@/components/Buttons/MediaButton";
import { AuthorProps } from "@/types";
import { SEO } from "@/components/SEO";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

const getUniqueAffiliations = (authors: AuthorProps[]) => {
  const affiliations = authors
    .map((author) => author.affiliation)
    .filter(Boolean);
  return Array.from(new Set(affiliations));
};

export async function generateStaticParams() {
  const posts = getAllDirPosts("contents/research");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const components = {
  img: (props) => (
    <Image
      {...props}
      width={props.width || 800}
      height={props.height || 800}
      style={{
        maxWidth: "800px",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        ...props.style,
      }}
      layout="responsive"
      loading="lazy"
    />
  ),
  Box,
};

export default async function BlogPost(props: Params) {
  // ファイルシステムから MDX を読み込み
  const params = await props.params;
  const post = getPostBySlug<ResearchPost>("contents/research", params.slug);
  const { title, date, authors, abstract, links, venue } = post;

  const mediaButtons = [
    { name: "Paper", url: links.paper, icon: Article },
    { name: "arXiv", url: links.arxiv, icon: ArXiv },
    { name: "GitHub", url: links.github, icon: GitHub },
    { name: "Demo", url: links.demo, icon: YouTube },
  ].filter((link) => link.url) as MediaButtonProps[];

  const uniqueAffiliations = getUniqueAffiliations(authors);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <SEO title={title} description={abstract} />
      <Typography
        align="center"
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        {title}
      </Typography>
      {venue !== "" ? (
        <>
          <Typography
            align="center"
            variant="h5"
            gutterBottom
            color="secondary"
            sx={{ fontWeight: 600, fontStyle: "italic" }}
          >
            {venue}
          </Typography>
          <Typography
            align="center"
            variant="h6"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
            })}
          </Typography>
        </>
      ) : (
        <> </>
      )}
      <Grid
        container
        spacing={1}
        mb={2}
        justifyContent="center"
        alignItems="center"
      >
        {authors.map((author, index) => (
          <Grid key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" color="text.primary">
              {author.url ? (
                <Link href={author.url} color="primary">
                  {author.name}
                </Link>
              ) : (
                author.name
              )}
              <sup>
                {uniqueAffiliations.findIndex(
                  (aff) => aff === author.affiliation
                ) + 1}
              </sup>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={1}
        mb={4}
        justifyContent="center"
        alignItems="center"
      >
        {uniqueAffiliations.map((affiliation, index) => (
          <Grid key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" color="text.primary">
              <sup>{index + 1}</sup>
              {affiliation}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        mb={4}
        justifyContent="center"
        alignItems="center"
      >
        {mediaButtons.map((media) => (
          <Grid
            key={media.name}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MediaButton
              name={media.name}
              url={media.url}
              icon={media.icon}
              variant="contained"
              sx={{ width: 120 }}
            />
          </Grid>
        ))}
      </Grid>
      <MDXRemote
        source={post.content}
        options={{ parseFrontmatter: true }}
        components={components}
      />
    </>
  );
}
