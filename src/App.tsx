import React from "react";
import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import Credit from "./components/Credit";
import Packages from "./components/Packages";
import SendMessageButton from "./components/SendMessage";
import Fonts from "./theme/Font";
import theme from "./theme/theme";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box fontFamily={"font4"}>
        <VStack spacing={8}>
          <Credit />
          <Packages />
          <SendMessageButton />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;
