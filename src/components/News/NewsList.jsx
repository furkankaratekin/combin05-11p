import React from "react";
import { Link } from "react-router-dom";
import data from "./NewsData";
import "../../App.css";

const NewsList = () => {
  const productItems = data.map((store) => {
    const { id, title, description, image } = store;
    return (
      <div
        key={id}
        className="new-list sm:m-5 lg:m-auto lg:mt-8 flex flex-col gap-y-6"
      >
        <Link to={`/news/${id}`}>
          <div className="news-list-item flex items-start gap-4">
            <img src={image} alt=""></img>
            <div>
              <h3 className="text-3xl mb-2 font-semibold">{title}</h3>
              <p className="text-xl flex-wrap">{description.slice(0, 50)}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <section className="card-section">{productItems}</section>
    </>
  );
};

export default NewsList;
