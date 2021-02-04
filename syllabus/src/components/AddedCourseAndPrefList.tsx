import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CourseListSummary from "./CourseListSummary";
import AddedCourseAndPrefItem from "../containers/AddedCourseAndPrefItem";
import { Wrapper } from "@bit/wasedatime.core.ts.ui.wrapper";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { UnstyledUList } from "@bit/wasedatime.core.ts.ui.list";

const ExtendedWrapper = styled(Wrapper)`
  padding: 0 1em;
  ${media.tablet`margin-top: 1rem;`};
`;

const ExtendedUnstyledUList = styled(UnstyledUList)`
  font-size: 14px;
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  ${media.tablet`max-height: none;`};
`;

interface Props {
  addedCoursesAndPrefs: {
    pref: {
      color: number;
      displayLang: string;
      visibility: boolean;
    };
    course: {
      [key: string]: any;
    };
  }[];
}

const AddedCourseAndPrefList = ({ addedCoursesAndPrefs }: Props) => {
  return (
    <ExtendedWrapper>
      <CourseListSummary
        courses={addedCoursesAndPrefs}
        handleChangeSortingOption={(value) => console.log(value)}
        dropdownPlaceholder={"Sort by"}
        courseUnit={"courses"}
        creditUnit={"credits"}
      />
      <Wrapper>
        <ExtendedUnstyledUList>
          {addedCoursesAndPrefs.map((courseAndPref, i) => (
            <React.Fragment key={i}>
              <AddedCourseAndPrefItem
                addedCourseAndPref={courseAndPref}
              />
              <hr
                style={{
                  border: "none",
                }}
              />
            </React.Fragment>
          ))}
        </ExtendedUnstyledUList>
      </Wrapper>
    </ExtendedWrapper>
  );
};

export default AddedCourseAndPrefList;
