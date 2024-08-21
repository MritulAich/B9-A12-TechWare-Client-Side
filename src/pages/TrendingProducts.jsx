import { IoTriangle } from "react-icons/io5";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

const TrendingProducts = () => {
    const [products] = useProducts();
    const topProducts = products.sort((a,b)=> b.upvote_count - a.upvote_count);
    const trendingProducts = topProducts.slice(0, 6);

    return (
        <div className="my-20">
            <h1 className="text-3xl border-b-2 border-b-gray-400 mx-auto text-center md:w-4/12 mb-10">Trending Products :</h1>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-4 mx-4">
                {
                    trendingProducts.map(item =>
                        <div className="flex flex-row card bg-base-100 w-full shadow-lg p-2" key={item._id}>
                            <img className="w-[120px] rounded-md mx-4" src={item.image_url} />
                            <div>
                                <Link to={`/productDetails/${item._id}`}><h3>Name: <button className="text-xl mb-2 font-medium">{item.name}</button></h3></Link>
                                <h3><span className="underline">Tags:</span> <div className="font-medium italic grid grid-cols-1">{item.tags[0]}, {item.tags[1]}, {item.tags[2]}</div></h3>
                            </div>
                            <div className="mx-4 flex flex-col gap-3">
                                <div className=""><span className="underline">Vote count: {item.upvote_count}</span></div>
                                <button className="btn btn-outline btn-info"><IoTriangle /> UpVote</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link className="mt-4 text-lg font-medium underline flex justify-center" to='/products'>Show All Products</Link>
        </div>
    );
};

export default TrendingProducts;