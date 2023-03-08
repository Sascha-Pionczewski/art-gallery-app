import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

export default function Spotlight() {
  const pieces = useContext(ThemeContext);
  function handleRandomPick() {
    const randomArtNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomArtNumber];
  }
  const randomPiece = handleRandomPick();

  if (!randomPiece) {
    return <p>Loading...</p>;
  }

  return (
    <div role="random">
      <h1>{randomPiece.name}</h1>
      <p>{randomPiece.artist}</p>
      <Image
        src={randomPiece.imageSource}
        width={200}
        height={200}
        alt={randomPiece.name}
      />
    </div>
  );
}
