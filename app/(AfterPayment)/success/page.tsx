import { Icons } from "@/components/Icons";
import PagesNav from "@/components/layouts/PagesNav";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <div className="w-full bg-green-100">
        <PagesNav
          bigTitle="Successful Order"
          secondTitle="Successful Order"
          className="py-[34.5px] w-full max-w-[1116px] mx-auto"
        />
      </div>
      <div className="flex items-center justify-center w-full py-18">
        <div className="w-full max-w-[379px] flex flex-col items-center justify-center text-center">
          <Icons.PaymentSuccsess />
          <h2 className="font-bold text-2xl pb-5">Thank you for shopping</h2>
          <p className="text-black-500 text-sm pb-7">
            Your order has been successfully placed and is now being processed.
          </p>
          <Button>
            Go to my account <Icons.RightArrow />
          </Button>
        </div>
      </div>
    </>
  );
}
