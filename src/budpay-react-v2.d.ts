declare module "budpay-react-v2" {
  export interface Config {
    api_key: string;
    email: string;
    amount: string;
    currency?: string;
    text?: string;
    onSuccess?: () => void;
    onClose?: () => void;
    customer?: {
      firstName?: string;
      lastName?: string;
      email?: string;
    };
  }

  export function useBudPayPayment(config: BudPayButtonProps): () => void;
  export function closeBudPayPaymentModal(): void;
}
