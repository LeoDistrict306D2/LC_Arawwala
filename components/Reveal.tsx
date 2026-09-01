'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';
import { cn } from '@/lib/utils';

/**
 * Reveal wrapper. Renders visible; the hook hides it after mount only when
 * animating is safe, so the page still reads with JavaScript disabled or
 * reduced motion enabled.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Stagger, in ms. Kept small — this site's motion is deliberately sparse. */
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}ms` }) : undefined}
    >
      {children}
    </div>
  );
}
