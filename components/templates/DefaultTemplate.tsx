import { Badges } from "@/constants";
import Image from "next/image";

const DefaultTemplate = () => {
  return (
    <div className="flex-center flex-col">
      <div className="dark:bg-accent/10 min-h-screen flex flex-col">
        <Image
          src={"/banner.jpg"}
          alt="banner"
          width={1080}
          height={720}
          className="w-full object-cover"
        />
        <div className="mx-auto -mt-20 flex w-full max-w-3xl flex-1 flex-col items-center px-0 sm:px-10">
          <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
            <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
              <div className="relative">
                <Image
                  src={"/avatar.avif"}
                  alt="profilepic"
                  width={350}
                  height={350}
                  className="bg-primary border-primary h-28 w-28 rounded-full border-4 border-solid object-cover"
                />
              </div>
              <div className="relative flex flex-row items-center justify-center">
                <div className="mb-1 flex flex-col">
                  <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                    Abhijit Bhattacharjee
                  </span>
                  <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                    I love russian girls
                  </p>
                  <div className="mt-3 flex flex-col">
                    <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                      Typescript is gay
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
                    {Badges.map((badge) => (
                      <div
                        key={badge.label}
                        className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1"
                      >
                        <span className="w-5">{badge.emoji}</span>
                        <span className="text-banner text-xs">
                          {badge.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTemplate;
