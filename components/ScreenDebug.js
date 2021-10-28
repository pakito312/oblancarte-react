import React from 'react'

const ScreenDebug = (props) => {
    const render = () => {
        const env = process.env.NODE_ENV
        return  env == "production" ? null : 
            <span className="fixed z-50 text-green-400">
                <span className="z-50 block sm:hidden">XS</span>
                <span className="z-50 hidden sm:block md:hidden">SM</span>
                <span className="z-50 hidden md:block lg:hidden">MD</span>
                <span className="z-50 hidden lg:block xl:hidden">LG</span>
                <span className="z-50 hidden xl:block 2x1:hidden">XL</span>
                <span className="z-50 hidden 2x1:block">2xl</span>
            </span>
    }

    return render()
}
export default ScreenDebug