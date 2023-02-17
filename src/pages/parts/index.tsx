import Link from "next/link";
import React from "react";

import useFetch from "../../hooks/useFetch";

const Parts = () => {
  const {
    data: parts,
    isLoading,
    error,
  } = useFetch("collections/parts/records");

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
          <li key={part.id}>{part.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;
