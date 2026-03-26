import { useOutletContext } from "react-router-dom";

const Installation = () => {
    // 💡 Context theke shudhu installed list-ta nilam
    const [installedApps] = useOutletContext(); 

    return (
        <div className="container mx-auto px-6 lg:px-20 py-16">
            <h2 className="text-4xl font-black text-[#142A5C] mb-10 text-center">Your Installed Apps</h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
                {installedApps.length > 0 ? (
                    installedApps.map(app => (
                        <div key={app.id} className="flex items-center justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-6">
                                <div className={`w-14 h-14 ${app.iconColor || 'bg-blue-500'} rounded-xl flex items-center justify-center text-white font-bold text-xl uppercase`}>
                                    {app.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#142A5C] text-lg">{app.name}</h3>
                                    <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">{app.category}</p>
                                </div>
                            </div>
                            <button className="btn btn-sm bg-[#00D991] text-white border-none rounded-lg px-6">Installed</button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 text-gray-400 italic bg-gray-50 rounded-3xl border-2 border-dashed">
                        No apps installed yet. Go back and install some!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Installation;