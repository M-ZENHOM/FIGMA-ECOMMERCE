import { Icons } from "@/components/Icons";
import PagesNav from "@/components/layouts/PagesNav";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <div className="w-full bg-red-100">
        <PagesNav
          bigTitle="Failed Order"
          secondTitle="Failed Order"
          className="py-[34.5px] w-full max-w-[1116px] mx-auto"
        />
      </div>
      <div className="flex items-center justify-center w-full py-18">
        <div className="w-full max-w-[379px] flex flex-col items-center justify-center text-center">
          <Icons.PaymentFail />
          <h2 className="font-bold text-2xl pb-5">Oops! There was an issue</h2>
          <p className="text-black-500 text-sm pb-7">
            Oops! There was a problem processing your order. Please review the
            details and try again.
          </p>
          <Button>
            Reorder <Icons.RightArrow />
          </Button>
        </div>
      </div>
    </>
  );
}
