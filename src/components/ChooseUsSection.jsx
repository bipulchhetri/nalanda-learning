import Image from 'next/image';

export default function ChooseUsSection() {
  return (
    <div
      className="pt-20 pb-20 relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundColor: '#002147',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center ml-5">
          <div className="w-full lg:w-8/12">
            <div className="choose-content">
              <div className="mb-8">
                <span className="text-white inline-block mb-2">
                  <i className="far fa-crown"></i> WHY CHOOSE US
                </span>
                <h2 className="text-white text-[45px] leading-tight font-bold">
                  Empowering <span className="font-bold">Early<br />Childhood</span> Education<br />Excellence
                </h2>
                <p className="text-white mt-4">
                  Nalanda Learning is committed to revolutionizing early childhood education through innovative digital solutions and
                  comprehensive training programs that align with the National Education Policy 2020 framework.
                </p>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '/icons/acting.svg',
                      title: 'Teacher Training',
                      desc: 'Comprehensive programs that equip educators with modern teaching methodologies and tools.',
                    },
                    {
                      icon: '/icons/acting.svg',
                      title: 'Digital Curriculum',
                      desc: 'Innovative teaching materials aligned with NEP 2020 and national frameworks.',
                    },
                    {
                      icon: '/icons/acting.svg',
                      title: 'Learning Management System',
                      desc: 'Comprehensive platform with digital teaching aids, learning videos, and educational games.',
                    },
                    {
                      icon: '/icons/acting.svg',
                      title: 'Knowledge Hub',
                      desc: 'Access to multiple government-recognized education products and services.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-5 rounded-[15px] bg-white/10"
                    >
                      <div className="mr-4">
                        <img
                          src={`${item.icon}`}
                          alt=""
                          className="w-[105px] h-[55px]"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-[22px] font-semibold">{item.title}</h4>
                        <p className="text-white/80 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 mt-10 lg:mt-0 flex justify-center items-center m-auto lg:justify-start">
  <div className="choose-img">
    <img
      src="https://img.freepik.com/free-photo/young-children-with-autism-playing-together_23-2151241914.jpg"
      alt="Students"
      className="rounded-[20px] shadow-lg ml-0 lg:ml-6"
    />
  </div>
</div>
          {/* <div className="w-full lg:w-4/12 mt-10 lg:mt-0 ">
            <div className="choose-img">
              <img
                src="https://img.freepik.com/free-photo/young-children-with-autism-playing-together_23-2151241914.jpg"
                alt="Students"
                className="rounded-[20px] shadow-lg ml-6"
              />
            </div> */}
          </div>
        </div>
      </div>
  
  );
}
