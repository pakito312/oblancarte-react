import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { StarIcon } from '@heroicons/react/solid'

const UserReviewBox = props => {

    const render = () => {
        const review = props.review
        return (
            <article className="shadow-gray rounded-xl overflow-hidden">
                <div className="flex flex-col items-center bg-white p-2 md:p-8">
                    <img src={review.image} alt={review.user} className="rounded-full w-24 mb-4"  />
                    <p className="body3 text-sm md:text-base lg:text-sm mb-4 text-justify">{review.message}</p>
                    <StarRatingComponent
                        className="mb-6"
                        name="rating"
                        editing={false}
                        renderStarIcon={() => <span><StarIcon className="h-8 w-8 inline-block" /></span>}
                        starCount={5}
                        value={review.score}
                    />
                    <p className="sub2 font-semibold mb-2 text-sm md:text-base">{review.user}</p>
                    <p className="sub3 font-semibold text-green text-sm md:text-base">{review.position}</p>

                </div>
            </article>
        )
    }

    return render()
}
export default UserReviewBox