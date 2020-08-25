import React from "react";
import styled from "styled-components";
import CourseEvalsGroup from "./CourseEvalsGroup";
import { media } from "../../styled-components/utils";
import { Overlay } from "../../styled-components/Overlay";
import { withNamespaces } from "react-i18next";

const ExtendedOverlay = styled(Overlay)`
  padding: 0 25px;
  ${media.tablet`padding-right: 2rem;`};
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 1rem 0px;
  padding-left: 1rem;
  border-left: 5px solid rgb(148, 27, 47);
  font-size: 2rem;
  font-weight: 300;
  ${media.tablet`font-size: 2rem;`};
`;

const RelatedCoursesWrapper = styled("div")`
  max-height: 80vh;
  overflow-y: auto;
`;

const getCourseKey = course => course["_id"].substring(0, 10);

const RelatedCoursesContainer = ({
  relatedCourses,
  courseEvals,
  searchLang,
  t
}) => (
  <ExtendedOverlay>
    <StyledSubHeading>{t(`courseEvals.Related courses`)}</StyledSubHeading>
    <RelatedCoursesWrapper>
      {relatedCourses.map(relatedCourse => (
        <CourseEvalsGroup
          course={relatedCourse}
          reviews={courseEvals[getCourseKey(relatedCourse)]}
          searchLang={searchLang}
          key={getCourseKey(relatedCourse)}
        />
      ))}
    </RelatedCoursesWrapper>
  </ExtendedOverlay>
);

export default withNamespaces("translation")(RelatedCoursesContainer);
