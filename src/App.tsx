import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import QualityEngineering from './pages/services/QualityEngineering';
import AIBusiness from './pages/services/AIBusiness';
import Healthcare from './pages/industries/Healthcare';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/quality-engineering" element={<QualityEngineering />} />
        <Route path="/services/ai-business-transformation" element={<AIBusiness />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
      </Route>
    </Routes>
  );
}
