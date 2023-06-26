import { create } from "zustand";

interface CustomerInputActions {
  setCardHolderName: (name: string) => void;
  setCardNumber: (digit: string) => void;
}

interface CustomerInput {
  cardHolderName: string;
  cardNumber: string;
  actions: CustomerInputActions;
}
export const useCustomerInputStore = create<CustomerInput>((set) => ({
  cardHolderName: "",
  cardNumber: "",
  actions: {
    setCardHolderName: (name) => set(() => ({ cardHolderName: name })),
    setCardNumber: (digit: string) => set(() => ({ cardNumber: digit })),
  },
}));

export const useCardHolderName = () =>
  useCustomerInputStore((state) => state.cardHolderName);

export const useCardNumber = () =>
  useCustomerInputStore((state) => state.cardNumber);
