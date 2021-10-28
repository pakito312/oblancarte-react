import React from 'react'

const Hablemos = props => {

    

    const render = () => {
        return (
            <div className="m-0 p-0">
                <div className="absolute bg-dark-blue left-0 right-0 bottom-0 h-20" />
                <div className="layout">
                    <div className="max-w-5xl px-2 md:mx-auto ">
                        <article id="talk" className="rounded-2xl bg-green-600 overflow-hidden">
                            <img src="/patterns/bubble-5.svg" alt="" className="absolute -top-2 -left-2" />
                            <img src="/patterns/line-2.svg" alt="" className="absolute -bottom-2/4 left-0 w-1/2" />
                            <img src="/patterns/bubble-6.svg" alt="" className="absolute -right-28 -top-28 w-96" />
                            <img src="/patterns/square-pointers.svg" alt="" className="absolute right-10 bottom-10 w-44" />

                            <div className="flex flex-col items-stretch p-4 md:p-12">
                                <h3 className="font-semibold text-center text-white text-xl xl:text-2xl mb-2">¿Tienes algo en mente?</h3>
                                <p className="text-white mb-6 text-center">Contáctame y haremos una llamada para ayudarte</p>
                                <div  className="grid gap-8 grid-cols-2 layout">
                                    <a href="https://wa.me/525513604778" target="_blank" className="w-full mb-4  md:w-auto btn btn-sm md:btn-md lg:btn-lg round block md:inline-block text-center mr-4 md:mr-8" >Whatsapp</a>
                                    <a href="mailto:oscarblancarte3@gmail.com" className="w-full mb-4  md:w-auto btn btn-sm md:btn-md lg:btn-lg round block md:inline-block text-center mr-4 md:mr-8" >Email</a>
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

export default Hablemos