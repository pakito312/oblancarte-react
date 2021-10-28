import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

const AboutMe = (props) => {
    return (
        <div id="i" className="overflow-hidden">
            <img src="/patterns/waves-3.svg" className="absolute top-0" />
            <img src="/patterns/bubble-4.svg" className="absolute top-1/2 -left-28" />
            <section>
                <div className="layout layout-grid-2">
                    <div className="z-10">
                        <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900">Un poco sobre el autor</h2>
                        <p className="mb-4 text-justify">Oscar Blancarte es originario de Sinaloa, México donde estudió la carrera de Ingeniería en Sistemas Computacionales y rápidamente se mudó a la Ciudad de México donde actualmente radica. Oscar Blancarte es un Arquitecto de software con más de 15 años de experiencia en el desarrollo y arquitectura de software.</p>
                        <p className="mb-4 text-justify">Certificado como Java Programmer (Sun microsystems), Análisis y Diseño Orientado a Objetos (IBM) y Oracle IT Architect (Oracle). A lo largo de su carrera ha trabajado para diversas empresas del sector de TI, entre las que destacan su participación en diseños de arquitectura de software y consultoría para clientes de los sectores de Retail, Telco y Healt Care.</p>
                        <p className="mb-4 text-justify">Oscar Blancarte es además autor de su propio blog oscarblancarteblog desde el cual está activamente publicando temas interesantes sobre Arquitectura de software y temas relacionados con la Ingeniería de Software en general. Desde su blog ayuda a la comunidad a resolver dudas y es por este medio que se puede tener una interacción más directa con el autor.</p>
                        {props.onClick && <button onClick={e => props.onClick(e)} className="btn btn-green btn-lg round block md:inline-block text-center mt-10" >Contáctame <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></button>}
                    </div>
                    <div>
                        <img src="/patterns/bubble-4.svg" className="absolute top-1/2 w-full xl:max-w-5xl" />
                        <img src="/oscar/working.png" className="block md:absolute md:top-6 xl:-right-52 lg:-right-32 md:max-w-xl lg:max-w-2xl xl:max-w-3xl " />
                    </div>
                </div>
            </section>
        </div>

    )
}
export default AboutMe