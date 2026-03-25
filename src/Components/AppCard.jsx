import { Link } from "react-router-dom"; 

const AppCard = ({ id, name, description, iconColor, category }) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className={`w-16 h-16 ${iconColor} rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold`}>
                {name.charAt(0)}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{category}</span>
            <h3 className="text-xl font-bold text-[#142A5C] mb-3">{name}</h3>
            <p className="text-gray-500 text-sm flex-grow">{description}</p>
            
            <Link to={`/app/${id}`}> 
                <button className="mt-6 text-[#5F42D0] font-bold text-sm flex items-center gap-2 hover:underline">
                    Learn More <span>→</span>
                </button>
            </Link>
        </div>
    );
};

export default AppCard;