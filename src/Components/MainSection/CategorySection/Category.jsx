import { Link } from "react-router-dom";

const category = ({category}) => {

    const {name, description, img, id} = category
    
    





    return (
        <div className="card lg:card-side bg-white p-2 shadow-xl">
            
            <figure><img className='border border-warning' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <p className="text-black">{description.length > 100 ? description.slice(0,100) : description}...</p>
                <div className="card-actions ">
                    <Link to={`/servicedetails/${id}`} className="btn bg-white text-black hover:bg-warning ">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default category;