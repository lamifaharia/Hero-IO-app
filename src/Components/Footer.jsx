const Footer = () => {
    return (
      <footer className="bg-[#0B1221] text-white pt-20 pb-10 px-6 md:px-10 lg:px-20">
        <div className="container mx-auto">
          {/*--------------------------  Main Content Grid -------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/*--------------------------  Brand Section -------------------------- */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black mb-5 tracking-tighter">
                HERO-IO
              </h2>
              <p className="opacity-60 leading-relaxed max-w-xs mx-auto md:mx-0">
                The world's most innovative app store. We bring you the tools that power your creativity and productivity every single day.
              </p>
            </div>
  
            {/*--------------------------  Quick Links -------------------------- */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-6 text-[#5F42D0] uppercase tracking-widest">Store</h4>
              <ul className="space-y-4 opacity-70 font-medium text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Trending Apps</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">New Releases</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Categories</a></li>
              </ul>
            </div>
  
            {/* -------------------------- Support Section -------------------------- */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-6 text-[#5F42D0] uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 opacity-70 font-medium text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Hero-IO</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Terms of Service</a></li>
              </ul>
            </div>
  
            {/*--------------------------  Newsletter/Social -------------------------- */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-6 text-[#5F42D0] uppercase tracking-widest">Connect</h4>
              <p className="opacity-60 text-sm mb-6">Stay updated with the latest app trends.</p>
              <div className="flex justify-center md:justify-start gap-4">
                  {/*--------------------------  Social Circles -------------------------- */}
                  {['FB', 'TW', 'IG', 'YT'].map((social) => (
                      <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5F42D0] cursor-pointer transition-all font-bold text-xs hover:-translate-y-1">
                          {social}
                      </div>
                  ))}
              </div>
            </div>
          </div>
  
          {/*--------------------------  Bottom Copyright -------------------------- */}
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="opacity-40 text-xs md:text-sm tracking-wide">
                &copy; 2026 HERO-IO. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;