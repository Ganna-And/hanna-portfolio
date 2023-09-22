import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Missing from "./routes/missing/Missing";
import Layout from "./routes/layout/Layout";
import Project from './routes/projects/Project';
import './App.css';





function App() {

 

  return (
  
    <Routes>
      <Route path='/' element={<Layout/> }>
      <Route index element={<Home /> } />
      <Route path='projects'>
        <Route index element={<Project /> }/>
      </Route>
      <Route path='*' element={<Missing /> } />
      </Route>
    </Routes>
  )
}

export default App;
