import { useContext } from "react";
import { categoryData } from "../../Utils/EventDataContext/CategoryDataContext";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const MakePayment = () => {

    const { names } = useContext(categoryData)

    const navigate = useNavigate()

    const selectPrice = JSON.parse(localStorage.getItem('plan'))


    const handlePayment = () => {
        Swal.fire({
            title: 'Thank you for choosing us',
            text: 'We contact you as soon as possible',
            icon: 'success',
            confirmButtonText: 'Exit'
          })

          navigate('/')
    }

    return ( 
        <div className="max-w-[1200px] my-[50px] justify-center items-center mx-auto  bg-white">
            <div className="flex flex-col lg:flex-row lg:justify-between border border-yellow px-5 lg:px-5 xl:px-2">
                <div>
                    <h1 className="text-black font-bold text-xl">Barnadha</h1>
                    <p className="text-black font-bold text-base">Best Event Management Organization</p>
                </div>
                <div>
                    <div className="flex gap-2 lg:items-center lg:flex-row-reverse">
                        <p className="text-black font-bold">+8801567951083</p>
                        <AiFillPhone className="text-black" />
                    </div>
                    <div className="flex gap-2 items-center flex-row-reverse">
                        <p className="text-black font-bold">contact.mousom@gmail.com</p>
                        <AiTwotoneMail className="text-black" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-[20px] px-10 lg:grid-cols-3">
                <div>
                    <h1 className="text-black  lg:text-xl font-bold">Event Type</h1>
                    <div className="mt-5">
                    <li className="text-black font-bold">{names ? names : 'Select Package First'}</li>
                    </div>
                </div>
                <div className=" py-10">
                    <h1 className="text-black  text-xl font-bold">Event Package Details</h1>
                    <div className="mt-5">
                    <li className="text-black font-bold">{selectPrice[2].day} Days Event Plan</li>
                    <li className="text-black font-bold">{selectPrice[2].dish} Dishes</li>
                    <li className="text-black font-bold">{selectPrice[2].guest} Guest Arrangement</li>
                    <li className="text-black font-bold">{selectPrice[2].member} Top Notch Event Management Members</li>
                    </div>
                </div>
                <div>
                    <h1 className="text-black  text-xl font-bold">In total Price</h1>
                    <div><p className="text-black font-bold">${selectPrice[1]}</p></div>
                    
                </div>
               
            </div>

           <div className="flex justify-center items-center py-10"> <button onClick={handlePayment} className="btn btn-warning">Make Payment</button> </div>
             
            
        </div>
    );
};

export default MakePayment;