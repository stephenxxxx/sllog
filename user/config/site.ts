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
  url: 'https://log.stephenlittleton.com/',
  title: 'Logbook',
  subtitle: 'My log and posts.',
  description: 'Just some posts. I am also including my log.',
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
    email: 'stephen@stephenlittleton.com',
    bio: `平和 Peace Begin 安宁<br/>笑顔 With Smile 微笑<br/>Мир начинается<br>с улыбки`,
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

          // Replace the following with your own setting

          // Plausible
          //'<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          //'<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          // `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LQ73GWF6XT"></script>`,
          //`<script type="text/partytown">
          //  window.dataLayer = window.dataLayer || [];
          //  function gtag(){dataLayer.push(arguments);}
          //  gtag('js', new Date());
          //  gtag('config', 'G-LQ73GWF6XT');
          //</script>`,
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
  repoId: 'R_kgDOKgNIVw',
  category: 'General',
  theme: 'transparent_dark',
  categoryId: 'DIC_kwDOKgNIV84CaILb',
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
  {
    name: 'My Dev Profile 📄',
    url: 'https://dev.stephenlittleton.com/',
    rel: 'external',
  },
  {
    name: 'MusicVidz News',
    url: 'https://musicvidz3.stephenlittleton.com/',
    rel: 'external',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'My Dev Profile 📄',
      url: 'https://dev.stephenlittleton.com/',
      rel: 'external',
    },
    {
      name: 'MusicVidz News',
      url: 'https://musicvidz3.stephenlittleton.com/',
      rel: 'external',
    },
  ],
};
