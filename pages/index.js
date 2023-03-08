import ArtPieces from "../components/ArtPieces";
import useSWR from "swr";
import Spotlight from "../components/Spotlight";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: pieces = [] } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return (
    <>
      <Spotlight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
