import { Route, Routes } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";

import WhoWeAre1 from "./pages/WhoWeAre1";
import Home1 from "./pages/Home1";
import WhatWeDo1 from "./pages/WhatWeDo1";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import TheTeam from "./pages/OurTeam/TheTeam";
import Careers from "./pages/Careers";

import CaseStudy from "./pages/CaseStudies/Index";

import AssamCancerCareFoundation from "./pages/CaseStudies/AssamCancerCareFoundation";
import DepartmentOfAgriculture from "./pages/CaseStudies/DepartmentOfAgriculture"
import JalJeevanMissionMeghalaya from "./pages/CaseStudies/JalJeevanMissionMeghalaya"
import APART from "./pages/CaseStudies/APART";

import BajajAuto from "./pages/CaseStudies/BajajAuto";
import CompetitionCommissionOfIndia from "./pages/CaseStudies/CompetitionCommissionOfIndia";
import PernodRicard from "./pages/CaseStudies/PernodRicard";
import NationalHealthMission from "./pages/CaseStudies/NationalHealthMission";

import UNICEF from "./pages/CaseStudies/UNICEF";
import BrahmaputraBoard from "./pages/CaseStudies/BrahmaputraBoard";


import OurWork from "./pages/OurWork/Index";
import { createTheme, ThemeProvider } from '@mui/material';
import CareerApplication from "./pages/Forms/CareerApplication";


const theme = createTheme({
  typography: {
    // fontFamily: 'Chilanka, cursive'
    fontFamily: 'Switzer-Thin'
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <BackgroundVideo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />

          <Route path="/what-we-do" element={<WhatWeDo1 />} />
          <Route path="/who-we-are" element={<WhoWeAre1 />} />

          <Route path="/our-work" element={<OurWork />} />


          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TheTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudy />} />

          <Route path="/assam-cancer-care-foundation" element={<AssamCancerCareFoundation />} />
          <Route path="/dept-of-agri" element={<DepartmentOfAgriculture />} />
          <Route path="/jjm" element={<JalJeevanMissionMeghalaya />} />
          <Route path="/apart" element={<APART />} />

          <Route path="/bajaj-auto" element={<BajajAuto />} />
          <Route path="/cci" element={<CompetitionCommissionOfIndia />} />
          <Route path="/pernod-ricard" element={<PernodRicard />} />
          <Route path="/nhm" element={<NationalHealthMission />} />

          <Route path="/unicef" element={<UNICEF />} />
          <Route path="/brahmaputra-board" element={<BrahmaputraBoard />} />

          <Route path="/apply" element={<CareerApplication />} />

        </Routes>
        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
