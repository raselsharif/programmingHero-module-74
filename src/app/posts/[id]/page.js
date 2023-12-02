import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/post");
  const posts = await res.json();
  const ids = posts.slice(0, 4).map((post) => {
    return {
      id: post.id,
    };
  });
  console.log(ids);
  return [ids];
}
const PostDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/post/${params.id}`);
  const post = await res.json();
  //   console.log(post);
  return (
    <div>
      <div key={post.id} className="py-4 px-3 shadow-md shadow-slate-600">
        <p className="font-semibold">Title: {post.title}</p>
        <p className="my-2">{post.description}</p>
        <p className="font-semibold">likes: {post.likes}</p>
        <Link href={`/posts`}>
          <button className="border border-white py-1 px-3 rounded-lg mt-4 hover:bg-white hover:text-black">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
