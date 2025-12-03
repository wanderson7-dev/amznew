import Button from '@/components/button';
import CountUp from '@/components/count-up';
import { Play } from 'lucide-react';
import { useLayer } from '@/context/layer-provider';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function WithdrawModal() {

  // IMPORT CONTEXT DATA
  const { page, active, content, balances, handleButtonClick } = useLayer();

  // SET COMPONENT DATA
  const balance = balances[content][page];

  return (
    <div className="flex justify-center items-center fixed inset-0 z-10 backdrop-blur-sm p-5 bg-black/40">
      <div className="flex flex-col w-full max-w-lg gap-6 text-center rounded-2xl shadow-lg modal px-8 py-10 bg-gray-50">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-green-100">
          <DotLottieReact
            src="/lotties/check.lottie"
            loop={false}
            autoplay={true}
          />
        </div>
        <div className="flex flex-col text-center text-balance space-y-4">
          <span className="text-2xl font-semibold tracking-tight">
            Congratulations!
          </span>
          <span className="text-lg">
            Watch this quick 4-minute tutorial to redeem your reward!
          </span>
          <div className="flex flex-col gap-2 border rounded-lg p-4 bg-green-50 border-green-200">
            <div className="text-5xl font-bold tracking-tight text-green-600">
              US$ <CountUp start={0} end={balance} duration={500} />
            </div>
            <div className="text-green-700">
              Avaible balance!
            </div>
          </div>
        </div>
        <Button
          icon={<Play size={18} />}
          active={active}
          onClick={handleButtonClick}
        >
          <span>Withdraw my balance!</span>
        </Button>
      </div>
    </div>
  );

};