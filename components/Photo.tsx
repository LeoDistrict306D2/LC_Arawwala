import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph on the site goes through here, which is what guarantees
 * intrinsic dimensions and a fixed aspect ratio on all of them — no image
 * anywhere can cause layout shift.
 *
 * Photographs are presented plainly: no rounding, no shadow, no overlay. In a
 * documentary system the picture is evidence, not decoration.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div className={cn('relative overflow-hidden bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2 flex gap-3 text-xs text-ink-faint">
          <span>{image.caption}</span>
          {image.credit ? <span className="ml-auto shrink-0">{image.credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
