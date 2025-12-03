import CountUp from '@/components/count-up';
import { useLayer } from '@/context/layer-provider';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function BalanceModal() {

  // IMPORT CONTEXT DATA
  const { page, content, balances } = useLayer();

  // SET COMPONENT DATA
  const revenue = balances[content][page] - balances[content][page - 1] || 0;
  const balance = balances[content][page];

  return (
    <div className="flex justify-center items-center fixed inset-0 z-10 backdrop-blur-sm p-5 bg-black/40">
      <div className="flex flex-col w-full max-w-lg gap-5 text-center rounded-2xl shadow-lg modal px-8 py-10 bg-gray-50">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-green-100">
          <DotLottieReact
            src="/lotties/check.lottie"
            loop={false}
            autoplay={true}
          />
        </div>
        <div className="text-center space-y-4">
          <span className="text-xl font-semibold tracking-tight">
            Thanks for your review!
          </span>
          <div className="flex flex-col gap-2 border rounded-lg p-4 bg-green-50 border-green-200">
            <div className="text-5xl font-bold tracking-tight text-green-600">
              US$ <CountUp start={0} end={balance} duration={500} />
            </div>
            <div className="text-green-700">
              Avaible balance!
            </div>
            <div className="opacity-60 mt-1 text-green-700">
              + US$ <CountUp start={0} end={revenue} duration={500} />
            </div>
          </div>
          <span className="block text-sm pt-3 text-gray-500">
            Keep evaluating to earn more! 🚀
          </span>
        </div>
      </div>
    </div>
  );

};