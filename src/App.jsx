// import { useState } from 'react';
import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Header from './pages/header/Header'
import SectionContainer from './components/SectionContainer';
import { Outlet} from 'react-router-dom';
import { SectionContext } from './components/SectionContext';
// import SectionForm from './pages/sections/SectionForm';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
  <SectionContext>
    <div className="flex h-screen">
    <Header toggleSidebar={toggleSidebar} />
    <div className="flex flex-1">
      <SideBar isSidebarOpen={isSidebarOpen} />
      <main className="flex-1 pt-20 px-4">
        <div className="p-4 sm:ml-60">
          <SectionContainer>
            <Outlet /> 
          </SectionContainer>
        </div>
      </main>
    </div>
    </div>
  </SectionContext>
  );

}

export default App
