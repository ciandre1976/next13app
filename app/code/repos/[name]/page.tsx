import React from "react";

export default function page({ params }) {
  return (
    <div className="bg-blue-900 max-h-fit p-10 text-center text-white">
      <h2>{params.name}</h2>
      <p>Repo details:</p>
    </div>
  );
}
