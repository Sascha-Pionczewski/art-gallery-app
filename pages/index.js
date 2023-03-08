import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data = [] } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.map(({ name, artist, imageSource, slug }) => (
          <li key={slug}>
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p>{artist}</p>
            <Image src={imageSource} height={100} width={100} alt={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
