import React from "react";

export default function Stats({ items }) {
  if (!items.length) return <footer className="stats">No items yet 🤔</footer>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percent === 100 ? (
        <p>Everything Packed. Let's Go.</p>
      ) : (
        <em>
          <p>Total items: {numItems}</p>
          <p>Packed items: {percent}%</p>
        </em>
      )}
    </footer>
  );
}
