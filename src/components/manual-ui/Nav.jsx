"use client"
import React from 'react'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const Nav = () => {
    const Menu = [
    { id: 1, name: 'Prizes', path: '/', sectionId: 'prizes' },
    { id: 2, name: 'Themes', path: '/', sectionId: 'themes' },
    { id: 3, name: 'Timeline', path: '/', sectionId: 'timeline' },
    { id: 4, name: 'Sponsors', path: '/', sectionId: 'sponsors' },
    { id: 5, name: 'Archives', path: 'https://dsudevhack.tech/', sectionId: 'archives' },
    { id: 6, name: 'FAQ', path: '/', sectionId: 'faq' },
    { id: 7, name: 'Discord', path: '/discord', sectionId: 'discord' },
    { id: 8, name: 'Register', path: '/', sectionId: 'register' }
];
  return (
      <div className='hidden xl:flex flex-row border-black border-4 justify-evenly items-center fixed bottom-0 left-0 w-[100vw] z-10'>
          {
              Menu.map((items) => (
                  <Link
                      key={items.id}
                      href={items.path}
                      className={ items.name === 'Register' ? 'group relative border-black border-l-4 text-white border-r-4 px-12 bg-blue-950 flex items-center justify-center overflow-hidden transition-all duration-300' : 'border-black border-l-6 border-r-4 px-16 py-4 bg-white' }
                  >
                      {/* Arrow left (hidden by default, appears on hover) */}
                      {items.name === 'Register' && (
                        <span className=" justify-center left-8 py-5 px-6 border-black border-r-4 bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 flex items-center">
                          <FaArrowRight />
                        </span>
                      )}
                      <span className="transition-all duration-300">
                        {items.name}
                      </span>
                      {/* Arrow right (visible by default, hides on hover) */}
                      {items.name === 'Register' && (
                        <span className="justify-center ml-2 px-6 border-l-4 border-black bg-blue-600 group-hover:opacity-0 group-hover:translate-x-4 opacity-100 transition-all duration-300 py-5 flex items-center">
                          <FaArrowRight className='-rotate-45'/>
                        </span>
                      )}
                  </Link>
              ))
          }
    </div>
  )
}

export default Nav