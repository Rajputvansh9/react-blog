import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { blogs } = useContext(BlogContext);

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">Create Blog</Link>
      {blogs.map(b => (
        <div key={b.id}>
          <h2>{b.title}</h2>
          <p>{b.author}</p>
          <p>{b.content.substring(0,100)}...</p>
          <Link to={`/blog/${b.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}