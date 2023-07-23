interface Props {
  isModalOpen: boolean;
  close: () => void;
}

// type Inputs = {
//   tel: string;
//   name: string;
// };

interface ISendChatData {
  name: string;
  tel: string;
  quantity?: string;
  date?: string;
  message: string;
}

type Inputs = {
  name: string;
  tel: string;
  quantity?: string;
  date?: string;
};
