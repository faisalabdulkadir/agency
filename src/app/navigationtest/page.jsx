"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  console.log(q)

  console.log(pathname)

  const handleClick = () => {
    console.log("clicked");
    router.forward();
  };

  return (
    <div>
      <Link href={{ pathname: "/" }} prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and click</button>
    </div>
  );
};

export default NavigationTestPage;
