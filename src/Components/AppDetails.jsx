import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AppDetails = () => {
    const { id } = useParams(); // URL theke ID ta niye ashbe
    const [app, setApp] = useState(null);

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
        <div className="container mx-auto px-6 lg:px-20 py-20">
            <Link to="/" className="btn btn-ghost mb-10">← Back to Home</Link>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`w-40 h-40 ${app.iconColor || 'bg-[#5F42D0]'} rounded-[2.5rem] shadow-2xl flex items-center justify-center text-white text-6xl font-black`}>
                    {app.name.charAt(0)}
                </div>
                
                <div className="text-center lg:text-left">
                    <span className="badge badge-primary bg-[#5F42D0] border-none text-white mb-4 uppercase font-bold px-4 py-3">{app.category}</span>
                    <h1 className="text-5xl font-black text-[#142A5C] mb-4">{app.name}</h1>
                    <div className="flex gap-6 justify-center lg:justify-start items-center mb-6 text-lg font-bold">
                        <span className="text-orange-500">⭐ {app.rating}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-emerald-600 font-black">{app.price}</span>
                    </div>
                    <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">{app.description}</p>
                    <button className="btn bg-[#5F42D0] text-white px-10 rounded-full mt-10 border-none hover:bg-[#4C33A8]">Download Now</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;