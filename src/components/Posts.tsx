import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <p className="text-slate-400">Loading posts...</p>;
  }

  if (error) {
    return <p className="text-red-400">Error: {error}</p>;
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Latest Posts
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <h3 className="font-semibold text-cyan-400">
              {post.title}
            </h3>
            <p className="mt-2 text-slate-300">{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Posts;