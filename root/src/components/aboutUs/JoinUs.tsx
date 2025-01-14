import React from "react";

import { Overlay } from "@bit/wasedatime.core.ts.styles.overlay";
import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { faUserTie, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import MediaQuery from "react-responsive";
import styled from "styled-components";

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  padding: 0 20vw 50px;
  color: #666;
  ${media.phone`padding: 0 10vw 50px;`};
  hr {
    width: 80%;
  }
`;

const JoinUs = () => (
  <Wrapper className="bg-light-bgMain dark:bg-dark-bgMain">
    <Helmet>
      <title>WasedaTime - Join Us!</title>
      <meta name="description" content="Recruitment document for WasedaTime." />
      <meta property="og:title" content="WasedaTime - Join Us!" />
      <meta
        property="og:description"
        content="Recruitment document for WasedaTime."
      />
      <meta property="og:site_name" content="WasedaTime - Join Us!" />
    </Helmet>

    <ExtendedOverlay className="bg-light-bgMain dark:bg-dark-bgMain">
      <br />
      <MediaQuery minWidth={sizes.desktop}>
        {(matches) =>
          matches ? (
            <h2
              className="text-light-text1 dark:text-dark-text1"
              style={{ textAlign: "center" }}
            >
              <b>WasedaTime is back, AND WE WANT YOU!</b>
            </h2>
          ) : (
            <h3
              className="text-light-text1 dark:text-dark-text1"
              style={{ textAlign: "center" }}
            >
              <b>WasedaTime is back, AND WE WANT YOU!</b>
            </h3>
          )
        }
      </MediaQuery>
      <br />
      <p className="text-light-text2 dark:text-dark-text2">
        WasedaTime has been working on supporting students' academic activities
        since launching. Its well-tested Syllabus Search feature is favored by
        thousands of students. More than 50% of international students are using
        this website. We never expect this could happen and are always grateful
        for all our users.
      </p>
      <p className="text-light-text2 dark:text-dark-text2">
        With the quick iterations of the product, WasedaTime is running short of
        talented minds! We want to extend a sincere invitation to you, and let's
        build this fantastic product together! WasedaTime is a 100% student-run,
        open-source project.
      </p>

      <br />
      <h2 className="text-light-text1 dark:text-dark-text1">
        <b>
          <FontAwesomeIcon icon={faUserCog} /> Technology
        </b>
      </h2>
      <hr />
      <br />
      <p className="text-light-text2 dark:text-dark-text2">
        We are looking for experienced developers, but we also love to provide
        mentorship to passionate beginners with little background! You will be
        working with a talented team whose members entered the world's top 4 CS
        schools and interned at recognized employers in the industry: Google,
        Tencent, Yahoo, Bilibili, etc. They are happy to provide guidance in
        your career development&nbsp;
        <span role="img" aria-label="smile">
          😄
        </span>{" "}
      </p>

      <h3 className="text-light-text1 dark:text-dark-text1">Roles</h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>・General Software Developer / Apprentice</li>
        <li>・Frontend Developer / Apprentice</li>
        <li>・Backend Developer / Apprentice</li>
        <li>・Infrastructure Developer / Apprentice</li>
      </ul>
      <br />

      <h3 className="text-light-text1 dark:text-dark-text1">Requirements</h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>・Have passion on learning & creating</li>
        <li>・Self-motivation</li>
        <li>・Have learned any programming language</li>
        <small>
          * Not necessary but better to know about Git, <br /> &nbsp; React or
          HTML/CSS (for frontend), AWS (for backend)
        </small>
      </ul>
      <br />

      <h3 className="text-light-text1 dark:text-dark-text1">Job description</h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>・Develop new features for WasedaTime</li>
        <li>・Backend automation & maintenance</li>
        <li>
          ・Direction: Make WasedaTime a <b>platform</b> for students
        </li>
        <small>* Using React on Frontend and AWS on Backend</small>
        <br />
        <small>* Preparing for adoption of other frontend frameworks</small>
      </ul>
      <br />

      <h3 className="text-light-text1 dark:text-dark-text1">
        What you will get
      </h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>・Technical skills and Practical experience on development</li>
        <li>・Knowledges shared by each other</li>
        <li>
          ・Teammates who can fight together to make Waseda better{" "}
          <b>platform</b> for students
        </li>
        <small>
          * All students are welcome, especially 1st & 2nd grade students
        </small>
        <br />
      </ul>
      <br />

      <br />
      <MediaQuery minWidth={sizes.desktop}>
        {(matches) =>
          matches ? (
            <h2 className="text-light-text1 dark:text-dark-text1">
              <b>
                <FontAwesomeIcon icon={faUserTie} /> Performance Marketing &
                Business Operations
              </b>
            </h2>
          ) : (
            <h3 className="text-light-text1 dark:text-dark-text1">
              <b>
                <FontAwesomeIcon icon={faUserTie} /> Marketing
                <br />& Business Operations
              </b>
            </h3>
          )
        }
      </MediaQuery>
      <hr />
      <br />

      <p className="text-light-text2 dark:text-dark-text2">
        The “Non-Tech” team builds bridges across technology to users. They
        transform WasedaTime from code to a vivid product. We are looking for
        innovative minds who possess outstanding analytical skills. You will be
        working with our excellent members who entered the world's top 10
        business schools and interned at prestigious companies: Morgan Stanley,
        Accenture, etc.
      </p>

      <h3 className="text-light-text1 dark:text-dark-text1">Roles</h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>・Product management</li>
        <li>・Marketing & Advertising</li>
        <li>・Business expansion/liaison</li>
      </ul>
      <br />

      <h3 className="text-light-text1 dark:text-dark-text1">Requirements</h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>
          ・Have passion on learning, presenting new ideas, building connection
        </li>
        <li>
          ・Sense of responsibility, business sense (experience in product
          operation is better)
        </li>
      </ul>
      <br />

      <h3 className="text-light-text1 dark:text-dark-text1">Job description</h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>
          ・Marketing & Advertising（Assist in the growth of new users of the
          platform、increase awareness、Market research & user analysis）
        </li>
        <li>・Business development (Looking for business partners) </li>
        <li>
          ・Participate in the new function design and brain storm of
          Wasedatime.
        </li>
      </ul>
      <br />

      <h3 className="text-light-text1 dark:text-dark-text1">
        What you will get
      </h3>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>
          ・A unique project experience on marketing/advertising/business or
          opportunities to realize your unique ideas
        </li>
        <li>・Knowledges shared by each other</li>
        <li>
          ・You will meet creative people with different backgrounds, fighting
          together to make Waseda better!
        </li>
      </ul>
      <br />

      <br />
      <h2 className="text-light-text1 dark:text-dark-text1">
        <b>
          <span role="img" aria-label="smile">
            🤗
          </span>{" "}
          How to get started
        </b>
      </h2>
      <hr />
      <br />
      <p className="text-light-text2 dark:text-dark-text2">
        We welcome students who are interested to send an email with a brief
        self-introduction or a CV/resume to the following address:{" "}
        <b>
          <a
            href="mailto:joinus@wasedatime.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            joinus@wasedatime.com
          </a>
        </b>
      </p>
      <p className="text-light-text2 dark:text-dark-text2">
        The self-introduction should contain your name, department, year,
        interests, and highlight projects (if possible). You're welcome to add
        more information, especially your <b>experience</b> related to our
        requirements!
      </p>

      <br />
      <h4
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        We look forward to hearing from you!
      </h4>
      <br />
    </ExtendedOverlay>
  </Wrapper>
);

export default JoinUs;
