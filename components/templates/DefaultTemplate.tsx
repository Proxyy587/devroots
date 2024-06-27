import { Badges, Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

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
              <div className="mt-1 rounded pt-2">
                <div>
                  <div className="flex flex-row flex-wrap items-center justify-center">
                    {Socials.map((social, index) => (
                      <Link
                        key={index}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        aria-label={social.url.split(".")[1]}
                        href={social.url}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="max-w-s mt-1 w-full space-y-2">
                <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                  <Link
                    href="https://abhijee.com"
                    className="w-full transition-all sm:hover:opacity-70"
                  >
                    <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-accent text-sm leading-tight">
                      <div className="flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded bg-secondary bg-opacity-50">
                          <span> 🌊 </span>
                        </div>
                        <div className="mx-4 flex flex-col">
                          <span
                            title="My Portfolio"
                            className="text-ellipsis text-[16px] text-zinc-400"
                          >
                            My Portfolio
                          </span>
                          <span
                            title="https://abhijee.com"
                            className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                          >
                            abhijee.com
                          </span>
                        </div>
                      </div>
                    </span>
                  </Link>
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
