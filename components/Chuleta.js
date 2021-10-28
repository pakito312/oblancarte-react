import React from 'react'
import Image from 'next/image'
import { CloudDownloadIcon } from '@heroicons/react/outline'

const Chuleta = props => {

    const render = () => {
        return (
            <div className="m-0 p-0">
                <div className="layout">
                    <div className="max-w-5xl px-2 md:mx-auto ">
                        <article id="talk" className="rounded-2xl bg-green-600 overflow-hidden">
                            <img src="/patterns/bubble-5.svg" alt="" className="absolute -top-2 -left-2" />
                            <img src="/patterns/line-2.svg" alt="" className="absolute -bottom-2/4 left-0 w-1/2" />
                            <img src="/patterns/bubble-6.svg" alt="" className="absolute -right-28 -top-28 w-96" />
                            <img src="/patterns/square-pointers.svg" alt="" className="absolute right-10 bottom-10 w-44" />

                            <div className="flex flex-col md:flex-row p-4 md:p-12 items-center">
                                <Image src={props.image} width={props.imageWidth} height={props.imageHeight} className="mb-4 md:mb-0" />
                                <div className="flex flex-col items-stretch ml-4">
                                    <h3 className="font-semibold text-white text-xl xl:text-2xl mb-2 text-center md:text-left">{props.title}</h3>
                                    <p className="text-white mb-6 text-center md:text-justify">{props.description}</p>
                                    <button onClick={props.onClick} className="md:w-auto btn btn-sm md:btn-md lg:btn-lg round block md:inline-block text-center mr-4 md:mr-8" ><CloudDownloadIcon className="h-6 w-6 inline-block mr-2" />Descargar gratis</button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }

    return render()
}

export default Chuleta