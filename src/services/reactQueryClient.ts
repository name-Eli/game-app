
import { QueryClient } from '@tanstack/react-query'
import { minutesToMilliseconds } from '../utils/calculateTime';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            gcTime: minutesToMilliseconds(5),
            staleTime: minutesToMilliseconds(5),
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});

export default queryClient;