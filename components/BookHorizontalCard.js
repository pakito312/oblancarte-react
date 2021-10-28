import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const BookHorizontalCard = (props) => {

    const render = () => {
        return (
            <article className="shadow-gray rounded-lg overflow-hidden bg-white">
                <div className="flex  flex-col lg:flex-row">
                    <div className="bg-green-100 p-8  flex-none w-full lg:w-56">
                        <Image src={props.book.image} alt={props.book.name} className="" width="400" height="630"  />
                    </div>
                    <div className="p-4 justify-center items-center flex-grow">
                        <p className="sub1 font-semibold lg:text-2xl mb-4 ">{props.book.name}</p>
                        <p className="text-center rounded-full py-2 px-4 bg-orange-ligth text-orange mb-4 text-sm md:text-lg">La oferta finaliza en: 10d 12h 40m 🔥</p>
                        <div className="flex items-center justify-center">
                            <span className="text-gray-300 text-2xl mr-4 font-semibold font-poppins"><del>${props.book.realPrice}</del></span>
                            <span className="text-green-600 text-3xl font-semibold font-poppins">${props.book.price} USD</span>
                        </div>
                        <Link href={props.book.link}>
                            <a className="w-full btn btn-green btn-md round block md:inline-block text-center mt-4" >Saber más <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                        </Link>
                    </div>
                </div>
            </article>
        )
    }
    return render()
}

export default BookHorizontalCard