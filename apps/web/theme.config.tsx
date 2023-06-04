import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/stlato/stlato-ui/docs/web",
  },
  docsRepositoryBase: "https://github.com/stlato/stlato-ui/apps/web/src/pages",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
