import React from "react";
import { useSnapshot } from "valtio";
import { mailCreditsStore } from "../store";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useBudPayPurchase } from "../hooks/handlePay";

type PackagesCardProps = {
  bgGradient: string;
  packageId: number;
};

const PackageCard: React.FC<PackagesCardProps> = React.memo(
  ({ packageId, bgGradient }) => {
    const { packages } = useSnapshot(mailCreditsStore);
    const pkg = React.useMemo(
      () => packages.find((pkg) => pkg.id === packageId),
      [packages, packageId]
    );

    const handleBudPayPayment = useBudPayPurchase(pkg?.price || 0);

    if (!pkg) return null;

    return (
      <Flex
        py={5}
        p={7}
        bgGradient={bgGradient}
        flexDir={"column"}
        gap={6}
        minW={"320px"}
        maxW={"320px"}
        w={"100%"}
        rounded={"xl"}
      >
        <Text fontWeight={600} fontSize={"1rem"}>
          {pkg.name}
        </Text>
        <Text fontSize={"1.7rem"} alignSelf={"center"}>
          {pkg.credits.toLocaleString("en-US")}
        </Text>
        <Text
          textAlign={"right"}
          cursor="pointer"
          onClick={() => {
            handleBudPayPayment();
          }}
        >
          Buy now
        </Text>
      </Flex>
    );
  }
);

const gradientList = [
  "linear(to-l, #bd69f2, #26a5f3)",
  "linear(to-r, #00bf8f, #001510)",
  "linear(to-r,#de6262, #ffb88c)",
  "linear(to-r, #360033, #0b8793)",
];

const Packages: React.FC = () => {
  console.log("Packages rendered");
  return (
    <Box w={"100%"} p={5} pb={2}>
      <Text fontWeight={600} fontSize={{ base: "1.5rem", md: "2rem" }} pb={5}>
        Packages
      </Text>
      <Flex
        overflowX={"scroll"}
        w={"100%"}
        color={"white"}
        gap={5}
        className={"no-scrollbar"}
      >
        <PackageCard packageId={1} bgGradient={gradientList[0]} />
        <PackageCard packageId={2} bgGradient={gradientList[1]} />
        <PackageCard packageId={3} bgGradient={gradientList[2]} />
        <PackageCard packageId={4} bgGradient={gradientList[3]} />
      </Flex>
    </Box>
  );
};

export default Packages;
