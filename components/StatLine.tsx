'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * The impact figures, set as a single rule-separated line rather than a row of
 * cards. Numbers in a documentary system are a ledger entry, not a feature.
 *
 * Module scope so the reference is stable across renders and the count-up
 * effect is not torn down and restarted on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Figure({ stat }: { stat: Statistic }) {
  // Narrowed inline: TypeScript narrows on the `typeof` expression itself, not
  // on a boolean derived from it.
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className="flex-1 border-t-2 border-ink pt-4">
      <dd className="font-serif text-4xl font-semibold tabular-nums text-ink md:text-5xl">
        {stat.prefix}
        {/* The final value is rendered here, so the served HTML is already
            correct; the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">{stat.label}</dt>
      {stat.note ? <p className="mt-1 text-xs text-ink-faint">{stat.note}</p> : null}
    </div>
  );
}

export function StatLine({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <dl className="flex flex-col gap-8 sm:flex-row sm:gap-10">
        {stats.map((stat) => (
          <Figure key={stat.id} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
