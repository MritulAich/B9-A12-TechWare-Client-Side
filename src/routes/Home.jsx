import {Helmet} from "react-helmet";
import Banner from "../pages/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TechWare | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;