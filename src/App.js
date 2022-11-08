import Doctors from "./pages/doctors/Doctors";
import Login from "./pages/Login";
import Patients from "./pages/patients/Patients";
import RegisterPatients from "./pages/patients/RegisterPatients";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import RegisterDoctors from "./pages/doctors/RegisterDoctor";
import AppointmentEdit from "./pages/appointments/AppointmentEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>

        <Route index element={<Home />} />
        {/* <Route exact path="/patients" element={<Patients />} />
          <Route
            exact
            path="/patients/register"
            element={<RegisterPatients />}
          />
          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/doctors/register" element={<RegisterDoctors />} />
          <Route exact path="/book-appointment" element={<Book />} />
          <Route exact path="/appointment-edit" element={<AppointmentEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
