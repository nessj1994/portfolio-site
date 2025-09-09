export type Tag =
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'NextJS'
  | 'Python'
  | 'Django'
  | 'Docker'
  | 'Azure'
  | 'MSSQL'
  | 'C++'
  | 'C#'
  | 'Unity'
  | 'Unreal Engine';

export type Project = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: Tag[];
  size: number;
};

export type ProjectList = Array<Project>;

export const projects: ProjectList = [
  {
    title: 'Porter Dealer Portal',
    description:
      'A web app used by our project managers and dealers create and manage quotes, orders, invoices, and more.',
    tags: ['React', 'JavaScript', 'TypeScript', 'NextJS', 'Docker', 'Azure'],
    size: 1,
  },
  {
    title: 'Litania REST API',
    description:
      "A custom REST API to manage data for our tools and allow integration with our ERP software. It was built using Python's Django framework, and is deployed locally in a docker container. Most of our internal tools interface with this in some form.",
    tags: ['Python', 'Django', 'MSSQL', 'Docker'],
    size: 1,
  },
  {
    title: 'Litania Toolbox Site',
    description:
      'An internal site with quick links to useful tools, including SQL reports, and other internal resources. It also has a nice link to the Microsoft Graph API to display our latest Teams announcements.',
    tags: ['React', 'TypeScript', 'NextJS', 'Docker', 'Azure'],
    size: 1,
  },
  {
    title: 'Liania Freight Estimator',
    description:
      'A web app that links to our REST API which in turn handles the API calls to our shipping providers to get estimates for existing orders, quotes, or products. It handles both simple package shipping and custom dimensional freight calculations for our more oddly shaped products such as pallets of hurdles.',
    tags: ['React', 'TypeScript', 'NextJS', 'Docker', 'Azure'],
    size: 1,
  },
  {
    title: 'Litania Pole Data Viewer',
    description:
      'A more simple web app that displays a table with important pole vault pole data for quick reference. It allows basic editing and export where needed and uses our Azure AD to restrict access to specific users within our company.',
    tags: ['React', 'TypeScript', 'NextJS', 'Docker', 'Azure'],
    size: 1,
  },
  {
    title: 'Litania Serialized Winch Importer',
    description:
      'A tool to simplify importing serialized winch products into our ERP system. It integrates with the ERP API to attach serial numbers to parts and create inventory records accordingly.',
    tags: ['C#', 'Unity', 'Python', 'Django'],
    size: 1,
  },
  {
    title: 'Litania Pole Importer',
    description:
      "A tool to simplify importing our pole vault poles. It integrates with the ERP API to create serialized inventory entries, or to create scrap jobs for items that don't pass quality control.",
    tags: ['C#', 'Unity', 'Python', 'Django'],
    size: 2,
  },
  {
    title: 'Untitled Visual Novel',
    description: 'A work in progress game idea made in Unity with C#',
    tags: ['C#', 'Unity'],
    size: 1,
  },
];
