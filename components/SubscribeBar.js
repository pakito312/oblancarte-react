import React from 'react'


const SubscribeBar = (props) => {

    const render = () => {
        return (
            <section className="bg-scarlet py-8">
                <div className="max-w-7xl px-4 sm:px-8 lg:mx-auto">
                    <div className="flex items-center justify-items-stretch flex-col  lg:flex-row">
                        <div className="flex-1  mb-4 lg:mb-0">
                            <p className="text-2xl lg:text-3l text-white font-bold">Suscríbete a nuestro boletín</p>
                            <p className="text-md text-white font-light">Para recibir noticias importantes sobre nuestros productos</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between rounded-full bg-white content-center">
                                <input placeHolder="my@email.com" type="text" className="rounded-full shadow-none w-full outline-none text-center mx-4" />
                                <button className="bg-navy hover:bg-navy-light duration-500 rounded-full text-white border-none  bg-none px-8 py-2 outline-none " >Suscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return render()
}
export default SubscribeBar