import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddFlight from "./pages/flight/addFlight/AddFlight";
import AddAirlines from "./pages/airLines/AddAirlines";
import AirLines from "./pages/airLines/AirLines";
import DetailAirline from "./pages/airLines/DetailAirlines";
import LoginPage from "./pages/auth/login/Login";
import EditFlight from "./pages/flight/editFlight/EditFlight";
import Home from "./pages/flight/listFlight/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'login'} replace='true' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/add-flight' element={<AddFlight />} />
          <Route path='/edit-flight/:id' element={<EditFlight />} />
          <Route path='/airlines' element={<AirLines />} />
          <Route path='/add-airlines' element={<AddAirlines />} />
          <Route path='/detail-airline/:id' element={<DetailAirline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
