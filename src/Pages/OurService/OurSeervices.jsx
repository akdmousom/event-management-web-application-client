import { useContext } from "react";
import Categorys from "../../Components/MainSection/CategorySection/Categorys";
import { categoryData } from "../../Utils/EventDataContext/CategoryDataContext";

const OurSeervices = () => {
    const {categorys} = useContext(categoryData)
    return (
        <>
        <h1 className="text-center text-2xl lg:text-4xl lg:font-extrabold text-white my-10">Our Services</h1>
            <Categorys categorys={categorys} />
        
        </>
    );
};

export default OurSeervices;