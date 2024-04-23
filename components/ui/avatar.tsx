import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  fallbackName?: string;
}
const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, fallbackName, ...props }, ref) => {
    return (
      <>
        {!src ? (
          <>
            {fallbackName && src !== "" && (
              <span className="w-9 h-9 rounded-full inline-flex justify-center items-center bg-primary-100 text-sm">
                {fallbackName}
              </span>
            )}
          </>
        ) : (
          <Image
            className="w-9 h-9 rounded-full ring-1"
            width={48}
            height={48}
            src={src ? src : ""}
            alt={alt}
            {...props}
            ref={ref}
          />
        )}
      </>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
