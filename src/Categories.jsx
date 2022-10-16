import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { getCategories } from "./proxies/getCategories";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    await getCategories()
      .then((returnedCategories) => {
        setCategories(returnedCategories);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading };
};

const Categories = () => {
  const { categories, isLoading } = useCategories();

  return (
    <div>
      <div className="info">
        <h3>Choose from any of our available categories below! </h3>
      </div>
      {!isLoading ? (
        <div className="categories-container">
          {Object.keys(categories).map((category) => (
            <CategoryCard category={category} key={category} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>No categories available :(</div>
      )}
    </div>
  );
};

export default Categories;
