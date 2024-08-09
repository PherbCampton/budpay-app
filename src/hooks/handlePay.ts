import { useRef } from "react";
import { useSnapshot } from "valtio";
import { mailCreditsStore } from "../store";
import { useBudPayPayment, closeBudPayPaymentModal } from "budpay-react-v2";
import { useToast } from "@chakra-ui/react";

export const useBudPayPurchase = (packagePrice: number) => {
  const toast = useToast();
  const { user } = useSnapshot(mailCreditsStore);
  const callbackExecuted = useRef(false);

  const handlePaymentCallback = (response: any) => {
    if (!callbackExecuted.current) {
      callbackExecuted.current = true;
      closeBudPayPaymentModal();
      mailCreditsStore.inAppCredits.balance += packagePrice;
      toast({
        status: "success",
        description: `Payment complete! Reference: ${response.reference}, Status: ${response.status}`,
        position: "top",
      });
    }
  };

  const config = {
    api_key: process.env.REACT_APP_BUDPAY_API_KEY,
    email: user.email,
    amount: `${packagePrice}`,
    first_name: user.firstName,
    last_name: user.lastName,
    currency: "NGN",
    reference: "",
    callback: handlePaymentCallback,
    onClose: () => {
      toast({
        status: "error",
        description: "Transaction was not completed, window closed.",
        position: "top",
      });
    },
  };

  const initializePayment = useBudPayPayment(config);

  const handleBudPayPayment = () => {
    callbackExecuted.current = false;
    initializePayment();
  };

  return handleBudPayPayment;
};
