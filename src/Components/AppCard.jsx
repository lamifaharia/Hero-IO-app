import { Link } from "react-router-dom";

const AppCard = ({ id, title, companyName, image, ratingAvg }) => {
    return (
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-all flex flex-col h-full group">
            {/* 🖼️ App Image */}
            <div className="w-20 h-20 mb-5 overflow-hidden rounded-2xl shadow-inner bg-gray-100 group-hover:scale-105 transition-transform">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="flex-1">
                <h3 className="text-xl font-bold text-[#142A5C] mb-1 line-clamp-1">{title}</h3>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">{companyName}</p>
                <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold text-lg">⭐</span>
                    <span className="font-bold text-gray-700">{ratingAvg}</span>
                </div>
            </div>

            <Link to={`/app/${id}`}>
                <button className="btn btn-block mt-6 bg-[#F3F6FF] hover:bg-[#5F42D0] hover:text-white text-[#5F42D0] border-none rounded-xl font-bold transition-all active:scale-95">
                    Details
                </button>
            </Link>
        </div>
    );
};

export default AppCard;