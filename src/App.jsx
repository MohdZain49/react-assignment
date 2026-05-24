import Navbar from "./components/Navbar";

import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";

import { FiArrowLeft } from "react-icons/fi";

function App() {
  return (
    <div className="bg-[#F2F2F2] min-h-screen font-inter pb-20">
      <Navbar />
      <main className="lg:w-280 lg:h-227 m-auto p-4 lg:p-0">
        <div className="hidden md:flex items-center h-9 mt-3 text-[#6B7280]">
          <FiArrowLeft className="size-4 mr-2  cursor-pointer" />
          <p className="text-sm font-medium leading-5">Back to plans</p>
        </div>

        <div className="lg:grid grid-cols-12 gap-16">
          {/* Billing Form  */}
          <div className="col-span-7 bg-[#FFFFFF] px-5 pt-4 rounded-[10px] lg:w-169.75 lg:h-190.75 mb-4 lg:mb-0">
            <BillingForm />
          </div>

          {/* Order Summary and Payment */}
          <div className="col-span-5 lg:h-212.25 lg:w-107.25 space-y-4">
            <OrderSummary />
            <Payment />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
