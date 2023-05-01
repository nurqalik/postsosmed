import { useState } from "react";

export const Posting = ({
  onSave,
}: {
  onSave: (post: { title: string; content: string }) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Post Title"
            className="fonr-bold input-primary input input-lg w-full"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <input
          type="text"
          placeholder="Content"
          className="fonr-bold input-primary input input-lg w-full"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
      </div>
      <button
        onClick={() => {
          onSave({
            title,
            content,
          });
          setTitle("");
          setContent("");
        }}
        className="btn-primary btn"
        disabled={title.trim().length === 0 || content.trim().length === 0}
      >
        Save
      </button>
    </div>
  );
};
