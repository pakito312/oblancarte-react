import React, { useState, useEffect } from 'react'
import Timer from 'react-compound-timer'

const StaticBuy = (props) => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const listener = function (e) {
            if (window.scrollY >= 1000) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])

    const render = () => {

        const callToAction = props.callToAction
        const to = props.to

        return scrolled ? (
            <>
                <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
                    <div className="flex flex-row justify-between  bg-dark-blue p-2">

                        <Timer initialTime={props.timeleft} direction="backward">
                            {(props) => (<p className="rounded-full  text-orange text-sm md:text-base flex items-center">Finaliza en: <Timer.Days />d <Timer.Hours />h <Timer.Minutes />m <Timer.Seconds />s 🔥</p>)}
                        </Timer>

                        <a href={to} className="btn btn-sm btn-green-light shadow-green rounded-none block text-center text-sm px-2" >{callToAction}</a>
                    </div>
                </div>

                <div className="hidden md:inline-block fixed bottom-5 left-5  z-50">
                    <div>
                        <span className="inline-block font-poppins mr-2 font-bold text-5xl text-green-500">-75%</span>
                        <Timer initialTime={props.timeleft} direction="backward">
                            {(props) => (<span className="inline-block rounded-full  text-orange text-sm md:text-base mb-2 text-left ">Termina en:<br /><Timer.Days />d <Timer.Hours />h <Timer.Minutes />m <Timer.Seconds />s 🔥</span>)}
                        </Timer>
                    </div>
                    <a href={to} onClick={props.onClick} className="w-full btn btn-lg btn-green-light shadow-green rounded-none block text-center text-lg" >{callToAction}</a>
                </div>
            </>
        ) : null
    }

    return render()
}
export default StaticBuy