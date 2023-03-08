import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

export default function HomePage({ pieces }) {
  return (
    <>
      <Spotlight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </>
  );
}
