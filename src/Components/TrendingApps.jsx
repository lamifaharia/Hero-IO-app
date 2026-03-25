import { useEffect, useState } from "react";
import AppCard from "./AppCard";

const TrendingApps = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => {
                const trending = data.filter(app => app.isTrending === true);
                setApps(trending); 
            });
    }, []);

    return (
        <section className="bg-gray-50 py-16 px-6 lg:px-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-black text-[#142A5C] mb-8">Trending Apps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.map(app => (
                        <AppCard key={app.id} {...app} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;