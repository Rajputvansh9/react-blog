import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find(b => b.id == id);

  if (!blog) return <p>Not Found</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <h4>{blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  );
}