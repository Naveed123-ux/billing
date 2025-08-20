import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Department from "./pages/Department";

import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import DepartmentDetails from "./pages/DepartmentDetails";
import ServicesDetails from "./pages/ServicesDetails";
import Appointment from "./pages/Appointment";
import Testimonials from "./pages/Testomonials";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Page404 from "./pages/Page404";
import FrontDesk from "./pages/FrontDesk";
import EHRPage from "./pages/EHR";
import RevenueCycleManagement from "./pages/RevenueCycleManagement";
import MedicalCredentialing from "./pages/MedicalCredentialing";
import Denial from "./pages/Denial";
import MedicalBillingPage from "./pages/MedicalBilling";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Layout pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/department-details" element={<DepartmentDetails />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/front-desk" element={<FrontDesk />} />
        <Route
          path="/revenue-cycle-management"
          element={<RevenueCycleManagement />}
        />
        <Route path="/ehr" element={<EHRPage />} />
        <Route
          path="/medical-credentialing"
          element={<MedicalCredentialing />}
        />
        <Route path="/denial" element={<Denial />} />
        <Route path="/medical-billing" element={<MedicalBillingPage />} />
      </Route>

      {/* No layout here */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
