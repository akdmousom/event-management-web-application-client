
import Banner from "../../Components/Header/Banner/Banner";
import Support from "../../Components/MainSection/Support/Support";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyMap from "../../Components/MainSection/Map/Map";
import ServiceDetails from "../../Components/ServiceDetails.jsx/ServiceDetails";
import Members from "../../Components/HeadTeamMember/Members";

const Home = () => {
    AOS.init();

    const basic = {
        member : '20',
        dish : "10",
        guest : "250",
        day : '2',
        vehicle: 'No'

    }

    const standard = {
        member : '40',
        dish : "20",
        guest : "500",
        day : '5',
        vehicle: 'Yes'

    }


    const premium = {
        member : '60',
        dish : "30",
        guest : "1000",
        day : '7',
        vehicle: 'Yes'

    }
    

    return (
        <div>
            <Banner />
            <Support />
            <div data-aos="fade-up" className="grid justify-center  my-[70px] max-w-[1200px] gap-4 mx-auto">
            <h1 className="text-2xl lg:text-4xl text-center text-white font-bold">Get Your Service Base On Your Need</h1>
                <p className=" mx-5 lg:mx-5 xl:mx-0 text-center text-xl text-white">Welcome to Barnadha, where we craft unforgettable moments and seamlessly orchestrate your special occasions. With years of experience, we pride ourselves on personalized event planning that reflects your unique vision and style. Whether it&aposs a dream wedding, a milestone birthday party, a corporate gala, or any social gathering, our team&aposs attention to detail, creativity, and commitment to excellence ensure a stress-free and extraordinary event. Contact us today at +880156565656 to start the journey to a truly memorable experience. Make your event extraordinary with Barnadha.</p>
            </div>
            <div className="  max-w-[1200px] mx-auto px-5 lg:px-5 xl:px-0  grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <ServiceDetails plan={'BASIC'} price={'2000'} details={basic} />
            <ServiceDetails plan={'STANDARD'} price={'5000'} details={standard} />
            <ServiceDetails plan={'Premium'} price={'10000'} details={premium}  />
            </div>

            <h1 className="text-white text-center font-bold text-2xl lg:text-4xl mt-20">Our Management</h1>

            <div data-aos="fade-up" className="max-w-[1200px] mx-auto my-[60px]">
            <Members />
            </div>
            
            <div data-aos="fade-up">
            <h1 className="text-center text-2xl lg:text-4xl lg:font-extrabold text-white my-10">Our Location</h1>
            <MyMap />
            </div>
        </div>
    );
};

export default Home;