import { useEffect, useState } from "react";
import AppCard from "../Components/AppCard";

const Apps = () => {
    const [allApps, setAllApps] = useState([]); // Database-er shob data
    const [filteredApps, setFilteredApps] = useState([]); // Filter korar por ja thakbe
    const [searchText, setSearchText] = useState(""); // Search box-er text

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                setAllApps(data);
                setFilteredApps(data); // Prothome shob gulo-i dekhabo
            });
    }, []);

    // 🔥 SEARCH LOGIC: Type korlei filter hobe
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        
        const filtered = allApps.filter(app => 
            app.name.toLowerCase().includes(value) || 
            app.category.toLowerCase().includes(value)
        );
        setFilteredApps(filtered);
    };

    return (
        <div className="container mx-auto px-6 lg:px-20 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <h2 className="text-4xl font-black text-[#142A5C]">Explore All Apps</h2>
                
                {/* 🔍 SEARCH BAR */}
                <div className="relative w-full md:w-96">
                    <input 
                        type="text" 
                        placeholder="Search by name or category..." 
                        className="input input-bordered w-full rounded-full pl-12 focus:border-[#5F42D0]"
                        value={searchText}
                        onChange={handleSearch}
                    />
                    <span className="absolute left-4 top-3 text-gray-400">🔍</span>
                </div>
            </div>

            {/* ERROR MESSAGE (Jodi kichu na pay) */}
            {filteredApps.length === 0 && (
                <div className="text-center py-20 text-gray-400 text-xl italic">
                    No apps found matching "{searchText}"
                </div>
            )}

            {/* 12-ta card-er grid (Filtered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredApps.map(app => (
                    <AppCard key={app.id} {...app} />
                ))}
            </div>
        </div>
    );
};

export default Apps;