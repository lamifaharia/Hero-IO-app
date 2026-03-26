import { useEffect, useState } from "react";
import AppCard from "../Components/AppCard";

const Apps = () => {
    const [allApps, setAllApps] = useState([]);  
    const [filteredApps, setFilteredApps] = useState([]); 
    const [searchText, setSearchText] = useState(""); 

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                setAllApps(data);
                setFilteredApps(data);
            });
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchText(term);
        
        const filtered = allApps.filter(app => 
            app.title.toLowerCase().includes(term) || 
            app.companyName.toLowerCase().includes(term)
        );
        setFilteredApps(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
            <div className="container mx-auto">
                {/* -----------------Header & Search Section ----------------------*/}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#142A5C] mb-3 text-center md:text-left">
                            Browse All Apps
                        </h2>
                        <p className="text-gray-500 text-center md:text-left">
                            Find the best tools for your next big project.
                        </p>
                    </div>

                    <div className="relative w-full md:w-[450px]">
                        <input 
                            type="text" 
                            placeholder="Search by app name or category..." 
                            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#5F42D0] outline-none shadow-sm transition-all text-gray-700"
                            value={searchText}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* ------------------------Grid Section or Figma Error Section -------------------------*/}
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredApps.map(app => (
                            <AppCard key={app.id} {...app} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <img 
                            src="/public/images/App-Error.png"
                            alt="Not Found" 
                            className="w-64 md:w-80 mb-8"
                        />
                        <h2 className="text-3xl font-black text-[#142A5C] uppercase">
                            OPPS!! APP NOT FOUND
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-md mx-auto">
                            The App you are requesting is not found on our system. please try another apps
                        </p>
                        <button 
                            onClick={() => {setFilteredApps(allApps); setSearchText("");}}
                            className="mt-8 px-10 py-3 bg-gradient-to-r from-[#5F42D0] to-[#7A5FFF] hover:from-[#4a32a8] hover:to-[#5F42D0] transition-all duration-300 text-white rounded font-bold hover:shadow-lg active:scale-95"
                        >
                            Go Back!
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;