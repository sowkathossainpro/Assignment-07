
import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import Process from './components/process/Process'
import Tickets from './components/tickets/Tickets'
import { ToastContainer, toast } from 'react-toastify'
import Footer from './components/footer/Footer'
const fetchTicketData = async () => {
  const res = await fetch("/public/ticket.json")
  return res.json();
}
const ticketPromise = fetchTicketData();

function App() {
  // In progress Count state decleare
  const [count, setCount] = useState(0);
  // Selected card State Decleare
  const [selectedCard, setSelectedCard] = useState([]);
  // Resolved State Decleare
  const [resolved, setResolved] = useState(0);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const handleCount = (singleData) => {
    const notify = () => toast(<p><i className="fa-solid fa-bars-progress text-lg"></i> In Progress...</p>);
    notify();
    const newCount = count + 1;
    setCount(newCount);
    setSelectedCard(prev => [...prev, singleData])
  }

  const handleResolved = (tasks) => {
    const notify = () => toast(<p><i className="fa-solid fa-circle-check text-green-700 text-lg"></i> Complete</p>);
    notify();
    const newCount = count - 1;
    setCount(newCount);
    const newResolved = resolved + 1;
    setSelectedCard(prev =>
      prev.filter(item => item.id !== tasks.id)
    );
    setResolved(newResolved);
    setResolvedTasks(prev => [...prev, tasks]);
  }

  return (
    <>
      <Navbar />
      <Process count={count} resolved={resolved} />
      <Tickets ticketPromise={ticketPromise} handleCount={handleCount} selectedCard={selectedCard} setSelectedCard={setSelectedCard} handleResolved={handleResolved} resolvedTasks={resolvedTasks} ></Tickets>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
