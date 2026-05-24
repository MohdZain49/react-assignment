import { IoArrowUpCircleOutline } from "react-icons/io5";

function OrderSummary() {
  return (
    <div className="h-90 md:h-67.75 bg-[#FFFFFF] flex flex-col gap-4 p-4 lg:p-8 border border-[#E5E7EB] rounded-[10px]">
      <h3 className="text-2xl text-[#111827] font-bold leading-8">
        Order Summary
      </h3>

      <div className="lg:h-27.25 rounded-sm py-5 pl-6 border border-[#4388FF4D] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
        <div className="flex flex-col md:flex-row lg:justify-lg:between lg:items-center md:h-12.5">
          <p className="w-44.75 pb-2">
            <span className="text-3xl font-extrabold leading-9 text-[#111827]">
              ₹4,999
            </span>
            <span className="text-[16px] font-medium leading-6 text-[#6B7280] ml-2">
              /month
            </span>
          </p>
          <div className="w-32 pb-4 mt-4">
            <p className="text-sm font-bold leading-4 lg:tracking-[1.2px] text-[#1977F2]">
              SELECTED PLAN
            </p>
            <p className="text-xl font-bold leading-7 text-[#111827]">
              Startup
            </p>
          </div>
        </div>
        <p className="text-xs md:text-sm font-medium md:leading-5 text-[#6B7280]">
          Includes 5,000 credits/mo.
        </p>
      </div>
      <button className="flex justify-center items-center gap-2 py-2.5 rounded-3xl bg-[#4378FF0D] border border-[#436FFF4D]">
        <IoArrowUpCircleOutline className="size-4.5 font- text-[#1977F2]" />
        <span className="text-sm font-bold leading-5 text-[#1977F2]">
          Upgrade to Growth Plan
        </span>
      </button>
    </div>
  );
}

export default OrderSummary;
