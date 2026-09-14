// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dillon-luong', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Public Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['dillon-luong/genregraph', 'dillon-luong/FoodieBackend', 'dillon-luong/gsr.github.io-site', 
                   'Jdmg1308/Hit-Me', 'nilava1234/VR-Arena-Shooter'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Golfin\' Slayer',
          description:
            '3D Roguelike centered on Golf mechanics, built on themes of Golf, Retro Television, and Dark Fantasy (11 person team)',
          imageUrl:
            '/gsr-game-title.png',
          link: 'https://pseudomancer.studio/',
        },
        {
          title: 'STOMACH',
          description:
            'First-person PS1-retro-style cooking horror game set on a monstrous cruise ship (7 person team)',
          youtubeUrl: 'https://youtu.be/Wbjyx-G7sKY',
          link: 'https://store.steampowered.com/app/3843830/Stomach/',
        },
        {
          title: 'HIT ME!',
          description:
            '2D action platformer emphasizing arcadey physics-based combat and gambling gameplay loop (6 person team)',
          youtubeUrl:
            'https://youtu.be/CAAcnSCjZSY',
          link: 'https://jdmg1308.itch.io/hit-me',
        },
        {
          title: 'Game Tech VR Final Project',
          description:
            'Multiplayer VR game where players control separate parts of a mech and defeat enemy hordes (4 person team)',
          youtubeUrl:
            'https://youtu.be/U9m_S9xivYY',
          link: 'https://github.com/nilava1234/VR-Arena-Shooter',
        },
        {
          title: 'GenreGraph',
          description:
            'WIP Music discovery platform that generates interactive visualizations of user listening habits using genre similarity analysis',
          imageUrl:
            '/genregraph-ss.png',
          link: 'https://genregraph.vercel.app/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Dillon Luong', description: '', imageURL: '' },
  social: {
    linkedin: 'dillon-luong',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dillonluong01@gmail.com',
  },
  resume: {
    fileUrl: '',
      // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Unity',
    'C#',
    'C++/Unreal (learning)',
    'Python',
    'Node.js',
    'SQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Golang',
    'Typescript',
    'Java',
    'Html',
    'CSS',
    '.NET',
  ],
  experiences: [
    {
      company: 'Kinder Morgan',
      position: 'Application Developer/Data Analyst',
      from: 'June 2025',
      to: 'May 2026',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Kinder Morgan',
      position: 'App Developer Intern',
      from: 'June 2024',
      to: 'August 2024',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Kinder Morgan',
      position: 'Full Stack Developer Intern',
      from: 'May 2023',
      to: 'August 2023',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'University of Texas at Austin',
      degree: 'Bachelors in Computer Science',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
