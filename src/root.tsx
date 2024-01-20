// @refresh reload
import { Suspense } from "solid-js"
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from "solid-start"
import { AniqueThemeAutoSetup } from "@qinetik/anique"
import { createGlobalStyle } from "@qinetik/emotion"

const GlobalStyles = createGlobalStyle`
    body {
        margin : 0;
    }
`

export default function Root() {
  return (
    <Html lang="en" class={"dark"}>
      <Head>
        <Meta charset="utf-8" />
        <Meta http-equiv="x-ua-compatible" content="ie=edge" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <Meta name="description" content="Software Developer" />
        <Link rel="icon" type="image/png" href="images/favicon.png" />
        <AniqueThemeAutoSetup />
        <GlobalStyles />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
