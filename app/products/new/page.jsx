import React from "react";

export default async function page({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return (
    <div>
      <h2>New product page</h2>
      <h2 className="font-bold">{product && product.title}</h2>
    </div>
  );
}
