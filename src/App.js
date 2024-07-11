import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/home.page';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.component';
import { projects } from './data/projects';
import { useEffect, useState } from 'react';
import ViewProject from './pages/viewProject/viewProject.component';

function App() {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    setProjectsData(projects)
  });
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home projects={projectsData} />} />
          <Route path='/projects/:id' element={<ViewProject projects={projectsData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
