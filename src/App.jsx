// import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'

const activeMenu = false


function App() {
  return (
    <>
        
        {/* Trying to make sidebar appear and disappear on CLick based on the STATE OF ACTIVEMENU*/}
          {activeMenu ? (
            <div className=' dark:bg-secondary-dark-bg bg-white'>
              {/* <Sidebar/> */}
            </div>
          ):(
            // The width is zero here
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
        
        
    </>
  )
}

export default App
