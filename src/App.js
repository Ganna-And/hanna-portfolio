import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Cv from "./routes/cv/Cv";
import Missing from "./routes/missing/Missing";
import Layout from "./routes/layout/Layout";
import Project from './routes/projects/Project';
import './App.css';
import { CSSReset, ChakraProvider } from "@chakra-ui/react";




function App() {

 

  return (
    <ChakraProvider>
      <CSSReset/>
    <Routes>
      <Route path='/' element={<Layout/> }>
      <Route index element={<Home /> } />
      <Route path='projects'>
        <Route index element={<Project /> }/>
      </Route>
      <Route path='mycv' element={< Cv/> } />
      <Route path='*' element={<Missing /> } />
      </Route>
    </Routes>
    </ChakraProvider>
  )
}

export default App;
