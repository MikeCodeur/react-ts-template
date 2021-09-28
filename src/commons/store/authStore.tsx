
//https://codesandbox.io/s/vspoe?file=/src/Zustand/zustandStore.tsx

// TODO TU MET LES TYPES DE PROPRE PLUS TARD C EXEMPLE 
type RoleType = 'COACH' | 'STUDENT';
type EUserLogged = {
    email:string;
    firstName:string;
    lastName:string;
}

type State = {
  userLogged?:EUserLogged;
  isAuth: boolean;
  roles:Array<RoleType>;
  updateAuthStore: (state: Partial<State>) => void;
  resetAuthStore: (state: Partial<State>) => void;
};

const initialStates = {
  isAuth: false,
  roles: [],
  userLogged:undefined,
};

const store = (set: any) => ({
  ...initialStates,
  updateAuthStore: (state: Partial<State>) => set(state),
  resetAuthStore: (state: Partial<State>) => set({ ...initialStates, ...state }),
});

//export const useAuthStore = create<State>(devtools<State>(store, 'Auth'));
