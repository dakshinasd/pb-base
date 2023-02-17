import Link from "next/link";
import React from "react";

import useParts from "../../hooks/useParts";

const Parts = () => {
  const { data: parts, isLoading, error } = useParts();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="p-2">
      Parts <Link href="/parts/create">Create</Link>
      <ul>
        {parts?.items?.map((part) => (
          <li key={part.id} className="flex">
            <span className="flex-1">{part.id}</span>
            <span className="flex-1">{part.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;
