import { memo, useCallback, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import BuyCourseButton from "../../buttons/buyCourseButton/BuyCourseButton";

import { usePurchaseCourse } from "../../../hooks/usePurchaseCourse";

import NeedLoginModal from "../../modals/needLoginModal/NeedLoginModal";
import CourseVideoModal from "../../modals/courseVideoModal/CourseVideoModal";

import type { RootState } from "../../../redux/store";

import styles from "./CourseCard.module.css";

import type { ICourseCard } from "../../../types/cards/courseCard";

const CourseCard = ({ course }: { course: ICourseCard }) => {
  const { description, price, title, videoUrl, id } = course;

  const isPurchased = useSelector((state: RootState) =>
    state.cart.allIds.includes(id)
  );

  const [isModalsOpen, setIsModalsOpen] = useState({
    needLogin: false,
    video: false,
  });

  const toggleModal = useCallback(
    (modal: "needLogin" | "video", open: boolean) => {
      setIsModalsOpen((prev) => ({ ...prev, [modal]: open }));
    },
    []
  );

  const { error, handlePurchase, isLoading, handleDelete } = usePurchaseCourse({
    course,
  });

  useEffect(() => {
    if (error && error.code === 401) {
      toggleModal("needLogin", true);
    }
  }, [error]);

  return (
    <>
      <article className={styles.courseCard_wrapper}>
        <h2 onClick={() => toggleModal("video", true)}>{title}</h2>
        <p>{description}</p>
        <div className={styles.priceContainer}>
          <p>{price}₴</p>
          {!isPurchased ? (
            <BuyCourseButton onClick={handlePurchase} loading={isLoading}>
              Buy
            </BuyCourseButton>
          ) : (
            <BuyCourseButton onClick={handleDelete} loading={isLoading}>
              Delete
            </BuyCourseButton>
          )}
        </div>
      </article>

      {isModalsOpen.video && (
        <CourseVideoModal
          videoUrl={videoUrl}
          onClose={() => toggleModal("video", false)}
        />
      )}

      {isModalsOpen.needLogin && (
        <NeedLoginModal onClose={() => toggleModal("needLogin", false)} />
      )}
    </>
  );
};

export default memo(
  CourseCard,
  (prev, next) => prev.course.id === next.course.id
);
