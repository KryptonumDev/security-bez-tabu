import type { MetadataRoute } from 'next';
import { BACKGROUND_COLOR, THEME_COLOR } from '@/global/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Security Bez Tabu',
    short_name: 'SBT',
    description: 'Działalność mająca na celu propagowanie podnoszenia bezpieczeństwa systemów i sieci.',
    start_url: '/',
    display: 'standalone',
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      {
        src: '/security-bez-tabu-logo.png',
        type: 'image/png',
      },
    ],
  };
}
