import { ceil, chunk } from "lodash";
import { IconType } from "react-icons";
import * as Icons from "react-icons/si";

import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Flex,
  Text,
  Progress,
  Icon,
  useDimensions
} from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  skills?: any[];
};
function skills({ children, skills = [] }: Props) {
  const elementRef = useRef<any>(null);
  const dimensions = useDimensions(elementRef, true);

  const elementChildren = useRef<any>(null);
  const dimensionChildren = useDimensions(elementChildren, true);

  const pageTitle = "My Skills";

  const [mySkills, setMySkill] = useState<any[]>([]);

  useEffect(() => {
    const skillMap = skills.map((skill) => ({
      ...skill,
      icon: Icons[skill.icon as keyof IconType]
    }));

    setMySkill(chunk(skillMap, ceil(skillMap.length / 2)));

    return () => {};
  }, [setMySkill]);

  return (
    <Box
      h={
        dimensions && dimensionChildren
          ? dimensionChildren.borderBox.height - 100
          : 100
      }
      bg={{ base: "transparent", md: "pink.500" }}
      position="relative"
      w="auto"
      my={5}
      ref={elementRef}
    >
      <Box
        ref={elementChildren}
        mx={{
          base: 1 * 2,
          lg: 20 * 2,
          md: 10 * 2
        }}
        w={
          dimensions && dimensionChildren
            ? dimensions.borderBox.width - dimensionChildren.margin.right * 2
            : "full"
        }
        bg="pink.100"
        rounded="lg"
        shadow="2xl"
        position="absolute"
        top={-10}
        left={0}
      >
        <Box>
          <Text textAlign="center" mt={8} fontSize="30px">
            {pageTitle}
          </Text>

          <Box mt={4} p={4} mx={{ base: 4, md: 20 }}>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              mb={4}
            >
              {mySkills.map((skillChuck, index) => (
                <Box w="full" mr={index == 0 ? 8 : 0} key={`box-${index}`}>
                  {skillChuck.map((skill: any, indexSkill: number) => (
                    <Flex w="100%" mb={4} key={`skill-${indexSkill}`}>
                      <Icon
                        alignSelf="center"
                        as={skill.icon}
                        h={{ base: 6, md: 8 }}
                        w={{ base: 6, md: 8 }}
                        color={skill.iconColor}
                      />
                      <Progress
                        alignSelf="center"
                        flex={1}
                        colorScheme={skill.progressColor}
                        size={{
                          base: "sm",
                          md: "md"
                        }}
                        value={+skill.value}
                        rounded="lg"
                        ml={4}
                        hasStripe
                      />
                    </Flex>
                  ))}
                </Box>
              ))}
            </Flex>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
export default skills;
