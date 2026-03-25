const AppCard = ({ name, description, iconColor, category }) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full">
            {/* App Icon Placeholder */}
            <div className={`w-16 h-16 ${iconColor} rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-inner`}>
                {name.charAt(0)}
            </div>
            
            {/* Category */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {category}
            </span>
            
            {/* App Name */}
            <h3 className="text-xl font-bold text-[#142A5C] mb-3">{name}</h3>
            
            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {description}
            </p>
            
            {/* Button */}
            <button className="mt-6 text-[#5F42D0] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span>→</span>
            </button>
        </div>
    );
};

export default AppCard;