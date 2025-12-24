import { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ title:"", content:"", author:"" });

  const submit = e => {
    e.preventDefault();
    addBlog({ ...data, id: Date.now() });
    navigate("/");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" onChange={e=>setData({...data,title:e.target.value})} />
      <textarea placeholder="Content" onChange={e=>setData({...data,content:e.target.value})} />
      <input placeholder="Author" onChange={e=>setData({...data,author:e.target.value})} />
      <button>Create</button>
    </form>
  );
}