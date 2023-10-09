import Swal from 'sweetalert2'

const Offers = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'No Offer Available Right Now',
        footer: '<a href="/">Go Back To Home</a>'
      })
    return (
        <div className='h-[80vh] mx-auto items-center grid '>
            <h1 className='text-2xl text-white font-bold text-center'>No Offers Available Right Now</h1>
            
        </div>
    );
};

export default Offers;