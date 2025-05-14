import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// TanStack Query 설정
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Sonner 토스트 설정
import { Toaster } from 'sonner'

// QueryClient 생성 (캐싱, 재시도 등에 관한 글로벌 설정을 할 수 있음)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 10,    // 10분
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position="top-right" richColors closeButton />
    </QueryClientProvider>
  </StrictMode>,
)
