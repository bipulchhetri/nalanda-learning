import { FaArrowRight } from "react-icons/fa";

export default function ProgramsSection() {
    const programs = [
      {
        id: 1,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 2,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 3,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 4,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 5,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 6,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 7,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
      {
        id: 8,
        icon: "/icons/acting.svg", // Replace with your actual icon path
        title: "Digital Curriculum",
        description: "NEP 2020-aligned comprehensive digital content for preschool and primary education with interactive learning materials.",
      },
   
   
    ];
  
    return (
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-blue-900 font-bold mb-2 text-2xl">
            <i className="far fa-book-open-reader mr-1" /> Our Programs
          </span>
          <h2 className="text-3xl text-blue-900 md:text-4xl font-bold mb-4">
          Explore Our Educational Offerings

          </h2>
          <p className="text-gray-600">
          Discover Nalanda Learning's comprehensive range of educational programs designed to transform early childhood education in alignment with NEP 2020 guidelines.


          </p>
        </div>
          <div className="grid md:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="relative h-[400px] bg-white rounded-[50px_50px_50px_0] p-6 shadow-md mb-6 overflow-hidden group transition-all"
              >
                {/* Circle Accent on Hover */}
                <div className="absolute right-[-10px] top-[-10px] w-20 h-20 border-[10px] border-primary rounded-full opacity-20 opacity-100 transition-all pointer-events-none"></div>
  
                {/* Icon */}
                <div className="mb-5">
                  <img
                    src={program.icon}
                    alt={program.title}
                    className="w-[60px] filter invert-[18%] sepia-[57%] saturate-[1103%] hue-rotate-[203deg] brightness-[94%] contrast-[87%]"
                  />
                </div>
  
                {/* Title */}
                <h3 className="text-xl text-blue-900 font-bold mb-2 group-hover:text-primary transition">
                  {program.title}
                </h3>
  
                {/* Description */}
                <p className="text-gray-600 mb-4">{program.description}</p>
  
                {/* Button */}
                <div className="mt-13 text-black ">
                  <a
                    href="#"
                    className="text-sm font-bold uppercase hover:text-primary transition inline-flex items-center gap-5"
                  >
                    Learn More <FaArrowRight className="text-lg" />

                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  