import React, { useState } from 'react';

const SingleTicket = ({ singleData, handleCount }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleClick = () => {
        if (isSelected) return; // already selected → no click

        handleCount(singleData);
        setIsSelected(true);
    };
    return (
        <div className=''>
            <div onClick={handleClick} className='bg-white mb-3 shadow-lg p-4 rounded-2xl border border-gray-200'>
                <div className='flex justify-between items-center text-xl md:text-xl sm:text-sm'>
                    <h2 className='font-bold'>{singleData.title}</h2>
                    <h3 className={`py-1 px-5 rounded-2xl ${singleData.status == "Open" ? "text-green-900 bg-green-300" : "text-yellow-900 bg-yellow-300"}`}>
                        {singleData.status === "Open" && (
                            <i className="fa-solid fa-circle text-green-700 text-sm pr-3"></i>
                        )}
                        {singleData.status === "In-Progress" && (
                            <i className="fa-solid fa-circle text-yellow-700 text-sm pr-3"></i>
                        )}
                        {singleData.status}</h3>
                </div>
                <p className='my-4 text-gray-500'>{singleData.description}</p>
                <div className='flex justify-between items-center gap-3 text-gray-500'>
                    <p>{singleData.id}</p>
                    <p className={`${singleData.priority == "HIGH PRIORITY" ? "text-red-500" : singleData.priority == "MEDIUM PRIORITY" ? "text-yellow-500" : "text-green-500"}`}>{singleData.priority}</p>
                    <p>{singleData.assignee}</p>
                    <p>{singleData.date}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleTicket;