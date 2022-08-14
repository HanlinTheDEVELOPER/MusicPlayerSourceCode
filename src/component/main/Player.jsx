import React from "react";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { BiSkipNextCircle } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsPauseCircleFill } from "react-icons/bs";
import { GiMusicSpell } from "react-icons/gi";

const Player = (props) => {
  const darkPlayer = {
    backgroundColor: props.dark ? "#caf0f8" : "#023e8a",
    color: props.dark ? "#023e8a" : "#caf0f8",
  };

  return (
    <div className="player-container" style={darkPlayer}>
      <div className="song-fact-container">
        <GiMusicSpell className={props.playingSong.isPlaying && "play"} />
        <div>
          <h5>{props.playingSong.songName}</h5>
          <h6>{props.playingSong.artistName}</h6>
        </div>
      </div>

      <div className="button-container">
        <BiSkipPreviousCircle onClick={props.prev} />
        {props.playingSong.isPlaying ? (
          <BsPauseCircleFill onClick={props.pause} />
        ) : (
          <BsFillPlayCircleFill
            onClick={
              props.playingSong.start ? () => props.playFunction(0) : props.play
            }
          />
        )}
        <BiSkipNextCircle onClick={props.next} />
      </div>
      <div className="progress-container"></div>
    </div>
  );
};

export default Player;
