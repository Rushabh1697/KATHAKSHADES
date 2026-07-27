'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
          >
            <PageTransitionLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayChildren}
        </motion.div>
      )}
    </>
  );
}
