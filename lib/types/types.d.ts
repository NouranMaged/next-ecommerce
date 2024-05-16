
export type RegFormQueryData = {
  firstName: string;
  surName: string;
  email: string;
  phone: any;
};

export type FormValues = {
  firstName: string;
  surname: string;
  email: string;
  confirmEmail: string;
};
export type PhoneValues = {
  phone: any;
  country: CountryCode;
};

export type VerifySMSQuery = {
  phone: any;
  code: string;
};
export type paymentFormState = {
  cardHolderName: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
};
export type ModalState = {
  title?: string;
  body?: string;
  cancelBtn?: string;
  open?: boolean;
};
export type TermsModalState = {
  open?: boolean;
  acceptTermsCond?: boolean;
};
export type FooterProps = {
  handleSubmit?: () => void;
  singleBtnLight?: string;
  singleBtnDark?: string;
  rightBtnText?: string;
  leftBtnText?: string;
};
export type paymentMethodState = {
  acceptEmails: boolean;
  clientSecret: string;
  paymentId: number;
  selectedMethod: string;
};
export type screensState = {
  screenId: number;
  title: string;
  description: string | JSX.Element;
  showDots: boolean;
  image?: string | JSX.Element;
  showLogo: boolean;
  showHeader: boolean;
};
