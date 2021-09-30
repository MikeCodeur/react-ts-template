import * as React from 'react'

// exemple de contexte avancé avec reducer / Callback / memo
// exemple pris de Netflix gestion des series / movies

//type pout le contexte
export type AdvancedContextStore = {
  movies: any
  series: any
  addMovie: (data: IMovie) => void
  addSerie: (data: IMovie) => void
  clearHistory: () => void
}

/* Declaration du contexte*/
const AdvancedContext = React.createContext<AdvancedContextStore>({
  movies: {},
  series: {},
  addMovie: () => {}, // To be implemented in provider
  addSerie: () => {}, // To be implemented in provider
  clearHistory: () => {}, // To be implemented in provider
})

interface IMovie {
  id: string
  name?: string
  type?: string
}

type State = {
  movies: IMovie[]
  series: IMovie[]
}

type Action =
  | {type: 'addMovie'; payload: any}
  | {type: 'addSerie'; payload: any}
  | {type: 'clear'}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addMovie':
      return {
        ...state,
        movies: [action.payload, ...state.movies],
      }
    case 'addSerie':
      return {
        ...state,
        series: [action.payload, ...state.series],
      }
    case 'clear':
      return {
        ...state,
        series: [],
        movies: [],
      }
    default:
      throw new Error('Action non supporté')
  }
}

const useAuth = () => {
  const context = React.useContext(AdvancedContext)
  if (!context) {
    throw new Error("useAuth() s'utilise avec <AuthContext.provider>")
  }
  return context
}

const AuthProvider = (props: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = React.useReducer(reducer, {series: [], movies: []})

  const addMovie = React.useCallback(movie => {
    dispatch({
      type: 'addMovie',
      payload: movie,
    })
  }, [])
  const addSerie = React.useCallback(serie => {
    dispatch({
      type: 'addSerie',
      payload: serie,
    })
  }, [])
  const clearHistory = React.useCallback(() => {
    dispatch({
      type: 'clear',
    })
  }, [])

  const {series, movies} = state
  const value = React.useMemo(
    () => ({
      movies,
      series,
      addMovie,
      addSerie,
      clearHistory,
    }),
    [addMovie, addSerie, clearHistory, movies, series],
  )
  return <AdvancedContext.Provider value={value} {...props} />
}

export {AdvancedContext as AuthContext, useAuth, AuthProvider}
