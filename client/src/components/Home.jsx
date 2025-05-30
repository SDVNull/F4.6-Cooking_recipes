import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid">
      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          key={category.id}
          title={category.description}
        >
          <div className="category-card">
            <h3>{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

