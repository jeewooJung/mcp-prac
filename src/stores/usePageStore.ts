import { create } from 'zustand';

interface PageState {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const usePageStore = create<PageState>((set) => ({
  activePage: 'dashboard',
  setActivePage: (page: string) => set({ activePage: page }),
}));
