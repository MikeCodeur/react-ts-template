import * as React from 'react'
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

// exemple de contexte avancé avec reducer / Callback / memo
// exemple pris de Netflix gestion des series / movies

interface IMovie {
  id: string
  name?: string
  type?: string
}

type State = {
  status: string
  error: string
  movie: IMovie
}

type Action =
  | {type: 'start'; payload: any}
  | {type: 'finish'; payload: any}
  | {type: 'fail'; payload: any}

type Dispatch = (action: Action) => void

//type pout le contexte
export type AdvancedContextStore = {
  movie: any
  dispatch: Dispatch
}

/* Declaration du contexte*/
const AdvancedContext = React.createContext<AdvancedContextStore>({
  movie: {},
  dispatch: () => {}, // To be implemented in provider
})

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'loading',
        movie: undefined,
      }
    case 'finish':
      return {
        ...state,
        status: 'done',
        movie: action.payload,
      }
    case 'fail':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      }
    default:
      throw new Error('Action non supporté')
  }
}

const useAdvanced = () => {
  const context = React.useContext(AdvancedContext)
  if (!context) {
    throw new Error("useAdvanced() s'utilise avec <AdvancedContext.provider>")
  }
  return context
}

const AuthProvider = (props: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = React.useReducer(reducer, {
    error: '',
    status: '',
    movie: [],
  })

  const {movie, error, status} = state
  const value = React.useMemo(
    () => ({
      movie,
      error,
      status,
      dispatch,
    }),
    [movie, error, status],
  )
  return <AdvancedContext.Provider value={value} {...props} />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function updateMovie(dispatch: Dispatch, movie: IMovie, updates: any) {
  dispatch({type: 'start', payload: updates})
  try {
    const updatedMovie = null //await movieApiClient.updatedMovie(user, updates)
    dispatch({type: 'finish', payload: updatedMovie})
  } catch (error) {
    dispatch({type: 'fail', payload: error})
  }
}
// exemple d'utilisation dans les composants
//import {useAdvanced, updateMovie} from './AdvancedAsyncContext'

// function UserSettings() {
//   const {movie, status, error, dispatch} = useAdvanced()

//   function handleSubmit(event) {
//     event.preventDefault()
//     updateMovie(dispatch, movie, formState)
//   }
//   // more code...
// }

export {AdvancedContext as AuthContext, useAdvanced, AuthProvider}
