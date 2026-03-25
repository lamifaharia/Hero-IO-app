const HeroBanner = () => {
    return (
        <section className="bg-[#A797F1] px-6 lg:px-20 py-16 lg:py-24 relative overflow-hidden min-h-[600px] flex items-center">
            
            <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
                
                {/* 1. Text Section */}
                <div className="text-center lg:text-left z-10">
                    <h1 className="text-5xl lg:text-7xl font-black text-[#142A5C] leading-[1.1]">
                        We Build <br />
                        <span className="text-white">Productive Apps</span>
                    </h1>
                    <p className="text-[#142A5C] text-lg mt-6 max-w-lg font-medium opacity-90">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    </p>
                    
                    {/* Buttons / Store Icons Placeholder */}
                    <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                        <div className="bg-[#142A5C] text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
                            <div className="w-8 h-8 bg-white/20 rounded-full"></div> {/* Placeholder Icon */}
                            <div>
                                <p className="text-[10px] uppercase">Get it on</p>
                                <p className="text-lg font-bold leading-none">Google Play</p>
                            </div>
                        </div>
                        <div className="bg-white text-[#142A5C] px-6 py-3 rounded-xl flex items-center gap-3 border border-gray-200 cursor-pointer hover:scale-105 transition-transform shadow-sm">
                            <div className="w-8 h-8 bg-[#142A5C]/10 rounded-full"></div> {/* Placeholder Icon */}
                            <div>
                                <p className="text-[10px] uppercase">Download on the</p>
                                <p className="text-lg font-bold leading-none">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Visual Section (The Phone & Floating Icons) */}
                <div className="relative h-[500px] w-full flex justify-center items-center">
                    
                    {/* Main Phone Image Placeholder */}
                    <div className="relative z-20 w-64 h-[450px] bg-[#142A5C] rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-white font-bold p-4 text-center">
                             {/* Tumi pore ekhane img tag boshabe */}
                             Your App Screenshot
                        </div>
                    </div>

                    {/* Floating Icons (Dummy Circular Icons from Figma) */}
                    {/* Icon 1 - Top Left */}
                    <div className="absolute top-10 left-10 lg:left-20 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#A797F1] animate-bounce">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div>
                    {/* Icon 2 - Mid Left */}
                    <div className="absolute middle-y left-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                        <div className="w-6 h-6 bg-green-500 rounded-lg rotate-12"></div>
                    </div>
                    {/* Icon 3 - Top Right */}
                    <div className="absolute top-20 right-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="w-7 h-7 bg-orange-400 rounded-full"></div>
                    </div>
                    {/* Icon 4 - Bottom Right */}
                    <div className="absolute bottom-10 right-20 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#A797F1]">
                        <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroBanner;