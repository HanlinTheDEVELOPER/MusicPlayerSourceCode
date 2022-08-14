import React from "react";
import { FaDownload } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const EachSongDisplay = (props) => {
  const dark = {
    color: props.dark ? "#caf0f8" : "#023e8a",
    marginLeft: 12,
  };
  return (
    <div key={props.song.id} className="each-song">
      <h5 onClick={() => props.playFunction(props.song.id)}>
        {props.song.title}
      </h5>
      <p>{props.song.artist}</p>
      <div>
        <span
          id={props.song.id}
          onClick={() => props.toggleFavourite(props.song.id)}
        >
          {props.song.isFav ? <FaHeart /> : <FaRegHeart />}
        </span>
        <a
          style={dark}
          id={props.song.id}
          href={props.song.path}
          download
          onClick={() => props.toggleDownload(props.song.id)}
        >
          {props.song.isDownloaded ? <MdFileDownloadDone /> : <FaDownload />}
        </a>
      </div>
    </div>
  );
};

export default EachSongDisplay;
