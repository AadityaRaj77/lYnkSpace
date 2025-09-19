"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className="relative px-3 py-2 text-white hover:text-violet-600"
        >
            {children}
            {/* underline */}
            <span
                className={`
          absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-400
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
            ></span>
        </Link>
    );
};

export default NavLink;
