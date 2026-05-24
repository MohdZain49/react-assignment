import { useState } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoTag } from "react-icons/go";

function CouponCard() {
  const coupons = [
    {
      code: "WELCOME20",
      description: "20% off on your first month",
    },
    {
      code: "ANNUAL50",
      description: "50% off on annual plans",
    },
  ];

  const [showCoupons, setShowCoupons] = useState(true);

  const [selectedCoupon, setSelectedCoupon] = useState(null);

  return (
    <div className="border border-[#E5E7EB] rounded-sm  shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
      <div
        className="flex justify-between items-center p-4 border-b border-[#E5E7EB] cursor-pointer"
        onClick={() => setShowCoupons((prev) => !prev)}
      >
        <div className="flex items-center gap-3">
          <GoTag className="size-4 text-[#575759]" />
          <p className="text-sm font-bold leading-5 text-[#111827]">
            Apply Coupon
          </p>
        </div>
        {showCoupons ? (
          <MdKeyboardArrowUp className="size-6 text-[#575759]" />
        ) : (
          <MdKeyboardArrowDown className="size-6 text-[#575759]" />
        )}
      </div>

      {showCoupons && (
        <div className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full border border-[#E5E7EB] rounded-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-3 py-1.5 text-sm font-bold text-[#1977F2] leading-5 rounded border border-[#3171FF33] cursor-pointer">
              Apply
            </button>
          </div>

          <div>
            {coupons.map((coupon, index) => (
              <div
                key={index}
                onClick={() => setSelectedCoupon(coupon.code)}
                className="transition-all duration-200"
              >
                <div className="flex justify-between items-center mt-4 p-3 border border-[#E5E7EB] rounded-sm cursor-pointer">
                  <div className="w-65 flex items-center gap-2">
                    <span className="text-sm font-bold leading-5 text-[#111827]">
                      {coupon.code}
                    </span>
                    <span className="text-[10px] leading-4 font-normal text-[#6B7280]">
                      {coupon.description}
                    </span>
                  </div>
                  <input
                    type="radio"
                    className="custom-radio"
                    checked={selectedCoupon === coupon.code}
                    onChange={() => setSelectedCoupon(coupon.code)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CouponCard;
