import React from "react";

const HeroBanner = () => {
    return (
        <section className="bg-white px-6 lg:px-20 py-16 lg:py-24 relative overflow-hidden min-h-[600px] flex items-center">
            
            <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
                
                {/*-------------------------- 1. Text Section -------------------------- */}
                <div className="text-center lg:text-left z-10">
                    <h1 className="text-5xl lg:text-7xl font-black text-[#142A5C] leading-[1.1]">
                        We Build <br />
                        <span className="text-white">Productive Apps</span>
                    </h1>
                    <p className="text-[#142A5C] text-lg mt-6 max-w-lg font-medium opacity-90">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
                    </div>
                </div>

                <div className="relative w-full flex justify-center items-center mt-12 lg:mt-0">
                    
                    <img 
                        src="/images/hero.png"
                        alt="Hero App UI" 
                        className="relative z-20 w-full max-w-[800px] h-auto drop-shadow-2xl"
                    />

                    <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default HeroBanner;



