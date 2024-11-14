"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link>
          {path === "/" ? "❤️" : null}
        </li>
        <li>
          <Link href="/about-us">about-us</Link>
          {path === "/about-us" ? "❤️" : null}
        </li>
      </ul>
    </nav>
  );
}
