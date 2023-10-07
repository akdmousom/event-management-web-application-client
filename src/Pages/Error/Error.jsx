import { Link, useRouteError } from "react-router-dom";
import './Error.css'

const Error = () => {
    const error = useRouteError();
    return (
        <div className="font-poppins error-background h-[100vh] flex flex-col gap-7 items-center justify-center">
            
            {
                error.status == 404 ? <h1 className="lg:text-8xl text-3xl text-black font-extrabold">4<span className="not">0</span>4 N<span className="not">O</span>T FO<span className="not">U</span>ND</h1> : <h1 className="text-8xl text-black font-extrabold">{error.status} Something Wrong</h1>
            }
            
            <Link to={'/'} className="btn btn-warning">Go To Home</Link>
        </div>
    );
};

export default Error;