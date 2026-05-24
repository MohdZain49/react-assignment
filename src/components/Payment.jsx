import CouponCard from "./CouponCard";
import Wallet from "./Wallet";

function Payment() {
  return (
    <div className="w-full  bg-[#FFFFFF] flex flex-col gap-4 p-8 pt-4 border border-[#E5E7EB] rounded-[10px]">
      {/* wallet & coupon */}
      <div className="flex flex-col gap-3 pt-3">
        <Wallet />
        <CouponCard />
      </div>
      <div className="pt-2 pb-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#6B7280] leading-5">
            Subtotal
          </span>
          <span className="text-sm font-semibold text-[#000000] leading-5">
            ₹14,999.00
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[#6B7280] leading-5">
            Tax (18% GST)
          </span>
          <span className="text-sm font-semibold text-[#000000] leading-5">
            ₹1,079.64
          </span>
        </div>
        <div className="flex justify-between items-center border-t border-[#E5E7EB] pt-4">
          <span className="text-[18px] font-bold text-[#111827] leading-7">
            Total due today
          </span>
          <span className="text-2xl font-extrabold text-[#1977F2] leading-8">
            16,078.64
          </span>
        </div>
      </div>

      <button className="py-2 rounded bg-[#1977F2] text-[16px] text-white font-semibold leading-7 hover:bg-[#1565C0] cursor-pointer">
        Proceed to Payment
      </button>
    </div>
  );
}

export default Payment;
