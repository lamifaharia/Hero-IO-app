import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
            <div className="max-w-md mb-10">
                <img 
                    src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-illustration-download-in-svg-png-gif-formats--not-found-web-pack-network-communication-illustrations-6167035.png" 
                    alt="404 Error" 
                    className="w-full h-auto drop-shadow-2xl"
                />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#142A5C] mb-4">Oops! Page not found!</h2>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
                The page you are looking for doesn't exist or has been moved. 
                Error: <span className="text-red-500 italic">{error.statusText || error.message}</span>
            </p>
            
            <Link to="/">
                <button className="btn bg-[#5F42D0] hover:bg-[#4a32a8] text-white px-10 py-4 h-auto rounded-full font-bold border-none shadow-xl transition-all hover:scale-105 active:scale-95">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;