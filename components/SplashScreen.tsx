import Image from 'next/image';
import { club } from '@/content/club';

/**
 * Entry splash. Pure CSS animation — no client JS, no hooks — so it degrades
 * correctly with JavaScript off (the standard this site holds every other
 * page to): the overlay fades itself out on a timer regardless, and the
 * prerendered page underneath is already there. `prefers-reduced-motion`
 * users skip it entirely rather than get a static hold.
 *
 * Motion is a single opacity fade, matching the rest of this site's
 * "sparse and slow" motion language — no scale, no slide.
 */
export function SplashScreen() {
  return (
    <div aria-hidden="true" className="splash-screen fixed inset-0 z-80 flex items-center justify-center bg-page">
      <div className="flex flex-col items-center text-center">
        <span className="text-xs tracking-[0.2em] text-ink-faint uppercase">Leo District 306 D2</span>
        <Image
          src={club.logo.src}
          alt=""
          width={64}
          height={64}
          priority
          className="mt-6 rounded-full"
        />
        <h1 className="mt-6 text-3xl text-ink">Leo Club of {club.shortName}</h1>
        <p className="measure mt-2 text-sm text-ink-muted">{club.tagline}</p>
        <div className="mt-8 h-px w-16 bg-rule" />
      </div>
    </div>
  );
}
