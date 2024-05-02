import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="w-full mx-auto flex items-center justify-center py-10">
      <SignUp path="/sign-up" />
    </section>
  );
}
