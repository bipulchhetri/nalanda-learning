// import Image from 'next/image';
// export default function Hero() {
//     return (
//       <section className="relative w-full h-screen">
//         {/* Full-screen hero image container */}
//         <div className="absolute inset-0">
//           <Image 
//             src="/banner1.jpg" 
//             alt="Child with book"
//             fill
//             priority
//             sizes="100vw"
//             style={{ 
//               objectFit: "cover",
//               objectPosition: "center"
//             }}
//           />
//         </div>
//       </section>
//     );
//   }

'use client'

import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative w-full h-[250px] sm:h-[350px] sm:w-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px]">
      <Image
        src="/banner1.jpg" // Place image in public/assets/img/slider/
        alt="Nalanda Learning"
        fill
        priority
        className="object-cover"
      />
    </div>
  )
}
