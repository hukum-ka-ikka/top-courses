import NavBar from './components/NavBar'
import './App.css'
import Body from './components/Body'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='wrapper'>
      <ToastContainer autoClose={8000} />
      <NavBar />
      <Body />
    </div>
  )
}

export default App
