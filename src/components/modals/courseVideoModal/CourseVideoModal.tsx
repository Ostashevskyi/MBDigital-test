import { useLayoutEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import styles from "./CourseVideoModal.module.css";
import CloseButton from "../../buttons/closeButton/CloseButton";

interface Props {
  videoUrl: string;
  onClose: () => void;
}

const CourseVideoModal = ({ videoUrl, onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [size, setSize] = useState<{ width: number }>({
    width: 0,
  });

  // Функціонал для отримання метаданих з відео та створення модального вікна зразу з розмірами відео.
  // Перешкоджає появі малої модалки, з майбутнім збільшенням
  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setSize({ width: video.videoWidth });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [videoUrl]);

  return createPortal(
    <div className={styles.videoModal_wrapper} onClick={onClose}>
      <div
        className={styles.videModal_cintainer}
        style={{
          width: size.width,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}/>
        <video
          className={styles.video}
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
        />
      </div>
    </div>,
    document.querySelector("#modals") as HTMLElement
  );
};

export default CourseVideoModal;
