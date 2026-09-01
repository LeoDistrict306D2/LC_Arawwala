import { Inter, Source_Serif_4 } from 'next/font/google';

/**
 * Source Serif 4 for headlines and figures, Inter for running text.
 *
 * A text-face serif rather than a display serif: this site sets long passages
 * in it, so it has to stay readable at 16px, not just look good at 72px.
 *
 * Both are loaded through next/font, which self-hosts the files and removes the
 * render-blocking round trip to fonts.googleapis.com.
 */
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontVariables = `${sourceSerif.variable} ${inter.variable}`;
