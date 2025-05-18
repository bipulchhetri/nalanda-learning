import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const CTABlock = () => {
  return (
    <div className="relative bg-cover bg-center py-[50px]" style={{ backgroundImage: "url('/CT.jpg')" }}>
      <div className="container mx-auto">
        <div className="flex justify-end">
          <div className="relative px-10 py-20 mt-[-40px] bg-blue-900  rounded-[80px_80px_80px_0] z-10 w-full max-w-2xl">
            <div className="absolute inset-2 border-[8px] border-double border-white rounded-[70px_70px_70px_0] z-[-1]" />
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Transform Early Childhood Education With Nalanda Learning
            </h2>
            <p className="text-white mt-4 mb-6 text-lg">
              Partner with us to implement NEP 2020-aligned digital curriculum in your school. Empower your teachers with our
              comprehensive training programs and innovative teaching methodologies.
            </p>
            <div>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:text-white hover:bg-black transition">
                Partner With Us <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABlock;
