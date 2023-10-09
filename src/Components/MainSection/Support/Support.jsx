import './Support.css'
import {BiSupport} from 'react-icons/bi'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {FaMapMarker} from 'react-icons/fa'
import {BiSolidBadgeDollar} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'

const Support = () => {
    AOS.init()
    return (
        <div data-aos="fade-up" className='grid support-section md:grid-cols-4 text-center gap-4 px-5 lg:px-5 xl:px-0 my-[50px] max-w-[1200px] mx-auto '>
            <Link to={'/supportteam'}>
            <div className='border custom-hover hover:bg-warning lg:hover:translate-y-[-10px] hover:cursor-pointer  border-warning  flex items-center  justify-center gap-4 flex-col p-10 rounded-tl-2xl rounded-br-2xl'>
                <BiSupport className='text-5xl text-white' />
                <h4 className='text-base text-white'>24/7 Support</h4>
            </div>
            </Link>
            <Link to={'/insurance'}>
            <div className='border custom-hover hover:bg-warning lg:hover:translate-y-[-10px] hover:cursor-pointer flex items-center  justify-center gap-4 flex-col border-warning p-10 rounded-tl-2xl rounded-br-2xl'>
                <AiFillSafetyCertificate className='text-5xl text-white' />
                <h4 className='text-base text-white'>Insurance Guarantee</h4>
            </div>
            </Link>
            <Link to={'/destination'}>
            <div className='border custom-hover hover:bg-warning lg:hover:translate-y-[-10px] hover:cursor-pointer flex items-center  justify-center gap-4 flex-col border-warning p-10 rounded-tl-2xl rounded-br-2xl'>
                <FaMapMarker  className='text-5xl text-white' />
                <h4 className='text-base text-white'>Destination Event</h4>
            </div>
            </Link>
            <Link to={'/offers'}>
            <div className='border custom-hover hover:bg-warning lg:hover:translate-y-[-10px] hover:cursor-pointer flex items-center  justify-center gap-4 flex-col border-warning p-10 rounded-tl-2xl rounded-br-2xl'>
                <BiSolidBadgeDollar className='text-5xl text-white' />
                <h4 className='text-base text-white'>Offers</h4>
            </div>
            </Link>
            
        </div>
    );
};

export default Support;