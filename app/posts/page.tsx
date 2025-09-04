'use client'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function PostsPage() {
    const {
        data,
        error,
        isError,
        isPending
    } = useQuery({
        queryKey: ['posts'],
        queryFn: async function () {
            const { data } = await axios.get(`/api/posts`);
            return data;
        }
    });

    if (isPending) {
        return <>Pending...</>
    }

    if (isError) {
        return <>Error: {error.message}</>
    }

    console.log(data);

    return (
        <div>
            <h1>Posts Page</h1>
            <div>
                {data.data.map(function (post: {
                    id: string,
                    title: string
                }) {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
