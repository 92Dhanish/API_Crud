import { Route, Routes } from "react-router"
import Header from "./Componets/Header/Header.jsx"
// import Student from "./Componets/Student/Student.jsx"
import ViewStudent from "./Componets/ViewStudent/viewstudent.jsx"
import Edit from "./Componets/Edit/Edit.jsx"
import Student from "./Componets/Add/Student.jsx"





function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Student/>}></Route>
      <Route path="/student" element={<Student />}></Route>
      <Route path="/view" element={<ViewStudent/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>


    </Routes>
     </>
     
  )
}

export default App
