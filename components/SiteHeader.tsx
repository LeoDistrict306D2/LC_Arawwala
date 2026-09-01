'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Masthead.
 *
 * Flat navigation, no dropdowns — a documentary site should not hide where
 * anything is. The header is a hairline rule and a wordmark; it never floats
 * over content or changes size on scroll.
 *
 * Accessibility is built in rather than bolted on: the toggle carries
 * `aria-expanded`/`aria-controls`, Escape closes and returns focus, body scroll
 * locks while open, and the current page is marked `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/board', label: 'Board' },
  { href: '/past-presidents', label: 'Past Presidents' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu on navigation. Done by adjusting state during render — the
  // pattern React documents for "reset state when a prop changes" — rather than
  // in an effect, which would trigger a second render pass on every route
  // change. Covers back/forward navigation too, which an onClick handler on the
  // links would miss.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-page/95 backdrop-blur-sm">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight text-ink">
            Leo Club of {club.shortName}
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-ink-faint">
            {club.district}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'border-b-2 pb-1 text-xs uppercase tracking-[0.16em] transition-colors',
                      active
                        ? 'border-accent text-ink'
                        : 'border-transparent text-ink-muted hover:border-rule-strong hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/join"
          className="hidden shrink-0 border border-ink px-4 py-2 text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-page lg:inline-block"
        >
          Join
        </Link>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-rule bg-page lg:hidden"
      >
        <nav aria-label="Primary" className="wrap py-2">
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block py-4 text-sm uppercase tracking-[0.16em]',
                      active ? 'text-accent' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-4 mb-4 block border border-ink px-4 py-3 text-center text-sm uppercase tracking-[0.16em] text-ink"
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
