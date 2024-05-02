import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://www.stephenlittleton.com/',
  title: 'Logbook',
  subtitle: 'Stephen Littleton Website',
  description: 'Information about Stephen Littleton from Columbus, GA',
  lang: 'en',
  timeZone: 'America/New_York',
  since: 2023,
  cover: SiteCover,
  author: {
    name: 'Stephen Littleton',
    status: '🤍',
    statusTip:
      '<a href="https://dev.stephenlittleton.com" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Stephens Dev Page</a> still lives !',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://stephenlittleton.com',
    github: 'https://github.com/stephenxxxx',
    // bluesky: 'https://bsky.app/profile/fediverse.stephenlittleton.com',
    //facebook: 'https://www.facebook.com/whatdoyouwantonyourtombstone',
    twitter: 'https://x.com/djreefa',
    flickr: 'https://flickr.com/stephenlittleton/',
    vk: 'https://vk.com/stephenxx',
    email: 'stephen@stephenlittleton.com',
    cashapp: 'https://cash.app/$stephen730',
    bio: 'Repair Technician, Sales Consultant, Web Developer',
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/stephenxxxx'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'stephenxxxx/sllog',
  repoId: 'R_kgDOK0FGtg',
  category: 'General',
  theme: 'transparent_dark',
  categoryId: 'DIC_kwDOK0FGts4CbdlN',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: '/about',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: '/about',
    },
  ],
};
