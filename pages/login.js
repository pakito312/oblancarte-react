import React, { useRef } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const Login = (props) => {

    const errorLabel = useRef(null)

    const login = async () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const remember = true

        const request = {
            method: 'POST',
            credentials: "include",
            body: null, 
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        
        console.log("publicRuntimeConfig.apiUrl > " , publicRuntimeConfig.apiUrl)

        const response = await fetch(`${publicRuntimeConfig.apiUrl}/authenticate?username=${username}&password=${password}&rememberme=${remember}`, request)
        
        if(response.status == 200){
            const body  = await response.json()
            window.location = publicRuntimeConfig.appURL
        }else if(response.status == 401){
            errorLabel.current.classList.toggle("opacity-0");
        }else{
            console.log("Error", await response.text)
        }
    }

    const render = () => {
        return (
            <div>
                <Navbar />
                {renderHead()}
                {renderHero()}
                <Footer />

            </div>
        )
    }

    const renderHead = () => {
        return (
            <Head>
                <title>Consulred - tu consultorio virtúal</title>
            </Head>
        )
    }

    const renderHero = () => {
        return (
            <header className=" bg-gray-800 bg-white bg-white-to-purple bg-hero pt-16 h-full"  >
                <div className="bg-waves"></div>
                <img src="/bg/superhero.svg" className="hidden lg:block md:absolute w-full -left-40 lg:max-w-4xl -bottom-1" />
                <div className="max-w-7xl px-4 sm:px-8 lg:mx-auto">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        <div className="my-16 lg:my-24  col-start-1 lg:col-start-2">
                            <div className="flex flex-col justify-items-center content-center items-center">
                                <div className="max-w-md ">
                                    <p className="font-bold	mb-4 text-shadow text-right">Comencemos la <span className="bg-red p-1 px-1.5 ml-1 text-white rounded-sm box-shadow text-sm">AVENTURA</span></p>
                                    <h1 className="tracking-tight font-extrabold text-black mb-4  text-right text-2xl md:text-3xl xl:text-5xl lg:text-6xl">Iniciar sesión</h1>
                                    <div className="border-solid border-2 border-mutted bg-white bg-gray-soft rounded-md overflow-hidden  ">
                                        <div className="border-black flex  p-4 flex-col lg:flex-row gap-4">
                                            <button className="inline-block btn border-solid border border-mutted  text-sm md:text-lg box-shadow text-shadow flex-1 hover:bg-grey-light "><img src="/icons/google-icon.svg" alt="Google" className="inline-block mr-2" style={{ width: "24px", height: "24px" }} /> Google</button>
                                            <button className="inline-block btn border-solid border border-mutted  text-sm md:text-lg box-shadow text-shadow flex-1 hover:bg-grey-light "><img src="/icons/facebook-icon.png" alt="Google" className="inline-block mr-2" style={{ width: "24px", height: "24px" }} /> Facebook</button>
                                        </div>
                                        <div className="flow flex-col p-4">
                                            <input placeholder="Email" id="username" name="username" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                                            <input placeholder="Password" id="password" name="password" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                                            <p ref={errorLabel} className="m-0 text-center text-scarlet">Nombre de usuario o password incorrecto</p>
                                        </div>
                                        <div className="bg-grey-light p-4 text-right">
                                            <a href="#" className="inline-block link-purple mr-4 text-lg text-purple text-shadow">Registrarse</a>
                                            <button onClick={login} className="inline-block btn btn-purple  text-sm md:text-lg box-shadow text-shadow">ENTRAR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }


    return render()
}
export default Login