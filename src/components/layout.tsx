import React from "react";

import { useLocation } from "@reach/router";

import { graphql, useStaticQuery } from "gatsby";

import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { Box, Flex, Icon, Spacer, Text, Link } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

function layout({ children }: Props) {
  const location = useLocation();

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            aboutMe {
              githubLink
            }
            sideNav {
              name
              path
            }
          }
        }
      }
    `
  );

  return (
    <Box>
      <Flex bg="white" shadow="md">
        <Box p="4" alignSelf="center">
          <Flex justifyContent="center" alignItems="center">
            <Link
              href={data.site.siteMetadata.aboutMe.githubLink}
              isExternal={true}
            >
              <Icon
                alignSelf="center"
                as={ImGithub}
                fontSize={{
                  base: "20px",
                  md: "24px"
                }}
                cursor="pointer"
                fontWeight="medium"
                ml="33px"
              />
            </Link>
          </Flex>
        </Box>
        <Spacer />
        <Box p="4" alignSelf="center">
          <Flex>
            {data.site.siteMetadata.sideNav.map((nav: any, index: number) => (
              <Text
                fontSize={{
                  base: "15px",
                  md: "20px"
                }}
                key={`nav-${index}`}
                color={location.pathname == nav.path ? "pink.500" : "black"}
                cursor="pointer"
                fontWeight="medium"
                mr="33px"
              >
                {nav.name}
              </Text>
            ))}
          </Flex>
        </Box>
      </Flex>

      {children}

      <Box h="50px" mt={28} mb={5}>
        <Flex justifyContent="center">
          <Link
            href={data.site.siteMetadata.aboutMe.githubLink}
            isExternal={true}
          >
            <Icon
              alignSelf="center"
              as={ImGithub}
              fontSize={{
                base: "20px",
                md: "24px"
              }}
              cursor="pointer"
              fontWeight="medium"
              mr="33px"
            />
          </Link>
          {data.site.siteMetadata.sideNav.map((nav: any, index: number) => (
            <Text
              fontSize={{
                base: "15px",
                md: "20px"
              }}
              key={`nav-${index}`}
              color={location.pathname == nav.path ? "pink.500" : "black"}
              cursor="pointer"
              fontWeight="medium"
              mr="33px"
            >
              {nav.name}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default layout;
