export interface iModal {
    visible: boolean;
    onRequestClose: () => void;
    headerText: string;
    title?: string;
    description?: string;
    buttons: { text: string; onClick: () => void }[];
  }