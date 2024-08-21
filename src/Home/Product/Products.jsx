



import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://my-product-backend.vercel.app/products", {
          params: {
            page,
            search,
            category,
            brand,
            priceRange,
            sort,
            order,
          },
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, search, category, brand, priceRange, sort, order]);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);
  const handlePriceRangeChange = (e) => setPriceRange(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);
  const handleOrderChange = (e) => setOrder(e.target.value);

  const handleNextPage = () => setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  // Define the brand options array
  const brands = [
    "BrewMaster",
    "TechMate",
    "Visionary",
    "ComputeX",
    "SoundWave",
    "FitTrack",
    "PhotoPro",
    "AdventureCam",
    "QuickBoil",
    "RunPro",
    "CoolTech"
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
          className="input input-bordered w-full sm:w-auto"
        />
        <select
          onChange={handleCategoryChange}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="">All Categories</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
          <option value="Electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Audio">Audio</option>
          <option value="Wearables">Wearables</option>
          <option value="Photography">Photography</option>
          <option value="Footwear">Footwear</option>
          <option value="Personal Care">Personal Care</option>
        </select>
        <select
          onChange={handleBrandChange}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          onChange={handlePriceRangeChange}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="">All Price Ranges</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-500">$201 - $500</option>
          <option value="501-1000">$501 - $1000</option>
        </select>
        <select
          onChange={handleSortChange}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="createdAt">Date Added</option>
          <option value="price">Price</option>
        </select>
        <select
          onChange={handleOrderChange}
          className="select select-bordered w-full sm:w-auto"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={product.productImage || "https://i.ibb.co/XyjrSrC/laptop-sample.jpg"}
                    alt={product.productName}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.productName}</h2>
                  <p>{product.description}</p>
                  <p className="font-bold text-lg">Price: ${product.price}</p>
                  <p>Category: {product.category}</p>
                  <p>Brand: {product.brandName}</p>
                  <p>Ratings: {product.ratings}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    <details className="mt-2">
                      <summary>More details</summary>
                      <p>
                        Created At: {new Date(product.createdAt).toLocaleString()}
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="btn btn-secondary mx-2"
            >
              Previous
            </button>
            <span className="btn btn-outline">{`Page ${page} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="btn btn-secondary mx-2"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No product found...</p>
      )}
    </div>
  );
};

export default Products;
