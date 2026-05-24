import { LuWallet } from "react-icons/lu";
function Wallet() {
  return (
    <div className="flex justify-between items-center p-4 border border-[#E5E7EB] rounded-sm">
      <div className="flex items-center gap-3">
        <LuWallet className="text-xl text-[#1977F2] m-1" />
        <div>
          <p className="text-sm font-bold leading-5 text-[#111827]">
            Wallet Balance
          </p>
          <p className="text-xs font-medium leading-4 text-[#6B7280]">
            ₹500.00 available
          </p>
        </div>
      </div>
      <button className="px-3 py-1.5 text-sm font-bold text-[#1977F2] leading-5 rounded border border-[#3171FF33] cursor-pointer">
        Apply
      </button>
    </div>
  );
}

export default Wallet;
