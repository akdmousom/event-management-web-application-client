import { useContext } from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "../../Utils/EventDataContext/CategoryDataContext";

const EventDetails = () => {

    const {categorys} = useContext(categoryData);
    const {id} = useParams ();
    const matchData = categorys?.find(category => category?.id == id);
    
    console.log(matchData);

    return (
        <div className="grid px-3 lg:px-3 xl:px-0 gap-4  max-w-[1200px] mx-auto">
            <div className="col-span-2 py-4 grid justify-center shadow-2xl shadow-slate-50">
                <img className="rounded-xl" src={matchData?.img} alt="" />
            </div>
            <div className="col-span-1 my-10">
             <h1 className="text-4xl text-center lg:text-justify font-bold text-white">{matchData?.name}</h1>
            <p className="text-white text-center lg:text-justify ">{matchData?.description}</p>
            <button className="btn my-5 btn-warning">Book Now</button>
            </div>
            
        </div>
    );
};

export default EventDetails;