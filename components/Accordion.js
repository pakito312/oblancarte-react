import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Accordion = (props) => {

    const [expand, setExpand] = useState(props.expand == undefined ? true : props.expand)

    const render = () => {
        const chevronIconStyles = expand ? 'select-none h-5 w-5 inline-block ml-2 transition transform rotate-180' : 'select-none h-5 w-5 inline-block ml-2 transition'
        const bodyStyles = expand ? 'block w-none px-4 md:px-6 pb-4 md:pb-6 transition-height duration-500 ease-in' : 'block overflow-hidden px-4 md:px-6 h-0 transition-height duration-500 ease-out'

        return (
            <article className="rounded-xl shadow-white bg-white overflow-hidden ">
                <div className="flex flex-row justify-between cursor-pointer p-4 md:p-6 hover:bg-gray-200 transition" onClick={e => setExpand(!expand)} >
                    <div className="font-semibold font-poppins text-sm lg:text-xl select-none">{props.title}</div>
                    <div><ChevronDownIcon className={chevronIconStyles} /></div>
                </div>
                <div className={bodyStyles}>
                    {props.children}
                </div>
            </article>
        )
    }

    return render()
}

export default Accordion