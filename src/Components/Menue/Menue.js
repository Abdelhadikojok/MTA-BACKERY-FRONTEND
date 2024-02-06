import { useEffect, useState, useCallback, useMemo } from "react";

import separator from "../../assets/separator.svg";
import shape5 from "../../assets/shape-5.png";
import shape6 from "../../assets/shape-6.png";
import Loader from "../Preloader/loader";

function HomeMenue() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [items, setItems] = useState([]);
  const initialCategoryId = "65c14736d34ba251e855da88"; // ID for initial items fetch
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = useCallback(
    async (categoryId) => {
      try {
        setLoading(true);
        const response = await fetch(
          `${apiUrl}/itemsCategory?categoryId=${categoryId}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setItems(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    },
    [apiUrl]
  );
  // Fetch categories only once at component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const categoriesResponse = await fetch(`${apiUrl}/categories`);
        if (!categoriesResponse.ok) throw new Error("Categories fetch failed");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        await fetchItems(initialCategoryId);
      } catch (err) {}
    };
    fetchInitialData();
  }, [apiUrl, fetchItems, initialCategoryId]);

  const Categories = useMemo(
    () =>
      categories.map((category) => (
        <button
          key={category._id}
          className="category-card"
          onClick={() => fetchItems(category._id)}
        >
          <img
            src={`${apiUrl}/api/${category.categoreyImage}`}
            alt={category.name}
            width="30px"
          />
          <p className="category-name">{category.name}</p>
        </button>
      )),
    [categories, apiUrl, fetchItems]
  );

  const Items = useMemo(
    () =>
      items.map((elem) => (
        <div className="item-card" key={elem._id}>
          <div className="item-image">
            <img src={`${apiUrl}/api/${elem.productImage}`} alt={elem.name} />
            <div className="img-overlay"></div>
          </div>
          <div className="item-content">
            <div className="title-wrapper">
              <p className="name">{elem.name}</p>
              <p className="line-separator"></p>
              <p className="price">{elem.price}ل.ل</p>
            </div>
            <div className="discreption">{elem.description}</div>
          </div>
        </div>
      )),
    [items, apiUrl]
  );

  const loader = (
    <div style={{ margin: "40px auto", width: "fit-content" }}>
      <Loader />
    </div>
  );

  return (
    <>
      <div className="home-menue" id="Menu">
        <div className="container">
          <div className="special-sections">
            <p>SPECIAL SELECTION</p>
            <img src={separator} alt="separator" />
          </div>
          <div className="section-name">
            <h2 className="headline-1 section-title text-center">
              Delicious Menu
            </h2>
          </div>
          <div className="categories-slider">{Categories}</div>
          {loading ? loader : <div className="menue-items">{Items}</div>}
          <img
            src={shape5}
            width="921"
            height="1036"
            loading="lazy"
            alt="shape"
            className="shape shape-2 move-anim"
          />
          <img
            src={shape6}
            width="921"
            height="1036"
            loading="lazy"
            alt="shape"
            className="shape shape-3 move-anim"
          />
        </div>
      </div>
    </>
  );
}

export default HomeMenue;
