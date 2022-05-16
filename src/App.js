import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Farmerlogin from "./components/Farmer/FarmerLogin";
import FamRegistration from "./components/Farmer/FarmerRegister";
import Updateitem from "./components/Farmer/FarmerItemUpdate";
import AddItems from "./components/Farmer/addItems";
import Itemlist from "./components/Farmer/viewItems";


function App() {
    return (
        <div className={"container"}>
            <br/><br/><br/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/farmerlogin" element={<Farmerlogin/>}/>
            <Route path="/famreg" element={<FamRegistration/>}/>
            <Route path="/upfamitem/:id" element={<Updateitem/>}/>
            <Route path="/FarmeraddItems" element={<AddItems/>}/>
            <Route path="/FarmerviewItems" element={<Itemlist/>}/>
        </Routes>

        </div>
    );
}

export default App;
