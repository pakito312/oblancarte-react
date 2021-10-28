import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Timer from 'react-compound-timer'

const PriceTable = (props) => {

    const render = () => {
        return (
            <article className="shadow-green rounded-xl overflow-hidden bg-white w-96 max-w-full">
                <div>
                    <div className="text-white p-4 lg:p-8 text-center" style={{ background: "linear-gradient(108.71deg, #07836F 0%, rgba(15, 182, 122, 0) 100%), #0FB67A" }}>
                        <img src="/patterns/square-pointers.svg" alt="bg" className="absolute right-10 top-10" />
                        <p className="text-base lg:text-xl text-center pb-4">{props.title}</p>
                        <div className="flex items-center pb-4 justify-center">
                            <span className="text-gray-100 font-poppins font-semibold text-xl lg:text-2xl mr-4"><del>${props.realPrice}</del></span>
                            <span className="text-white font-poppins font-semibold text-3xl lg:text-4xl">${props.price}/USD</span>
                        </div>
                        <Timer initialTime={props.timeleft} direction="backward">
                            {(props) => (<p className="inline-block rounded-full py-1 px-4 bg-orange-ligth text-orange mb-2 text-sm md:text-base">La oferta finaliza en: <Timer.Days />d <Timer.Hours />h <Timer.Minutes />m <Timer.Seconds />s 🔥</p>)}
                        </Timer>

                        <p className="text-center text-sm">Descuento por tiempo limitado</p>
                    </div>
                    <div className="relative p-4 lg:p-8 overflow-hidden">
                        <img src="/patterns/waves-white-4.svg" className="absolute left-0 -bottom-11 w-full" />
                        <div>
                            {props.children}
                        </div>
                        <div className="text-center">
                            <a href={props.link} {...props.linkPros} className="block lg:inline-block btn btn-green-light shadow-green lg:btn-md xl:btn-lg round text-center mt-4" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                        </div>
                    </div>
                </div>
            </article>
        )
    }

    return render()
}

export default PriceTable