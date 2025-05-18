import Image from 'next/image';
import { MdAddCall } from "react-icons/md";

// import "./about.css";
export default function AboutSection() {
  return ( 
    <div className="py-28 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <div className="flex gap-6 relative">
              <div className="flex flex-col gap-4">
                <Image
                  src="/01.jpg"
                  alt="img-1"
                  width={300}
                  height={400}
                  className="rounded-[80px_80px_0_80px]"
                />
                <div className="flex items-center text-white bg-blue-900 p-4 rounded-[50px_50px_50px_0] shadow-lg">
                  <div className="bg-white w-[90px] h-[90px] flex items-center justify-center rounded-full me-3">
                    <Image
                      src="/icons/open-book.svg"
                      alt="icon"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="text-start font-semibold font-yantramanav">
                    At your service<br />
                    <span className="text-[22px] font-semibold">since 2012</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Image
                  src="/02.jpg"
                  alt="img-2"
                  width={300}
                  height={300}
                  className="rounded-full border-2 border-dashed border-secondary p-2"
                />
                <Image
                  src="/03.jpg"
                  alt="img-3"
                  width={300}
                  height={300}
                  className="rounded-[0_80px_80px_80px] mt-4"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="text-blue-900 font-semibold flex items-center gap-2 text-sm uppercase">
                <i className="far fa-book-open-reader"></i> About Us
              </span>
              <h2 className="text-3xl text-blue-900 md:text-4xl font-bold">
                Transforming Early Childhood Education in India
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Nalanda Learning Systems Pvt. Ltd. is dedicated to revolutionizing early childhood education through innovative digital
              curriculum aligned with NEP 2020. We focus on Early Childhood Care and Education (ECCE), supporting the Foundational
              Literacy and Numeracy (FLN) goals of the Government of India.
            </p>
            <div className="border-b border-gray-200 pb-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[280px]">
                  <div className="flex gap-4 items-start mb-6">
                    <div className="bg-white w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-[ -5px_5px_0_#f3f4f6]">
                      <Image src="/icons/open-book.svg" alt="" width={45} height={45} className="invert" />
                    </div>
                    <div>
                      <h5 className="text-lg text-blue-900 font-semibold">Digital Curriculum</h5>
                      <p className="text-gray-600">Innovative teaching methods and tools aligned with NEP 2020.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-white w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-[ -5px_5px_0_#f3f4f6]">
                      <Image src="/icons/acting.svg" alt="" width={45} height={45} className="invert" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-blue-900">Teacher Training</h5>
                      <p className="text-gray-600">Comprehensive programs to equip educators with modern methodologies.</p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <a href="#" className="bg-blue-900 text-white px-6 py-3 rounded-full flex items-center gap-2">
                Know More <i className="fas fa-arrow-right-long"></i>
              </a>
              <div className="flex items-center gap-4">
                <div className="bg-blue-900  w-12 h-12 flex items-center justify-center text-white rounded-full shadow-[ -5px_5px_0_#f3f4f6] text-xl">
                <MdAddCall />
                </div>
                <div>
               

                  <span className="text-blue-900 font-medium">Call Now</span>
                  <h6 className="text-lg mt-1">
                    <a href="tel:1800-203-3015" className="text-blue-900">1800-203-3015</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
