import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

export default function UserAuth() {
  const { userId } = auth();
  return (
    <>
      {userId ? (
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
