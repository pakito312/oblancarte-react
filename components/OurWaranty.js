import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/solid'

const OurWaranty = props => {

    const [expand, setExpand] = useState(props.expand || false)

    const render = () => {
        const chevronIconStyles = expand ? 'select-none h-5 w-5 inline-block ml-2 transition transform rotate-180' : 'select-none h-5 w-5 inline-block ml-2 transition'
        const bodyStyles = expand ? 'block w-none mt-8 px-4 md:px-6 pb-4 md:pb-6 transition-height duration-500 ease-in text-white text-center lg:text-justify' : 'block mt-0 overflow-hidden px-4 md:px-6 h-0 transition-height duration-500 ease-out text-white text-center lg:text-justify'

        return (
            <div className="bg-dark-blue overflow-hidden">
                <img src="/patterns/waves-dark-1.svg" className="absolute top-0 left-0 w-full " />
                <section className="layout max-w-3xl">
                    <div className="flex flex-col md:flex-row border-b border-white items-center pb-4 mb-4">
                        <div className="md:mr-8">
                            <img className="w-[200px] lg:max-w-none mb-4 lg:mb-0" src="/resources/waranty.png" height="302" width="300" />
                        </div>
                        <div>
                            <p className="font-poppins font-semibold text-2xl md:text-4xl text-white mb-8 text-center md:text-left">No tienes nada que perder...</p>
                            <p className="text-white text-base md:text-xl text-center md:text-left">Si en 30 días el libro no alcanza tus expectativas te regresamos el 100% de tu dinero, sin preguntas, sin excusas.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p onClick={e => setExpand(!expand)} className="font-semibold text-white cursor-pointer">Ver condiciones <ChevronDownIcon className={chevronIconStyles} /></p>
                    </div>
                    <div className={bodyStyles}>
                        La garantía aplica únicamente para la versión digital adquirida por esta página y dentro de los primeros 30 días naturales a partir de la fecha de la compra y por motivos relacionados con la calidad o el contenido. Para hacer válida la garantía, tendrá que ser solicitado formalmente un correo electrónico desde la cuenta que se realizó la compra.
                    </div>
                </section>
            </div>
        )
    }

    return render()
}

export default OurWaranty