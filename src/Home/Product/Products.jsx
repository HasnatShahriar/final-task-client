import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sort, setSort] = useState('createdAt');
    const [order, setOrder] = useState('desc'); // Default sort order

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/products', {
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
                console.error('Error fetching products:', error);
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

    const handleNextPage = () => setPage(prevPage => Math.min(prevPage + 1, totalPages));
    const handlePrevPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearchChange}
                    className="input input-bordered"
                />
                <select onChange={handleCategoryChange} className="select select-bordered">
                <option value="">All Categories</option>
    <option value="Kitchen Appliances">Kitchen Appliances</option>
    <option value="Electronics">Electronics</option>
    <option value="Computers">Computers</option>
    <option value="Audio">Audio</option>
    <option value="Wearables">Wearables</option>
    <option value="Photography">Photography</option>
    <option value="Footwear">Footwear</option>
    <option value="Personal Care">Personal Care</option>
                    {/* Add more categories as needed */}
                </select>
                <select onChange={handleBrandChange} className="select select-bordered">
                    <option value="">All Brands</option>
                    <option value="brandA">Brand A</option>
                    <option value="brandB">Brand B</option>
                    <option value="brandC">Brand C</option>
                    {/* Add more brands as needed */}
                </select>
                <select onChange={handlePriceRangeChange} className="select select-bordered">
                    <option value="">All Price Ranges</option>
                    <option value="0-50">0-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    {/* Add more price ranges as needed */}
                </select>
                <select onChange={handleSortChange} className="select select-bordered">
                    <option value="createdAt">Date Added</option>
                    <option value="price">Price</option>
                </select>
                <select onChange={handleOrderChange} className="select select-bordered">
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
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="w-full h-64 object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.productName}</h2>
                                    <p>{product.description}</p>
                                    <p className="font-bold text-lg">Price: ${product.price}</p>
                                    <p>Category: {product.category}</p>
                                    <p>Brand: {product.brand}</p>
                                    <p>Ratings: {product.ratings}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                        <details className="mt-2">
                                            <summary>More details</summary>
                                            <p>Created At: {new Date(product.createdAt).toLocaleString()}</p>
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
                <p>No products found.</p>
            )}
        </div>
    );
};

export default Products;
