import React from "react";
import EachSongDisplay from "./eachSongDisplay";
import MainImage from "./MainImage";
import { FaHeart } from "react-icons/fa";

export default function Favourite(props) {
  const dark = {
    textShadow: props.dark ? "2px 4px 12px white" : "2px 4px 12px black",
  };
  return (
    <section>
      <h1 style={dark} className="tab-header">
        Favourite Songs
      </h1>
      <MainImage dark={props.dark} icon={<FaHeart />} />
      {props.favArray.map((song) => {
        return (
          song.isFav && (
            <EachSongDisplay
              key={song.id}
              song={song}
              toggleDownload={props.toggleDownload}
              dark={props.dark}
              toggleFavourite={props.toggleFavourite}
              playFunction={props.playFunction}
            />
          )
        );
      })}
    </section>
  );
}
