import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            blabalbalbalblalbahuefhezufhzeeauhez
          </p>
          <p className="py-2 text-gray-600">
            blabalbalbalblalbahuefhezufhzeeauhez
          </p>
          <p className="py-2 text-gray-600">
            blabalbalbalblalbahuefhezufhzeeauhez
          </p>
        </div>
        <div>
          <img src="/../public/assets/images/photo.png" alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
