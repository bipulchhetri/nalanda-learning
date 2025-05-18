import Image from 'next/image';
import { FaUserTie } from 'react-icons/fa';

export default function BoardOfDirectors() {
  return (
    <div className="py-28 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-lg font-medium text-blue-900">
            <FaUserTie /> Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-blue-900">
            Board of <span className="text-blue-900">Directors</span>
          </h2>
          <p className="text-blue-600 mt-4">
            Meet the visionary leaders behind Nalanda Learning Systems who are dedicated to transforming early childhood education
            across India.
          </p>
        </div>

        {/* Director Section */}
        <div className="grid md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-5">
            <div className="rounded-[50px_50px_50px_0] overflow-hidden shadow-md">
              <Image
                src="/director.webp"
                alt="Director"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold text-blue-900">Tamal Mukherjee</h3>
            <span className="text-black text-sm font-semibold block mt-1">
              Chairman & Managing Director
            </span>
            <p className="mt-4 text-gray-700">
              As the founder and visionary leader of Nalanda Learning Systems, Tamal Mukherjee has been instrumental in revolutionizing
              early childhood education in India. With over 20 years of experience in education technology, he leads the National
              Taskforce for Early Childhood Care and Education (ECCE) and is dedicated to supporting the Foundational Literacy and
              Numeracy (FLN) goals of the Government of India.
            </p>
            <p className="mt-4 text-gray-700">
              Under his leadership, Nalanda Learning has developed innovative digital curriculum aligned with NEP 2020, empowering
              educators and transforming learning experiences for young children across the country.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden text-center p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">
                <Image
                  src="/director.webp"
                  alt="Director"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="">
                <h5 className="text-lg font-bold mb-1 text-blue-900">Tamal Mukherjee</h5>
                <span className="text-sm text-gray-500 text-blue-900">Associate Professor</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
