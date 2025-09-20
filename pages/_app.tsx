import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Força a atualização das traduções quando o idioma muda
    const handleRouteChange = () => {
      // Pequeno delay para garantir que as traduções sejam carregadas
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
