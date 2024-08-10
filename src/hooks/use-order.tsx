import { create } from "zustand";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useOrder = create<Props>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useOrder;
