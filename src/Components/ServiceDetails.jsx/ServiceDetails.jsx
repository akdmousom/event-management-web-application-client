import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceDetails = ({plan, price, details}) => {

  const handlePrice = () => {
    localStorage.setItem('plan', JSON.stringify([plan, price, details ]))

  }
  
    AOS.init();

    return (
        <div data-aos="fade-up" className="relative flex flex-col rounded-xl bg-gradient-to-tr from-yellow-600 to-yellow-400 bg-clip-border p-8 text-white shadow-md shadow-yellow-500/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
    <p className="block font-sans text-2xl font-bold  uppercase leading-normal text-black antialiased">
      {plan}
    </p>
    <h1 className="mt-6 flex justify-center gap-1 font-sans text-4xl lg:text-7xl md:text-4xl font-normal tracking-normal text-black antialiased">
    <span className="mt-2 text-2xl md:text-2xl lg:text-4xl">$</span>{price}
      <span className="self-end text-2xl md:text-3xl lg:text-4xl">/Start</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-black antialiased">
          {details?.member} team members
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-black antialiased">
        {details?.dish}+ Dishes
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-black antialiased">
        {details?.guest} Guest Arrangements
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-black antialiased">
        {details?.day} Days Event
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-black antialiased">
          {details?.vehicle} Vehicle For Guest
        </p>
      </li>
    </ul>
  </div>
  <div className="mt-12 p-0">
    <Link to={'/service'}
      className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
      onClick={handlePrice}
    >
      Book Service
    </Link>
  </div>
</div>
    );
};

ServiceDetails.propTypes ={

  plan: PropTypes.string,
  price: PropTypes.string,
  details: PropTypes.object

}

export default ServiceDetails;