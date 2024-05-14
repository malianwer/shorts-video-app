import { useEffect, useRef, useState } from "react";

import { FaHeart, FaRegHeart, FaRegComment, FaShare } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

function ShortVideos({ short, shortContainerRef }) {
  const playPauseRef = useRef();
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(short.reaction.isLiked);

  useEffect(() => {
    shortContainerRef.current.addEventListener("scroll", handleVideo);
    setIsPlaying(!videoRef.current.paused);
    setIsMuted(videoRef.current.muted);
    window.addEventListener("blur", () => {
      if (isActiveVideo(videoRef)) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    });

    window.addEventListener("focus", () => {
      if (isActiveVideo(videoRef)) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    });
  }, [shortContainerRef]);

  async function handleVideo() {
    const videoTop = videoRef.current.getBoundingClientRect().top;

    if (videoTop > 0 && videoTop <= 150) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
        videoRef.current.pause();
      }
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }

  return (
    <div className="reel">
      <div className="reel-video">
        <div className="video">
          {/* <div className="video-con"> */}
          <video
            ref={videoRef}
            onClick={function (e) {
              if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
              } else {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }}
            disableRemotePlayback
            playsInline
            loop
            src={short.videoUrl}
            muted="muted"
          ></video>
          {/* </div> */}
          <div className="controls">
            <span
              onClick={() => {
                if (!isPlaying) {
                  videoRef.current.play();
                  setIsPlaying(true);
                } else {
                  videoRef.current.pause();
                  setIsPlaying(false);
                }
              }}
            >
              <ion-icon
                name={`${isPlaying ? "pause" : "play"}-outline`}
              ></ion-icon>
            </span>
            <span
              onClick={() => {
                videoRef.current.muted = !isMuted;
                setIsMuted(!isMuted);
              }}
            >
              <ion-icon
                name={`volume-${isMuted ? "mute" : "medium"}-outline`}
              ></ion-icon>
            </span>
          </div>
          <div
            ref={playPauseRef}
            onClick={() => {
              videoRef.current.play();
              setIsPlaying(true);
            }}
            className={`play-pause ${isPlaying ? "" : "show-play-pause"}`}
          >
            <ion-icon name="play-outline"></ion-icon>
          </div>
          <div className="foot">
            <div className="title">{short.title}</div>
            <div className="user-info">
              <div>
                <img src={short.profileUrl} alt="" />
                <span>{short.username}</span>
              </div>
              {!short.isFollowed && <button>Follow</button>}
            </div>
          </div>
        </div>
        <div className="reaction">
          <div
            className=""
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            {isLiked ? (
              <span className="like">
                <FaHeart />
              </span>
            ) : (
              <span className="unlike">
                <FaRegHeart color="white" />
              </span>
            )}

            <span className="value">{short.reaction.likes}</span>
          </div>
          <div>
            <FaRegComment color="white" />
            <span className="value">{short.reaction.comments}</span>
          </div>
          <div>
            <FaShare color="white" />
          </div>
          <div>
            <FaEllipsisVertical color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function isActiveVideo(videoRef) {
  const videoTop = videoRef.current.getBoundingClientRect().top;
  return videoTop > 0 && videoTop <= 150;
}

export default ShortVideos;
