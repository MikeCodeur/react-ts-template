import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AuthProvider} from './AuthContext'
import {ThemeDefaultProps} from '../commons/constantes'
import {ChakraProvider, extendTheme, withDefaultProps} from '@chakra-ui/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: (failureCount, error) => {
        if (error.status === 404) return false
        else if (error.status === 401) return false
        else if (failureCount > 3) return false
        else return true
      },
    },
    mutations: {
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: 1,
      // mutation options
    },
  },
})

const AppProviders = ({children}) => {
  const {theme} = React.useState(ThemeDefaultProps) //useThemeStore();
  const customTheme = extendTheme(
    withDefaultProps({
      defaultProps: theme,
    }),
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <AuthProvider>{children}</AuthProvider>
      </ChakraProvider>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}

export {AppProviders}
