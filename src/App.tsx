import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import CollectionPage from '@/pages/CollectionPage/CollectionPage';
import WineDetailPage from '@/pages/WineDetailPage/WineDetailPage';
import FoodPairingPage from '@/pages/FoodPairingPage/FoodPairingPage';
import AboutPage from '@/pages/AboutPage/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CollectionPage />} />
          <Route path="wine/:id" element={<WineDetailPage />} />
          <Route path="pairing" element={<FoodPairingPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
