import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

export default function ArtPieces() {
  const pieces = useContext(ThemeContext);
  return (
    <div>
      <ul style={{ listStyle: "none" }} role="list" aria-label="list of art">
        {pieces.map(({ name, artist, imageSource, slug }) => (
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
