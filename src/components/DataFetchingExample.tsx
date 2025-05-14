import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2 } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// JSONPlaceholder API에서 게시물 데이터를 가져오는 함수
async function fetchPosts(searchTerm: string): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await response.json();
  
  // 검색어가 있다면 필터링
  if (searchTerm) {
    return data.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  return data.slice(0, 10); // 검색어가 없으면 처음 10개만 반환
}

export default function DataFetchingExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 입력값을 디바운스하여 너무 많은 요청을 방지
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
    // 300ms 후에 검색어 업데이트
    clearTimeout(Number(localStorage.getItem('searchDebounce')));
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(e.target.value);
    }, 300);
    localStorage.setItem('searchDebounce', timeoutId.toString());
  };

  // TanStack Query를 사용하여 데이터 페칭
  const { data: posts, isFetching } = useSuspenseQuery({
    queryKey: ['posts', debouncedSearchTerm],
    queryFn: () => fetchPosts(debouncedSearchTerm)
  });
  
  return (
    <div className="w-full max-w-4xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        블로그 게시물
      </h2>
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="게시물 검색..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      {isFetching && (
        <div className="flex justify-center my-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      )}
      
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {posts?.map((post) => (
          <motion.div
            key={post.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {post.body}
            </p>
          </motion.div>
        ))}
        
        {posts?.length === 0 && !isFetching && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            검색 결과가 없습니다
          </div>
        )}
      </motion.div>
    </div>
  );
}
