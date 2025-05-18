// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'

// import { IoCallSharp,IoLocationOutline } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#0c1b36] z-10">
    

//       <div className="relative z-10 pt-[100px] pb-[70px]">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap -mx-4">
//             {/* About */}
//             <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//               <div>
//                 <Link href="#" className="inline-block mb-6">
//                   <Image
//                     src="/logo.webp"
//                     alt="Nalanda Logo"
//                     width={220}
//                     height={60}
//                     className="mb-6"
//                   />
//                 </Link>
//                 <p className="text-white pr-4">
//                   Nalanda Learning is committed to creating an engaging, enriching, and enjoyable learning experience for early learners. Our NEP 2020-aligned curriculum and innovative teaching methodologies transform early childhood education across India.
//                 </p>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="w-1/2 md:w-1/2 lg:w-1/6 px-4 mb-8">
//               <div>
//                 <h4 className="text-white text-lg mb-6 relative pb-5 after:absolute after:w-[90px] after:h-[3px] after:bg-white/20 after:bottom-0 after:left-0 after:z-0 before:absolute before:w-[30px] before:h-[3px] before:bg-blue-400 before:bottom-0 before:left-4">
//                   Quick Links
//                 </h4>
//                 <ul className="flex flex-col gap-2 text-white">
//                   {['About Us', 'Our Team', 'Testimonials', 'Careers', 'Privacy Policy', 'Contact Us'].map((item, i) => (
//                     <li key={i}>
//                       <Link href="#" className="hover:pl-2 hover:text-yellow-400 transition-all flex items-center gap-2">
//                         <i className="fas fa-caret-right text-yellow-400"></i> {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Our Programs */}
//             <div className="w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
//               <div>
//                 <h4 className="text-white text-lg mb-6 relative pb-5 after:absolute after:w-[90px] after:h-[3px] after:bg-white/20 after:bottom-0 after:left-0 after:z-0 before:absolute before:w-[30px] before:h-[3px] before:bg-blue-400 before:bottom-0 before:left-4">
//                   Our Programs
//                 </h4>
//                 <ul className="flex flex-col gap-2 text-white">
//                   {[
//                     'Digital Learning Solutions',
//                     'Pre-School Curriculum',
//                     'Teacher Training',
//                     'Little Laureates Schools',
//                     'NEP 2020 Implementation',
//                     'School Partnerships',
//                   ].map((item, i) => (
//                     <li key={i}>
//                       <Link href="#" className="hover:pl-2 hover:text-yellow-400 transition-all flex items-center gap-2">
//                         <i className="fas fa-caret-right text-yellow-400"></i> {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Contact */}
//             <div className="w-full lg:w-1/4 px-4 mb-8">
//               <div>
//                 <h4 className="text-white text-lg mb-6 relative pb-5 after:absolute after:w-[90px] after:h-[3px] after:bg-white/20 after:bottom-0 after:left-0 after:z-0 before:absolute before:w-[30px] before:h-[3px] before:bg-blue-400 before:bottom-0 before:left-4">
//                   Contact Us
//                 </h4>
//                 <ul className="text-blue-800 space-y-4 text-white ">
//                   <li className="flex items-center gap-3">
//               <IoCallSharp  className='text-2xl bg-blue-1000 gap-4'/>

//                     <Link href="tel:+913340074597">+91 33 4007 4597</Link>
//                   </li>
//                   <li className="flex items-center text-white gap-3">
//                   <MdEmail className='text-2xl bg-blue-1000'/>

//                    <Link href="mailto:info@nalandalearning.com">info@nalandalearning.com</Link>
//                   </li>
//                   <li className="flex items-start gap-3 text-white">
//                   <IoLocationOutline className='text-4xl bg-blue-1000 gap-3'/>
//                   Eco Space Business Park, Block 4B, 6th Floor, New Town, Kolkata - 700156
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-white/10 py-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between items-center">
//             <p className="text-white-400 font-bold text-lg">
//               &copy; {new Date().getFullYear()} <Link href="#">Nalanda Learning Systems</Link> All Rights Reserved.
//             </p>
//             <ul className="flex space-x-4 mt-4 md:mt-0">
//               {['IoCallSharp', 'instagram', 'linkedin-in', 'youtube'].map((icon, i) => (
//                 <li key={i}>
//                   <Link href="#" className="bg-white text-yellow-400 w-9 h-9 flex items-center justify-center rounded-tr-lg rounded-bl-lg hover:bg-yellow-400 hover:text-white transition-all">
//                     <i className={`fab fa-${icon}`}></i>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

