import Image from "next/image";
import { BentoItem } from "../BentoGrid";

export function Avatar() {
  return (
    <BentoItem className="flex min-h-[120px] items-center justify-center bg-white p-3 min-[480px]:min-h-[140px] lg:col-span-1 dark:bg-slate-800/50">
      <Image
        unoptimized
        src="/face-in-clouds.png"
        alt="Profile avatar"
        width={100}
        height={100}
        className="size-16 min-[480px]:size-20 md:size-24"
      />
    </BentoItem>
  );
}
