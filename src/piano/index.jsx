import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./css.css";
import C from "../notes/C.mp3";
import D from "../notes/D.mp3";
import Eb from "../notes/Eb.mp3";
import F from "../notes/F.mp3";
import G from "../notes/G.mp3";
import A from "../notes/A.mp3";
import B from "../notes/B.mp3";

import Db from "../notes/Db.mp3";
import E from "../notes/E.mp3";
import Gb from "../notes/Gb.mp3";
import Ab from "../notes/Ab.mp3";
import Bb from "../notes/Bb.mp3";

const WhiteKey = ({ mp3, whiteKeyBoadrs, index }) => {
  const [active, setActive] = useState("");
  let audio = document.getElementsByClassName(
    `whiteKey ${mp3.split("/")[3].split(".")[0]}`
  );

  const play = () => {
    audio[1].currentTime = 0;
    audio[1].play();
  };
  return (
    <div
      className={`whiteKey ${mp3.split("/")[3].split(".")[0]} ${
        active ? "active" : null
      } `}
      onMouseDown={async (e) => {
        setActive((active) => (active = "active"));
        play();
        console.log(audio);
      }}
      onMouseUp={(e) => {
        setTimeout(() => {
          setActive((active) => (active = null));
        }, 0);
      }}
    >
      <audio
        className={`whiteKey ${mp3.split("/")[3].split(".")[0]}`}
        src={mp3}
      ></audio>
      <h3 className="descriptionKey white">{whiteKeyBoadrs[index]}</h3>
    </div>
  );
};
const BlackKey = ({ mp3, index, blackKeyBoards }) => {
  const [active, setActive] = useState("");
  if (mp3 == "empty") return <div className="blackKey empty"></div>;

  let audio = document.getElementsByClassName(
    `blackKey ${mp3.split("/")[3].split(".")[0]}`
  );

  const play = () => {
    audio[1].currentTime = 0;
    audio[1].play();
  };
  return (
    <div
      className={`blackKey ${mp3.split("/")[3].split(".")[0]} ${
        active ? "active" : null
      }`}
      onMouseDown={(e) => {
        setActive((active) => (active = "active"));
        play();
      }}
      onMouseUp={(e) => {
        setTimeout(() => {
          setActive((active) => (active = null));
        }, 0);
      }}
    >
      <audio
        className={`blackKey ${mp3.split("/")[3].split(".")[0]}`}
        src={mp3}
      ></audio>
      <h3 className="descriptionKey black">{blackKeyBoards[index]}</h3>
    </div>
  );
};

const Piano = () => {
  const whiteKeys = [C, D, Eb, F, G, A, B];
  const blackKeys = [Db, E, "empty", Gb, Ab, Bb];
  const whiteKeyBoadrs = ["D", "F", "G", "H", "J", "K", "L"];
  const blackKeyBoards = ["R", "T", "", "U", "I", "O"];
  const audioPlay = (type, keyPlay) => {
    document.getElementsByClassName(
      `${type} ${keyPlay}`
    )[0].className = `${type} ${keyPlay} active`;
    document.getElementsByClassName(`${type} ${keyPlay}`)[1].currentTime = 0;
    document.getElementsByClassName(`${type} ${keyPlay}`)[1].play();
    window.addEventListener("keyup", (e) => {
      document.getElementsByClassName(
        `${type} ${keyPlay}`
      )[0].className = `${type} ${keyPlay}`;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      let formattedKey = e.key.toUpperCase();
      switch (formattedKey) {
        case "D":
          audioPlay("whiteKey", "C");
          break;
        case "F":
          audioPlay("whiteKey", "D");
          break;
        case "G":
          audioPlay("whiteKey", "Eb");
          break;
        case "H":
          audioPlay("whiteKey", "F");
          break;
        case "J":
          audioPlay("whiteKey", "G");
          break;
        case "K":
          audioPlay("whiteKey", "A");
          break;
        case "L":
          audioPlay("whiteKey", "B");
          break;
        case "R":
          audioPlay("blackKey", "Db");
          break;
        case "T":
          audioPlay("blackKey", "E");
          break;
        case "U":
          audioPlay("blackKey", "Gb");
          break;
        case "I":
          audioPlay("blackKey", "Ab");
          break;
        case "O":
          audioPlay("blackKey", "Bb");
          break;
      }
    });
  }, []);
  return (
    <div>
      <motion.div
        className="pianoRoot"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <div className="whiteKeys">
          {whiteKeys.map((e, index) => {
            return (
              <WhiteKey
                mp3={e}
                key={index + 10}
                index={index}
                whiteKeyBoadrs={whiteKeyBoadrs}
              />
            );
          })}
        </div>
        <div className="blackKeys">
          {blackKeys.map((e, index) => {
            return (
              <BlackKey
                mp3={e}
                key={index + 30 - 2}
                index={index}
                blackKeyBoards={blackKeyBoards}
              />
            );
          })}
        </div>
      </motion.div>
      <h3 style={{ color: "black" }}>
        rotate your device for landscape mode (on mobile devices)
      </h3>
    </div>
  );
};
export default Piano;
