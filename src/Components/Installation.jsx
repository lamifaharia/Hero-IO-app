import { useOutletContext } from "react-router-dom";

const Installation = () => {
    const [installedApps] = useOutletContext(); 

    return (
        <div className="min-h-screen bg-gray-50 py-10 md:py-16 px-4 md:px-10 lg:px-20">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-black text-[#142A5C] mb-10 text-center">
                    Your Installed Apps
                </h2>
                
                <div className="space-y-4">
                    {installedApps.length > 0 ? (
                        installedApps.map((app, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col sm:flex-row items-center justify-between bg-white p-5 md:p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all gap-6"
                            >
                                {/*----------------------- App Info Section -----------------------*/}
                                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-center sm:text-left w-full sm:w-auto">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-inner bg-gray-50 flex-shrink-0">
                                        <img 
                                            src={app.image} 
                                            alt={app.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-extrabold text-[#142A5C] text-xl md:text-2xl">{app.title}</h3>
                                        <p className="text-gray-400 text-xs md:text-sm uppercase font-bold tracking-widest">
                                            {app.companyName}
                                        </p>
                                        <div className="flex items-center justify-center sm:justify-start gap-3 mt-1">
                                            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Size: {app.size}M</span>
                                            <span className="text-xs font-bold text-yellow-500 bg-yellow-50 px-2 py-1 rounded-md">⭐ {app.ratingAvg}</span>
                                        </div>
                                    </div>
                                </div>

                                {/*----------------------- Status Button -----------------------*/}
                                <div className="w-full sm:w-auto">
                                    <button className="btn btn-block sm:btn-md bg-[#00D991] hover:bg-[#00D991] text-white border-none rounded px-10 font-bold shadow-sm cursor-default">
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        /*----------------------- Empty State -----------------------*/
                        <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
                            <div className="text-6xl mb-6">📦</div>
                            <h3 className="text-2xl font-bold text-gray-400 italic">
                                No apps installed yet.
                            </h3>
                            <p className="text-gray-400 mt-2">Go back to the store and find some amazing apps!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installation;