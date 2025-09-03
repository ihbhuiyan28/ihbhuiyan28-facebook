import { supabase } from '@/utils/supabase';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const post = await supabase.from('Post').select('*').eq('id', id);
    return Response.json(post);
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const post = await supabase.from('Post').delete().eq('id', id);
    return Response.json(post);
}
