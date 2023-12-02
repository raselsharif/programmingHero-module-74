import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/post", {
    next: {
      revalidate: 5,
    },
  });
  const posts = await res.json();
  return (
    <div className="px-5 pt-5">
      <h2 className="text-center border-b pb-3 mb-6 text-2xl font-semibold">
        All Post: {posts.length}
      </h2>
      <div className="grid grid-cols-4 gap-3">
        {posts.map((post) => (
          <div key={post.id} className="py-4 px-3 shadow-md shadow-slate-600">
            <p className="font-semibold">Title: {post.title}</p>
            <p className="my-2">{post.description}</p>
            <p className="font-semibold">likes: {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
