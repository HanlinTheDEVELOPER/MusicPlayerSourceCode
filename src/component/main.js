import React from "react";
import Home from "./main/Home";
import Favourite from "./main/Favourite";
import Recents from "./main/Recents";
import Setting from "./main/Setting";
import Guide from "./main/Guide";
import Quit from "./main/Quit";
import Array from "./main/array.js";
import Player from "./main/Player";

export default function Main(props) {
  //changing light and dark mode
  const darkUI = {
    backgroundColor: props.dark ? "#023e8a" : "#caf0f8",
    color: props.dark ? "#caf0f8" : "#023e8a",
  };
  //changing light and dark mode end

  // grabbing audio element
  let audio = document.getElementById("audio");
  //grabbing end

  // setting original song array
  const [songArray, setSongArray] = React.useState(
    JSON.parse(localStorage.getItem("songs")) || Array.array
  );
  //setting end

  // saving original song array in localStorage to save user taste for later login
  React.useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songArray));
  });
  //saving end

  //creating playing song array for sond id & path & song array & etc....
  const [playingSong, setPlayingSong] = React.useState({
    start: true,
    isPlaying: false,
    songName: "",
    artistName: "",
    songPath: "",
  });
  //creating end

  //function to download song
  const toggleDownload = (id) => {
    setSongArray((prev) =>
      prev.map((song) => {
        return song.id === id ? { ...song, isDownloaded: true } : song;
      })
    );
  };
  //function end

  //function to save song as favourite
  const toggleFavourite = (id) => {
    setSongArray((prev) =>
      prev.map((song) => {
        return song.id === id ? { ...song, isFav: !song.isFav } : song;
      })
    );
  };
  //function end

  //deciding which playlist
  const [playlist, setPlaylist] = React.useState();
  // end

  //function to make song play and save song information in playingSong array
  const playFunction = (id) => {
    setSongArray((prev) => {
      return prev.map((song) => {
        return song.id === id ? { ...song, isRecent: true } : song;
      });
    });
    setPlayingSong({
      start: false,
      isPlaying: true,
      songId: songArray[id].id,
      songName: songArray[id].title,
      artistName: songArray[id].artist,
      songPath: songArray[id].path,
    });
    audio.src = songArray[id].path;
    audio.play();
    setPlaylist(props[1].isShown ? "favourite" : "home");
  };
  //function end

  //functions to update play& pause button and update audio.builtIn()
  const play = () => {
    setPlayingSong((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
    audio.play();
  };

  const pause = () => {
    setPlayingSong((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
    audio.pause();
  };
  //functions end

  //function to skip the current song
  const next = () => {
    let nextSong =
      playingSong.songId < songArray.length - 1 ? playingSong.songId + 1 : 0;
    audio.src = songArray[nextSong].path;
    audio.play();
    setPlayingSong({
      isPlaying: true,
      songId: songArray[nextSong].id,
      songName: songArray[nextSong].title,
      artistName: songArray[nextSong].artist,
      songPath: songArray[nextSong].path,
    });
    setSongArray((prev) => {
      return prev.map((song) => {
        return song.id === nextSong ? { ...song, isRecent: true } : song;
      });
    });
  };
  //function end

  //function to skip the current song in favourite playlist
  const nextFav = () => {
    let nextSong =
      playingSong.songId === songArray.length - 1 ? 0 : playingSong.songId + 1;
    for (let i = nextSong; i < songArray.length + 1; i++) {
      if (i === songArray.length) {
        i = -1;
      } else {
        if (songArray[i].isFav) {
          audio.src = songArray[i].path;
          audio.play();
          setPlayingSong({
            isPlaying: true,
            songId: songArray[i].id,
            songName: songArray[i].title,
            artistName: songArray[i].artist,
            songPath: songArray[i].path,
          });
          setSongArray((prev) => {
            return prev.map((song) => {
              return song.id === i ? { ...song, isRecent: true } : song;
            });
          });
          break;
        }
      }
    }
  };
  //end

  //function to go to previous song
  const prev = () => {
    let prevSong =
      playingSong.songId === 0 ? songArray.length - 1 : playingSong.songId - 1;
    audio.src = songArray[prevSong].path;
    audio.play();
    setPlayingSong({
      isPlaying: true,
      songId: songArray[prevSong].id,
      songName: songArray[prevSong].title,
      artistName: songArray[prevSong].artist,
      songPath: songArray[prevSong].path,
    });
  };
  //function end

  //function to go to previous song in favourite playlist
  const prevFav = () => {
    let prevSong =
      playingSong.songId === 0 ? songArray.length - 1 : playingSong.songId - 1;
    for (let i = prevSong; i < songArray.length; i--) {
      if (songArray[i].isFav) {
        audio.src = songArray[i].path;
        audio.play();
        setPlayingSong({
          isPlaying: true,
          songId: songArray[i].id,
          songName: songArray[i].title,
          artistName: songArray[i].artist,
          songPath: songArray[i].path,
        });
        setSongArray((prev) => {
          return prev.map((song) => {
            return song.id === i ? { ...song, isRecent: true } : song;
          });
        });
        break;
      }
    }
  };
  //end

  //to loop the entire playlist automatically depending on which playlist user choosing
  audio.onended = function () {
    playlist === "home" ? next() : nextFav();
  };
  //end

  return (
    <main className="main" style={darkUI}>
      {props[0].isShown && (
        <Home
          songArray={songArray}
          toggleDownload={toggleDownload}
          toggleFavourite={toggleFavourite}
          dark={props.dark}
          playFunction={playFunction}
        />
      )}
      {props[1].isShown && (
        <Favourite
          favArray={songArray}
          toggleFavourite={toggleFavourite}
          playFunction={playFunction}
          dark={props.dark}
        />
      )}

      {props[2].isShown && (
        <Recents
          songArray={songArray}
          dark={props.dark}
          playFunction={playFunction}
        />
      )}
      {props[3].isShown && (
        <Setting dark={props.dark} toggleDark={props.toggleDark} />
      )}
      {props[4].isShown && <Guide />}
      {props[5].isShown && <Quit />}
      <Player
        dark={props.dark}
        playingSong={playingSong}
        audio={audio}
        play={play}
        pause={pause}
        next={playlist === "home" ? next : nextFav}
        prev={playlist === "home" ? prev : prevFav}
        playFunction={playFunction}
      />
    </main>
  );
}
