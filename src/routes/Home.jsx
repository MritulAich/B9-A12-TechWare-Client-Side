import {Helmet} from "react-helmet";
import Banner from "../pages/Banner";
import Featured from "../pages/Featured";
import TrendingProducts from "../pages/TrendingProducts";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechWare | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;