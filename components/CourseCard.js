import React from 'react'
import Link from 'next/link'

const CourseCard = (props) => {

    const render = () => {
        return (
            < Link href={props.course.link} >
                <a className="flex">
                    <article className="rounded-md shadow-gray hover:scale-50  p-3 bg-white">
                        <div>
                            <img className="rounded-md" src={props.course.image} alt={props.course.name} />
                        </div>
                        <div>
                            <span className="inline-block rounded-full bg-purple-100 px-6 py-1 md:py-2 my-3">
                                <p className="text-purple-200">{props.course.level}</p>
                            </span>
                            <p className="sub1 text-sm md:text-lg font-semibold mb-3">{props.course.name}</p>
                            <p className="body3 text-sm hidden md:block">{props.course.extract}</p>
                        </div>
                    </article>
                </a>
            </Link >
        )
    }

    return render()
}
export default CourseCard