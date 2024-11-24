import { useQuery } from 'react-query';
import axios from 'axios';

const PostsComponent = () => {
  const { isLoading, error, data } = useQuery('posts', () => axios.get('https://jsonplaceholder.typicode.com/posts'));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return   
 (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {/* Button to refetch data */}
      <button onClick={() => queryClient.refetchQueries(['posts'])}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;


isError 
fetchPosts
cacheTime
staleTime 
refetchOnWindowFocus
keepPreviousData