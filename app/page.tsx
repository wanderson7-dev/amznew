"use client";

import BalanceModal from "@/components/balance-modal";
import WithdrawModal from "@/components/withdraw-modal";
import { useLayer } from "@/context/layer-provider";

export default function Page() {

  // IMPORT CONTEXT DATA
  const { balanceModal, withdrawModal, pageContent } = useLayer();

  return (
    <div className="flex flex-auto justify-center w-full max-w-xl gap-5 px-5 py-5">
      {pageContent}
      {balanceModal && <BalanceModal />}
      {withdrawModal && <WithdrawModal />}
    </div>
  );

};