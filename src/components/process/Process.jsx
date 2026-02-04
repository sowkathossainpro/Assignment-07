import React from 'react';
import bgImgLeft from '../../assets/vector01.png'
import bgImgRight from '../../assets/vector02.png'

import Container from '../container/Container';

const Process = ({ count, resolved }) => {
    return (
        <div className='bg-[#f5f5f5] sm:px-7'>
            <Container>
                <div className='flex gap-5 justify-between py-20'>
                    <div className="p-7 h-[250px] w-full bg-gray-600 rounded-2xl flex items-center flex-col justify-center text-white"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(99, 46, 227, .5), rgba(159, 98, 242, 0.7)),
                        url(${bgImgLeft}), url(${bgImgRight})`,
                            backgroundPosition: "center, left center, right center",
                            backgroundRepeat: "no-repeat, no-repeat",

                        }}>
                        <h2 className='text-3xl mb-2'>In Progress</h2>
                        <p className='font-bold text-4xl'>{count}</p>
                    </div>
                    <div className="p-7 h-[250px] w-full bg-gray-600 rounded-2xl flex items-center flex-col justify-center text-white"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(84, 207, 104, 0.4), rgba(0, 130, 122, 0.9)),
                        url(${bgImgLeft}), url(${bgImgRight})`,
                            backgroundPosition: "center, left center, right center",
                            backgroundRepeat: "no-repeat, no-repeat",

                        }}>
                        <h2 className='text-3xl mb-2'>Resolved</h2>
                        <p className='font-bold text-4xl'>{resolved}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Process;