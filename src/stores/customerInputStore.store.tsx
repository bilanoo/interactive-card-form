import { create } from "zustand";

interface CustomerInputActions {
  setCardHolderName: (name: string) => void;
  setCardNumber: (digit: string) => void;
  setExpiryMonth: (month: string) => void;
  setExpiryYear: (year: string) => void;
  setCardVerificationCode: (digits: string) => void;
  checkAllFieldsAreFilled: () => void;
  hasUserConfirmedValues: (value: boolean) => void;
  resetAllValues: () => void;
}

interface CustomerInput {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cardVerificationCode: string;
  IsConfirmButtonDisabled: boolean;
  displayConfirmation: boolean;
  actions: CustomerInputActions;
}
export const useCustomerInputStore = create<CustomerInput>((set) => ({
  cardHolderName: "",
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cardVerificationCode: "",
  IsConfirmButtonDisabled: true,
  displayConfirmation: false,
  actions: {
    setCardHolderName: (name) => set(() => ({ cardHolderName: name })),
    setCardNumber: (digit: string) => set(() => ({ cardNumber: digit })),
    setExpiryMonth: (month: string) => set(() => ({ expiryMonth: month })),
    setExpiryYear: (year: string) => set(() => ({ expiryYear: year })),
    setCardVerificationCode: (digits: string) =>
      set(() => ({ cardVerificationCode: digits })),
    checkAllFieldsAreFilled: () =>
      set((store) => {
        if (
          store.cardHolderName &&
          store.cardNumber &&
          store.cardVerificationCode &&
          store.expiryMonth &&
          store.expiryYear
        ) {
          return { IsConfirmButtonDisabled: false };
        } else {
          return { IsConfirmButtonDisabled: true };
        }
      }),
    hasUserConfirmedValues: (value: boolean) =>
      set(() => ({ displayConfirmation: value })),
    resetAllValues: () =>
      set(() => ({
        cardHolderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cardVerificationCode: "",
      })),
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

export const useConfirmButtonStatus = () =>
  useCustomerInputStore((state) => state.IsConfirmButtonDisabled);

export const useDisplayConfirmation = () =>
  useCustomerInputStore((state) => state.displayConfirmation);
