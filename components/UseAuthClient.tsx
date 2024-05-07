import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Icons } from "./Icons";

export default function UserAuthClient() {
  const { isSignedIn } = useUser();
  return (
    <>
      {isSignedIn ? (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "size-6",
            },
          }}
        />
      ) : (
        <Link href="/sign-up">
          <Icons.UserTwo className="w-6 h-6" />
        </Link>
      )}
    </>
  );
}
