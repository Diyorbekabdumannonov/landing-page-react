import React from 'react'
import { comments } from '../utility'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';

export default function SwiperComponent() {
    return (
        <Swiper
            spaceBetween={50}
            breakpoints={{
                1440: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 1
                }
            }}
        >
            {comments.map(({ rate, comment, user }, index) => {
                return <SwiperSlide key={index} className='max-w-[280px] sm:max-w-340'>
                    <div key={index} className='w-full'>
                        <div className="flex items-center gap-3 mb-4">
                            {rate.map(index => {
                                return <FaStar key={index} className='text-2xl text-yellow-400' />
                            })}
                        </div>
                        <p className="subtitle mt-0">
                            {comment}
                        </p>
                        <div className="flex items-start gap-4 mt-7">
                            <div>
                                <img src={user.imgUrl} alt="example" className="rounded-full" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-xl">{user.name}</h4>
                                <p className="text-gray-400 font-normal text-sm">{user.occupation}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    )
}