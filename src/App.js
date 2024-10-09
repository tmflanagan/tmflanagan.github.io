import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MQP from "./pages/MQP";
import Internship from "./pages/Internship";
import Maps from "./pages/Server-Map";
import Plots from "./pages/JMeter-Plots";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <>
            <HashRouter>
                <Navbar />
                <br />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="mqp" element={<MQP />} />
                        <Route path="internship" element={<Internship />} />
                        <Route path="server-map" element={<Maps />} />
                        <Route path="jmeter-plots" element={<Plots />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
