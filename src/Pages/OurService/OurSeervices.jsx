import { useContext } from "react";
import Categorys from "../../Components/MainSection/CategorySection/Categorys";
import { categoryData } from "../../Utils/EventDataContext/CategoryDataContext";

const OurSeervices = () => {
    const {categorys} = useContext(categoryData)
    return (
        <div className="my-[100px]">
       
            <Categorys categorys={categorys} />
        
        </div>
    );
};

export default OurSeervices;