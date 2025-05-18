

import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const images = ["01.jpg", "02.jpg", "03.jpg", "01.jpg", "02.jpg", "03.jpg"];

export default function GallerySection() {
  return (
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-blue-900 font-bold mb-2 text-2xl">
            <i className="far fa-book-open-reader mr-1" /> Gallery
          </span>
          <h2 className="text-3xl text-blue-900 md:text-4xl font-bold mb-4">
            Our Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-gray-600">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-[300px] group overflow-hidden">
              {/* Image */}
              <Image
                src={`/${img}`}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-[50px_50px_50px_0]"
              />

              {/* Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-[5px] bg-black/60 opacity-0 invisible rounded-[50px_50px_50px_0] transition-opacity duration-300 group-hover:opacity-80 group-hover:visible"></div>

                <a
                  href={`/${img}`}
                  className="w-[70px] h-[70px] flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 invisible transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:visible text-white text-[30px] bg-blue-800 rounded-full"
                >
                  <FaPlus />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

