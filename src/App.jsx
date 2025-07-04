import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import CategoryScrollBar from "./components/categories";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CategoryScrollBar className="fixed"/>
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 bg-white ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/watch/:id" element={<WatchPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}