import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../component/Title";
import ProductItems from "../component/ProductItems";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFiltrer, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpcopy = products.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* filter opition*/}

      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFiltrer);
          }}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filter
          <img
            className={`h-3 sm:hidden ${showFiltrer ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* category filter */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFiltrer ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium"> CATEGORY</p>
          <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              KIDS
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Phone"}
                onChange={toggleCategory}
              />
              Phone
            </p>
          </div>
        </div>
        {/* sub category filter */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFiltrer ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"winterwear"}
                onChange={toggleSubCategory}
              />
              winterwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"iphone"}
                onChange={toggleSubCategory}
              />
              iphone
            </p>
          </div>
        </div>
      </div>

      {/*  right side  */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* PRODUC SOrt */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: low-to-high</option>
            <option value="high-low">Sort by: high-to-low</option>
          </select>
        </div>

        {/* map product */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              image={item.image}
              id={item._id}
              name={item.name}
              price={item.price}
              dicount={item.dicount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
