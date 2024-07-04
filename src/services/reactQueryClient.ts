
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            gcTime: 300_000, //5m
            staleTime: 300_000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});

export default queryClient;