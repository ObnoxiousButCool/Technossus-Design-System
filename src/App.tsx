import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import QualityEngineering from './pages/services/QualityEngineering';
import AIBusiness from './pages/services/AIBusiness';
import DataIntelligence from './pages/services/DataIntelligence';
import DigitalExperience from './pages/services/DigitalExperience';
import ProductEngineering from './pages/services/ProductEngineering';
import CloudModernization from './pages/services/CloudModernization';
import Healthcare from './pages/industries/Healthcare';
import FinancialServices from './pages/industries/FinancialServices';
import HiTechSaaS from './pages/industries/HiTechSaaS';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/ai-business-transformation" element={<AIBusiness />} />
        <Route path="/services/data-intelligence-analytics" element={<DataIntelligence />} />
        <Route path="/services/digital-experience-design" element={<DigitalExperience />} />
        <Route path="/services/product-engineering" element={<ProductEngineering />} />
        <Route path="/services/quality-engineering" element={<QualityEngineering />} />
        <Route path="/services/cloud-product-modernization" element={<CloudModernization />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/financial-services" element={<FinancialServices />} />
        <Route path="/industries/hitech-saas" element={<HiTechSaaS />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Route>
    </Routes>
  );
}
