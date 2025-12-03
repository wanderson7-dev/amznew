import CountUp from '@/components/count-up';
import { Wallet } from "lucide-react";
import { useLayer } from '@/context/layer-provider';

type BalanceProps = {
  start?: number,
  end?: number,
};

export default function Balance({
  start,
  end,
}: BalanceProps) {

  // IMPORT CONTEXT DATA
  const { page, content, balances } = useLayer();

  const startValue = start || balances[content][page - 2] || 0;
  const endValue = end || balances[content][page - 1] || 0;

  return (
    <div className="flex items-center gap-3 rounded-xl border-solid border-2 shadow-sm p-2 text-white border-green-700 bg-green-600">
      <span className="text-[10px] text-right font-semibold uppercase leading-3">
        <Wallet size={22} />
      </span>
      <span className="text-2xl font-semibold leading-none">
        US$ <CountUp start={startValue} end={endValue} duration={3000} />
      </span>
    </div>
  );

};