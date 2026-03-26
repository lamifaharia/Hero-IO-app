import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";

const Apps = () => {
    const [allApps, setAllApps] = useState([]); // Database theke ana original 12-ta app
    const [filteredApps, setFilteredApps] = useState([]); // Search korar por ja baki thakbe
    const [searchText, setSearchText] = useState(""); // Input box-er text

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                setAllApps(data);
                setFilteredApps(data); // Shuru-te 12-ta app-ei dekhabe
            });
    }, []);

    // 🔍 SEARCH LOGIC: Requirements onujayi name/category filter
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchText(term);
        
        const filtered = allApps.filter(app => 
            app.name.toLowerCase().includes(term) || 
            app.category.toLowerCase().includes(term)
        );
        setFilteredApps(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
            <div className="container mx-auto">
                {/* Header & Search Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#142A5C] mb-3 text-center md:text-left">
                            Browse All Apps
                        </h2>
                        <p className="text-gray-500 text-center md:text-left">
                            Find the best tools for your next big project.
                        </p>
                    </div>

                    {/* Styled Search Bar */}
                    <div className="relative w-full md:w-[450px]">
                        <input 
                            type="text" 
                            placeholder="Search by app name or category (e.g. Education)" 
                            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#5F42D0] outline-none shadow-sm transition-all text-gray-700"
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <div className="absolute right-5 top-4 text-xl">🔍</div>
                    </div>
                </div>

                {/* Grid Section */}
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredApps.map(app => (
                            <AppCard key={app.id} {...app} />
                        ))}
                    </div>
                ) : (
                    /* Empty State - Requirements-e thake error message handle kora */
                    <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
                        <h3 className="text-2xl font-bold text-gray-400 italic">
                            No apps found matching "{searchText}"
                        </h3>
                        <button 
                            onClick={() => {setFilteredApps(allApps); setSearchText("");}}
                            className="mt-6 px-8 py-3 bg-[#5F42D0] text-white rounded-full font-bold hover:shadow-lg transition-all"
                        >
                            View All Apps
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;