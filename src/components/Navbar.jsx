'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FaBars,
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail, MdPhone } from 'react-icons/md'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Header Top */}
      <div className="bg-[#3aacc6] text-white text-[16px] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="font-semibold">Follow Us:</span>
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaWhatsapp />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <HiLocationMarker />
              <span>AD 46, Sector 1, Salt Lake, Kolkata</span>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail />
              <span>info@nalandalearning.org</span>
            </div>
            <div className="flex items-center gap-1">
              <MdPhone />
              <span>1800-203-3015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md  top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 flex items-center justify-between py-4 relative">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <img src="/logo.webp" alt="" />
          </Link>

          {/* Mobile icons */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-xl text-gray-800">
              <FaSearch />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="text-xl text-gray-800"
            >
              <FaBars />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex gap-6 items-center">
              <li>
                <Link href="/" className="text-gray-800 font-semibold hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 font-semibold hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <button className="text-gray-800 font-semibold hover:text-blue-600 flex items-center">
                  Our Brands
                  <span className="ml-1">&#x25BE;</span>
                </button>
                <ul className="absolute top-full left-0 w-56 bg-blue-900 text-white opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-50">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:text-blue-300">
                      MEPSC
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:text-blue-300">
                      Enrich
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:text-blue-300">
                      Little Laureates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:text-blue-300">
                      B2B SaaS Platform
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" className="text-gray-800 font-semibold hover:text-blue-600">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 font-semibold hover:text-blue-600">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 font-semibold hover:text-blue-600">
                  Blogs
                </Link>
              </li>
            </ul>
            <Link
              href="#"
              className="ml-6 bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
            >
              GET IN TOUCH
            </Link>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col gap-2 px-4 py-4">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className="block py-1 text-gray-800 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)} className="block py-1 text-gray-800 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li className="pt-1">
                <span className="block text-gray-800 font-semibold">Our Brands</span>
                <ul className="pl-4">
                  <li>
                    <Link href="#" className="block py-1 text-gray-800 hover:text-blue-600">
                      MEPSC
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-1 text-gray-800 hover:text-blue-600">
                      Enrich
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-1 text-gray-800 hover:text-blue-600">
                      Little Laureates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-1 text-gray-800 hover:text-blue-600">
                      B2B SaaS Platform
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)} className="block py-1 text-gray-800 hover:text-blue-600">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)} className="block py-1 text-gray-800 hover:text-blue-600">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setMenuOpen(false)} className="block py-1 text-gray-800 hover:text-blue-600">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="mt-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
