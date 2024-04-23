import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Navbar() {
  return (
    <nav className=" w-full py-3 bg-black-900 text-white-900 text-sm">
      <MaxWidthWrapper className="flex items-center justify-center">
        <p>Get 25% OFF on your first order. Order Now</p>
      </MaxWidthWrapper>
    </nav>
  );
}
