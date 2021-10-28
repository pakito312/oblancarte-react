import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import OurWaranty from '../../../../components/OurWaranty'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PriceTable from '../../../../components/PriceTable';
import Image from 'next/image'
import Footer from '../../../../components/Footer'
import Accordion from '../../../../components/Accordion';
import StaticBuy from '../../../../components/StaticBuy';

const checkout = ({ timeleft }) => {

    const render = () => {
        return (
            <div>
                <Header />
                <Customers />
                <Price />
                <OurWaranty />
                <Faqs />
                <Footer />
                <StaticBuy timeleft={timeleft} callToAction="Comprar Ahora" to="#price" />
            </div>
        )
    }



    const Header = () => {
        return (
            <main id="init" className="relative bg-purple-500 xl:book-hero">
                <img src="/patterns/waves-purple-1.svg" className="absolute left-0 bottom-0 h-full " />
                <img src="/patterns/bubble-purple-1.svg" className="absolute right-0 bottom-0" />
                <img src="/patterns/expres-purple.svg" className="absolute right-20 bottom-1/2" />

                <div className="layout h-full md:pt-8 p-8">
                    <div className="flex items-center justify-center text-center mb-4 lg:mb-8">
                        <img className="w-auto h-6 lg:h-14 inline-block mr-4 lg:mr-8" src="/oscarblancarteblog-white.svg" />
                        <span className="text-4xl lg:text-6xl text-white font-bold mr-4 lg:mr-8">+</span>
                        <img className="w-auto h-6 lg:h-14 inline-block" src="https://codmind.com/public/brand/codmind-white-sm.png" />
                    </div>

                    <h1 className="text-center text-white mb-8  text-base md:text-3xl lg:text-6xl">¡Estás a tan solo 1 clic de distancia!</h1>
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                        <iframe src="https://player.vimeo.com/video/437700617?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} title="73-despedida"></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </main>
        )
    }

    const Customers = () => {
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
            <section className="layout py-4">
                <div className="">
                    <h2 className="text-base md:text-3xl mb-8 text-gray-900 text-center font-semibold">Algunos de nuestros lectores trabajan en</h2>
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

    const Price = () => {
        return (
            <div className="overflow-hidden bg-dark-blue">
                <section className="overflow-hidden mb-0 pb-0 py-8 lg:py-16">
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
                            <div className="order-last lg:order-first" id="price">
                                <PriceTable
                                    title="Arquitectura de software"
                                    realPrice="165.00"
                                    price="59.00"
                                    timeReminder="10d 12h 40m"
                                    timeleft={timeleft}
                                    link="https://gum.co/arquitectura-software?wanted=true&amp;variant=arquitectura"
                                    linkProps={{ 'data-gumroad-single-product': "true", target: "_blank" }}
                                >
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
                            </div>
                            <Image src="/books/arquitectura/landing/prices2.png" width="680" height="671" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }


    const Faqs = () => {
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
                                    <Accordion expand={false} title="¿Qué diferencia tiene este libro con el resto?">
                                        <p>Este es el único libro en español que te enseña como convertirte en arquitecto de software mediante la enseñanza de los principales patrones y estilos arquitectónicos, enseñados con un proyecto final que te permitirá pasar de la teoría a un ejemplo real.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿Puedo descargar una muestra gratis?">
                                        <p>SI, Al comienzo de esta página podrás encontrar el botón de descarga.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿El libro cuenta con alguna garantía?">
                                        <p>SI, tienes un plazo de 30 días para solicitar tu reemisor total en caso de que el libro no alcance tus expectativas.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿Qué conocimientos requiero?">
                                        <p>Es recomendable contar con fuertes conocimientos en cualquier lenguaje de programación y patrones de diseño.</p>
                                    </Accordion>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿Qué tan extenso es el libro?">
                                        <p>El libro se conforma de casi 500 páginas, dividido en 9 estilos arquitectónicos, 13 patrones arquitectónicos, 13 principios de diseño, los principales atributos de calidad y más de una centena de nuevos conceptos que te ayudarán a comprender los términos más utilizados por los arquitectos de software.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿Tengo que pagar por las actualizaciones?">
                                        <p>NO, el libro está en constante evolución, y todas las actualizaciones estarán disponibles de forma gratuita.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿Qué pasa si tengo una duda?">
                                        <p>La compra del libro incluye acceso a un grupo privado para resolver dudas, donde yo personalmente respondo todas las preguntas.</p>
                                    </Accordion>
                                </div>
                                <div className="mb-4">
                                    <Accordion expand={false} title="¿El libro cuenta con un proyecto final?">
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

    return render()
}

checkout.getInitialProps = async (ctx) => {
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
    return { timeleft: difference_ms }
}

export default checkout