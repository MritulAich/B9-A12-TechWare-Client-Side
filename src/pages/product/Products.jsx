import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            let url = 'http://localhost:5000/products';
            if (searchQuery) {
                url = `http://localhost:5000/search?q=${encodeURIComponent(searchQuery)}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [searchQuery]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="flex">
            <div className="mt-20">
                <label className="input input-bordered flex items-center w-[400px] gap-2 my-6 mx-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search by tag..."
                        className="w-full"
                    />
                </label>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {products.map(product => (
                        <div key={product._id} className="card w-96 bg-base-100 shadow-xl p-8 space-y-4">
                            <Link to={`/productDetails/${product._id}`}>
                            <figure><img src={`${product.image_url}`} alt={product.name} className="rounded-xl w-24" /></figure>
                            </Link>
                            <Link to={`/productDetails/${product._id}`}><h2 className="text-2xl font-semibold">{product.name}</h2></Link>
                            <p>Tags: <span className="font-semibold italic">{product.tags[0]}, {product.tags[1]}, {product.tags[2]}</span></p>
                            <p>UpVote Count: {product.upvote_count}</p>
                            <button className="btn btn-outline btn-info"><IoTriangle /> UpVote</button>
                        </div>
                    ))}
                </div>
            </div>
            <Helmet>
                <title>TechWare | Products</title>
            </Helmet>
        </div>
    );
};

export default Products;
