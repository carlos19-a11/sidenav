import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'cloud-upload',
    icon: 'fal fa-cloud-upload-alt',
    label: 'Coud upload',
  },
  {
    routeLink: 'statistics',
    icon: 'fal fa-file-invoice',
    label: 'Check invoice',
  },
  {
    routeLink: 'coupens',
    icon: 'fal fa-tags',
    label: 'Coupens',
    items: [
      {
        routeLink: 'coupens/list1.1',
        label: 'list Coupens',
      },
      {
        routeLink: 'coupens/create',
        label: 'create Coupens',
      },
    ],
  },
  {
    routeLink: 'pages',
    icon: 'fal fa-file',
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: 'fal fa-camera',
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    items: [
      {
        routeLink: 'settings/list1.1',
        label: 'list Coupens',
        items: [
          {
            routeLink: 'settings/list2.1',
            label: 'list exw',
          },
          {
            routeLink: 'settings/settings',
            label: 'Exis',
          },
        ],
      },
      {
        routeLink: 'settings/create',
        label: 'create Coupens',
      },
    ],
  },
];
