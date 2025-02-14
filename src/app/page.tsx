// app/page.jsx

import { getPosts } from "@/utils/queries";

export const revalidate = 10; // ISR

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.sys.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{post.fields.title}</h2>
            <p>{post.fields.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
