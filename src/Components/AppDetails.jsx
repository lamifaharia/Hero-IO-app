import { useEffect, useState } from "react";
import { useOutletContext, useParams, Link } from "react-router-dom";
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

    if (!app) return <div className="p-20 text-center">Loading...</div>;

    return (
        <div className="container mx-auto px-6 lg:px-20 py-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-10 items-start bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className={`w-32 h-32 md:w-48 md:h-48 ${app.iconColor || 'bg-blue-500'} rounded-[2rem] flex items-center justify-center text-white text-5xl font-black shadow-lg`}>
                    {app.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-black text-[#142A5C] mb-2">{app.name}</h1>
                    <p className="text-[#5F42D0] font-medium mb-6">Developed by {app.category} Inc.</p>
                    
                    <div className="flex gap-10 mb-8 border-t border-b py-4 border-gray-100">
                        <div><p className="text-gray-400 text-xs uppercase font-bold">Downloads</p><p className="text-xl font-bold">54K</p></div>
                        <div><p className="text-gray-400 text-xs uppercase font-bold">Rating</p><p className="text-xl font-bold">⭐ {app.rating}</p></div>
                        <div><p className="text-gray-400 text-xs uppercase font-bold">Size</p><p className="text-xl font-bold">8M</p></div>
                    </div>

                    <button 
                        onClick={() => handleInstall(app)} 
                        className="btn bg-[#00D991] hover:bg-[#00b377] text-white border-none px-12 rounded-xl font-bold"
                    >
                        Install Now $00.00
                    </button>
                </div>
            </div>

            {/* Ratings Bar & Description Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Ratings Bar */}
                <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold mb-6">Ratings</h3>
                    {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-4 mb-3">
                            <span className="text-sm font-bold w-4">{star}</span>
                            <progress className="progress progress-warning w-full h-3" value={star === 5 ? 80 : 20} max="100"></progress>
                        </div>
                    ))}
                </div>

                {/* Description Text */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-6">Description</h3>
                    <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                        {app.description}
                        {"\n\n"}
                        Figma requirements onujayi eikhane boro ekta description thakbe. 
                        Tumi apps.json file-e description ta boro kore likhle eikhane shob dekhabe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;