import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Andrey Elyan - Senior Software Engineer specializing in Node.js, TypeScript, NestJS, AWS, React, and microservices"
        />
        <meta
          name="keywords"
          content="software engineer, nodejs, typescript, nestjs, aws, react, microservices, fullstack developer"
        />
        <meta
          name="author"
          content="Andrey Elyan"
        />

        <meta
          property="og:title"
          content="Andrey Elyan - Senior Software Engineer"
        />
        <meta
          property="og:description"
          content="Senior Software Engineer specializing in scalable microservices, AWS solutions, and modern web applications"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://andreyelyan.dev"
        />
        <meta
          property="og:image"
          content="/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Andrey Elyan - Senior Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Senior Software Engineer specializing in scalable microservices, AWS solutions, and modern web applications"
        />
        <meta
          name="twitter:image"
          content="/og-image.jpg"
        />

        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
