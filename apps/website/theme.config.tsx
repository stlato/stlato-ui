import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

type FrontMatter = {
  title: string;
  description: string;
  image: string;
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/stlato/stlato-ui",
  },
  docsRepositoryBase:
    "https://github.com/stlato/stlato-ui/tree/main/apps/website",
  primaryHue: 264,
  useNextSeoProps: () => ({ titleTemplate: "%s – Stlato UI" }),
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig<FrontMatter>();
    const ogTitle = frontMatter.title;
    const ogDescription = frontMatter.description;
    const ogImage = frontMatter.image;

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/favicon.ico" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Stlato UI" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Stlato" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </>
    );
  },
  footer: {
    text: "Stlato © 2023",
  },
};

export default config;
