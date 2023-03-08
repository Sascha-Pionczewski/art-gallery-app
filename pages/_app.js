import { SWRConfig } from "swr";
import useSWR from "swr";
import GlobalStyle from "../styles";
import { createContext } from "react";
export const ThemeContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: pieces = [] } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  return (
    <ThemeContext.Provider value={pieces}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeContext.Provider>
  );
}
