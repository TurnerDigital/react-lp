import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {

  return (
    <div className="overflow-hidden cursor-pointer bg-gray-800 rounded-2xl shadow-2xl">
      <img src={imageSrc} alt={title} className=" w-full object-cover" />
      <div className="p-8">
        <h3 className="text-white text-2xl font-medium mb-4">{title}</h3>
        <p className="text-white text-lg mb-4">{description}</p>
        <a href="#" className="text-white font-bold">
          See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </div>
    </div>
  )
};

export default Card;
