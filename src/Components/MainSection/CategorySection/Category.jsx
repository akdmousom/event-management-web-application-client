import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const category = ({category}) => {



   const [price, setPrice] = useState(0);

   const selectPrice = JSON.parse(localStorage.getItem('plan'))
   
   useEffect(()=>{

    if (selectPrice != null) {
        setPrice(selectPrice[1])
    }else{
        setPrice(1000)
    }
    
   },[ ])

    const {name, description, img, id} = category;


  
    

    return (
        <div className="card lg:card-side bg-white p-2 shadow-xl">
            
            <figure><img className='border border-warning' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <p className="text-black">{description.length > 100 ? description.slice(0,100) : description}...</p>
                <div className="card-actions grid ">
                    <h2 className="text-2xl font-bold text-black">${price}</h2>
                    <Link  to={`/servicedetails/${id}`} className="btn w-1/3 bg-white text-black hover:bg-warning ">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default category;