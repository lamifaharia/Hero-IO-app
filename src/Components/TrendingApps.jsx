import { useEffect, useState } from "react";
import AppCard from "./AppCard";
import { Link } from "react-router-dom";

const TrendingApps = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                
                const trending = data.slice(0, 8); 
                setApps(trending); 
            });
    }, []);

    return (
        <section className="bg-white py-12 md:py-20 px-6 lg:px-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-[#142A5C]">Trending Apps</h2>
                    
                </div>

                {/*----------------------- Full Responsive Grid -----------------------*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {apps.map(app => (
                        <AppCard 
                            key={app.id} 
                            id={app.id}
                            title={app.title} 
                            companyName={app.companyName} 
                            image={app.image} 
                            ratingAvg={app.ratingAvg} 
                        />
                    ))}
                </div>

                {/* -----------------------Mobile View All----------------------- */}
<div className="mt-10 md:hidden flex justify-center">
    <Link to="/apps" className="w-full">
        <button className="btn btn-block bg-white border-2 border-[#5F42D0] text-[#5F42D0] font-bold rounded-2xl h-14 
            hover:bg-[#5F42D0] hover:text-white hover:border-[#5F42D0] transition-all duration-300 active:scale-95 shadow-sm hover:shadow-lg">
            View All Apps
        </button>
    </Link>
</div>
            </div>
        </section>
    );
};

export default TrendingApps;