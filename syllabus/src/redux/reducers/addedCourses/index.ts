import { combineReducers } from "redux";
import byId from "./byId";
import idsBySchool from "./idsBySchool";
import orderedIds from "./orderedIds";

const addedCourses = combineReducers({
  byId,
  idsBySchool,
  orderedIds,
});

export default addedCourses;

export const getAddedCoursesListWithLang = (addedCoursesAndPrefs) =>
  Object.keys(addedCoursesAndPrefs).map((courseId) => ({
    ...addedCoursesAndPrefs[courseId].course,
    displayLang: addedCoursesAndPrefs[courseId].pref.displayLang,
  }));

export const getAddedCoursesById = (byId) => {
  let coursesById = {};
  for (const courseId in byId) {
    coursesById[courseId] = byId[courseId].course;
  }
  return coursesById;
};

// export const getFetchedIds = (state) => fromList.getIds(state.list);
//
// export const getFetchedById = (state) => {
//   var courses = {};
//   const coursesBySchool = JSON.parse(JSON.stringify(state.byId));
//   Object.keys(coursesBySchool).forEach((school) => {
//     var coursesById = coursesBySchool[school];
//     if (coursesById) {
//       Object.keys(coursesById).forEach((id) => {
//         coursesById[id][SYLLABUS_KEYS.SCHOOL] = school;
//       });
//
//       courses = {
//         ...courses,
//         ...coursesById,
//       };
//     }
//   });
//   return courses;
// };
//
// export const getIsFetching = (state) => {
//   return fromList.getIsFetching(state.list);
// };
//
// export const getError = (state) => {
//   return fromList.getError(state.list);
// };