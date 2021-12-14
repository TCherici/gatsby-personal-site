import React from 'react';
import { graphql } from 'gatsby';

import Resume from '../components/resume/resume';

const Page = ({ data }) => {
  const resume = data.resumeYaml;
  return <Resume resume={resume} />;
};

export default Page;

export const query = graphql`
query MyQuery {
    resumeYaml {
      basics {
        email
        name
        label
        phone
        url
        summary
        profiles {
          network
          url
          username
        }
      }
      work {
        description
        endDate(formatString: "MMM, YYYY")
        highlights
        location
        name
        startDate(formatString: "MMM, YYYY")
        position
        summary
        url
      }
      education {
        area
        endDate(formatString: "MMM, YYYY")
        institution
        startDate(formatString: "MMM, YYYY")
        studyType
      }
      skills {
        keywords
        level
        name
      }
      languages {
        fluency
        language
      }
      interests {
        keywords
        name
      }
    }
  }
`;
