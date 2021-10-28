import React, { useState } from 'react'
import { CloudDownloadIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import getConfig from 'next/config'
import Button from './Button'

const { publicRuntimeConfig } = getConfig()


const DownloadDemo = props => {

    const [loading, setLoading] = useState(false)

    const sendForm = async (e) => {
        e.preventDefault()

        setLoading(true)

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value

        const body = {
            "productId": props.product,
            "name": name,
            "email": email
        }

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        const rawResponse = await fetch(`${publicRuntimeConfig.apiUrl}/leads/demo`, request)
        const response = await rawResponse.json()
        if (response.ok) {
            window.location = props.redirectTo
        }

        setLoading(false)
    }

    const render = () => {

        const productId = props.product

        return (
            <div className="m-0 p-0 relative">
                <div className="layout">
                    <div className="max-w-4xl px-2 md:mx-auto ">
                        <article id="talk" className="rounded-2xl bg-white overflow-hidden">
                            <button onClick={e => props.onClose()} className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full cursor-pointer transition-colors hover:bg-gray-200 z-10 active:border-0 disabled:bg-gray-100">
                                <XIcon className="h-5 w-5 inline-block" />
                            </button>
                            <img src="/patterns/bubble-5.svg" alt="" className="absolute -top-2 -left-2" />
                            <img src="/patterns/waves-white-2.svg" alt="" className="absolute bottom-0 left-0 w-full" />
                            <img src="/patterns/bubble-gray-1.svg" alt="" className="absolute right-28 bottom-10 w-44" />
                            <img src="/patterns/square-pointers.svg" alt="" className="absolute right-10 bottom-10 w-44" />

                            <div className="flex flex-col md:flex-row p-4 md:p-12 items-center">
                                <Image src={props.image} width={props.imageWidth} height={props.imageHeight} className=" mb-4 md:mb-0" />
                                <div className="flex flex-col items-stretch ml-4">
                                    <h3 className="font-semibold text-xl xl:text-2xl mb-2 text-center md:text-left">Aprende con el libro más completo en español</h3>
                                    <p className=" mb-6 text-center md:text-justify">Compartenos tu nombre y correo electrónico para hacerte llegar la muestra gratuita.</p>
                                    <form onSubmit={e => sendForm(e)} className="w-full mb-2">
                                        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2 mb-6">
                                            <input type="name" placeholder="Nombre*" name="name" id="name" required className="rounded-lg p-2 px-4 border border-gray-400 focus:border-green-600 focus:outline-none " />
                                            <input type="email" placeholder="Email*" name="email" id="email" required className="rounded-lg p-2 px-4 border border-gray-400 focus:border-green-600 focus:outline-none" />
                                        </div>
                                        <Button loading={loading} id="button" type="submit" className="w-full btn btn-green btn-sm md:btn-md lg:btn-lg round block md:inline-block text-center" icon={<CloudDownloadIcon className="h-6 w-6 inline-block mr-2" />}>Descargar gratis</Button>
                                    </form>
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

export default DownloadDemo