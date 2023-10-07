import AOS from 'aos';
import 'aos/dist/aos.css';



const category = ({category}) => {

    AOS.init()

    const {name, description, img} = category
    return (
        <div data-aos="fade-up" className="card lg:card-side bg-white p-2 shadow-xl">
            
            <figure><img className='border border-warning' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <p className="text-black">{description}</p>
                <div className="card-actions ">
                    <button className="btn bg-white text-black hover:bg-warning ">Details</button>
                </div>
            </div>
        </div>
    );
};

export default category;