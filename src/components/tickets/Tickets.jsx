import React, { use } from 'react';
import SingleTicket from './SingleTicket';
import Container from '../container/Container';

const Tickets = ({ ticketPromise, handleCount, selectedCard, handleResolved, resolvedTasks }) => {
    const ticketsData = use(ticketPromise)
    const newData = selectedCard;
    return (
        <div className='bg-[#f5f5f5] sm:px-7'>
            <Container>
                <div className='flex lg:flex-row flex-col-reverse justify-between gap-4 pb-20'>
                    <div className='basis-10/12'>
                        <h2 className='text-2xl font-semibold mb-2'>Customer Tickets</h2>
                        <div className='grid md:grid-cols-2 gap-4'>
                            {ticketsData
                                .filter(ticket =>
                                    !resolvedTasks.some(item => item.id === ticket.id)
                                )
                                .map(singleData => (
                                    <SingleTicket
                                        key={singleData.id}
                                        singleData={singleData}
                                        handleCount={handleCount}
                                    />
                                ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-2xl font-semibold mb-2'>Tasks Status</h2>
                            {newData.map(newCard =>
                                <div className='bg-white mb-3 shadow-lg p-4 rounded-2xl border border-gray-200' key={newCard.length}>
                                    <h2 className='font-bold text-xl'>{newCard.title}</h2>
                                    <button onClick={() => handleResolved(newCard)} className='bg-green-500 rounded-xl p-1 text-white mt-2 w-full'>Complete</button>
                                </div>
                            )}
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-semibold'>Resolved Tasks</h2>

                            {resolvedTasks.length === 0 ? (
                                <p className='text-gray-500'>No resolved tasks yet</p>
                            ) : (
                                resolvedTasks.map(task => (
                                    <div key={task.id} className=' bg-white p-3 rounded-xl shadow mb-2'>
                                        <h2 className='font-bold text-xl'>
                                            {task.title}
                                        </h2>
                                        <p className=' text-green-600 font-semibold mt-1'> <i className="fa-solid fa-circle-check"></i>'
                                            Complete
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Tickets;