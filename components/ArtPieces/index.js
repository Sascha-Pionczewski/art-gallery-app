import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtPieces() {
  const { data = [] } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <div>
      <ul style={{ listStyle: "none" }} role="list" aria-label="list of art">
        {data.map(({ name, artist, imageSource, slug }) => (
          <li key={slug}>
            <p aria-label="title" role="title" style={{ fontWeight: "bold" }}>
              {name}
            </p>
            <p>{artist}</p>
            <Image
              src={imageSource}
              height={100}
              width={100}
              alt={name}
              aria-label="image of art"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
