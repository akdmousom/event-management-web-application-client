import { Link } from 'react-router-dom';
import banner from '../../../assets/Banner/banner.jpg'
import './Banner.css'
const Banner = () => {
  
    return (
        <div  className="hero lg:h-[80vh] max-w-[1200px] mx-auto" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl lg:text-3xl text-white font-bold">Event Management Services</h1>
                    <p className="mb-5 text-white">Hi, we are the best <span className='event-management'>Event Management</span> service provider
                    in town. For more information about our services please visit our service page.
                     </p>
                    <Link to={'/service'} className="btn btn-warning  text-black">Our Services</Link >
                </div>
            </div>
        </div>
    );
};

export default Banner;