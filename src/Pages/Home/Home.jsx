import { useContext } from "react";
import Banner from "../../Components/Header/Banner/Banner";
import Support from "../../Components/MainSection/Support/Support";
import { categoryData } from "../../Utils/EventDataContext/CategoryDataContext";
import Categorys from "../../Components/MainSection/CategorySection/Categorys";

const Home = () => {
    const {categorys} = useContext(categoryData)

    return (
        <div>
            <Banner />
            <Support />
            <h1 className="text-center text-2xl lg:text-4xl lg:font-extrabold text-white my-10">Our Services</h1>
            <Categorys categorys={categorys} />
        </div>
    );
};

export default Home;