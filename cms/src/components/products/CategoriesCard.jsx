import React from "react";

const CategoriesCard = ({ category }) => {

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

return (
    <div
        className={`${randomColor} rounded-lg shadow p-4 h-32 flex items-center justify-center cursor-pointer transition-transform hover:scale-105`}
    >
        <h4 className="text-white font-semibold text-center text-lg">
            {category}
        </h4>
    </div>
);
};

export default CategoriesCard;
