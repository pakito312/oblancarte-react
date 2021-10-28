import React, { useEffect, useState } from 'react'
import BookNavbar from '../../../../components/BookNavbar'
import { ArrowRightIcon, ArrowLeftIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Footer from '../../../../components/Footer'
import Typist from 'react-typist';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link'
import StaticBuy from '../../../../components/StaticBuy';
import Image from 'next/image'
import Chuleta from '../../../../components/Chuleta';
import Accordion from '../../../../components/Accordion';
import OurWaranty from '../../../../components/OurWaranty';
import AboutMe from '../../../../components/AboutMe';
import PriceTable from '../../../../components/PriceTable';
import UserReviewBox from '../../../../components/UserReviewBox'
import BookHorizontalCard from '../../../../components/BookHorizontalCard'
import Timer from 'react-compound-timer'
import Modal from '../../../../components/Modal'
import DownloadDemo from '../../../../components/DownloadDemo'

const SoftwareArchitecturePage = (props) => {

    const [showDemoPopup, setShowDemoPopup] = useState(false)
    const [showChuletaPopup, setShowChuletaPopup] = useState(false)

    const goto = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const render = () => {
        return (
            <div>
                <BookNavbar />
                {hero()}
                {customers()}
                {content()}
                {resumen()}
                {indice()}
                {estilos()}
                {patterns()}
                {project()}
                {chuleta()}
                {faqs()}
                {price()}
                <OurWaranty />
                <AboutMe />
                {reviews()}
                {ourBooks()}
                <Footer />
                <StaticBuy timeleft={props.timeleft} callToAction="Más información" to="/books/software-architecture/es/checkout" />
                {showDemoPopup &&
                    <Modal>
                        <DownloadDemo image="/books/arquitectura.png" imageWidth={180} imageHeight={250} onClose={e => setShowDemoPopup(false)} product={3} redirectTo={`/books/software-architecture/es/download-demo?book=Arquitectura%20de%20software`} />
                    </Modal>
                }
                {showChuletaPopup &&
                    <Modal>
                        <DownloadDemo image="/books/arquitectura/chuleta/chuletas.png" imageWidth={250} imageHeight={180} onClose={e => setShowChuletaPopup(false)} product={6} redirectTo={`/books/software-architecture/es/download-demo?book=Chuleta%20definitiva%20de%20software`} />
                    </Modal>
                }
                {scripts()}
            </div>
        )
    }

    const hero = () => {
        return (
            <main id="init" className="relative bg-purple-500 xl:book-hero">
                <img src="/patterns/waves-purple-1.svg" className="absolute left-0 bottom-0 h-full " />
                <img src="/patterns/bubble-purple-1.svg" className="absolute right-0 bottom-0" />
                <img src="/patterns/expres-purple.svg" className="absolute right-20 bottom-1/2" />

                <div className="layout flex flex-col-reverse md:flex-row h-full md:pt-16">
                    <div className="flex justify-center items-center z-10 flex-1 ">
                        <div className="mb-16 mt-10">
                            <p className=" text-white mb-2 text-xl md:text-3xl lg:text-4xl">Introducción a la</p>
                            <h1 className="font-poppins text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 lg:-mr-40">
                                <Typist cursor={{ hideWhenDone: true }} >Arquitectura de software</Typist>
                            </h1>

                            <Timer initialTime={props.timeleft} direction="backward">
                                {(props) => (<p className="inline-block rounded-full py-1 px-4 bg-orange-ligth text-orange mb-4 text-sm md:text-base">Está oferta finaliza en: <Timer.Days />d <Timer.Hours />h <Timer.Minutes />m <Timer.Seconds />s 🔥</p>)}
                            </Timer>

                            <div className="flex items-center mb-6 ">
                                <span className="text-xl lg:text-2xl text-gray-300 font-bold mr-8"><del>$165.00 USD</del></span>
                                <h2 className="font-bold text-2xl lg:text-5xl  text-green-500 inline-block ">$59.00 USD</h2>
                            </div>

                            <div className="flex flex-row">
                                <div className="mr-4 lg:pr-8 lg:mr-8 border-solid lg:border-white lg:border-r">
                                    <p className="sub3 text-sm lg:text-lg text-white font-bold mb-2">Formato:</p>
                                    <p className="sub3 text-sm lg:text-lg text-white font-bold ">PDF</p>
                                </div>
                                <div className="mr-4 lg:pr-8 lg:mr-8 border-solid lg:border-white lg:border-r">
                                    <p className="sub3 text-sm lg:text-lg text-white font-bold mb-2">Páginas:</p>
                                    <p className="sub3 text-sm lg:text-lg text-white font-bold ">500+</p>
                                </div>
                                <div className="">
                                    <p className="sub3 text-sm lg:text-lg text-white font-bold mb-2">Código disponible:</p>
                                    <p className="sub3 text-sm lg:text-lg text-white font-bold ">Java/React</p>
                                </div>
                            </div>

                            <p className="body1 text-white mt-8 text-lg text-justify md:text-left md:mr-40">Convierte en un arquitecto de software con la guía más completa en español, donde hablaremos de los principales estilos y patrones arquitectónicos.</p>
                            <div className="">
                                <Link href="/books/software-architecture/es/checkout">
                                    <a className="btn btn-green-light shadow-green lg:btn-md xl:btn-lg round block w-full md:w-auto md:inline-block text-center  mt-10 mr-8" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                                </Link>

                                <button onClick={e => setShowDemoPopup(true)} className="btn btn-outline btn-green-light lg:btn-md xl:btn-lg round block w-full md:w-auto md:inline-block text-center mt-4 lg:mt-10" >Muestra gratis <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center content-end mt-0 flex-1">
                        <div className="h-full lg:h-auto lg:-ml-20 xl:-ml-12">
                            <img src="/books/arquitectura.png" alt="oscar blancarte" className="block mt-20 md:mt-0 lg:ml-28 w-[40vh] md:w-[40vh] lg:w-[50vh] xl:w-[60vh] mb-[-50px]" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    const customers = () => {
        const settings = {
            swipeToSlide: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear"
        }

        return (
            <section className="">
                <div className="layout pb-4: pb-8">
                    <h2 className="text-xl md:text-3xl mb-8 text-gray-900 text-center font-semibold">Algunos de nuestros lectores trabajan en</h2>
                </div>

                <div>
                    <Slider className="slider variable-width w-full overflow-hidden" {...settings}>
                        <div className="slide mx-8">
                            <img src="/brands/accenture.svg" alt="Acceenture" className="h-10 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/un.svg" alt="UN" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/verizon.svg" alt="verizon" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/pucp.svg" alt="PUCP" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/tec.svg" alt="Instituto tecnológico" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/unam.svg" alt="UNAM" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/capgemini.svg" alt="Capgemini" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/ieee.svg" alt="IEEE" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/aol.svg" alt="AOL" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/telefonica.svg" alt="Telefonica" className="h-8 lg:h-10" />
                        </div>
                        <div className="slide mx-8">
                            <img src="/brands/bcp.svg" alt="Banco de crédito del Perú" className="h-8 lg:h-10" />
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }


    const content = () => {
        return (
            <div className="bg-gray-100">
                <section className="layout overflow-hidden ">
                    <img src="/patterns/bubble-5.svg" className="absolute bottom-0 top-10" />
                    <img src="/patterns/bubble-2.svg" className="absolute bottom-0 top-10" />
                    <img src="/patterns/bubble-5.svg" className="absolute bottom-1/2 left-3/4" />
                    <div className="layout mb-16">
                        <hgroup>
                            <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center font-semibold">¿Qué encontrarás en este libro?</h2>
                        </hgroup>
                    </div>

                    <div className="layout max-w-5xl">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="flex flex-col flex-1 items-center text-center mb-8">
                                <img src="/icons/benefits/patrones-estilos.svg" alt="Estilos y patrones de diseño" className="inline-block w-20 pb-4" />
                                <p className="font-semibold text-xl pb-4">Principales estilos y patrones arquitectónicos</p>
                                <p>Analizaremos la diferencia entre patrones y estilos arquitectónicos, con más de 20 casos explicados a la perfección.</p>
                            </div>
                            <div className="flex flex-col flex-1 items-center text-center mb-8">
                                <img src="/icons/benefits/atributos.svg" alt="Estilos y patrones de diseño" className="inline-block w-20 pb-4" />
                                <p className="font-semibold text-xl pb-4">Atributos de calidad</p>
                                <p>Aprenderemos a identificar y garantizar que el software cumpla con los principales atributos de calidad, los cuales son la base para crear aplicaciones robustas.</p>
                            </div>
                            <div className="flex flex-col flex-1 items-center text-center mb-8">
                                <img src="/icons/benefits/principios.svg" alt="Estilos y patrones de diseño" className="inline-block w-20 pb-4" />
                                <p className="font-semibold text-xl pb-4">Principales principio de diseño</p>
                                <p>Los principios de diseño son técnicas que nos ayudarán a diseñar soluciones más robustas, cohesivas, desacopladas, escalables y con una menor propensión a errores.</p>
                            </div>
                        </div>
                    </div>

                    <div className="layout max-w-5xl">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="flex flex-col flex-1 items-center text-center mb-8">
                                <img src="/icons/benefits/conceptos.svg" alt="Estilos y patrones de diseño" className="inline-block w-20 pb-4" />
                                <p className="font-semibold text-xl pb-4">Decenas de nuevos conceptos y términos</p>
                                <p>Este libro cuenta con varias decenas de nuevos conceptos y terminología que utilizamos en la arquitectura de software y que son fundamentales para tener un vocabulario común.</p>
                            </div>
                            <div className="flex flex-col flex-1 items-center text-center mb-8">
                                <img src="/icons/benefits/arquitectura.svg" alt="Estilos y patrones de diseño" className="inline-block w-20 pb-4" />
                                <p className="font-semibold text-xl pb-4">Introducción a la arquitectura de software</p>
                                <p>Comenzaremos explicando los orígenes de la arquitectura de software y como este ha evolucionado hasta convertirse en lo que hoy es, incluyendo del rol del arquitecto de software en la actualidad.</p>
                            </div>
                            <div className="flex flex-col flex-1 items-center text-center mb-8">
                                <img src="/icons/benefits/proyecto.svg" alt="Estilos y patrones de diseño" className="inline-block w-20 pb-4" />
                                <p className="font-semibold text-xl pb-4">Proyecto final</p>
                                <p>Dado que la arquitectura es en su mayoría conceptos abstractos y difíciles de imaginar, hemos agregado un proyecto final que implementará muchos de los conceptos, patrones y estilos arquitectónicos que explicamos en este libro.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const resumen = () => {
        return (
            <div className="overflow-hidden">
                <img src="/patterns/waves-4.svg" className="absolute w-full bottom-0" />
                <img src="/patterns/waves-4.svg" className="absolute w-full top-0" />
                <section className=" overflow-hidden">
                    <div className="layout">
                        <hgroup>
                            <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center font-semibold">Acerca del libro</h2>
                            <h3 className="text-sm md:text-md lg:text-xl mb-8 text-gray-900 text-center">Esta es una breve descripción del libro</h3>
                        </hgroup>
                    </div>

                    <div className="layout max-w-4xl">
                        <div className="rounded-xl shadow-gray p-4 md:p-10 bg-white mx-4 md:mx-0">
                            <p className="sub1 font-semibold mb-8 text-base md:text-2xl">Una breve reseña por parte del autor</p>
                            <div>
                                <p className="mb-6 text-justify">Desde los inicios de la ingeniería software, los científicos de la computación lucharon por tener formas más simples de realizar su trabajo, ya que las cuestiones más simples, cómo imprimir un documento, guardar un archivo o compilar el código, era una tarea que podría tardar desde un día hasta una semana.</p>
                                <p className="mb-6 text-justify">Hoy en día, contamos con herramientas que van indicando en tiempo real si tenemos un error de sintaxis en nuestro código, pero no solo eso, además, son los suficientemente inteligentes para a completar lo que vamos escribiendo, incluso, nos ayudan a detectar posibles errores en tiempo de ejecución.</p>
                                <p className="mb-6 text-justify">La realidad es que a medida que la tecnología avanza, tenemos cada vez más herramientas a nuestra disposición, como lenguajes de programación, IDE’s, editores de código, frameworks, librerías, plataformas en la nube y una gran cantidad de herramientas que nos hacen la vida cada vez más simple, y por increíble que parezca, los retos de hoy en día no son compilar el código, imprimir una hoja, guardar en una base de datos; tareas que antes eran muy difíciles; lo curioso es que hoy en día hay tantas alternativas para hacer cualquier cosa, que por increíble que parezca, el reto de un programador hoy en día es decidirse por qué tecnología irse, eso es increíble, tenemos tantas opciones para hacer lo que sea, que el reto no es hacer las cosas, si no con que tecnologías la aremos.</p>
                                <p className="mb-6 text-justify">Ahora bien, yo quiero hacerte una pregunta, ¿crees que hacer un programa hoy en días es más fácil que hace años?</p>
                                <p className="mb-6 text-justify">Seguramente a todos los que les haga esta pregunta concordarán con que hoy en día es más fácil, sin embargo, y por increíble que parezca, el hecho de que las tecnologías sean cada vez más simples, nos trae nuevas problemáticas y justo aquí donde quería llegar.</p>
                                <p className="mb-6 text-justify">A medida que las tecnologías son más simples y más accesibles para todas las personas del mundo, las aplicaciones se enfrentan a retos que antes no existían, como la concurrencia, la seguridad, la alta disponibilidad, el performance, la usabilidad, la reusabilidad, testabilidad, funcionalidad, modificabilidad, portabilidad, integridad, escalabilidad, etc, etc. Todos estos son conceptos que prácticamente no existían en el pasado, porque las aplicaciones se desarrollaban para una audiencia muy reducida y con altos conocimientos técnicos, además, se ejecutaban en un Mainframe, lo que reducía drásticamente los problemas de conectividad o intermitencia, pues todo se ejecuta desde el mismo servidor.</p>
                            </div>
                            <div className="text-center">
                                <Link href="/books/software-architecture/es/checkout">
                                    <a className="btn btn-green shadow-green lg:btn-md xl:btn-lg round block w-full md:w-auto md:inline-block text-center mt-10 mr-8" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }


    const indice = () => {
        return (
            <div className="overflow-hidden bg-dark-blue">
                <img src="/patterns/waves-4.svg" className="absolute w-full bottom-0" />
                <img src="/patterns/waves-4.svg" className="absolute w-full top-0" />
                <section className=" overflow-hidden">
                    <div className="layout">
                        <hgroup>
                            <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-white text-center font-semibold">Índice del libro</h2>
                            <h3 className="text-sm md:text-md lg:text-xl mb-8 text-white text-center">El libro cuenta con más de 500 páginas.</h3>
                        </hgroup>
                    </div>
                    <div className="layout max-w-5xl ">
                        <div className="rounded-xl shadow-gray bg-gray-900 p-4 md:p-10 mx-4 md:mx-0 text-white mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <div>
                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold  text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">1</div>
                                            <p className="font-bold text-xl font-poppins">Por donde empezar</p>
                                        </div>
                                        <ul>
                                            <li className="mb-4 text-sm">
                                                ¿Qué es la arquitectura de software?
                                            </li>
                                            <li className="mb-4 text-sm">
                                                ¿Qué son los patrones de diseño?
                                            </li>
                                            <li className="mb-4 text-sm">
                                                ¿Qué son los patrones arquitectónicos?
                                            </li>
                                            <li className="mb-4 text-sm">
                                                ¿Qué son los estilos arquitectónicos?
                                            </li>
                                            <li className="mb-4 text-sm">
                                                La relación entre patrones de diseño, arquitectónicos y estilos arquitectónicos
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">2</div>
                                            <p className="font-bold text-xl font-poppins">Comprendiendo algunos conceptos</p>
                                        </div>
                                        <ul>
                                            <li className="mb-4 text-sm">Encapsulación</li>
                                            <li className="mb-4 text-sm">Acoplamiento</li>
                                            <li className="mb-4 text-sm">Cohesión</li>
                                            <li className="mb-4 text-sm">Don't repeat yourself (DRY)</li>
                                            <li className="mb-4 text-sm">Separation of concerns (SoC)</li>
                                            <li className="mb-4 text-sm">La Ley de Demeter</li>
                                            <li className="mb-4 text-sm">Keep it simple, Stupid! (KISS)</li>
                                            <li className="mb-4 text-sm">Inversion of control (IoC)</li>
                                            <li className="mb-4 text-sm">S.O.L.I.D</li>
                                            <li className="mb-4 text-sm">Single responsibility principle (SRP)</li>
                                            <li className="mb-4 text-sm">Open/closed principle (OCP)</li>
                                            <li className="mb-4 text-sm">Liskov substitution principle (LSP)</li>
                                            <li className="mb-4 text-sm">Interface segregation principle (ISP)</li>
                                            <li className="mb-4 text-sm">Dependency inversion principle (DIP)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold  text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">3</div>
                                            <p className="font-bold text-xl font-poppins">Atributos de calidad</p>
                                        </div>
                                        <ul>
                                            <ul>
                                                <li className="mb-4 text-sm">Importancia de los atributos de calidad</li>
                                                <li className="mb-4 text-sm">Clasificación de los atributos de calidad</li>
                                                <li className="mb-4 text-sm">Performance (rendimiento)</li>
                                                <li className="mb-4 text-sm">Security (Seguridad)</li>
                                                <li className="mb-4 text-sm">Availability (disponibilidad) </li>
                                                <li className="mb-4 text-sm">Functionality (funcionalidad)</li>
                                                <li className="mb-4 text-sm">Usabilidad</li>
                                                <li className="mb-4 text-sm">Modificabilidad</li>
                                                <li className="mb-4 text-sm">Portabilidad</li>
                                                <li className="mb-4 text-sm">Reusabilidad</li>
                                                <li className="mb-4 text-sm">Testabilidad</li>
                                                <li className="mb-4 text-sm">Escalabilidad</li>
                                            </ul>
                                        </ul>
                                    </div>
                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold  text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">4</div>
                                            <p className="font-bold text-xl font-poppins">Estilos arquitectónicos</p>
                                        </div>
                                        <ul>
                                            <ul>
                                                <li className="mb-4 text-sm">Monolítico</li>
                                                <li className="mb-4 text-sm">Cliente-Servidor </li>
                                                <li className="mb-4 text-sm">Peer-to-peer (P2P)</li>
                                                <li className="mb-4 text-sm">Arquitectura en Capas</li>
                                                <li className="mb-4 text-sm">Microkernel</li>
                                                <li className="mb-4 text-sm">Service-Oriented Architecture (SOA)</li>
                                                <li className="mb-4 text-sm">Microservicios</li>
                                                <li className="mb-4 text-sm">Event Driven Architecture (EDA)</li>
                                                <li className="mb-4 text-sm">Representational State Transfer (REST)</li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold  text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">5</div>
                                            <p className="font-bold text-xl font-poppins">Proyecto E-Commerce</p>
                                        </div>
                                        <ul>
                                            <li className="mb-4 text-sm">El Proyecto E-Commerce</li>
                                            <li className="mb-4 text-sm">Instalación</li>
                                            <li className="mb-4 text-sm">Iniciar la aplicación</li>
                                            <li className="mb-4 text-sm">Cómo utiliza la aplicación</li>
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold  text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">6</div>
                                            <p className="font-bold text-xl font-poppins">Patrones arquitectónicos</p>
                                        </div>
                                        <ul>
                                            <li className="mb-4 text-sm">Data Transfer Object (DTO)</li>
                                            <li className="mb-4 text-sm">Data Access Object (DAO)</li>
                                            <li className="mb-4 text-sm">Polling</li>
                                            <li className="mb-4 text-sm">Webhook</li>
                                            <li className="mb-4 text-sm">Load Balance</li>
                                            <li className="mb-4 text-sm">Service Registry</li>
                                            <li className="mb-4 text-sm">Service Discovery</li>
                                            <li className="mb-4 text-sm">API Gateway</li>
                                            <li className="mb-4 text-sm">Access token</li>
                                            <li className="mb-4 text-sm">Single Sign On (Inicio de sesión único)</li>
                                            <li className="mb-4 text-sm">Store and forward</li>
                                            <li className="mb-4 text-sm">Circuit Breaker</li>
                                            <li className="mb-4 text-sm">Log aggregation </li>
                                        </ul>
                                    </div>
                                    <div className="mb-8">
                                        <div className="flex items-center mb-4 text-green-500">
                                            <div className="flex justify-center items-center border-2 font-bold  text-xl border-green-500  p-2 w-8 h-8 m-0 rounded-full mr-2">7</div>
                                            <p className="font-bold text-xl font-poppins">Conclusiones</p>
                                        </div>
                                        <ul>
                                            <li className="mb-4 text-sm">Comentarios finales del autor</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center font-semibold text-green-500">Incluye un proyecto final basado en Microservicios</p>
                        </div>
                        <div className="rounded-xl shadow-gray bg-gray-900 p-4 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="flex flex-col md:flex-row items-center ">
                                    <Timer initialTime={props.timeleft} direction="backward" >
                                        {(props) => (<p className="inline-block rounded-full py-3 px-4 bg-orange-ligth text-orange text-sm md:text-base mr-4 ">Finaliza en: <Timer.Days />d <Timer.Hours />h <Timer.Minutes />m <Timer.Seconds />s 🔥</p>)}
                                    </Timer>
                                    <div>
                                        <p className="text-sm "><del>165.00 USD</del></p>
                                        <p className="text-green-300 font-semibold text-2xl">59.00 USD</p>
                                    </div>
                                </div>
                                <div>
                                    <Link href="/books/software-architecture/es/checkout">
                                        <a className="btn btn-green-light shadow-green lg:btn-md xl:btn-lg round block md:inline-block text-center" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const estilos = () => {
        return (
            <div className="overflow-hidden">

                <section className=" overflow-hidden">
                    <div className="layout max-w-7xl px-4 mb-16">
                        <hgroup>
                            <h2 className="text-xl font-poppins md:text-4xl mb-8 text-gray-900 text-center font-semibold">Estilos arquitectónicos</h2>
                            <h3 className="text-sm md:text-md lg:text-base mb-8 text-gray-900 text-center">Un estilo arquitectónico establece un marco de referencia a partir del cual es posible construir aplicaciones que comparten un conjunto de atributos y características mediante el cual es posible identificarlos y clasificarlos.</h3>
                        </hgroup>
                    </div>

                    <div>
                        <div>
                            <img src="/patterns/bubble-gray-1.svg" className="absolute top-0 left-10 w-72" />
                            <div className="layout max-w-5xl mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Monolítico</p>
                                        <p className="text-justify mb-4">El estilo arquitectónico monolítico consiste en crear una aplicación autosuficiente que contenga absolutamente toda la funcionalidad necesaria para realizar la tarea para la cual fue diseñada, sin contar con dependencias externas que complementen su funcionalidad. En este sentido, sus componentes trabajan juntos, compartiendo los mismos recursos y memoria. En pocas palabras, una aplicación monolítica es una unidad cohesiva de código.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/monolitico.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row  gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Cliente-Servidor</p>
                                        <p className="text-justify mb-4">Cliente-Servidor es uno de los estilos arquitectónicos distribuidos más conocidos, el cual está compuesto por dos componentes, el proveedor y el consumidor. El proveedor es un servidor que brinda una serie de servicios o recursos los cuales son consumidos por el Cliente.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/cliente-servidor.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-2.svg" className="absolute top-0 left-2/4 w-72" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row  gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Peer-to-peer (P2P)</p>
                                        <p className="text-justify mb-4">El estilo arquitectónico Red entre iguales (Peer-to-peer, P2P) es una red de computadoras donde todos los dispositivos conectados a la red actúan como cliente y servidor al mismo tiempo. En esta arquitectura no es necesario un servidor central que administración</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/p2p.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-white-2.svg" className="absolute top-0 left-1/4 w-48 " />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row  gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Arquitectura en capas</p>
                                        <p className="text-justify mb-4">La arquitectura en capas es una de las más utilizadas, no solo por su simplicidad, sino porque también es utilizada por defecto cuando no estamos seguros que arquitectura debemos de utilizar para nuestra aplicación.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/layers.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/line-1.svg" className="absolute top-0 left-0 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row  gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Microkernel</p>
                                        <p className="text-justify mb-4">El estilo arquitectónico de Microkernel o también conocido como arquitectura de Plug-in, permite crear aplicaciones extensibles, mediante la cual es posible agregar nueva funcionalidad mediante la adición de pequeños plugins que extienden la funcionalidad inicial del sistema.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/microkernel.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Service-Oriented Architecture (SOA)</p>
                                        <p className="text-justify mb-4">SOA es un estilo arquitectónico que se apoya en la creación de servicios para lograr la integración de las aplicaciones, exponiendo servicios de alto nivel con ayuda de estándares abiertos para poder ser consumidos por cualquier cliente sin importar la tecnología.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/soa.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-3.svg" className="absolute top-0 left-1/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Microservicios</p>
                                        <p className="text-justify mb-4">El estilo de Microservicios consiste en crear pequeños componentes de software que solo hacen una tarea, la hace bien y son totalmente autosuficientes, lo que les permite evolucionar de forma totalmente independiente del resto de componentes.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/microservicios.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/waves-white-3.svg" className="absolute top-0 left-0  w-full" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Event Driven Architecture (EDA)</p>
                                        <p className="text-justify mb-4">La arquitectura dirigida por eventos o simplemente EDA (por sus siglas en inglés) es una arquitectura asíncrona y distribuida, pensada para crear aplicaciones altamente escalables. En una arquitectura EDA los componentes no se comunican de forma tradicional, en la cual se establece comunicación de forma síncrona, se obtiene una respuesta y se procede con el siguiente paso. En esta arquitectura, se espera que las aplicaciones lancen diversos “eventos” para que otros componentes puedan reaccionar a ellos, procesarlos y posiblemente generar nuevos eventos para que otros componentes continúen con el trabajo.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/eda.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-4.svg" className="absolute top-0 left-2/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Representational State Transfer (REST)</p>
                                        <p className="text-justify mb-4">REST es un conjunto de restricciones que crean un estilo arquitectónico y que es común utilizarse para crear aplicaciones distribuidas. REST fue nombrado por primera vez por Roy Fielding en el año 2000 donde definió a REST como.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/estilos/rest.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="layout text-center">
                            <Link href="/books/software-architecture/es/checkout">
                                <a className="btn btn-green-light shadow-green lg:btn-md xl:btn-lg round block md:inline-block text-center" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const patterns = () => {
        return (
            <div className="overflow-hidden bg-gray-100">

                <section className=" overflow-hidden">
                    <div className="layout max-w-7xl px-4 mb-16">
                        <hgroup>
                            <h2 className="text-xl font-poppins md:text-4xl mb-8 text-gray-900 text-center font-semibold">Patrones arquitectónicos</h2>
                            <h3 className="text-sm md:text-md lg:text-base mb-8 text-gray-900 text-center">los patrones arquitectónicos se distinguen de los patrones de diseño debido a que tiene un alcance global sobre los componentes, ya que afectan su funcionamiento, su integración o la forma en que se comunican con otros componentes.</h3>
                        </hgroup>
                    </div>

                    <div>
                        <div>
                            <img src="/patterns/bubble-2.svg" className="absolute top-0 left-0 w-1/2" />
                            <div className="layout max-w-5xl mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Data Transfer Object (DTO)</p>
                                        <p className="text-justify mb-4">El patrón DTO tiene como finalidad la creación de objetos planos (POJO) con una serie de atributos que puedan ser enviados o recuperados del servidor en una sola invocación, de tal forma que un DTO puede contener información de múltiples fuentes o tablas y concentrarlas en una única clase simple.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/dto.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Data Access Object (DAO)</p>
                                        <p className="text-justify mb-4">El patrón Arquitectónico Data Access Object (DAO) permite separar la lógica de acceso a datos de los Objetos de negocios (Bussines Objects), de tal forma que el DAO encapsula toda la lógica de acceso de datos al resto de la aplicación.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/dao.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-3.svg" className="absolute top-0 left-2/4 w-1/2" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Polling</p>
                                        <p className="text-justify mb-4">El polling consiste en realizar una serie de consultar repetitivas y con una periodicidad programada en búsqueda de nueva información, de esta forma, el sistema interesado tendrá que ir al servidor y preguntar si hay nuevas actualizaciones, si las hay, el servidor las retornará, en otro caso, el cliente seguirá preguntando cada x tiempo hasta que encuentre nuevas actualizaciones.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/polling.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Webhook</p>
                                        <p className="text-justify mb-4">Un webhook o también llamado API de devolución de llamada web es un patrón que permite proporcionar notificaciones a otras aplicaciones en tiempo real.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/webhook.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/line-1.svg" className="absolute top-0 left-0 w-full" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Load balancer</p>
                                        <p className="text-justify mb-4">El patrón load balance o equilibrio de cargas consiste en repartir la carga de trabajo entre un conjunto de servidores que trabajan en conjunto para dar la impresión que trabajan como un solo servidor, incrementando el poder de procesamiento a medida que se agregan más servidores.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/load-balancer.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Service Registry</p>
                                        <p className="text-justify mb-4">El patrón Service Registry propone crear un servidor centralizado donde todos los servicios se registren al momento de encender, de esta forma, cada servicio le tendrá que enviar la dirección IP, el puerto en el que responde al servidor y finalmente, el identificador del servicio, que por lo general es un nombre alfanumérico que ayude a identificarlo, de esta forma, el servidor central o registro, sabrá exactamente dónde está cada servicio disponible.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/service-registry.png" alt="Estilo monolítico" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-3.svg" className="absolute top-0 left-1/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Service discovery</p>
                                        <p className="text-justify mb-4">El Service Discovery es un componente que se encarga de recuperar del Service Registry todas las instancias de los servicios disponibles y realizar el balance de cargas, sin embargo, existen dos formas en la que este descubrimiento se pueda dar, del lado del cliente y del lado del servidor.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/service-discovery.png" alt="patrón service discovery" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">API Gateway</p>
                                        <p className="text-justify mb-4">El API Gateway funciona como una compuerta del API al mundo, desde la cual podemos exponer nuestros Microservicios personalizando la experiencia para cada cliente, de esta forma, podemos indicar que servicios exponer, el formato de los datos retornados, e incluso, controlar el acceso, además, nos permite proporcionar un único punto de acceso para toda el API, lo que podemos aprovechar para agregar la seguridad que sea necesaria.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/api-gateway.png" alt="patrón api gateway" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-5.svg" className="absolute top-0 left-1/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Access token</p>
                                        <p className="text-justify mb-4">El acceso por Tokens es una estrategia que se utiliza para aumentar la seguridad de las aplicaciones, evitando que los usuarios tengan que enviar constantemente sus credenciales al servidor, al mismo tiempo que se reducen drásticamente la posibilidad de que sea interceptada o sea replicada a otros sistemas.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/access-token.png" alt="Patrón single Sign On" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/patterns/bubble-4.svg" className="absolute top-0 left-2/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Single Sign On (Inicio de sesión único)</p>
                                        <p className="text-justify mb-4">El SSO es una estrategia que permite separar la lógica de autenticación de la aplicación en un componente independiente que tiene cómo única responsabilidad la de autenticar a los usuarios, de esta forma, todos los usuarios son redireccionados al SSO para para la autenticación.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/sso.png" alt="Patrón single Sign On" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <img src="/patterns/wave-white-1.svg" className="absolute top-0 left-0 w-full" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Store and forward</p>
                                        <p className="text-justify mb-4">El patrón Store and forward consiste en el almacenamiento local de los mensajes para su envío a un servidor remoto, de esta forma, el mensaje se almacena primeramente de forma local para impedir que se pierda, luego, el mensaje local es reenviado al servidor remoto cuando este puede aceptar el mensaje, de esta forma se garantiza la entrega del mensaje incluso si la aplicación destino no está en condiciones de recibirlo en ese momento.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/store-and-forward.png" alt="Patrón store and forward" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <img src="/patterns/bubble-2.svg" className="absolute top-0 left-2/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Circuit breaker</p>
                                        <p className="text-justify mb-4">El patrón Circuit Breaker es muy parecido a un fusible, el cual se funde para evitar que una descarga eléctrica afecte al circuito, de esta misma forma, Circuit Breaker permite abrir el circuito para evitar que un componente que está fallando se ejecute y en su lugar, realizamos una acción secundaria para mitigar el error.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/circuit-breaker.png" alt="Patrón circuit breaker" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/patterns/bubble-2.svg" className="absolute top-0 left-1/4 w-96" />
                            <div className="layout max-w-5xl  mb-16">
                                <div className="flex flex-col-reverse md:flex-row gap-4">
                                    <div className="col-span-4 flex-1">
                                        <p className="font-poppins font-semibold text-2xl mb-4">Log aggregation</p>
                                        <p className="text-justify mb-4">El patrón Log Aggregation permite recopilar y homologar los logs producidos por diferentes servicios distribuidos de tal forma que puedan ser analizados de forma simple con una trazabilidad completa de punta a punta, evitando tener que ir a buscar los logs directamente al sistema operativo.</p>
                                        <Link href="#">
                                            <a className="font-poppins text-green-600">Leer más <ExternalLinkIcon className="h-5 w-5 inline-block ml-2" /></a>
                                        </Link>
                                    </div>
                                    <div className="col-span-2 flex-1 text-right">
                                        <Image width="504" height="304" src="/books/arquitectura/landing/patrones/log-aggregation.png" alt="Patrón log aggregation" className="w-96 inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="layout text-center">
                            <Link href="/books/software-architecture/es/checkout">
                                <a className="btn btn-green-light shadow-green lg:btn-md xl:btn-lg round block md:inline-block text-center" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const project = () => {
        return (
            <div className="overflow-hidden">
                <img src="/patterns/bubble-3.svg" alt="bubble" className="absolute top-10 right-10" />
                <img src="/patterns/waves-3.svg" alt="bubble" className="absolute bottom-10 left-0 w-full" />
                <section className=" overflow-hidden">
                    <div className="layout max-w-7xl px-4 mb-16">
                        <hgroup>
                            <h2 className="text-xl font-poppins md:text-4xl mb-8 text-gray-900 text-center font-semibold">Proyecto final</h2>
                            <h3 className="text-sm md:text-md lg:text-base mb-8 text-gray-900 text-center">Desarrollaremos una app completa con un backend basado en microservicios y usando gran parte del conocimiento adquirido en el libro</h3>
                        </hgroup>
                    </div>
                    <div className="layout max-w-7xl px-4 mb-16 text-center">
                        <Image src="/books/arquitectura/landing/proyecto/proyecto-final.png" height="526" width="952" />
                    </div>
                    <div className="layout max-w-7xl px-4 mb-8 text-justify">
                        <p className="mb-4">El proyecto consta de una aplicación de comercio electrónico construido con un potente backend basado en microservicios, el cual es accedido por medio de un API Gateway y autenticación por medio de un Single Sign On (SSO) basado en Tokens.</p>
                        <p className="mb-4">La arquitectura está diseñada para escalar, por lo que soporta múltiples instancias de cada microservicio con la finalidad de balancear la carga, además, todos los servicios implementan el patrón Service Discovery, lo que hace que no sean dependientes de una dirección IP y puerto, lo que hace que podremos escalar el sistema sin necesidad de reiniciar el sistema.</p>
                        <p className="mb-4">El proyecto final está compuesto de un total de 8 microservicios e implementa un total de 13 patrones arquitectónicos que trabajan en perfecta sincronía para dar vida a un API totalmente robusto y escalable capaz de soportar aplicaciones para empresas de clase mundial.</p>
                    </div>
                    <div className="layout text-center mb-16">
                        <Link href="/books/software-architecture/es/checkout">
                            <a className="btn btn-green-light shadow-green lg:btn-md xl:btn-lg round block md:inline-block text-center" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }

    const chuleta = () => {
        return (
            <div className="overflow-hidden">
                <div className="absolute bg-gray-100 h-1/2 bottom-0 left-0 right-0 top-1/2" />
                <div className=" overflow-hidden">
                    <div className="layout max-w-7xl px-4">
                        <Chuleta
                            title="Obten las chuletas definitivas (Grátis)"
                            description="Descarga completamente gratis las chuletas definitvas de patrones arquitectónicos, estilos arquitectónicos y atributos de calidad. Imprímela, compártela y aprovéchala al máximo."
                            image="/books/arquitectura/chuleta/chuletas.png"
                            imageWidth={400} imageHeight={275}
                            onClick={e => setShowChuletaPopup(true)}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const faqs = () => {
        return (
            <div className="overflow-hidden bg-gray-100">
                <img src="/patterns/line-1.svg" alt="line" className="absolute bottom-0 left-0 w-full" />
                <img src="/patterns/bubble-5.svg" alt="line" className="absolute top-3/4 left-1/4" />
                <section className=" overflow-hidden">
                    <div className="layout max-w-7xl px-4 mb-16">
                        <hgroup>
                            <h2 className="text-xl font-poppins md:text-4xl mb-8 text-gray-900 text-center font-semibold">Preguntas frecuentes</h2>
                            <h3 className="text-sm md:text-md lg:text-base mb-8 text-gray-900 text-center">Si no resolvemos tus dudas, puedes escribirnos por medio del chat de la página</h3>
                        </hgroup>
                    </div>
                    <div className="layout max-w-7xl px-4 mb-16">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div>
                                <div className="mb-4">
                                    <Accordion title="¿Qué diferencia tiene este libro con el resto?">
                                        <p>Este es el único libro en español que te enseña como convertirte en arquitecto de software mediante la enseñanza de los principales patrones y estilos arquitectónicos, enseñados con un proyecto final que te permitirá pasar de la teoría a un ejemplo real.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion title="¿Puedo descargar una muestra gratis?">
                                        <p>SI, Al comienzo de esta página podrás encontrar el botón de descarga.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion title="¿El libro cuenta con alguna garantía?">
                                        <p>SI, tienes un plazo de 30 días para solicitar tu reemisor total en caso de que el libro no alcance tus expectativas.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion title="¿Qué conocimientos requiero?">
                                        <p>Es recomendable contar con fuertes conocimientos en cualquier lenguaje de programación y patrones de diseño.</p>
                                    </Accordion>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <Accordion title="¿Qué tan extenso es el libro?">
                                        <p>El libro se conforma de casi 500 páginas, dividido en 9 estilos arquitectónicos, 13 patrones arquitectónicos, 13 principios de diseño, los principales atributos de calidad y más de una centena de nuevos conceptos que te ayudarán a comprender los términos más utilizados por los arquitectos de software.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion title="¿Tengo que pagar por las actualizaciones?">
                                        <p>NO, el libro está en constante evolución, y todas las actualizaciones estarán disponibles de forma gratuita.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion title="¿Qué pasa si tengo una duda?">
                                        <p>La compra del libro incluye acceso a un grupo privado para resolver dudas, donde yo personalmente respondo todas las preguntas.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion title="¿El libro cuenta con un proyecto final?">
                                        <p>SI, todo el libro gira al rededor un proyecto final para crear una aplicación completa con API REST y una arquitectura de microservicios.</p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const price = () => {
        return (
            <div className="overflow-hidden bg-dark-blue">
                <section className="overflow-hidden mb-0 pb-0">
                    <div className="layout max-w-7xl px-4 mb-16">
                        <hgroup>
                            <h2 className="text-xl font-poppins md:text-4xl mb-8 text-white text-center font-semibold">Precio</h2>
                            <h3 className="text-sm md:text-md lg:text-base mb-8 text-white text-center">Recuerda que todos nuestros productos cuenta con la garantía de 30 días.</h3>
                        </hgroup>
                    </div>
                    <div className="layout max-w-7xl px-4 mb-0 waves">
                        <img src="/patterns/waves-dark-1.svg" className="absolute bottom-0 left-0 w-full " />
                        <img src="/patterns/waves-dark-1.svg" className="absolute top-0 left-0 w-full " />
                        <img src="/patterns/bubble-1.svg" className="absolute top-0 right-0 " />
                        <div className="flex flex-col lg:flex-row justify-center">
                            <PriceTable
                                title="Arquitectura de software"
                                realPrice="165.00"
                                price="59.00"
                                timeReminder="10d 12h 40m"
                                link="/books/software-architecture/es/checkout">
                                <ul>
                                    <li className="flex mb-6">
                                        <img src="/icons/check.svg" className="inline-block mr-4" />
                                        <span className="text-sm lg:text-base">Libro de arquitectura de software (PDF)</span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="/icons/check.svg" className="inline-block mr-4" />
                                        <span className="text-sm lg:text-base">Curso de arquitectura de software</span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="/icons/check.svg" className="inline-block mr-4" />
                                        <span className="text-sm lg:text-base">Chuleta de arquitectura de software</span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="/icons/check.svg" className="inline-block mr-4" />
                                        <span className="text-sm lg:text-base">Actualizaciones gratuitas de por vida</span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="/icons/check.svg" className="inline-block mr-4" />
                                        <span className="text-sm lg:text-base">Acceso al grupo privado para resolución de dudas</span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="/icons/check.svg" className="inline-block mr-4" />
                                        <span className="text-sm lg:text-base">Curso de arquitectura de software</span>
                                    </li>
                                </ul>
                            </PriceTable>
                            <Image src="/books/arquitectura/landing/prices2.png" width="680" height="671" />
                        </div>

                    </div>
                </section>
            </div>
        )
    }

    const reviews = () => {

        const PrevArrow = (props) => <span onClick={props.onClick} className="absolute z-10 top-1/2 bg-green-600 p-3 rounded-full hover:bg-green-700 active:bg-green-900"><ArrowLeftIcon className="h-8 w-8 inline-block text-white" /></span>
        const NextArrow = (props) => <span onClick={props.onClick} className="absolute z-10 top-1/2 right-0 bg-green-600 p-3 rounded-full hover:bg-green-700 active:bg-green-900"><ArrowRightIcon className="h-8 w-8 inline-block text-white" /></span>

        const settings = {
            swipeToSlide: true,
            dots: true,
            infinite: true,
            pauseOnHover: true,
            speed: 1000,
            autoplaySpeed: 0,
            cssEase: "linear",
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 3000,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }

        const width = "slide px-2 md:px-8 h-full"

        return (
            <section className=" overflow-hidden">
                <img src="/patterns/waves-4.svg" className="absolute bottom-0 top-0" />
                <div className="layout">
                    <hgroup>
                        <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center font-semibold">Nuestros lectores dicen</h2>
                        <h3 className="text-sm md:text-md lg:text-xl mb-8 text-gray-900 text-center">Algunas de las personas que han tenido la oportunidad de leer mis libros.</h3>
                    </hgroup>
                </div>

                <div className="max-w-7xl px-2 md:mx-auto grid gap-8 grid-cols-1">

                    <Slider className="slider no-shadow variable-width w-full py-8" {...settings}>
                        {props.reviews.map(review => <div className={width}>
                            <UserReviewBox key={review.id} review={{
                                user: review.name,
                                position: review.rol,
                                image: review.avatar,
                                message: review.review,
                                score: review.score
                            }} />
                        </div>)}
                    </Slider>
                </div>

            </section>
        )
    }

    const ourBooks = () => {
        return (
            <div className="" id="books">
                <img src="/patterns/waves-4.svg" className="absolute bottom-0 top-0" />
                <section className="layout overflow-hidden">
                    <div className="layout">
                        <hgroup>
                            <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center font-semibold">Otros de mis libros</h2>
                            <h3 className="text-sm md:text-md lg:text-xl mb-8 text-gray-900 text-center">Algunas de las personas que han tenido la oportunidad de leer mis libros.</h3>
                        </hgroup>
                    </div>
                    <div className="max-w-7xl px-2 md:mx-auto flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <BookHorizontalCard book={{
                                name: "Introducción a los patrones de diseño",
                                extract: "Aprende las majores prácticas de programación y domina los 25 patrones de diseño más importantes",
                                image: "/books/patrones.png",
                                link: "/books/design-patterns/es",
                                realPrice: "165.00",
                                price: "59.00"
                            }} />
                        </div>
                        <div className="flex-1">
                            <BookHorizontalCard book={{
                                name: "Aplicaciones reactivas con React, NodeJS & MongoDB",
                                extract: "Conviértete en FullStack y tanto el backend como el frontend para crear aplicaciones completas",
                                image: "/books/aplicaciones-reactivas.png",
                                link: "/books/aplicaciones-reactivas-con-react-nodejs-mongodb/es",
                                realPrice: "165.00",
                                price: "59.00"
                            }} />
                        </div>
                    </div>
                </section>
            </div>

        )
    }

    const scripts = () => {
        return <>
            <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/5e5a94c0298c395d1cea7613/default';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                `}} />
        </>
    }

    return render()
}

SoftwareArchitecturePage.getInitialProps = async (ctx) => {
    console.log("getInitialProps =>")
    let ret = new Date()
    if (ret.getDay() <= 2) {
        ret.setDate(ret.getDate() + (3 - 1 - ret.getDay() + 7) % 7 + 1); //termina el miercoles a final del día
    } else {
        ret.setDate(ret.getDate() + (7 - 1 - ret.getDay() + 7) % 7 + 1); //termina el miercoles a final del día
    }
    ret.setMilliseconds(0)
    ret.setSeconds(0)
    ret.setMinutes(0)
    ret.setHours(24)
    let difference_ms = ret - new Date();


    let reviews = []
    try {
        const rawResponse = await fetch(`http://localhost:8081/reviews`)
        if (rawResponse.status == 200) {
            const response = await rawResponse.json()
            reviews = response.body
        }
    } catch (error) {
        console.log(error)
    }


    return { timeleft: difference_ms, reviews }
}

export default SoftwareArchitecturePage