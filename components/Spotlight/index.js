import React from "react";
import Image from "next/image";

export default function Spotlight({ pieces }) {
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
