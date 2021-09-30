import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AuthProvider} from './AuthContext'
import {ThemeAppProvider} from '../components/ThemeAppProvider'
import {ThemeProvider} from './ThemeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: (failureCount, error: any) => {
        if (error.status === 404) return false
        else if (error.status === 401) return false
        else if (failureCount > 3) return false
        else return true
      },
    },
    mutations: {
      useErrorBoundary: false,
      retryDelay: 500,
      retry: 1,
      // mutation options
    },
  },
})
type AppProvidersProps = {
  children: React.ReactNode
}
const AppProviders = ({children}: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemeAppProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeAppProvider>
      </ThemeProvider>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}

export {AppProviders}
