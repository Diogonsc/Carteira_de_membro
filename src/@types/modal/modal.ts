export interface IModal {
    children: React.ReactNode;
    openModal: boolean;
    closeModal: () => void;
    nameStyle?: string;
    title?: string;
  }
  