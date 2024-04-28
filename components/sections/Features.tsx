import { siteConfig } from "@/config/siteConfig";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Features() {
  return (
    <section>
      <MaxWidthWrapper className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[54px] pt-14 pb-12 max-sm:place-items-center">
        {siteConfig.features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col md:items-start items-center justify-center w-full md:max-w-[328px] max-w-[280px] h-[218px] "
          >
            <span className="bg-white-100 w-9 h-9 flex items-center justify-center rounded-full mb-6 mt-4">
              {feature.icon}
            </span>
            <div className="space-y-4 max-sm:text-center  ">
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-sm text-black-500 md:pr-10">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
}
