import React from "react";

import {
  Box,
  Divider,
  Flex,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";

type Props = {
  experiences?: any[];
};
function experiences({ experiences = [] }: Props) {
  return (
    <Box pb={4} mx={{ base: 5, md: 20 }}>
      <Divider borderColor="pink.500" />
      <Text fontSize="30px">Experiences</Text>
      <Divider borderColor="pink.500" mb={4} />

      {experiences.map((experience, index) => (
        <Flex
          key={`experiences-${index}`}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          mb={4}
        >
          <Box alignSelf="start" mb={{ base: 4, md: 0 }} w="40%">
            <Text fontSize="24px" textAlign={{ base: "left", md: "left" }}>
              {experience.companyName}
            </Text>
            <Text fontSize="14px" textAlign={{ base: "left", md: "left" }}>
              {experience.position}
            </Text>
            <Text fontSize="14px" textAlign={{ base: "left", md: "left" }}>
              {experience.date}
            </Text>
          </Box>
          <Box flex={1}>
            <UnorderedList>
              {experience.jobDetail &&
                experience.jobDetail.map((detail: string, jobIndex: number) => (
                  <ListItem fontSize="16px" key={`job-index-${jobIndex}`}>
                    {detail}
                  </ListItem>
                ))}
            </UnorderedList>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default experiences;
