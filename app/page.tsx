import { supabase } from '@/utils/supabase';

async function getPosts() {
  const { data, error } = await supabase.from('Post').select();
  if (error) {
    console.log(error);
  }
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-normal md:leading-relaxed bg-linear-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
        ihbhuiyan28-facebook
      </h1>
      <div>
        {posts?.map((post) => <p key={post.id}>{post.title}</p>)}
      </div>
    </div>
  );
}
