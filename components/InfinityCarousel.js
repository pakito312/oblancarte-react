import React, { useEffect, useState } from 'react'


const InfinityCarousel = (props) => {

    const [width, setWidth] = useState(1)

    useEffect(() => {
        console.log("props => ", props)

        if (typeof window !== "undefined") {
            let sliders = document.getElementById("sliders").scrollWidth
            setWidth(sliders)
            console.log("clientWidth", sliders)
        }
    }, [typeof window === "undefined"])

    return (
        <div className="slider">
            <div id="sliders" className="slide-track">
                {props.children}
            </div>

            <style jsx >{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${width}px);
                    }
                }
                .slider {
                    overflow: hidden;
                }
                
                .slider .slide-track {
                    animation: scroll 100s linear infinite;
                    display: flex;
                }
                
                :global(.slider .slide img) {
                    height: 50px;
                    max-width: none;
                }
            `}</style>
        </div>
    )
}
export default InfinityCarousel