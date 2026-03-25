import AppCard from "./AppCard";

const TrendingApps = () => {
    const apps = [
        { id: 1, name: "Vocab Mela", category: "Education", iconColor: "bg-orange-500", description: "Learn new English words daily with fun interactive cards and AI-powered pronunciation." },
        { id: 2, name: "Support Zone", category: "Business", iconColor: "bg-blue-600", description: "A complete customer support dashboard to manage tickets and track user satisfaction." },
        { id: 3, name: "BPL Tracker", category: "Sports", iconColor: "bg-green-500", description: "Stay updated with the latest BPL match scores, player stats, and team standings." },
        { id: 4, name: "Medical AI", category: "Healthcare", iconColor: "bg-red-500", description: "AI-driven diagnostic tool to analyze medical datasets and help professionals." }
    ];

    return (
        <section className="bg-gray-50 py-20 px-6 lg:px-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-[#142A5C]">Trending Apps</h2>
                        <p className="text-gray-500 mt-2">Check out our most popular creations this month.</p>
                    </div>
                    <button className="hidden md:block text-[#5F42D0] font-bold border-b-2 border-[#5F42D0]">
                        View All
                    </button>
                </div>

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