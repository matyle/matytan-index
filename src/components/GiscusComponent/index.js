import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  const { pathname } = useLocation();

  return (
    <Giscus
      repo="matyle/matytan-index"
      repoId="R_kgDOLXP5Ig"
      category="General"
      categoryId="DIC_kwDOLXP5Is4Cdfzd" // E.g. id of "General"
      mapping="url" // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
