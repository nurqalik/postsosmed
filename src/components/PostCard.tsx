import { useState } from "react";

import { type RouterOutputs } from "@/utils/api";

type Post = RouterOutputs["post"]["getAll"][0];

export const PostCard = ({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: () => void;
}) => {
  const [iseExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            iseExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!iseExpanded)}
        >
          <div className="collapse-title text-xl font-bold">{post.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-sm">{post.content}</article>
          </div>
          <div className="card-actions mx-2 flex justify-end">
            <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
