import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../cards/courseCard/CourseCard";

import type { AppDispatch, RootState } from "../../../redux/store";
import { fetchCourses } from "../../../redux/coursesSlice/coursesSlice";

import styles from "./CourseList.module.css";
import CourseCardLoader from "../../skeletons/cardSkeleton/CardSkeleton";
import TryAgainButton from "../../buttons/tryAgainButton/TryAgainButton";

const CourseList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.courses
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (error)
    return (
      <div className={styles.pageError}>
        <p>Error loading courses</p>
        <span>Please try again later or check your connection.</span>
        <TryAgainButton onClick={() => dispatch(fetchCourses())}>Try again</TryAgainButton>
    </div>
    );

  return (
    <div className={styles.courseList_wrapper}>
      {isLoading && (
        <div className={styles.courseList_wrapper}>
          {Array.from({ length: 10 }).map((_, i) => (
            <CourseCardLoader key={i} animate />
          ))}
        </div>
      )}
      {data.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
