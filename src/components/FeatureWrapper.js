import { Box, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import {
  FcDoughnutChart,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline,
} from "react-icons/fc";
import Feature from "./Feature";

const FeatureWrapper = () => {
  return (
    <>
      <Box
        mb="100px"
        as="section"
        maxW="5xl"
        mx="auto"
        py="12"
        px={{ base: "6", md: "8" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX="10"
          spacingY={{ base: "8", md: "14" }}
        >
          <Feature title="Secure by default" icon={<FcPrivacy />}></Feature>
          <Feature title="Always up to date" icon={<FcTimeline />}></Feature>
          <Feature
            title="Incredible statistics"
            icon={<FcDoughnutChart />}
          ></Feature>
          <Feature
            title="Support for multiple devices"
            icon={<FcMultipleDevices />}
          ></Feature>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default FeatureWrapper;
