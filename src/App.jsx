// import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Tool from './components/Tool/Tool.jsx'
const activeMenu = false


function App() {

  // MAKE A HOOK
  // const {activeMenu} = useStateContext();

  return (
    <>
        
        {/* Trying to make sidebar appear and disappear on CLick based on the STATE OF ACTIVEMENU*/}
          {activeMenu ? (
            <div>
              <Sidebar/>
            </div>
          ):(
            // The width is zero here
            <div w-0 dark:bg-secondary-dark-bg  >
              <Sidebar />
              <Tool/>
            </div>
          )}
        
        
    </>
  )
}

export default App
