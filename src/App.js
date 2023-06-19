import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import MyProjects from "./routes/myProjects/MyProjects";
import Cv from "./routes/cv/Cv";
import Missing from "./routes/missing/Missing";
import Layout from "./routes/layout/Layout";



function App() {

 

  return (
    <Routes>
      <Route path='/' element={<Layout/> }>
      <Route index element={<Home /> } />
      
      <Route path='projects'>
        <Route index element={<MyProjects /> }/>
        <Route path=":id" /* element={<Project /> }*//>
      </Route>
      <Route path='mycv' element={< Cv/> } />
      <Route path='*' element={<Missing /> } />
      </Route>
    </Routes>
  )
}

export default App;
