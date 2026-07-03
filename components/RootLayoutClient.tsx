'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import PageTransitionLoader from './PageTransitionLoader';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Start loading when pathname changes
    setIsLoading(true);
    
    // Simulate page load transition
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      {isLoading && <PageTransitionLoader />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {displayChildren}
      </div>
    </>
  );
}
