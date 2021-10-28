import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'

const BookHorizontalCard = (props) => {

    const render = () => {
        return (
            <article className="shadow-gray rounded-lg overflow-hidden bg-white pb-4">
                <div className="flex flex-col">
                    <div className="bg-gray-200 p-4 text-center">
                        <img src={props.book.image} alt={props.book.name} className="inline-block w-52" />
                    </div>
                    <div className="p-4 text-center">
                        <p className="sub1 font-semibold lg:text-xl mb-4">{props.book.name}</p>
                        <p className="rounded-full py-2 px-4 bg-orange-ligth text-orange mb-4 text-sm md:text-base">Está oferta finaliza en: 10d 12h 40m 🔥</p>
                        <div>
                            <span className="text-gray-300 text-2xl mr-4 font-semibold"><del>${props.book.realPrice}</del></span>
                            <span className="text-green-600 text-3xl font-semibold ">${props.book.price} USD</span>
                        </div>
                        <Link href={props.book.link}>
                            <a className="btn btn-green btn-lg round block md:inline-block text-center mt-10" >Saber más <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                        </Link>
                    </div>
                </div>
            </article>
        )
    }
    return render()
}

export default BookHorizontalCard