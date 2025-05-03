import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Technology from './Component/Technology/Technology';
import Partners from './Component/Partners/Partners';
import Saathi from './Component/Sathi/Saathi';
import Safe from './Component/Service/Safe';
import Jobs from './Component/Service/Jobs';
import NeoBanking from './Component/Service/NeoBanking/NeoBanking.jsx'
import BillPayment from './Component/Service/BillPayment/BillPayment.jsx'
import Travel from './Component/Service/Travel/Travel.jsx'
import PanCard from './Component/Service/PanCard/Pancard.jsx'
import MicroAtm from './Component/Service/MicroAtm/MicroAtm.jsx'
import Social  from './Component/Service/Social/Social.jsx';
import Login from './Component/Login/Login.jsx';
import Community from './Component/Service/Community/Community.jsx';
import Terms from './Component/Terms/Terms.jsx';
import Privacy from './Component/Privacy/Pravicy.jsx'
import Refund from './Component/Refund/Refund.jsx';
function App() {

  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='partner' element={<Partners/>} />
          <Route path='sathi' element={<Saathi/>} />
       
          <Route path='tech' element={<Technology/>} />
          <Route path='about' element={<About/>} />
          <Route path='safe' element={<Safe/>} />
          <Route path='jobs' element={<Jobs/>} />
          <Route path='neo-banking' element={<NeoBanking/>} />
          <Route path='bill-payment' element={<BillPayment/>} />
          <Route path='travel' element={<Travel/>} />
          <Route path='pan-card' element={<PanCard/>} />
          <Route path='micro-atm' element={<MicroAtm/>} />
          <Route path='social' element={<Social/>} />
          <Route path='login' element={<Login/>} />
          <Route path='community' element={<Community/>} />
          <Route path='terms-condition' element={<Terms/>} />
          <Route path='privacy-policy' element={<Privacy/>} />
          <Route path='refund-policy' element={<Refund/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
