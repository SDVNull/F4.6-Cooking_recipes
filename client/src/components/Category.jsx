// components/Category.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(`/api/categories/${id}/`)
      .then(res => res.json())
      .then(data => setCategory(data));

    fetch(`/api/dishes/?category=${id}`)
      .then(res => res.json())
      .then(data => setDishes(data));
  }, [id]);

  return (
    <div>
      <h1>{category?.name}</h1>
      <div className="dishes-list">
        {dishes.map(dish => (
          <Link to={`/dish/${dish.id}`} key={dish.id}>
            <div className="dish-card">
              <h3>{dish.name}</h3>
							<p>Как приготовить: {dish.instructions}</p>
							<p>Ингредиенты: {dish.ingredients}</p>
              <p>Время приготовления: {dish.cooking_time} min</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}