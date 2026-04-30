"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LogoLoader from "../ui/logo-loader";

const loaderDuration = 450;

export default function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 0);
    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, loaderDuration);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname, searchParams]);

  return isVisible ? <LogoLoader /> : null;
}
