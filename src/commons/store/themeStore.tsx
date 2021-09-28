
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { ThemeDefaultProps } from '../../commons/constantes';

type State = {
  theme:{
    variant: string;
    size: string;
    colorScheme: string;
  };
  color: string;
  updateThemeStore: (state: Partial<State>) => void;
  resetThemeStore: (state: Partial<State>) => void;
};

const initialStates = {
    theme: ThemeDefaultProps,
    color:"#3182ce",
};

const store = (set: any) => ({
  ...initialStates,
  updateThemeStore: (state: Partial<State>) => set(state),
  resetThemeStore: (state: Partial<State>) => set({ ...initialStates, ...state }),
});

export const useThemeStore = create<State>(devtools<State>(store, 'Theme'));
