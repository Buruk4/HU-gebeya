import React, { useState } from "react";

const ProductSizes = ({ sizes, setSsizes }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSize = (size) => {
    setSelectedSizes(
      (prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((item) => item !== size) // Remove size if already selected
          : [...prevSizes, size] // Add size if not selected
    );
  };

  return (
    <div>
      <p className="mb-2">Product sizes</p>
      <div className="flex gap-5">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <div
            key={size}
            className={`border px-3 py-1 text-center cursor-pointer ${
              selectedSizes.includes(size) ? "bg-blue-300" : "bg-slate-200"
            }`}
            onClick={() => toggleSize(size)}
          >
            <p>{size}</p>
          </div>
        ))}
      </div>

      {/* Display selected sizes */}
      <div className="mt-4">
        <p>Selected Sizes: {selectedSizes.join(", ") || "None"}</p>
      </div>
    </div>
  );
};

export default ProductSizes;
