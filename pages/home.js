import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SubscribeBar from '../components/SubscribeBar'

const Home = (props) => {

    const renderHead = () => {
        return (
            <Head>
                <title>Consulred - tu consultorio virtúal</title>
            </Head>
        )
    }

    const render = () => {
        return (
            <div>
                <Navbar />
                {renderHead()}
                {renderHero()}
                {renderSumary()}
                {renderReports()}
                {renderConsulta()}
                {renderAccessibility()}
                {renderPrice()}
                <SubscribeBar/>
                <Footer/>
                
            </div>
        )
    }

    const renderHero = () => {
        return (
            <header className="xl:h-screen bg-gray-800 bg-white bg-white-to-purple bg-hero pt-16" >
                <div className="bg-waves"></div>
                <div className="h-full relative  overflow-hidden ">
                    <div className="h-full max-w-7xl px-4 sm:px-8 md:mx-auto  ">
                        <img src="/bg/hero.svg" className="md:absolute w-full" />
                        <main className="relative content-center text-right md:h-full mx-auto max-w-7xl grid   grid-cols-1 md:grid-cols-2  md:pb-16 mt-8 mb-8">
                            <div className="md:col-start-2 md:z-10 mb-2 sm:mb-16 md:mb-0 md:mt-8 lg:mb-32  ">
                                <p className="font-bold	mb-4 text-shadow">Gestión completa de <span className="bg-red p-1 px-1.5 ml-1 text-white rounded-sm box-shadow text-sm">CONSULTORIOS</span></p>
                                <h1 className="tracking-tight font-extrabold text-gray-900 text-2xl md:text-3xl xl:text-5xl lg:text-6xl">El mejor sistema para gestionar tus consultas</h1>
                                <p className="text-black mt-5 sm:text-lg text-shadow">Olvídate de las complicadas aplicaciones para gestionarr tu consultorio, con Consulred podrás gestionar de forma simple y práctica todas tus consultas, agendar citas y llevar un registro completo del expediente de tus pasientes</p>
                                <div className="mt-5">
                                    <a href="#" className="link-purple mr-4 text-lg text-shadow"><i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Ver planes</a>
                                    <a href="#" className="btn btn-purple  text-sm md:text-lg box-shadow text-shadow">PRUEBA GRÁTIS</a>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </header>
        )
    }

    const renderSumary = () => {
        return (
            <section className="py-16 ">
                <div className="max-w-7xl px-2 md:mx-auto">
                    <div className="grid grid-cols-3  pr-4">

                        <div className="text-center">
                            <div className="inline-block">
                                <i className="fa fa-arrow-up text-green absolute -right-2 -top-2 text-shadow" aria-hidden="true"></i>
                                <p className="tracking-tight font-extrabold text-grey text-2xl sm:text-4xl md:text-5xl lg:text-6xl">+10,000</p>
                                <p className="text-green font-bold pt-2 text-sm md:text-sm lg:text-lg">CONSULTAS AGENDADAS</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="inline-block">
                                <i className="fa fa-arrow-up text-green absolute -right-2 -top-2 text-shadow" aria-hidden="true"></i>
                                <p className="tracking-tight font-extrabold text-grey text-2xl sm:text-4xl md:text-5xl lg:text-6xl">+50,000</p>
                                <p className="text-green font-bold pt-2 text-sm md:text-sm lg:text-lg">CONSULTAS REGISTRADAS</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="inline-block">
                                <i className="fa fa-arrow-up text-green absolute -right-2 -top-2 text-shadow" aria-hidden="true"></i>
                                <p className="tracking-tight font-extrabold text-grey text-2xl sm:text-4xl md:text-5xl lg:text-6xl">+3,000</p>
                                <p className="text-green font-bold pt-2 text-sm md:text-sm lg:text-lg">MÉDICOS ACTIVOS</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }

    const renderReports = () => {
        return (
            <section className="py-8 sm:py-16 md:py-32 bg-purple-soft">
                <div className="bg-waves"></div>
                <div className="max-w-7xl px-4 sm:px-8 lg:mx-auto">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-16">
                        <div className="">
                            <img src="/bg/reports.svg" alt="Reportes" className="mb-16" />
                        </div>
                        <div>
                            <h3 className="tracking-tight font-extrabold text-right text-purple text-shadow mb-1 text-1xl md:text-2xl">Funcionalidad</h3>
                            <h2 className="tracking-tight font-extrabold text-black mb-2 text-right text-3xl md:text-4xl">Reportes avanzados</h2>
                            <p className="text-right text-md mb-6">Registra las consultas de tus pacientes de forma simple y segura, toma nota de sus síntomas,<br className="hidden lg:inline-block"/> registra los hallazgos de la exploración física, da un diagnóstico e imprime la reseta</p>
                            <ul>
                                <li className="text-right text-shadow pr-6 pb-5">Reportes de consultas: Reporte estadístico de consultas realizadas por  días, semana, mes, etc.<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                                <li className="text-right text-shadow pr-6 pb-5">Reporte de cumpleaños: Que no se te pase el cumpleaños de tus pacientes<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                                <li className="text-right text-shadow pr-6 pb-5">Reporte de citas: Reporte de citas el día, confirmadas y por confirmar, para llevar un mejor control<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                                <li className="text-right text-shadow pr-6 pb-5">Reportes de seguimientos: Te alertaremos cuando un paciente es candidato a regresar a consulta<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-purple text-lg box-shadow text-white text-shadow block sm:inline-block sm:px-16">PRUEBA GRÁTIS</a>
                    </div>
                </div>
            </section>
        )
    }

    const renderConsulta = () => {
        return (
            <section className="py-8 sm:py-16 md:py-32">
                <div className="bg-waves"></div>
                <div className="max-w-7xl px-4 sm:px-8 lg:mx-auto">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-16">
                        <div className="order-last lg:order-first">
                            <h3 className="tracking-tight font-extrabold text-left text-purple text-shadow mb-1 text-1xl md:text-2xl">Funcionalidad</h3>
                            <h2 className="tracking-tight font-extrabold text-black mb-2 text-left text-3xl md:text-4xl">Consulta</h2>
                            <p className="text-left text-md mb-6">Con Consulred la consultas no solo quedan registradas, si no que <br className="hidden lg:inline-block"/>podemos obtener valiza información por medio de las consultas vanzadas</p>
                            <ul>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Ten un registro completo de tus pacientes en la nube y consultas cuando y desde donde sea.</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Registra los padecimientos de tus pacientes, registras sus síntomas y emite diagnósitcos rápidamente.</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Ten tu expendiente clínicio electrínico actualizado y accesible 27x7</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Elige entre los diferentes templates para para tus recetas, o solicita la creación de una platilla personalizada*</li>
                            </ul>
                            <small className="text-mutted text-sm">* Las plantillas personalizadas tiene un costo adicional</small>
                        </div>
                        <div >
                            <img src="/bg/consulta.svg" alt="Reportes" className="mb-16" />
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-purple text-lg box-shadow text-white text-shadow block sm:inline-block sm:px-16">PRUEBA GRÁTIS</a>
                    </div>
                </div>
            </section>
        )
    }

    const renderAccessibility = () => {
        return (
            <section className="py-8 sm:py-16 md:py-32 bg-purple-soft">
                <div className="bg-waves"></div>
                <div className="max-w-7xl px-4 sm:px-8 lg:mx-auto">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-16">
                        <div className="">
                            <img src="/bg/cell.svg" alt="Reportes" className="mb-16" />
                        </div>
                        <div>
                            <h3 className="tracking-tight font-extrabold text-right text-purple text-shadow mb-1 text-1xl md:text-2xl">Funcionalidad</h3>
                            <h2 className="tracking-tight font-extrabold text-black mb-2 text-right text-3xl md:text-4xl">Acceso cuando y donde sea</h2>
                            <p className="text-right text-md mb-6">Consulred es una aplicación basada 100% en la núbe, lo que<br className="hidden lg:inline-block"/> te garantiza acceso desde cualquier lugar a la hora que sea</p>
                            <ul>
                                <li className="text-right text-shadow pr-6 pb-5">Accede a la información de tus pacientes, citas y resportes a la hora  y desde donde sea<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                                <li className="text-right text-shadow pr-6 pb-5">Núnca perderás la informacion de tus pacientes, ya que los guardaremos con la mayor seguridad y respaldos díarios<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                                <li className="text-right text-shadow pr-6 pb-5">Podrás acceder desde tu PC, Laptop o desde tu Smartphone, ya sea Android o IPhone<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                                <li className="text-right text-shadow pr-6 pb-5">Nuestro sistema basado 100% en la nube y auto administrado pemite que siempre trabaje con la última vesión, sin instalaciones ni actualizaciones<i className="fa fa-check-circle text-green text-lg absolute  right-0 top-0 text-shadow-none" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-purple text-lg box-shadow text-white text-shadow block sm:inline-block sm:px-16">PRUEBA GRÁTIS</a>
                    </div>
                </div>
            </section>
        )
    }

    const renderPrice = () => {
        return (
            <section className="py-8 sm:py-16 md:py-32">
                <div className="bg-waves"></div>
                <div className="max-w-7xl px-4 sm:px-8 lg:mx-auto">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-16">
                        <div className="order-last lg:order-first">
                            <h3 className="tracking-tight font-extrabold text-left text-purple text-shadow mb-1 text-1xl md:text-2xl">Precios promocionales</h3>
                            <h2 className="tracking-tight font-extrabold text-black mb-2 text-left text-3xl md:text-4xl">Acceso mensual por médico</h2>
                            <p className="text-left text-md mb-6">Obtendrás los siguientes beneficios</p>
                            <ul>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Acceso completo a toda la funcionalidad</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Respaldos automáticos todos los días</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Acceso desde cualquíer dispositivo</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Sin límite de pacientes o consultas</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Sin contratos, puedes cancelar en cualquier momento</li>
                                <li className="text-left text-shadow pl-6 pb-5"><i className="fa fa-check-circle text-green text-lg absolute  left-0 top-0 text-shadow-none" aria-hidden="true"></i>Soporte premiun vía email y whatsapp</li>
                            </ul>
                            <small className="text-mutted text-sm">* Las plantillas personalizadas tiene un costo adicional</small>
                        </div>
                        <div className="flex justify-items-center items-center my-32">
                            <img src="/bg/buble1.svg" className="block absolute max-h-96 max-w-96" />
                            <div className="inline-block ml-8 lg:ml-0">
                                <span className="text-6xl font-thin absolute -left-8 top-0">$</span>
                                <span className=" text-8xl lg:text-9xl font-bold">199</span>
                                <div className="inline-block">
                                    <span  className="text-4xl lg:text-7xl font-thin">/</span>
                                    <span className="inline-block">
                                        <div className="block -mb-2 ml-1 text-xs" >MXN</div>
                                        <span  className="text-3xl lg:text-4xl font-thin inline-block">mes</span>
                                    </span>
                                    
                                </div>
                                <p className="text-right"><small className="text-mutted">* Precios en pesos mexicanos</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-purple text-lg box-shadow text-white text-shadow block sm:inline-block sm:px-16">SUSCRIBIRCE</a>
                    </div>
                </div>
            </section>
        )
    }

    return render()
}
export default Home