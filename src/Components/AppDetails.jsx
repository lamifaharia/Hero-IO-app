import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [installedApps, handleInstall] = useOutletContext();

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                const singleApp = data.find(item => item.id === parseInt(id));
                setApp(singleApp);
            });
    }, [id]);

    if (!app) return <div className="p-20 text-center font-bold text-[#142A5C]">Loading app details...</div>;

    // 💡 Ratings logic: Total count ber korar jonno
    const totalRatings = app.ratings.reduce((acc, curr) => acc + curr.count, 0);

    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-8 md:py-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                
                {/* App Image from JSON */}
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden shadow-lg flex-shrink-0 border-4 border-white bg-gray-50">
                    <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="flex-1 text-center md:text-left w-full">
                    <h1 className="text-3xl md:text-5xl font-black text-[#142A5C] mb-2">{app.title}</h1>
                    <p className="text-[#5F42D0] font-medium mb-6">Developed by {app.companyName}</p>
                    
                    {/* Dynamic Stats Bar */}
                    <div className="flex justify-center md:justify-start gap-6 md:gap-10 mb-8 border-t border-b py-4 border-gray-100">
                        <div>
                            <p className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-wider">Downloads</p>
                            <p className="text-lg md:text-xl font-bold">{(app.downloads / 1000).toFixed(0)}K</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-wider">Rating</p>
                            <p className="text-lg md:text-xl font-bold">⭐ {app.ratingAvg}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[10px] md:text-xs uppercase font-bold tracking-wider">Size</p>
                            <p className="text-lg md:text-xl font-bold">{app.size}M</p>
                        </div>
                    </div>

                    <button 
                        onClick={() => handleInstall(app)} 
                        className="btn bg-[#00D991] hover:bg-[#00b377] text-white border-none w-full md:w-auto px-12 rounded-xl font-bold h-14 shadow-md transition-all active:scale-95"
                    >
                        Install Now $00.00
                    </button>
                </div>
            </div>

            {/* Bottom Section: Dynamic Ratings & Description */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
                
                {/* 📊 Dynamic Ratings Bar from JSON Array */}
                <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-gray-50 shadow-sm h-fit">
                    <h3 className="text-xl font-bold text-[#142A5C] mb-6">Ratings & Reviews</h3>
                    <div className="space-y-4">
                        {[...app.ratings].reverse().map((rate, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <span className="text-sm font-bold w-12 text-gray-600">{rate.name}</span>
                                <progress 
                                    className="progress progress-warning w-full h-3 rounded-full" 
                                    value={rate.count} 
                                    max={totalRatings}>
                                </progress>
                                <span className="text-xs text-gray-400 w-10 text-right">{rate.count}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-6 italic">Based on {app.reviews} total reviews</p>
                </div>

                {/* Description Section */}
                <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-gray-50 shadow-sm">
                    <h3 className="text-xl font-bold text-[#142A5C] mb-6 border-b pb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                        {app.description}
                    </p>
                    
                    <div className="mt-8 p-6 bg-[#F8F9FF] rounded-2xl border border-blue-50">
                        <h4 className="font-bold text-[#142A5C] mb-3 text-sm italic">What's New in Version 2.4.0</h4>
                        <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm space-y-2">
                            <li>Optimized for final year project requirements.</li>
                            <li>Enhanced responsive UI for all devices.</li>
                            <li>Improved loading speed and data fetching.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;