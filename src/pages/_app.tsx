import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "../utils/createEmotionCache";
import Layout from "../components/_App/Layout";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface AppPropsWithEmotionCache extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}: AppPropsWithEmotionCache) => (
  <CacheProvider value={emotionCache}>
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
