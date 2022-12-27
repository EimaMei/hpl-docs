import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>HPL Docs</span>,
  project: {
    link: "https://github.com/Allyedge/hpl-docs",
  },
  docsRepositoryBase: "https://github.com/Allyedge/hpl-docs",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://hpl-docs.vercel.app/" target="_blank">
          HPL Docs
        </a>
        .
      </span>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  useNextSeoProps() {
    const { route } = useRouter();

    if (route !== "/") {
      return {
        titleTemplate: "%s - HPL Docs",
      };
    }

    return {
      titleTemplate: "HPL Docs",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:url"
          content={`https://hpl-docs.vercel.app${asPath}`}
        />
        <meta property="og:title" content={frontMatter.title || "HPL Docs"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Documentation for HPL."}
        />
      </>
    );
  },
};

export default config;
