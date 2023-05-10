import { CurrentUserProvider } from "@/components/CurretnUserProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Searchcontext } from "@/components/context/Searchcontext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <RecoilRoot>
    <Searchcontext>
      <CurrentUserProvider>
        <Component {...pageProps} />
      </CurrentUserProvider>
    </Searchcontext>
    // </RecoilRoot>
  );
}
