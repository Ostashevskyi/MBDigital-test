import { useState } from "react";

import BuyCourseButton from "../../buttons/buyCourseButton/BuyCourseButton";

import CourseVideoModal from "../../modals/courseVideoModal/CourseVideoModal";

import type { ICourseCard } from "../../../types/cards/courseCard";

import styles from "./CourseCard.module.css";

const CourseCard = ({ course }: { course: ICourseCard }) => {
  const { description, price, title, videoUrl } = course;
  const [selectedCourseVideo, setSelectedCourseVideo] = useState<string>();

  const handleOpenModal = (videoUrl: string) => {
    setSelectedCourseVideo(videoUrl);
  };

  return (
    <>
      <article className={styles.courseCard_wrapper}>
        <h2 onClick={() => handleOpenModal(videoUrl)}>{title}</h2>
        <p>{description}</p>
        <div className={styles.priceContainer}>
          <p>{price}₴</p>
          <BuyCourseButton>Buy</BuyCourseButton>
        </div>
      </article>

      {selectedCourseVideo && (
        <CourseVideoModal
          videoUrl={selectedCourseVideo}
          onClose={() => setSelectedCourseVideo("")}
        />
      )}
    </>
  );
};

export default CourseCard;
