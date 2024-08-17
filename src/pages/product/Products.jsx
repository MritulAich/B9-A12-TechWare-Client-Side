import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="flex">
            <div className="mt-20">
                here are some products:

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    products.map(product => <div key={product._id} >
                        
                        <div className="card w-96 bg-base-100 shadow-xl p-8 space-y-4">
                            <figure><img src={`${product.image_url}`} className="rounded-xl w-24"/></figure>
                            <h2 className="text-2xl font-semibold">{product.name}</h2>
                            <p className="text-lg">Description: {product.description} BDT</p>
                            <p>UpVote Count: {product.upvote_count}</p>
                            <p>{product.timestamp}</p>
                            
                            <div className="text-center">
                              <Link to={`/productDetails/${product._id}`}><button className="btn btn-primary">View details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>


            </div>
            <Helmet>
                <title>TechWare | Products</title>
            </Helmet>
        </div>
    );
};

export default Products;


