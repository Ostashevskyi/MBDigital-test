import { useQuery } from "@tanstack/react-query";

import RefetchButton from "../../buttons/refetchButton/RefetchButton";

import CourseCard from "../../cards/courseCard/CourseCard";

import { COURSES_GET_KEY } from "../../../constants/queryKeys";

import type { ICourseCard } from "../../../types/cards/courseCard";

import styles from "./CourseList.module.css";

const CourseList = () => {
  const { data, isError, isPending, refetch } = useQuery({
    queryKey: [COURSES_GET_KEY],
    queryFn: () =>
      fetch("http://localhost:5000/courses").then(
        (res) => res.json() as Promise<ICourseCard[]>
      ),
  });

  if (isPending) return "Loading...";

  if (isError)
    return (
      <>
        <p>Error during fetching courses</p>
        <RefetchButton
          onClick={() => {
            refetch();
          }}
        >
          Try again
        </RefetchButton>
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