'use client'
import Image from 'next/image'
import Link from 'next/link'

import { IoCallSharp, IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { icon: <IoCallSharp />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  return (
    <footer className="relative bg-[#0c1b36] z-10">
      <div className="relative z-10 pt-[100px] pb-[70px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            
            {/* About */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div>
                <Link href="#" className="inline-block mb-6">
                  <Image
                    src="/logo.webp"
                    alt="Nalanda Logo"
                    width={220}
                    height={60}
                    className="mb-6"
                  />
                </Link>
                <p className="text-white pr-4">
                  Nalanda Learning is committed to creating an engaging, enriching, and enjoyable learning experience for early learners. Our NEP 2020-aligned curriculum and innovative teaching methodologies transform early childhood education across India.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-1/2 md:w-1/2 lg:w-1/6 px-4 mb-8">
              <div>
                <h4 className="text-white text-lg mb-6 relative pb-5 after:absolute after:w-[90px] after:h-[3px] after:bg-white/20 after:bottom-0 after:left-0 after:z-0 before:absolute before:w-[30px] before:h-[3px] before:bg-blue-400 before:bottom-0 before:left-4">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-2 text-white">
                  {['About Us', 'Our Team', 'Testimonials', 'Careers', 'Privacy Policy', 'Contact Us'].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="hover:pl-2 hover:text-white-400 transition-all flex items-center gap-2">
                        <span className="text-blue-400">&#9656;</span> {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Programs */}
            <div className="w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div>
                <h4 className="text-white text-lg mb-6 relative pb-5 after:absolute after:w-[90px] after:h-[3px] after:bg-white/20 after:bottom-0 after:left-0 after:z-0 before:absolute before:w-[30px] before:h-[3px] before:bg-blue-400 before:bottom-0 before:left-4">
                  Our Programs
                </h4>
                <ul className="flex flex-col gap-2 text-white">
                  {[
                    'Digital Learning Solutions',
                    'Pre-School Curriculum',
                    'Teacher Training',
                    'Little Laureates Schools',
                    'NEP 2020 Implementation',
                    'School Partnerships',
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="hover:pl-2 hover:text-white-400 transition-all flex items-center gap-2">
                        <span className="text-blue-400">&#9656;</span> {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="w-full lg:w-1/4 px-4 mb-8">
              <div>
                <h4 className="text-white text-lg mb-6 relative pb-5 after:absolute after:w-[90px] after:h-[3px] after:bg-white/20 after:bottom-0 after:left-0 after:z-0 before:absolute before:w-[30px] before:h-[3px] before:bg-blue-400 before:bottom-0 before:left-4">
                  Contact Us
                </h4>
                <ul className="text-blue-800 space-y-4 text-white">
                  <li className="flex items-center gap-3">
                    <IoCallSharp className='text-2xl' />
                    <Link href="tel:+913340074597">+91 33 4007 4597</Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <MdEmail className='text-2xl' />
                    <Link href="mailto:info@nalandalearning.com">info@nalandalearning.com</Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <IoLocationOutline className='text-3xl mt-1' />
                    Eco Space Business Park, Block 4B, 6th Floor, New Town, Kolkata - 700156
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-white font-bold text-lg">
              &copy; {new Date().getFullYear()} <Link href="#">Nalanda Learning Systems</Link> All Rights Reserved.
            </p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              {socialIcons.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="bg-white text-blue-900 w-9 h-9 flex items-center justify-center rounded-tr-lg rounded-bl-lg hover:bg-yellow-400 hover:text-white transition-all text-[18px]"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

