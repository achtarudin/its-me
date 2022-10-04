import React, { useEffect, useState } from "react";

import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import Resume from "../images/aip-achtarudin.pdf";

type Props = {
  children?: React.ReactNode;
  about?: string;
  me?: string;
  resumeLink?: string;
  photoProfile?: string;
};

function about({ children, about, me, resumeLink, photoProfile }: Props) {
  const [itsMe, setItsMe] = useState<string[]>([]);

  useEffect(() => {
    const meArray = me ? me.split("-") : new Array(3);
    setItsMe(meArray);
    return () => {};
  }, [setItsMe]);

  const downloadResume = () => {
    console.log(resumeLink);
  };

  return (
    <Box>
      <Box
        py={5 * 2}
        px={{
          base: 4 * 2,
          lg: 20 * 2,
          md: 10 * 2
        }}
      >
        <Flex
          justifyContent="space-between"
          direction={{
            base: "column-reverse",
            md: "row"
          }}
        >
          <Box
            alignSelf="center"
            w={{
              base: "full",
              md: "70%"
            }}
            mt={{
              base: 4,
              md: 0
            }}
            textAlign={{
              base: "center",
              md: "left"
            }}
          >
            <Text
              fontWeight="bold"
              fontSize={{
                base: "30px",
                md: "40px"
              }}
            >
              {itsMe[0] ?? ""}
              <Text as="span" color="pink.500">
                {itsMe[1] ?? ""}
              </Text>
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{
                base: "30px",
                md: "40px"
              }}
            >
              {itsMe[2] ?? ""}
            </Text>
            <Text mt={2} fontSize="16px">
              {about}
            </Text>
            <Button
              colorScheme="pink"
              rounded="none"
              mt={2}
              onClick={downloadResume}
              as="a"
              href={Resume}
              target="_blank"
            >
              Download Resume
            </Button>
          </Box>
          <Box
            boxSize={{
              base: 40,
              lg: 60
            }}
            alignSelf="center"
          >
            <Image
              shadow="dark-lg"
              borderRadius="full"
              src={photoProfile}
              alt={itsMe[2] ?? ""}
            />
          </Box>
        </Flex>
      </Box>
      {children}
    </Box>
  );
}

export default about;
