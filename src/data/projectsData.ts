/**
 * Proyectos agrupados por galería. Cada proyecto tiene una portada y varias fotos del mismo trabajo.
 * Las fotos se agruparon por similitud (mismo tipo de obra o misma fase).
 */
export const PROJECTS = [
  {
    id: '1',
    titleKey: 'projects.project2Title' as const,
    categoryKey: 'projects.categoryConcrete' as const,
    descKey: 'projects.project2Desc' as const,
    gallery: ['concrete-driveway-gate.png'],
  },
  {
    id: '2',
    titleKey: 'projects.project6Title' as const,
    categoryKey: 'projects.categoryConcrete' as const,
    descKey: 'projects.project6Desc' as const,
    gallery: [
      'stamped-patio-wood-fence.png',
      'stamped-patio-backyard.png',
      'concrete-patio-walkway.png',
    ],
  },
  {
    id: '3',
    titleKey: 'projects.project7Title' as const,
    categoryKey: 'projects.categoryConcrete' as const,
    descKey: 'projects.project7Desc' as const,
    gallery: [
      'concrete-finishing-worker.png',
      'concrete-curb-pour.png',
      'concrete-curb-finishing.png',
      'concrete-curb-guardrail.png',
      'concrete-drainage-workers.png',
    ],
  },
  {
    id: '4',
    titleKey: 'projects.project4Title' as const,
    categoryKey: 'projects.categoryConcrete' as const,
    descKey: 'projects.project4Desc' as const,
    gallery: ['concrete-driveway-residential.png', 'concrete-patio-walkway.png'],
  },
  {
    id: '5',
    titleKey: 'projects.project3Title' as const,
    categoryKey: 'projects.categoryFence' as const,
    descKey: 'projects.project3Desc' as const,
    gallery: [
      'concrete-pathway-wood-fence.png',
      'concrete-pathways-development.png',
    ],
  },
  {
    id: '6',
    titleKey: 'projects.project9Title' as const,
    categoryKey: 'projects.categoryConcrete' as const,
    descKey: 'projects.project9Desc' as const,
    gallery: [
      'concrete-formwork-prep.png',
      'concrete-formwork-rebar.png',
      'concrete-slab-prep.png',
      'concrete-sidewalk-formwork.png',
    ],
  },
  {
    id: '7',
    titleKey: 'projects.galleryWorkTitle' as const,
    categoryKey: 'projects.categoryConcrete' as const,
    descKey: 'projects.galleryWorkDesc' as const,
    gallery: [
      'concrete-installation.png',
      'concrete-work-site.png',
      'concrete-pour-site.png',
      'project-20.png',
      'project-21.png',
      'project-22.png',
    ],
  },
] as const;

export type ProjectId = (typeof PROJECTS)[number]['id'];

export const getProjectById = (id: string) => PROJECTS.find((p) => p.id === id);

export const imgPath = (name: string) =>
  `${import.meta.env.BASE_URL || '/'}images/projects/${name}`;
