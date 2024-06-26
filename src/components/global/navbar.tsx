import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "../ui/theme-toggle";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-2 px-8 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-blue-900 justify-between">
      <aside className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/findijobsLogo.png"
            width={150}
            height={108}
            alt="FindiJobs logo"
          />
        </Link>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Jobs</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resumes</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-8 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#1e81cd_50%,#FFFFFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {/*user ? <UserButton afterSignOutUrl="/" /> : null */}
        <MenuIcon />
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Navbar;
