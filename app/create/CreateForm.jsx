"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import path from "path";

const secretToken = "hendersen20031023";

const CreateForm = () => {
  const router = useRouter();

  const id = Date.now().toString();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image_link, setImage] = useState("");
  const [html_link, setHTML] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const card = {
      id,
      title,
      date,
      image_link,
      html_link,
    };

    // console.log(card);
    const url = "http://127.0.0.1:3000/api/handleJSON";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/trends");
    }
  };

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <textarea
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Date:</span>
        <textarea
          required
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Image Link:</span>
        <textarea
          required
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image_link}
        />
      </label>
      <label>
        <span>HTML Link:</span>
        <textarea
          required
          type="text"
          onChange={(e) => setHTML(e.target.value)}
          value={html_link}
        />
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Card</span>}
      </button>
    </form>
  );
};
export default CreateForm;
