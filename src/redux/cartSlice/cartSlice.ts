import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICourseCard } from "../../types/cards/courseCard";

export interface ICartSlice {
    byId: Record<string, ICourseCard>;
    allIds: string[];
}

const initialState: ICartSlice = {
    byId: {},
    allIds: [],
} 

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<ICourseCard>) => {
            const course = action.payload;

            if (!state.byId[course.id]) {
                state.byId[course.id] = course;
                state.allIds.push(course.id);
            }
        },

        removeCourse: (state, action: PayloadAction<string>) => {
            const id = action.payload;

            if (state.byId[id]) {
                delete state.byId[id];
                state.allIds = state.allIds.filter(cid => cid !== id);
            }
        }
    }
})

export const { addCourse, removeCourse } = cartSlice.actions;
export default cartSlice.reducer
