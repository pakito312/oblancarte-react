import React from 'react'
import { useRouter, withRouter } from "next/router"

const DownloadDemo = props => {

    const render = () => {
        const router = useRouter()
        const book = router.query.book
          
        return (
            <main className="h-screen bg-dark-blue flex items-center justify-items-center justify-center flex-col overflow-hidden">
                <img src="/patterns/bubble-1.svg" alt="bubble" className="absolute top-5 left-5" />
                <img src="/patterns/waves-2.svg" alt="waves" className="absolute bottom-0 top-0 right-0  h-full "/>
                <div className="bg-white max-w-sm  lg:max-w-md rounded-xl p-8 m-4 lg:m-8">
                    <img src="/resources/sendemail.gif" alt="download" />
                    <p className="font-semibold text-xl text-center">Hemos enviado la muestra gratis a tu email (no olvides revisar el spam)</p>
                </div>
                <p className="text-white font-semibold ">No te llego el correo, <a className="text-green-600" href={`mailto:oscarblancarte3@gmail.com?subject=No me llego la muestra grátis&body=No me llego la muestra del libro ${book}, me podría reenviar la muestra a mi correo`}>contactanos</a></p>
                <button onClick={() => router.back()} className="btn btn-green-light rounded-full shadow-green mt-4 px-14 py-3">Regresar</button>
            </main>
        )
    }

    return render()
}

export default DownloadDemo