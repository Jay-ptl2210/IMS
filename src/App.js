import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import RawMaterialManagement from "./component/RawMaterialManagement";
import ProductionManagement from "./component/ProductionManagement";
import StockOrderManagement from "./component/StockOrderManagement";
import { useState } from "react";

export default function App() {
  const [rawMaterials, setRawMaterials] = useState({});
  const [finalStock, setFinalStock] = useState({}); // ✅ Stores final stock

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to Inventory Management System</h2>} />
        <Route path="/raw-materials" element={<RawMaterialManagement rawMaterials={rawMaterials} setRawMaterials={setRawMaterials} />} />
        <Route path="/production" element={<ProductionManagement rawMaterials={rawMaterials} setRawMaterials={setRawMaterials} />} />
        <Route path="/stock-order" element={<StockOrderManagement finalStock={finalStock} setFinalStock={setFinalStock} />} /> {/* ✅ New Page */}
      </Routes>
    </Router>
  );
}
