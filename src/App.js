import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Farmerlogin from "./components/Farmer/FarmerLogin";
import FamRegistration from "./components/Farmer/FarmerRegister";
import Updateitem from "./components/Farmer/FarmerItemUpdate";
import AddItems from "./components/Farmer/addItems";
import Itemlist from "./components/Farmer/viewItems";
import Displaylist from "./components/Buyer/BuyerDisplayItem";
import PaymentSelection  from "./components/Buyer/PaymentMethod";
import MobileBill from "./components/Buyer/BillPayment";
import CardBill from "./components/Buyer/CardPayment";


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
            <Route path="/displayitem" element={<Displaylist/>}/>
            <Route path="/paymentMethod" element={<PaymentSelection />}/>
            <Route path="/paymenMobileBill" element={<MobileBill/>}/>
            <Route path="/paymentCardBill" element={<CardBill/>}/>
        </Routes>

        </div>
    );
}

export default App;
