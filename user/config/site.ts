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
    status: '🪙',
    statusTip:
      'Donations are greatly appreciated at this time.',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://stephenlittleton.com',
    email: 'stephen@stephenlittleton.com',
    cashapp: 'https://cash.app/$stephen730',
    github: 'https://github.com/djreefa',
    // bluesky: 'https://bsky.app/profile/sky.stephenlittleton.com',
    phone: 'tel:17063159678',
    facebook: 'https://www.facebook.com/buttheadandbeavis',
    twitter: 'https://x.com/djreefa',
    // flickr: 'https://flickr.com/stephen730/',
    mastodon: 'https://mastodon.social/@djreefa',
    steam: 'https://steamcommunity.com/id/OGCadillacMack',
    // vk: 'https://vk.com/djreefa',

    bio: 'Systems Administrator<br><br><a href="sms:7063159678?&body=Hi. Texting you from your website! This is ">+1(706)315-9678</a><br><br>',
    bio2: '<center> <form action="https://www.paypal.com/donate" method="post" target="_top"><input type="hidden" name="business" value="KF5AT3FRZQVDN" /><input type="hidden" name="no_recurring" value="0" /><input type="hidden" name="item_name" value="Your donation goes towards the furthering of my research which remains open and freely accessible in its original, fun, form." /><input type="hidden" name="currency_code" value="USD" /><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /><img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" /></form></center>',
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/djreefa'],
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
  repo: 'djreefa/sllog',
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
