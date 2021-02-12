// todo use binary switch
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { InvisibleButton } from "@bit/wasedatime.core.ts.styles.button";
import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import QuarterSwitch from "./timetable/QuarterSwitch";

const ExtendedRowWrapper = styled(RowWrapper)`
  flex: none;
  justify-content: center;
  font-size: 1.3em;
  ${media.phone`
    font-size: 1.1em;
  `};
  padding: 1rem;
  ${media.tablet`padding-top: 1rem;`}
`;

const ExtendedInvisibleButton = styled(InvisibleButton)`
  color: #000;
  &:hover {
    color: #b51e36;
  }
  &:active {
    color: #000;
  }
  ${media.tablet`
    &:focus {
        color: #000;
    }`};
  ${media.phone`
    &:focus {
      color: #000;
    }
  `};
`;

const SemesterTitle = styled("div")`
  width: 10em;
  text-align: center;
`;

interface Props {
  semesterTitle: string;
  selectedSemester: string;
  selectedQuarter: string | null;
  isQuarterDisplayed: boolean;
  toggleSemester: (semester: string) => void;
  toggleQuarter: (quarter: string) => void;
}

const SemesterSwitcher = ({
  semesterTitle,
  selectedSemester,
  selectedQuarter,
  isQuarterDisplayed,
  toggleSemester,
  toggleQuarter,
}) => {
  return (
    <ExtendedRowWrapper>
      <ExtendedInvisibleButton onClick={toggleSemester}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />
      </ExtendedInvisibleButton>
      <SemesterTitle>{semesterTitle}</SemesterTitle>
      <ExtendedInvisibleButton onClick={toggleSemester}>
        <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
      </ExtendedInvisibleButton>
      {isQuarterDisplayed && (
        <div style={{ marginLeft: "2em" }}>
          <QuarterSwitch
            semesterKey={selectedSemester}
            selectedQuarter={selectedQuarter}
            toggleQuarter={toggleQuarter}
          />
        </div>
      )}
    </ExtendedRowWrapper>
  );
};

export default SemesterSwitcher;