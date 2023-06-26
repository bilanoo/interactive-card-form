import { create } from "zustand";

interface CustomerInputActions {
  setCardHolderName: (name: string) => void;
  setCardNumber: (digit: string) => void;
  setExpiryMonth: (month: string) => void;
  setExpiryYear: (year: string) => void;
  setCardVerificationCode: (digits: string) => void;
}

interface CustomerInput {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cardVerificationCode: string;
  actions: CustomerInputActions;
}
export const useCustomerInputStore = create<CustomerInput>((set) => ({
  cardHolderName: "",
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cardVerificationCode: "",
  actions: {
    setCardHolderName: (name) => set(() => ({ cardHolderName: name })),
    setCardNumber: (digit: string) => set(() => ({ cardNumber: digit })),
    setExpiryMonth: (month: string) => set(() => ({ expiryMonth: month })),
    setExpiryYear: (year: string) => set(() => ({ expiryYear: year })),
    setCardVerificationCode: (digits: string) =>
      set(() => ({ cardVerificationCode: digits })),
  },
}));

export const useCardHolderName = () =>
  useCustomerInputStore((state) => state.cardHolderName);

export const useCardNumber = () =>
  useCustomerInputStore((state) => state.cardNumber);

export const useCardExpiryMonth = () =>
  useCustomerInputStore((state) => state.expiryMonth);

export const useCardExpiryYear = () =>
  useCustomerInputStore((state) => state.expiryYear);

export const useCardVerificationCode = () =>
  useCustomerInputStore((state) => state.cardVerificationCode);
