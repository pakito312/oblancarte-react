import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import { BookmarkAltIcon, ChevronLeftIcon,ChevronRightIcon, PlayIcon,CurrencyDollarIcon } from '@heroicons/react/outline'
import Navbar from '../components/Navbar'
import BookVerticalCard from '../components/BookVerticalCard'
import CourseCard from '../components/CourseCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UserReviewBox from '../components/UserReviewBox'
import Hablemos from '../components/Hablemos'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'

const ReactiveProgramming = (props) => {

    const goto = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const render = () => {
        return (
            <div>
                <Navbar />
                {renderHero()}
                {customers()}
                {video()}
                {summary()}
                <AboutMe onClick={e => goto("talk")} />
                {books()}
                {cursos()}
                {reviews()}
                <Hablemos />
                <Footer />
            </div>
        )
    }
   
    const renderHero = () => {
        return (
            <main id="init" className="bg-blue-deep pb-10">
                <img src="/patterns/Vector10.png" className="absolute py-16 my-32" />
                <div className="layout layout-grid-2 md:pt-16">
                <div className="flex justify-center items-center">
                        <div className="mt-10 pt-6 waves">
                            <p className=" text-white mb-2 text-xl md:text-3xl lg:text-5xl">Introducción a los</p>
                            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl">patrones de diseño</h1>
                            <p className=" text-white mt-8 text-lg"><del className="text-gray-300 ">$56.00 USD</del> <span className="text-green text-3xl">$45.00 USD</span></p>
                            <p className="text-white"> <small className="break-text">Formato: PDF</small><span className="border mx-4"></span> < >Páginas: 500</><span className="border mx-4"></span> <small >Código disponible: Java / C Sharp</small></p>
                            <p className="text-white text-sm">El único libro que te enseñará los patrones de diseño con ejemplos reales del mundo real totalmente en español.</p>
                            <div className="">
                                <button href="#" onClick={e => goto("talk")} className="btn btn-green-light shadow-green btn-lg round block md:inline-block text-center mt-10 mx-4" >Comprar ahora <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></button>
                                <button href="#" onClick={e => goto("talk")} className="btn  btn-lg btn-outline round block md:inline-block text-center mt-10" >Muestra gratis <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></button>
                            </div>
                        </div>
                    </div> 
                    <div className="flex flex-wrap content-end mt-24 md:mt-0">
                        <img src="/patterns/vector30.png" alt="" className="-right-25 mb-10 mx-8 top-1/2" />
                        <img src="/books/patrones-3d-rotate.png" alt="oscar blancarte absolute" className=" xs:hidden absolute pt-6" />
                        <img src="/patterns/vertor11.png" alt="firma" className="absolute  right-0 pt-16" />
                    </div>
                    
                </div>
            </main>
        )
    }

    const summary = () => {
        return (
            <section className="bg-gray-100 py-8">
                <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center">¿Por qué comprar este libro?</h2>
                <div className="max-w-7xl px-2 md:mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col items-center ">
                        <div className="flex mb-4">
                            <div className="bg-green-100 inline-block p-3 rounded-full">
                                <CurrencyDollarIcon className="h-8 w-8 inline-block text-green-600" />
                            </div>
                        </div>
                            <h4 className="body1 my-3">Económico</h4>
                        <p className="text-justify">Introducción a los patrones de diseño es uno de los libros más completos y económicos del mercado, 
                        muy por debajo de las publicaciones de editoriales tradicionales.</p>
                    </div>
                    <div className="flex flex-col items-center  ">
                        <div className="flex mb-4">
                            <div className="bg-green-100 inline-block p-3 rounded-full">
                                <BookmarkAltIcon className="h-8 w-8 inline-block text-green-600" />
                            </div>
                        </div>
                        <h4 className="body1 my-3">Ejemplos reales</h4>
                        <p className="text-justify">Aprende patrones de diseño con ejemplos del mundo real, se aborda 25 patrones en 3 grandes categorías.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex mb-4">
                            <div className="bg-green-100 inline-block p-3 rounded-full">
                                <ChevronLeftIcon className="h-8 w-8 inline-block text-green-600" />
                                <ChevronRightIcon className="h-8 w-8 inline-block text-green-600" />
                            </div>
                        </div>
                        <h4 className="body1 my-3">Todo el código</h4>
                        <p className="text-justify">Todos los ejemplos de este libro esta acompañados en su totalidad con el código fuente.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex mb-4">
                            <div className="bg-green-100 inline-block p-3 rounded-full">
                                <ChevronLeftIcon className="h-8 w-8 inline-block text-green-600" />
                            </div>
                        </div>
                        <h4 className="body1 my-3">Enfoque dirigido</h4>
                        <p className="text-justify">El libro está dirigido a aprender patrones de diseño de una forma natural, exponiendo los patrones más simples, hasta los más avanzados.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex mb-4">
                            <div className="bg-green-100 inline-block p-3 rounded-full">
                                <PlayIcon className="h-8 w-8 inline-block text-green-600" />
                            </div>
                        </div>
                        <h4 className="body1 my-3">Enfoque práctico</h4>
                        <p className="text-justify">Todos los ejemplos de este libro son prácticos, pero sobre todo originales. Olvídate de los ejemplos típicos como una pizza, animales o figuras geométricas.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex mb-4">
                            <div className="bg-green-100 inline-block p-3 rounded-full">
                                <ChevronLeftIcon className="h-8 w-8 inline-block text-green-600" />
                            </div>
                        </div>
                        <h4 className="body1 my-3">Ahorra tiempo</h4>
                        <p className="text-justify">Internet está lleno de blog que no explican correctamente, con ejemplos incompletos y que no explican bien, lo que te llevara mucho más tiempo y dolor de cabeza.</p>
                    </div>

                </div>
            </section>
        )
    }

    const books = () => {
        return (
            <section id="books" className="overflow-hidden">
                <img src="/patterns/line-1.svg" className="absolute left-0 top-10" />
                <img src="/patterns/bubble-2.svg" className="absolute -left-32 top-1/2" />
                <img src="/patterns/bubble-4.svg" className="absolute -right-1 top-1/2" />
                <div className="layout">
                    <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center">Libros de mi autoría</h2>
                    <div className="max-w-6xl md:mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
                        <BookVerticalCard book={{
                            name: "Introducción a los patrones de diseño",
                            extract: "Aprende las majores prácticas de programación y domina los 25 patrones de diseño más importantes",
                            image: "/books/patrones-3d-rotate.png",
                            link: "/books/design-patterns/es",
                            realPrice: "165",
                            price: "65"
                        }} />
                        <BookVerticalCard book={{
                            name: "Introducción a la arquitectura de software",
                            extract: "Aprende el complejo camino hacia la arquitectura de software con el libro más completo en español",
                            image: "/books/arquitectura-3d-rotate.png",
                            link: "/books/software-architecture/es",
                            realPrice: "165",
                            price: "65"
                        }} />
                        <BookVerticalCard book={{
                            name: "Aplicaciones reactivas con React, NodeJS & MongoDB",
                            extract: "Conviértete en FullStack y tanto el backend como el frontend para crear aplicaciones completas",
                            image: "/books/aplicaciones-reactivas-3d-rotate.png",
                            link: "/books/aplicaciones-reactivas-con-react-nodejs-mongodb/es",
                            realPrice: "165",
                            price: "65"
                        }} />
                    </div>
                </div>
            </section>
        )
    } 
    
    const video = () => {
        return (
           
            <div id="i" className="overflow-hidden">
            <section>
                <div className="layout layout-grid-2 max-w-3xl">
                    <div className="z-10">
                    <h2 className="text-xl  mb-3 text-gray-900">Importancia de los patrones de diseño</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac ut aliquet a sit venenatis semper quam tellus. Dignissim semper semper non aenean at sed. Dignissim scelerisque laoreet proin senectus nam porttitor in neque. Aliquet porttitor mauris dui convallis justo.</p>
                    <p className="text-justify">Ut mi, convallis urna libero amet augue sit convallis mauris. Cras sed id scelerisque tellus, dolor pretium egestas aliqua.</p>
                </div>
                    <div >
                        <img src="/books/Group584.png" className="lg:max-w-2xl md:max-w-xl w-[40vh] xl:max-w-3xl" />
                    </div>
                </div>
            </section>
        </div>


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
            <section className=" ">
                <div className="layout">
                    <p className="sub1 font-semibold text-center text-lg mb-16 text-3xl">Algunos de nuestros lectores trabajan en</p>
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

    const cursos = () => {

        const settings = {
            swipeToSlide: true,
            dots: true,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            speed: (typeof window !== 'undefined') ? (screen.width ^ 2) * 8 : 5000,
            autoplaySpeed: 0,
            cssEase: "linear",
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        const width = "slide px-2 md:px-8 h-full"

        return (
            <section id="courses" className="bg-gray-100 overflow-hidden">
                <img src="/patterns/bubble-3.svg" className="absolute top-20 hidden md:inline-block" />
                <img src="/patterns/bubble-2.svg" className="absolute right-0 top-3/4" />

                <div className="layout">
                    <hgroup>
                        <h2 className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-900 text-center font-semibold">Nuestros cursos más populares</h2>
                        <h3 className="text-sm md:text-md lg:text-xl mb-8 text-gray-900 text-center">Codmind es la plataforma más avanzada para impulsar tu carrera al siguiente nivel.</h3>
                    </hgroup>
                </div>


                <Slider className="slider variable-width w-full overflow-hidden" {...settings}>
                    {props.courses?.map(course => (<div className={width}>
                        <CourseCard key={course.id} course={{
                            name: course.name,
                            level: course.complexity,
                            image: `https://api.codmind.com/image?type=smallBanner&courceId=${course.id}`,
                            link: `https://codmind.con/courses/${course.urlName}`,
                            extract: course.shortDesc
                        }} />
                    </div>))}
                </Slider>

                <div className="layout">
                    <div className="text-center">
                        <a href="https://codmind.com" target="_blank" className="btn btn-green btn-lg round block md:inline-block text-center mt-10" >Todos los cursos <ArrowRightIcon className="h-5 w-5 inline-block ml-2" /></a>
                    </div>
                </div>
            </section>
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
            autoplaySpeed: 5000,
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
                        <div className={width}>
                            <UserReviewBox review={{
                                user: "Olivia Castillo Mendoza",
                                position: "Sr. Programmer Analyst",
                                image: "https://reactiveprogramming.io/books/patterns/img/avatars/olivia.jpg",
                                message: "Es un libro bastante interesante con ejemplos prácticos que usualmente llegamos a aplicar en el desarrollo de software, El haber adquirido tu libro me ayudo bastante a mejorar en mis habilidades de diseño, gracias a eso puede obtener una posición como programadora Sr.",
                                score: 5
                            }} />
                        </div>
                        <div className={width}>
                            <UserReviewBox review={{
                                user: "Olivia Castillo Mendoza",
                                position: "Sr. Programmer Analyst",
                                image: "https://reactiveprogramming.io/books/patterns/img/avatars/olivia.jpg",
                                message: "Es un libro bastante interesante con ejemplos prácticos que usualmente llegamos a aplicar en el desarrollo de software, El haber adquirido tu libro me ayudo bastante a mejorar en mis habilidades de diseño, gracias a eso puede obtener una posición como programadora Sr.",
                                score: 5
                            }} />
                        </div>
                        <div className={width}>
                            <UserReviewBox review={{
                                user: "Olivia Castillo Mendoza",
                                position: "Sr. Programmer Analyst",
                                image: "https://reactiveprogramming.io/books/patterns/img/avatars/olivia.jpg",
                                message: "Es un libro bastante interesante con ejemplos prácticos que usualmente llegamos a aplicar en el desarrollo de software, El haber adquirido tu libro me ayudo bastante a mejorar en mis habilidades de diseño, gracias a eso puede obtener una posición como programadora Sr.",
                                score: 5
                            }} />
                        </div>
                        <div className={width}>
                            <UserReviewBox review={{
                                user: "Olivia Castillo Mendoza",
                                position: "Sr. Programmer Analyst",
                                image: "https://reactiveprogramming.io/books/patterns/img/avatars/olivia.jpg",
                                message: "Es un libro bastante interesante con ejemplos prácticos que usualmente llegamos a aplicar en el desarrollo de software, El haber adquirido tu libro me ayudo bastante a mejorar en mis habilidades de diseño, gracias a eso puede obtener una posición como programadora Sr.",
                                score: 5
                            }} />
                        </div>
                        <div className={width}>
                            <UserReviewBox review={{
                                user: "Olivia Castillo Mendoza",
                                position: "Sr. Programmer Analyst",
                                image: "https://reactiveprogramming.io/books/patterns/img/avatars/olivia.jpg",
                                message: "Es un libro bastante interesante con ejemplos prácticos que usualmente llegamos a aplicar en el desarrollo de software, El haber adquirido tu libro me ayudo bastante a mejorar en mis habilidades de diseño, gracias a eso puede obtener una posición como programadora Sr.",
                                score: 5
                            }} />
                        </div>
                        <div className={width}>
                            <UserReviewBox review={{
                                user: "Olivia Castillo Mendoza",
                                position: "Sr. Programmer Analyst",
                                image: "https://reactiveprogramming.io/books/patterns/img/avatars/olivia.jpg",
                                message: "Es un libro bastante interesante con ejemplos prácticos que usualmente llegamos a aplicar en el desarrollo de software, El haber adquirido tu libro me ayudo bastante a mejorar en mis habilidades de diseño, gracias a eso puede obtener una posición como programadora Sr.",
                                score: 5
                            }} />
                        </div>
                    </Slider>
                </div>

            </section>
        )
    }

    return render()
}


ReactiveProgramming.getInitialProps = async (ctx) => {
    console.log("ReactiveProgramming.getInitialProps =>")
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


    let courses = []
    const rawResponse = await fetch(`https://api.codmind.com/cources/suggested`)
    console.log("rawResponse => ", rawResponse)
    if (rawResponse.status == 200) {
        const response = await rawResponse.json()
        console.log("Response => ", response)
        courses = response.body
    }

    return { timeleft: difference_ms, courses }
}

export default ReactiveProgramming

