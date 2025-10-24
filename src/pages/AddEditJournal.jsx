import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function AddEditJournal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [journal, setJournal] = useState({ title: "", content: "", imageUrl: "" });

  useEffect(() => {
    if (id) {
      api.get(`/journals/${id}`).then((res) => setJournal(res.data));
    }
  }, [id]);

  const handleChange = (e) => setJournal({ ...journal, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await api.put(`/journals/${id}`, journal);
    else await api.post("/journals", journal);
    navigate("/journals");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl mb-4">{id ? "Edit Journal" : "Add Journal"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" value={journal.title} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="content" placeholder="Content" value={journal.content} onChange={handleChange} rows="5" className="w-full border p-2 rounded"></textarea>
        <input name="imageUrl" placeholder="Image URL" value={journal.imageUrl} onChange={handleChange} className="w-full border p-2 rounded" />
        {journal.imageUrl && <img src={journal.imageUrl} alt="Preview" className="w-full h-48 object-cover rounded" />}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">{id ? "Update Journal" : "Add Journal"}</button>
      </form>
    </div>
  );
}



