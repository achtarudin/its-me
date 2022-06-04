import React from "react";
import Layout from "../components/layout";
import About from "../components/about";
import Skills from "../components/skills";
import Experiences from "../components/experiences";
import { graphql, useStaticQuery } from "gatsby";

import {
  Box,
  Divider,
  Flex,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";

function index() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            aboutMe {
              me
              resumeLink
              about
              photoProfile
              skills {
                icon
                iconColor
                name
                progressColor
                value
              }
              experiences {
                companyName
                date
                jobDetail
                position
              }
            }
          }
        }
      }
    `
  );
  
  return (
    <Layout>
      {/* About */}
      <About
        photoProfile={data.site.siteMetadata.aboutMe.photoProfile ?? ""}
        about={data.site.siteMetadata.aboutMe.about ?? ""}
        me={data.site.siteMetadata.aboutMe.me ?? ""}
        resumeLink={data.site.siteMetadata.aboutMe.resumeLink ?? ""}
      />

      {/* Skills */}
      <Skills skills={data.site.siteMetadata.aboutMe.skills}>
        <Experiences experiences={data.site.siteMetadata.aboutMe.experiences} />
      </Skills>
    </Layout>
  );
}

export default index;
