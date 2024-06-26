import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Navbar() {
  return (
    <nav className="w-dvw py-3 bg-black-900 text-white-900 text-sm">
      <MaxWidthWrapper className="flex items-center justify-center">
        <p>
          Get 25% OFF on your first order.
          <Link href="/search" className="underline">
            Order Now
          </Link>
        </p>
      </MaxWidthWrapper>
    </nav>
  );
}
