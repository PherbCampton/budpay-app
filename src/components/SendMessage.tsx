import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { mailCreditsStore } from "../store";

const SendMessageButton: React.FC = () => {
  const { inAppCredits } = useSnapshot(mailCreditsStore);
  const toast = useToast();

  const sendMessage = () => {
    if (inAppCredits.balance >= 50) {
      mailCreditsStore.inAppCredits.balance -= 50;
      toast({
        status: "success",
        description: "Message sent! 50 credits deducted.",
        position: "top",
      });
    } else {
      toast({
        status: "error",
        description: "Not enough credits to send message.",
        position: "top",
      });
    }
  };

  return <Button onClick={sendMessage}>Send Message</Button>;
};

export default SendMessageButton;
