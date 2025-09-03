import { supabase } from '@/utils/supabase';

export async function GET() {
    const posts = await supabase.from('Post').select();
    return Response.json(posts);
}

export async function POST(request: Request) {
    const { title } = await request.json();
    const post = await supabase.from('Post').insert([{ title }]);
    return Response.json(post);
}
