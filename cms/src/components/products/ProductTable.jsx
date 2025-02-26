import React from "react";
import { Trash, Pencil } from "lucide-react";

const ProductTable = ({ name, image, stock, category, price }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          src={image}
          alt="Product A"
          className="h-16 w-16 object-cover rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
        {category}
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">₹{price}</td>
      <td className="px-6 py-4 whitespace-nowrap">{stock}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex space-x-2">
          <button
            className="p-1 text-blue-600 hover:text-blue-800"
            title="Edit"
          >
            <Pencil size={18} />
          </button>
          <button
            className="p-1 text-red-600 hover:text-red-800"
            title="Delete"
          >
            <Trash size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
