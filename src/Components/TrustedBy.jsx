const TrustedBy = () => {
    return (
        <section className="bg-[#5F42D0] py-12 px-6 lg:px-20 text-white">
            <div className="container mx-auto">
                <h2 className="text-center text-xl lg:text-2xl font-semibold mb-10 opacity-90">
                    Trusted By Millions, Built For You
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    {/*----------------------- Downloads Card -----------------------*/}
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl lg:text-5xl font-black mb-1">29.6M</h3>
                        <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
                            DOWNLOADS
                        </p>
                        <p className="text-xs opacity-60 italic">2% More than Last Month</p>
                    </div>

                    {/*----------------------- Reviews Card -----------------------*/}
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl lg:text-5xl font-black mb-1">906K</h3>
                        <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
                            TOTAL REVIEWS
                        </p>
                        <p className="text-xs opacity-60 italic">40% More than Last Month</p>
                    </div>

                    {/*----------------------- Active Apps Card -----------------------*/}
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl lg:text-5xl font-black mb-1">132+</h3>
                        <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
                            ACTIVE APPS
                        </p>
                        <p className="text-xs opacity-60 italic">90 New Monthly Launch</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedBy;