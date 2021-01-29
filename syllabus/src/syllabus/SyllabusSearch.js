import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import AddedCourseListSwitch from "../../containers/syllabus/AddedCourseListSwitch";
import FetchedCourseListSearch from "../../containers/syllabus/FetchedCourseListSearch";
import { RowWrapper } from "../common/Wrapper";
import { SideBar } from "../common/SideBar";
import { media, sizes } from "../common/utils";
import withFetchCourses from "../../hocs/withFetchCourses";

const ExtendedRowWrapper = styled(RowWrapper)`
  flex: 1 0 0;
  padding-top: 67px;
  ${media.tablet`padding-top: 0px;`}
`;

const SyllabusSearch = (props) => {
  const { addedCoursesAndPrefs, fetchedCourses } = props;
  return (
    <ExtendedRowWrapper>
      <MediaQuery minWidth={sizes.tablet}>
        {(matches) =>
          matches && (
            <SideBar flexBasis="21em">
              <AddedCourseListSwitch
                addedCoursesAndPrefs={addedCoursesAndPrefs}
              />
            </SideBar>
          )
        }
      </MediaQuery>
      <FetchedCourseListSearch fetchedCourses={fetchedCourses} />
    </ExtendedRowWrapper>
  );
};

export default withFetchCourses(SyllabusSearch);