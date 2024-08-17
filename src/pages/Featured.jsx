import { FaSortAmountUp } from "react-icons/fa";
import useProducts from "../hooks/useProducts";
import { IoTriangle } from "react-icons/io5";

const Featured = () => {

    const [products] = useProducts();
    const latestProducts = products.sort((a, b)=> new Date(b.timestamp) - new Date(a.timestamp));
    const featuredProducts = latestProducts.slice(0, 4);

    return (
        <div className="my-20">
            <h1 className="text-3xl border-b-2 border-b-gray-400 mx-auto text-center md:w-4/12 my-8">Featured Products :</h1>
            <p className="font-medium text-lg">Sorted by latest products- <FaSortAmountUp/></p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-4 mx-4">
                {
                    featuredProducts.map(item =>
                        <div className="flex flex-row card bg-base-100 w-full shadow-lg p-2" key={item._id}>
                            <img className="w-[120px] rounded-md mx-4" src={item.image_url} />
                            <div>
                                <h3>Name: <button className="text-lg font-medium">{item.name}</button></h3>
                                <h3><span className="underline">Tags:</span> <div className="font-medium italic grid grid-cols-1">{item.tags[0]}, {item.tags[1]}, {item.tags[2]}</div></h3>
                            </div>
                            <div className="mx-4 flex flex-col gap-3">
                                <div><span className="underline">Added on:</span> {new Date(item.timestamp).toLocaleString()}</div>
                                <button className="btn btn-outline btn-info"><IoTriangle /> UpVote</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Featured;