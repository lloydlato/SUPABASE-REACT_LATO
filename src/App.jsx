import { BrowserRouter, Routes, Route } from "react-router";
import StudentsPage from "./pages/Studentpage";
import AddStudentPage from "./pages/addStudentpage";



export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentsPage />} />
        <Route path="/addStudent" element={<AddStudentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
