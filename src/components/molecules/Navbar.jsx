'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-slate-900/60 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-2">
                <div className="flex items-center justify-between md:justify-around">
                    <Link href="/">
                        <Image
                            src="/images/logoInk.png"
                            width={70}
                            height={70}
                            alt="logo"
                            className="rounded-full w-14 h-14 md:w-[70px] md:h-[70px] p-1" 
                        />
                    </Link>

                    <ul className="hidden md:flex gap-8 text-2xl font-montserrat font-bold text-blue-100">
                        <li className="hover:bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text hover:text-transparent">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text hover:text-transparent">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text hover:text-transparent">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="hover:bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text hover:text-transparent">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    <button 
                        onClick={toggleMenu}
                        className="md:hidden focus:outline-none hover:cursor-pointer"
                    >
                        <Image
                            src={isOpen ? "/icons/close.svg" : "/icons/bars.svg"}
                            width={30}
                            height={30}
                            alt="menu" 
                        />
                    </button>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden absolute top-full left-0 w-full bg-slate-900/80 backdrop-blur-lg shadow-sm px-6 flex flex-col items-center space-y-6 text-2xl font-bold font-montserrat text-gray-200 ${isOpen ? "max-h-96 py-6 opacity-100 scale-100" : "max-h-0 py-0 opacity-0 scale-95"}`}>
                <Link href="/" onClick={closeMenu}>Home</Link>
                <Link href="/about" onClick={closeMenu}>About</Link>
                <Link href="/projects" onClick={closeMenu}>Projects</Link>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </div>
                
            
        </div>
    )
}

export default Navbar