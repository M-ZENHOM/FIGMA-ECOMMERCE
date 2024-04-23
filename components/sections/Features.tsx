import { siteConfig } from "@/config/siteConfig";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Features() {
  return (
    <section>
      <MaxWidthWrapper className="grid grid-cols-3 gap-[54px] pt-14 pb-12">
        {siteConfig.features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-start w-[328px] h-[218px]"
          >
            <span className="bg-white-100 w-9 h-9 flex items-center justify-center rounded-full mb-6 mt-4">
              {feature.icon}
            </span>
            <div className="space-y-4">
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-sm text-black-500 pr-10">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
}
