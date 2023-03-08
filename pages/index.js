import ArtPieces from "../components/ArtPieces";
import useSWR from "swr";
import Spotlight from "../components/Spotlight";

export default function HomePage() {
  const { data: pieces = [] } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  return (
    <>
      <Spotlight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
