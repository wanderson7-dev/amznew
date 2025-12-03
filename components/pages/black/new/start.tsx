import Logo from "@/components/logo";
import Button from "@/components/button";
import { Play } from "lucide-react";
import { useLayer } from "@/context/layer-provider";

export default function Page() {

  // IMPORT CONTEXT DATA
  const { active, handleButtonClick } = useLayer();

  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 sm:gap-7 appear">
      <Logo width={140} height={70} />
      <h1 className="text-xl sm:text-2xl font-bold mt-5 text-gray-900">
        Earn money by rating Products
      </h1>
      <p className="text-base sm:text-lg text-gray-600">
        Congratulations! You&apos;ve just won a free license to evaluate Products in our app.
      </p>
      <p className="text-base sm:text-lg mb-5 text-gray-600">
        Click the button below to start rating Products and claim your bonus!
      </p>
      <Button
        icon={<Play size={18} />}
        active={active}
        onClick={handleButtonClick}
        className="pulse"
      >
        <span>Start now!</span>
      </Button>
    </div>
  );

};