import { create } from "zustand";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useByFilter = create<Props>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useByFilter;
