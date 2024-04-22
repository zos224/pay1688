import Head from "next/head";
import React from "react";

const MetaPage = ({ description, name, image, faviconIcon }) => {
  return (
    <Head>
      <title>{name ?? "Web App"}</title>
      <link rel="icon" type="image/x-icon" href={ String(faviconIcon) || "/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta charSet="UTF-8" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Google / Search Engine Tags */}
      <meta name="name" content={`${name || ""} | Truyện Cảm Xúc`} />
      <meta
        name="description"
        content={`${description || ""}`}
      />
      <meta
        name="image"
        content={image || ""}
      />
      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={`${name || ""} | Truyện Cảm Xúc`} />
      <meta
        itemProp="description"
        content={`${description || ""}`}
      />
      <meta
        itemProp="image"
        content={image || ""}
      />

      {/* Facebook Meta Tags  */}
      <meta property="og:url" content="https://truyencamxuc.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${name || ""} | Truyện Cảm Xúc`} />
      <meta
        property="og:description"
        content={description || ""}
      />
      <meta
        property="og:image"
        content={image || ""}
      />

      {/* Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name || ""} | Truyện Cảm Xúc`} />
      <meta
        name="twitter:description"
        content={description || ""}
      />
      <meta
        name="twitter:image"
        content={image || ""}
      />

      {/*  */}
      <meta httpEquiv="content-language" content="vi" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8910910340080754"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
};

export default MetaPage;
