import React from "react";
import EachSongDisplay from "./eachSongDisplay";
import MainImage from "./MainImage";
import { BsFillDiscFill } from "react-icons/bs";

export default function Home(props) {
  const dark = {
    textShadow: props.dark ? "2px 4px 12px white" : "2px 4px 12px black",
  };
  return (
    <section>
      <h1 style={dark} className="tab-header">
        Home{" "}
      </h1>
      <MainImage dark={props.dark} icon={<BsFillDiscFill />} />

      {props.songArray.map((song) => (
        <EachSongDisplay
          key={song.id}
          song={song}
          toggleDownload={props.toggleDownload}
          dark={props.dark}
          toggleFavourite={props.toggleFavourite}
          playFunction={props.playFunction}
        />
      ))}
    </section>
  );
}
