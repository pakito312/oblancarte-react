import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { ChevronDownIcon } from '@heroicons/react/solid'

const BookNavbar = (props) => {

    const [expand, setExpand] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [submenu, setSubmenu] = useState("books")

    const goto = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    useEffect(() => {
        window.onscroll = function () {
            "use strict";
            if (window.scrollY >= 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        return () => {
            window.onscroll = null
        }
    }, [])


    const render = () => {

        const styles = scrolled ? "static transition px-4 sm:px-6 lg:px-8 transition pt-2 pb-2 bg-dark-blue box-shadow" : "static pt-6 px-4 sm:px-6 lg:px-8 transition   pt-6 bg-transparent"
        return (
            <div className="fixed w-full z-40">
                <div id="navbar" className={styles}>
                    <nav className="relative flex items-center justify-between sm:h-10  max-w-7xl px-4 sm:px-8 mx-auto" aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/">
                                    <a>
                                        <img id="logo-white" className="h-8 w-auto sm:h-10" src="/oscarblancarteblog-white.svg" />
                                        <img id="logo-black" className="h-8 w-auto sm:h-10 hidden" src="/oscarblancarteblog-black.svg" />
                                    </a>
                                </Link>

                                <div className="-mr-2 flex items-center md:hidden">
                                    <button onClick={() => setExpand(!expand)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-4">
                            <button onClick={e => goto("init")} className=" font-medium sub4 text-white hover:text-green">Ir al inicio</button>
                            <button onClick={e => goto("i")} className="font-medium sub4 text-white hover:text-green mr-6">Sobre mí</button>
                            <button onClick={e => goto("books")} className="font-medium sub4 text-white hover:text-green mr-6 hover:cursor-pointer">Otros libros<ChevronDownIcon className="h-5 w-5 inline-block ml-2" /></button>
                            <a href="https://codmind.com" target="_blank" className="font-medium sub4 text-white hover:text-green mr-6">Cursos<ChevronDownIcon className="h-5 w-5 inline-block ml-2" /></a>
                            <Link href="/">
                                <a className="font-medium sub4 text-white hover:text-green mr-6">Blog</a>
                            </Link>
                            
                        </div>
                    </nav>
                </div>
                {expand && movileMenu()}
            </div>
        )
    }

    const movileMenu = () => {
        return (
            <div className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src="/oscarblancarteblog-black.svg" alt="" />
                        </div>
                        <div className="-mr-2">
                            <button onClick={() => setExpand(!expand)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">



                        <Link href="/">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Inicio</a>
                        </Link>
                        <Link href="/">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sobre mi</a>
                        </Link>
                        <Link href="/">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Libros</a>
                        </Link>
                        <Link href="/">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Cursos</a>
                        </Link>
                        <Link href="/">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</a>
                        </Link>
                        <Link href="/">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Hablemos</a>
                        </Link>
                    </div>
                    {/**
                     * <Link href="/login">
                        <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">Login</a>
                    </Link>
                     */
                    }

                </div>
            </div>
        )
    }

    return render()
}

export default BookNavbar