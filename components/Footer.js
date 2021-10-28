import React from 'react'

const Fotter = props => {

    const render = () => {
        return (
            <section className="flex flex-col text-center  bg-dark-blue pb-4">
                <img src="/oscarblancarteblog-white.svg" alt="oscar blancarte" className="inline-block h-16 mb-10" />
                <div className="flex flex-row justify-center mb-12">
                    <a href="https://www.linkedin.com/in/oscarblancarte/" target="_blank" >
                        <span className="flex justify-center items-center rounded-full bg-dark-ligth p-4 h-12 w-12 mr-4">
                            <img src="/icons/linkedin.svg" alt="Linkedin" />
                        </span>
                    </a>
                    <a href="http://youtube.com/codmind" target="_blank">
                        <span className="flex justify-center items-center rounded-full bg-dark-ligth p-4 h-12 w-12 pt-5 mr-4">
                            <img src="/icons/youtube.svg" alt="Youtube" />
                        </span>
                    </a>
                    <a href="https://twitter.com/oscarjblancarte" target="_blank">
                        <span className="flex justify-center items-center rounded-full bg-dark-ligth p-4 h-12 w-12 mr-4">
                            <img src="/icons/twitter.svg" alt="Twitter" />
                        </span>
                    </a>
                    <a href="https://www.facebook.com/oscarjblancarte" target="_blank">
                        <span className="flex justify-center items-center rounded-full bg-dark-ligth p-4 h-12 w-12 pl-5 ">
                            <img src="/icons/facebook.svg" alt="Facebook" />
                        </span>
                    </a>
                </div>
                <p className="text-white">© 2021, Copyright - Oscar Blancarte. Todos los derechos reservados.</p>
            </section>
        )
    }

    return render()
}
export default Fotter