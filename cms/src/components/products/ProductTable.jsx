const ProductTable = ({ name, image, stock, category, price }) => {
  return (
    <>
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
      </tr>
    </>
  );
};

export default ProductTable;
