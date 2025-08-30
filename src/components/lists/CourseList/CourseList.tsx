import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../cards/courseCard/CourseCard";

import type { AppDispatch, RootState } from "../../../redux/store";
import { fetchCourses } from "../../../redux/coursesSlice/coursesSlice";

import styles from "./CourseList.module.css";

const CourseList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.courses
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (isLoading) return "Loading..."

  if (error)
    return (
      <>
        <p>Error during fetching courses</p>
      </>
    );

  return (
    <div className={styles.courseList_wrapper}>
      {data.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
