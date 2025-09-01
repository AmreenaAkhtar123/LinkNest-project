"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  const showNavbar = ["/", "/generate"].includes(pathname)

  return (
    <>
      {showNavbar && (
        <nav className="bg-white w-[90vw] flex justify-between fixed top-5 left-[5vw] right-[5vw] rounded-full p-5 px-7 shadow-md">
          <div className="logo flex gap-5 items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Text Logo */}
              <span className="ml-3 text-3xl font-bold text-black">LinkNest</span>
              {/* SVG Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black"
              >
                <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z" />
              </svg>
            </Link>

            <ul className="flex gap-5 text-black">
              <li><Link href="/">Templates</Link></li>
              <li><Link href="/">Marketplace</Link></li>
              <li><Link href="/">Discover</Link></li>
              <li><Link href="/">Pricing</Link></li>
              <li><Link href="/">Learn</Link></li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button className="login bg-gray-400 px-5 py-2 rounded-lg font-bold text-black">Log in</button>
            <button className="signup bg-gray-900 text-white font-bold px-6 py-2 rounded-full">Sign up free</button>
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar
