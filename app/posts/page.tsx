import Link from "next/link";

import { posts } from "#site/content";
import Image from "next/image";

export default function PostPage() {
  const displayPosts = posts.filter((post) => post.published);
  // const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="prose dark:prose-invert">
      <p>Hello posts?</p>

      {displayPosts?.length > 0 ? (
        <ul className="bg-gray-500">
          {displayPosts.map((post: any) => (
            <article key={post.slug} className="bg-gray-500">
              <Link href={`${post.slug}`}>
                <h2 className="font-bold text-3xl">{post.title}</h2>
              </Link>
              <Image
               src={post.image}
               alt=""
               width={100}
               height={100}
              />
              <time>{post.date}</time>
              <p>{post.description}</p>
            </article>
          ))}
        </ul>
      ) : (
        <p> No posts</p>
      )}
    </div>
  );
}
