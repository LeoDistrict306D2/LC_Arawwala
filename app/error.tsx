'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the browser console and any server log drain.
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="entry-number text-sm font-semibold">Error</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ink md:text-title">
        Something went wrong.
      </h1>
      <p className="measure mt-4 text-lg text-ink-muted">
        This page failed to render. Trying again often clears it; if it does not, the fault is
        ours and we would like to hear about it.
      </p>
      <div className="mt-8">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center bg-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-page transition-colors hover:bg-accent"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
