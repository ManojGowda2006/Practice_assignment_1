import React from 'react';
import "../App.css"

function Bookcard({ books }) {
  return (
    <div className="card">
      {books.map((item) => (
        <div key={item.id} className="book-item">
          <img src={item.image} alt={item.name} />
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Genre:</strong> {item.genre}</p>
          <p><strong>Author:</strong> {item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Bookcard;
