"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="py-[120px] bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-blue-900 inline-block mb-2 text-2xl underline font-semibold flex">
          ▶️ Watch & Know More
          </span>
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Discover Nalanda Learning{" "}
            Through Video
          </h2>
          <p className="text-blue-900">
            Explore our innovative approach to early childhood education and how
            we're transforming learning experiences for children across India.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div
                className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer"
                style={{
                  backgroundImage: "url('/thumbnail.jpg')",
                }}
                onClick={() => setIsPlaying(true)}
              >
                <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:bg-blue-700 transition duration-300 animate-bounce">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>
            ) : (
              <iframe
                width="900"
                height="615"
                src="https://www.youtube.com/embed/tQGcU80HLTU?si=3oC1mOJGya6iSO9n"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </div>

          <div className="text-center mt-6 shadow-lg p-10">
            <h4 className="text-xl font-semibold text-blue-900">
              Our Approach to Early Childhood Education
            </h4>
            <p className="text-gray-600 mt-2">
              Learn how Nalanda Learning Systems is revolutionizing early
              childhood education through digital curriculum and innovative
              teaching methodologies aligned with NEP 2020.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Explore Our Programs{" "}
                <i className="fas fa-arrow-right-long ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "fas fa-chalkboard-teacher",
              title: "Interactive Learning",
              desc: "Engage children with immersive digital experiences designed by education experts.",
            },
            {
              icon: "fas fa-book-reader",
              title: "NEP 2020 Alignment",
              desc: "Our curriculum follows the National Education Policy guidelines for early childhood education.",
            },
            {
              icon: "fas fa-graduation-cap",
              title: "Holistic Development",
              desc: "Focus on cognitive, social, emotional, and physical development of children.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-blue-900 text-3xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h5 className="text-lg text-blue-900 font-semibold mb-2">{feature.title}</h5>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
