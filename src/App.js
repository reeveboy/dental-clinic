import Doctors from "./pages/doctors/Doctors";
import Login from "./pages/Login";
import Patients from "./pages/patients/Patients";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Appointment from "./pages/appointments/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>

        <Route index element={<Home />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/book-appointment" element={<Book />} />
        <Route exact path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
