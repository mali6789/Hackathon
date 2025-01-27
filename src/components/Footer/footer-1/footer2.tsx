import Image from "next/image";
const Footer2 = () => {
    return (
          <div className="w-full bg-[#F9F9F9] absolute sm:top-[7500px] lg:top-[2567px] left-[-12px]">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 h-[343px] w-full">
            {/* Logo & Text */}
            <div className="lg:w-[350px] lg:h-[198px] flex flex-col gap-[24px] absolute sm:top-[100px] lg:top-[80px] sm:left-[130px] lg:left-[300px]">
              <Image 
              src="/Logo.png" 
              alt="Logo" 
              className="mb-4" 
              width={168}
              height={40}/>
              <p className="text-[#272343] opacity-60 text-[16px] leading-6">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
              </p>
              <div className="flex gap-[4px] w-[206px] h-[38px]">
              <Image src="/Group 44.png"
              alt="Icons"
              width={38}
              height={38}
              />
              <Image src="/Group 46.png"
              alt="Icons"
              width={38}
              height={38}
              />
              <Image src="/Group 47.png"
              alt="Icons"
              width={38}
              height={38}
              />
              <Image src="/Group 48.png"
              alt="Icons"
              width={38}
              height={38}
              />
              <Image src="/Group 50.png"
              alt="Icons"
              width={38}
              height={38}
              />
            </div>
            </div>
    
            {/* Categories */}
            <div className="absolute sm:top-[350px] lg:top-[80px] sm:left-[130px] lg:left-[747px]">
              <h3 className="font-medium text-[#9A9CAA] text-sm uppercase mb-4">Category</h3>
              <ul className="space-y-2 text-[#272343] text-[16px]">
                <li>Sofa</li>
                <li>Arm Chair</li>
                <li>Wing Chair</li>
                <li className="text-[#007580] underline">Desk Chair</li>
                <li>Wooden Chair</li>
                <li>Park Bench</li>
              </ul>
            </div>
            
            {/* Support */}
            <div className="absolute sm:top-[350px] lg:top-[80px] sm:left-[450px] lg:left-[971px]">
            <h3 className="font-medium text-[#9A9CAA] text-sm uppercase mb-4">Support</h3>
            <ul className="space-y-2 text-[#272343] text-[16px]">
              <li>Help & Support</li>
              <li>Tearms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>
    
            {/* Newsletter */}
            <div className="absolute sm:top-[600px] lg:top-[80px] sm:left-[130px] lg:left-[1196px]">
              <h3 className="font-medium text-[#9A9CAA] text-sm uppercase mb-4">Newsletter</h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button className="bg-[#029FAE] text-white px-4 py-2 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-[#272343] opacity-60 text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
              </p>
            </div>
          </div>
    
          {/* Bottom Section */}
          <div className="sm:mt-[440px] lg:mt-8 border-t border-gray-200 pt-4 text-center text-sm text-[#9A9CAA]">
            @ 2021 - Blogy - Designed & Developed by{" "}
            <span className="text-[#272343]">Zakirsoft</span>
          </div>
        </div>
    );
  };
  
  export default Footer2;
  