// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import p1 from '../../assets/Members/p1.jpg'
import p2 from '../../assets/Members/p2.jpg'
import p3 from '../../assets/Members/p3.jpg'
import p4 from '../../assets/Members/p4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Members = () => {



  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='my-10'>
        <img className='h-[200px] mt-4 shadow-lg shadow-warning' src={p1} alt="" />
        <h2 className='text-xl mt-4 font-bold text-white'>Jeeny.D</h2>
        <p className='font-bold text-white'>CEO</p>

      </SwiperSlide>

      <SwiperSlide className='my-10'>
        <img className='h-[200px] mt-4  shadow-lg shadow-warning' src={p2} alt="" />
        <h2 className='text-xl mt-4 font-bold text-white'>Jonny.M</h2>
        <p className='font-bold text-white'>MD</p>
      </SwiperSlide>

      <SwiperSlide className='my-10'>
        <img className='h-[200px] mt-4  shadow-lg shadow-warning' src={p3} alt="" />
        <h2 className='text-xl mt-4 font-bold text-white'>Jose.B</h2>
        <p className='font-bold text-white'>CFO</p>
      </SwiperSlide>

      <SwiperSlide className='my-10'>
        <img className='h-[200px] mt-4  shadow-lg shadow-warning' src={p4} alt="" />
        <h2 className='text-xl mt-4 font-bold text-white'>Jenipher.L</h2>
        <p className='font-bold text-white'>Event Manager</p>
      </SwiperSlide>

    </Swiper>
  );
};

export default Members;