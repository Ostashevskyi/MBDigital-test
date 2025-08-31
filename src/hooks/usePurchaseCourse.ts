import { useState } from "react";

import { useDispatch } from "react-redux";

import { LS_IS_AUTHORIZED } from "../constants/localStorageKeys";

import { addCourse, removeCourse } from "../redux/cartSlice/cartSlice";

import type { ICourseCard } from "../types/cards/courseCard";

interface IPurchaseCourseError {
  code: number;
  message: string;
}

interface IUsePurchaseCourseReturn {
  isLoading: boolean;
  error: IPurchaseCourseError | undefined;
  handlePurchase: () => void;
  handleDelete: () => void;
}

export const usePurchaseCourse = ({
  course,
}: {
  course: ICourseCard;
}): IUsePurchaseCourseReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<IPurchaseCourseError>();
  const dispatch = useDispatch();

  const handlePurchase = () => {
    const isAuthorized = JSON.parse(
      localStorage.getItem(LS_IS_AUTHORIZED) || "false"
    );

    if (!isAuthorized) {
      setError({ code: 401, message: "Not authorized" });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
    try {
      dispatch(addCourse(course));
    } catch (error) {
      console.error("Error during buying the course:", error);
    } finally {
      setIsLoading(false);
    }
  }, 1000); // імітація відправки на сервер
  };

  const handleDelete = () => {
    setIsLoading(true);

    setTimeout(() => {
    try {
      dispatch(removeCourse(course.id));
    } catch (error) {
      console.error("Error during buying the course:", error);
    } finally {
      setIsLoading(false); 
    }
  }, 1000); // імітація відправки на сервер
  };

  return {
    isLoading,
    error,
    handlePurchase,
    handleDelete,
  };
};
