/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title:
    "Thomas Bernard | Alpine Hydromorphology, River Restoration & Flood Risk",
  description:
    "Alpine hydromorphologist based in Trento, Italy. River change and sediment budgets from repeat lidar, hydromorphological trajectory diagnosis and 2D flood modelling for river restoration and flood risk projects in Italy, France and Switzerland.",
  og: {
    title:
      "Thomas Bernard | Alpine Hydromorphology, River Restoration & Flood Risk",
    type: "website",
    url: "https://thomasgbernard.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Alpine Hydromorphology for River Restoration & Flood Risk",
  logo_name: "Thomas Bernard, PhD",
  nickname: "",
  subTitle:
    "I model how rivers and sediment move, from repeat lidar surveys and 2D hydraulics, so restoration and flood projects work with the river, not against it. You get a clear diagnosis: how the reach has changed, where it is heading, and what to do next.",
  // Shown under the hero text: makes the international scope explicit
  international: {
    text:
      "Based in Trento, Italy · Alpine rivers in Italy, France and Switzerland (Ticino, Romandy)",
    languages: ["English", "Français", "Italiano"],
  },
  // PDF stored in public/ so it is served at the root of the site
  resumeLink: "/Thomas_Bernard_Resume.pdf",
  portfolio_repository:
    "https://github.com/ThomasGBernard/ThomasGBernard.github.io",
  githubProfile: "https://github.com/ThomasGBernard",
  heroBackgroundAlt:
    "Panorama of the braided Tagliamento River, with wide gravel bars, turquoise channels and the Alps in the background",
  heroBackgroundCaption: "Tagliamento River, Friuli, Italy",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ThomasGBernard",
  // linkedin: "https://www.linkedin.com/in/thomas-bernard-622249152/",
  // google scholar: "https://scholar.google.com/citations?user=wTgB0K0AAAAJ&hl=fr&oi=ao"
  // gmail: "thomas.bernard.consulting@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/ThomasGBernard",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Scholar",
    link: "https://scholar.google.com/citations?user=wTgB0K0AAAAJ&hl=fr&oi=ao",
    fontAwesomeIcon: "fas fa-graduation-cap", // Reference https://fontawesome.com/icons/brands/solid/google-scholar
    backgroundColor: "#27630b", // Reference https://simpleicons.org/?q=scholar
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thomas-bernard-622249152/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:thomas.bernard.consulting@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Lidar & 3D Data Processing",
      fileName: "DataScienceImg",
      imagePath: "home/expertise_pointcloud.jpg",
      imageAlt: "Classified lidar point cloud of an urban area in Trento",
      imageCaption: "Classified airborne lidar point cloud, Trento.",
      skills: [
        "Quality control and classification of airborne, UAV and topo-bathymetric lidar, including machine-learning classification.",
        "High-resolution terrain and surface models (DTM, DSM, canopy height) and photogrammetric point clouds.",
        "Automated, documented Python pipelines, so every analysis can be checked and repeated on new surveys.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
          style: {
            backgroundColor: "#ffffff",
          },
        },
        {
          skillName: "QGIS",
          fontAwesomeClassname: "simple-icons:qgis",
          style: { color: "#589632" },
        },
        {
          skillName: "CloudCompare",
          imageSrc: "cc_logo.jpg",
          fontAwesomeClassname: "",
          style: { color: "#00A8E8" },
        },
        {
          skillName: "Lastools",
          imageSrc: "rapidlasso_LAStools_logo.png",
          style: { color: "#FFA500" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
      ],
    },
    {
      title: "Hydraulic & Sediment Transport Modelling",
      fileName: "CloudInfraImg",
      imagePath: "home/expertise_hydraulics.jpg",
      imageAlt:
        "Map of a river catchment classified into hillslopes, channels and floodplains",
      imageCaption:
        "Catchment-scale mapping of hillslopes, channels and floodplains from lidar topography.",
      skills: [
        "1D and 2D hydraulic and sediment transport modelling of rivers and their morphological evolution.",
        "Flood scenarios (e.g. 100-year events): inundation extent, depth, velocity and hazard maps for floodplains and infrastructure.",
        "Complete flood and sediment studies, or technical support to the engineers and geologists who sign hydraulic compatibility studies in Italy: terrain preparation, 2D modelling and mapping.",
      ],
      softwareSkills: [
        {
          skillName: "HEC-RAS",
          imageSrc: "hec-ras.png",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Graphflood",
          fontAwesomeClassname: "fas fa-project-diagram",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Statistical Modelling",
          fontAwesomeClassname: "iconoir:stats-up-square-solid",
          style: {
            backgroundColor: "#000000",
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Natural Hazards & Topographic Change Detection",
      fileName: "DesignImg",
      imagePath: "home/hero_landslide_change.jpg",
      imageAlt:
        "Map of erosion and deposition from earthquake-triggered landslides, detected by comparing repeat airborne lidar surveys",
      imageCaption:
        "Erosion (blue) and deposition (red) from earthquake-triggered landslides, measured by 3D change detection between repeat airborne lidar surveys (PhD research).",
      skills: [
        "Change detection between repeat lidar surveys (DoD, M3C2) to measure landslides, erosion and deposition, with their uncertainty.",
        "3D landslide inventories and geomorphic metrics for high-resolution landscape and hazard analysis.",
        "Monitoring of Alpine and river environments: sediment budgets, channel change and slope instability.",
      ],
      softwareSkills: [
        {
          skillName: "LAStools",
          imageSrc: "rapidlasso_LAStools_logo.png",
          style: { color: "#FF7C00" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "Geospatial Analysis",
          fontAwesomeClassname: "fas fa-globe-europe",
          style: { color: "#02569B" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "",
      iconifyClassname: "",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PhD in Environmental Sciences",
      subtitle: "University of Rennes (Géosciences Rennes) - France ",
      logo_path: "Logo_Rennes.png",
      alt_name: "UniRennes",
      duration: "2018 - 2022",
      descriptions: [
        "• Thesis: “Analyse haute résolution de la morphologie des paysages et des processus à partir de LiDAR aéroporté répété et simulation hydraulique” (high-resolution analysis of landscape morphology and processes from repeat airborne lidar and hydraulic simulation).",
        "• Developed synoptic 3D landslide inventories and volume estimates from repeat lidar (Earth Surface Dynamics, 2021) and hydro-geomorphic metrics combining topography and 2D hydraulics (JGR Earth Surface, 2022, Editors' Highlight in Eos).",
        "• More than 100 hours of teaching.",
      ],
      website_link: "https://geosciences.univ-rennes.fr/en",
    },
    {
      title: "M.S. in Earth and Environmental Sciences",
      subtitle: "University of Rennes - France",
      logo_path: "Logo_Rennes.png",
      alt_name: "UniRennes",
      duration: "2016 - 2018",
      descriptions: [
        "• Final internship: volumetric analysis of co-seismic landslides in the Kaikoura region (New Zealand) using lidar and Pléiades satellite imagery.",
        "• Research internship: relationship between fracturing, topography and erosion, using 3D lidar point clouds and topographic change detection.",
      ],
      website_link: "https://www.univ-rennes.fr/en",
    },
    {
      title: "BSc. in Earth and Environmental Sciences",
      subtitle: "University of Tours - France",
      logo_path: "Logo_UniTours.png",
      alt_name: "UniTours",
      duration: "2013 - 2016",
      descriptions: [
        "• Bachelor's degree in Earth and environmental sciences.",
      ],
      website_link: "https://international.univ-tours.fr/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "3D data processing with Machine & Deep Learning",
      subtitle: "- Dr. Florent Poux (in progress)",
      logo_path: "3d_geoacademy_logo.png",
      certificate_link: "https://learngeodata.eu/",
      alt_name: "Dr. Florent Poux",
      color_code: "#030f3899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research and professional experience",
  description:
    "I started in research at the University of Rennes, where I completed a PhD on repeat airborne lidar and hydraulic simulation, then worked as a geospatial and lidar data specialist. As a post-doctoral researcher in hydromorphology at the University of Trento, I managed an applied research project on river morphodynamics. In 2026 I carried out 2D flood modelling for a hydraulic compatibility assessment with Vesta Energy. I now bring that science to river restoration and flood risk projects across the Alps.",
  header_image_path: "experience.svg",
  heroImageAlt: "Alpine mountain panorama",
  heroImageCaption: "", // e.g. "Dolomites, Italy" (shown in the banner corner)
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Hydraulic modelling consultant",
          company: "Vesta Energy srl",
          company_url: "",
          logo_path: "vesta_energy.jpg",
          duration: "Jun 2026 - Jul 2026",
          location: "Trento, TN, Italy",
          description: [
            "Project: Hydraulic Compatibility Assessment (VCI) for a 23.6 MWp agrivoltaic park.\n",
            "Description: Consultancy assignment assessing the flood safety of a solar park covering nearly 25 hectares, in strict compliance with the regulations of the Flood Risk Management Plan (PGRA).\n",
            "Key Deliverables:\n",
            "• Hydrodynamic Modeling: Two-dimensional simulation (using HEC-RAS) of 100-year flood events (TR 100 scenario) to map water levels and flow velocities.\n",
            "• Compliance and safety: Determination of the hydraulic safety elevation for the equipment.\n",
            "• Technical documentation: Preparation of engineering reports (hydrological and hydraulic reports) to demonstrate hydraulic invariance and the absence of any increase in hydraulic hazard for neighboring areas.\n",
            "Outcome: favourable opinion from the Eastern Alps District Basin Authority.",
          ],
          color: "#000000",
        },
        {
          title: "Post-doc researcher in Hydromorphology",
          company: "University of Trento",
          company_url: "https://www.dicam.unitn.it/",
          logo_path: "Logo_Trento.png",
          duration: "Oct 2023 - Apr 2026",
          location: "Trento, Italy",
          description: [
            "• Management of an applied research project in river morphodynamics\n",
            "• 1D (Python) and 2D (HEC-RAS) hydraulic and sediment transport modelling, and flume experiments\n",
            "• Quantification of the active width of gravel-bed rivers from DEM differences (Geomorphology, 2026)\n",
            "• Preparation of technical reports and coordination with international partners\n",
            "• Organization of a technical workshop on the management of Alpine rivers (planning, funding, coordination)",
          ],
          color: "#0879bf",
        },
        {
          title: "Geospatial & LiDAR Data Specialist",
          company: "Géosciences Rennes",
          company_url: "https://geosciences.univ-rennes.fr/en",
          logo_path: "logo_GEOSCIENCES_rennes.jpg",
          duration: "Apr 2022 - Jan 2023",
          location: "Rennes, France",
          description: [
            "• Processing and classification of topo-bathymetric LiDAR data using machine learning\n",
            "• Reconstruction of river bathymetry using 2D hydraulic simulations\n",
            "• Production of high-resolution digital terrain models (DTMs)\n",
          ],
          color: "#9b1578",
        },
        {
          title: "Junior researcher in Natural-hazards and Remote sensing",
          company: "University of Rennes",
          company_url: "https://www.univ-rennes.fr/",
          logo_path: "Logo_Rennes.png",
          duration: "Oct 2018 - Mar 2022",
          location: "Rennes, France",
          description: [
            "• 2D hydraulic simulations for floodplain mapping and risk analysis\n",
            "• Development of workflows for detecting topographic changes and landslides\n",
            "• LiDAR data processing and classification\n",
            "• Production of technical reports | international communication\n",
            "• Teaching activity (more than 100 hours)",
          ],
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// About page (merges the former Experience and Education pages)
const about = {
  title: "About",
  subtitle: "Alpine hydromorphologist, PhD",
  description:
    "Rivers move. On the Po, the riverbed has dropped by more than 6 metres in places, leaving bridge foundations exposed, because sediment was left out of the picture. I spent eight years studying how rivers move: a PhD in Rennes on repeat lidar and 2D hydraulics, lidar processing at Géosciences Rennes, then a post-doc in Trento on the morphodynamics of gravel-bed rivers. In 2026 my first hydraulic compatibility study received a favourable opinion from the Eastern Alps District Basin Authority. Today I help basin authorities, river managers and engineering firms understand how their river works before they act on it.",
  languagesText:
    "Based in Trento, working in English, French and Italian for river projects in Italy, France and Switzerland.",
  experienceTitle: "Experience",
  educationTitle: "Education",
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

{
  /*const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};*/
}

{
  /*const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};*/
}

// Scientific publications
const publications = {
  data: [
    {
      id: "pub-1",
      name:
        "From point cloud to digital elevation model: Airborne topo-bathymetric LiDAR processing over the 28 km Ardèche River Gorges",
      createdAt: "2026",
      description:
        "Nativ, R., Lague, D., Leroy, P., Guerit, L., Bernard, T., Letard, M., ... & Steer, P. (Earth Observation, EGU, accepted for publication).",
      url:
        "https://egusphere.copernicus.org/preprints/2026/egusphere-2026-724/",
    },
    {
      id: "pub-2",
      name:
        "Quantification of the active width in gravel-bed rivers: the effect of morphology, flood magnitude and survey frequency",
      createdAt: "2026",
      description:
        "Bernard, T. G., Pandrin, E., Capito, L., Bizzi, S., & Bertoldi, W. (Geomorphology).",
      url:
        "https://www.sciencedirect.com/science/article/pii/S0169555X26000723",
    },
    {
      id: "pub-3",
      name:
        "GraphFlood 1.0: an efficient algorithm to approximate 2D hydrodynamics for landscape evolution models",
      createdAt: "2024",
      description:
        "Gailleton, B., Steer, P., Davy, P., Schwanghart, W., & Bernard, T. (Earth Surface Dynamics).",
      url: "https://esurf.copernicus.org/articles/12/1295/2024/",
    },
    {
      id: "pub-4",
      name:
        "Hydro-geomorphic metrics for high resolution fluvial landscape analysis",
      createdAt: "2022",
      description:
        "Bernard, T. G., Davy, P., & Lague, D. (Journal of Geophysical Research: Earth Surface, Editors' Highlight in Eos).",
      url:
        "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JF006535",
    },
    {
      id: "pub-5",
      name:
        "Beyond 2D landslide inventories and their rollover: synoptic 3D inventories and volume from repeat lidar data",
      createdAt: "2021",
      description:
        "Bernard, T. G., Lague, D., & Steer, P. (Earth Surface Dynamics).",
      url: "https://esurf.copernicus.org/articles/9/1013/2021/",
    },
  ],
};

const publicationsHeader = {
  title: "Publications & Outreach",
  description:
    "Peer-reviewed articles, conference presentations and science communication in fluvial morphodynamics, lidar processing and 2D hydraulics.",
  avatar_image_path: "projects_image.svg",
  scholarLink:
    "https://scholar.google.com/citations?user=wTgB0K0AAAAJ&hl=fr&oi=ao",
};

// Outreach & Conférences Internationales
const outreach = {
  data: [
    {
      title: "IS River 2025 (Lyon, France)",
      subtitle:
        "Bedload and morphological active widths of gravel-bed rivers: variability among timescales",
      event_date: "July 2025",
      text: "Bernard, T., Pandrin, E., Bertoldi, W., Capito, L. & Bizzi, S.",
    },
    {
      title: "EGU General Assembly 2025 (Vienna, Austria)",
      subtitle:
        "Variability in bedload and morphological active widths of gravel-bed rivers across timescales",
      event_date: "April 2025",
      text: "Bernard, T., Pandrin, E., Bertoldi, W., Capito, L. & Bizzi, S.",
    },
    {
      title: "EGU General Assembly 2021 (Vienna, Austria)",
      subtitle:
        "A hydrodynamically consistent 'slope-area' relationship for analysing fluvial landscape with wide rivers",
      event_date: "April 2021",
      text: "Bernard, T., Davy, P., & Lague, D.",
    },
    {
      title: "AGU Fall Meeting 2019 (San Francisco, USA)",
      subtitle:
        "How 2D Hydraulic Modelling Can Improve Landscape Analysis in Tectonic Geomorphology?",
      event_date: "December 2019",
      text: "Bernard, T., Davy, P., & Lague, D.",
    },
    {
      title: "EGU General Assembly 2019 (Vienna, Austria)",
      subtitle:
        "Detection and volume estimation of earthquake-triggered landslides from multitemporal LiDAR and tri-stereo satellite 3D remote sensing",
      event_date: "April 2019",
      text: "Bernard, T., Lague, D., & Steer, P.",
    },
  ],
};

const outreachHeader = {
  title: "International conferences",
  description: "Vienna (Austria), San Francisco (California), Lyon (France)",
};

const comicProject = {
  title: "Scientific Comic Book Project",
  subtitle:
    "Why is restoring rivers essential for reducing flooding and preserving biodiversity?",
  description:
    "A 22-panel comic book introducing current challenges in river restoration, flood risk, biodiversity and climate change. This comic has been created in collaboration with Justine Molron from Djoune illustration.",
  artistWebsite:
    "https://djoune-illustrations.fr/project/la-restauration-des-rivieres/",
  artistLogo: require("./assets/images/comic/Djoune_logo.png"),
  previewImages: [
    require("./assets/images/comic/case1.jpg"),
    require("./assets/images/comic/case2.jpg"),
    require("./assets/images/comic/case3.jpg"),
  ],
};

// Portfolio page (projects from the toolbox, research, outreach)
const portfolioHeader = {
  title: "Portfolio",
  description:
    "Case studies built with my geospatial toolbox, peer-reviewed research, and science communication.",
};

// Toolbox projects: add one entry per case study.
// "link" points to a static page in public/<folder>/index.html (full page load, not a React route).
const toolboxProjects = {
  title: "Projects",
  description:
    "Case studies processed end to end with my own Python toolbox for lidar change detection, terrain models and hydraulic analysis.",
  data: [
    {
      id: "oso-landslide",
      title: "Oso landslide, Washington (USA)",
      context: "Public case study | Landslide of 22 March 2014",
      summary:
        "Sediment budget of the SR530 landslide from airborne lidar surveyed before (2013) and about two weeks after (April 2014) the event, with water surfaces mapped and left out. The source volume matches the published USGS estimate; part of the deposit was still under water.",
      figures: [
        { value: "3.94 Mm³", label: "left the source area" },
        { value: "3.36 Mm³", label: "deposited on dry ground" },
        { value: "87 m", label: "maximum lowering" },
      ],
      methods: [
        "Airborne lidar",
        "Stable-area ICP",
        "Data-driven 3 m grid",
        "Error model",
        "Water masks",
        "DEM of difference",
        "Volumes with uncertainty",
      ],
      image: require("./assets/images/projects/oso.jpg"),
      imageAlt:
        "Map of elevation change at the Oso landslide: lowering in red at the source, deposits in blue on the valley floor",
      link: "/oso/index.html",
      linkText: "Open the interactive case study",
      repo: "https://github.com/ThomasGBernard/oso-landslide-lidar-change",
    },
  ],
};

// Home page "Selected work" section (replaces the former Expertise section)
const selectedWork = {
  title: "Selected work",
  description:
    "A few examples of what repeat surveys and 2D hydraulics can tell you about a river.",
  moreLink: { text: "See the full portfolio →", to: "/portfolio" },
  data: [
    {
      id: "active-width",
      image: require("./assets/images/projects/tagliamento_braided.jpg"),
      imageAlt:
        "Braided channels and wide gravel bars of the Tagliamento River, with mountains in the background",
      tag: "Research · Geomorphology, 2026",
      title: "Active width of gravel-bed rivers from repeat surveys",
      text:
        "How much of a gravel-bed river actually carries sediment, measured from DEM differences and flume experiments, and how the answer depends on morphology, flood magnitude and survey frequency.",
      link:
        "https://www.sciencedirect.com/science/article/pii/S0169555X26000723",
      linkText: "Read the article",
    },
    {
      id: "oso",
      image: require("./assets/images/projects/oso.jpg"),
      imageAlt:
        "Map of elevation change at the Oso landslide: lowering in red at the source, deposits in blue on the valley floor",
      tag: "Case study · Method demo, USA",
      title: "Sediment budget from repeat lidar, with uncertainty",
      text:
        "The workflow behind my river monitoring service, tested on the 2014 Oso landslide: 3.94 Mm³ left the source area, consistent with the USGS estimate.",
      link: "/oso/index.html",
      linkText: "Open the interactive case study",
    },
    {
      id: "hydro-geomorphic",
      image: require("./assets/images/home/expertise_hydraulics.jpg"),
      imageAlt:
        "Map of a river catchment classified into hillslopes, channels and floodplains",
      tag: "Research · JGR Earth Surface, 2022 · Editors' Highlight",
      title: "River landscapes mapped with lidar and 2D hydraulics",
      text:
        "Hillslopes, channels and floodplains classified across a whole catchment by combining high-resolution topography with 2D flow simulation.",
      link:
        "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JF006535",
      linkText: "Read the article",
    },
  ],
};

// Services Page
const servicesHeader = {
  title: "Services",
  description:
    "Rivers move, and projects that ignore it often fail: beds incise, banks erode, restored reaches fill in. I turn repeat surveys, historical records and 2D hydraulics into a diagnosis of how your river works: how it has changed, where it is heading, and what to do next. For restoration and flood risk projects in Italy, France and Switzerland, in English, French or Italian.",
  ctaTitle: "Have a river reach, a project or a dataset in mind?",
  ctaText:
    "Send me a short description and what data you have. I will reply within two working days with a first assessment.",
  ctaButton: "Discuss your project",
};

const services = [
  {
    id: "river-monitoring",
    icon: "fas fa-layer-group",
    title: "River Change Monitoring from Repeat Lidar",
    tagline:
      "How your river reach is changing: active width, bed mobility, erosion and deposition, with their uncertainty.",
    diagnosis:
      "Is the reach eroding, aggrading or stable, where, and how fast? Is it real change or survey noise?",
    status: { label: "Available now", available: true },
    problem:
      "Restoration works, gravel extraction, a flood or a change in dam operation: you need to know how the river responds. I compare repeat lidar, drone or photogrammetric surveys of the same reach, separate real change from survey error, and translate it into indicators river managers use. On surveys you already own, or with a lidar acquisition partner for a monitoring programme.",
    deliverables: [
      "Terrain models co-registered on stable areas, and elevation-change maps with a level of detection, so survey noise is not mistaken for real change",
      "Erosion, deposition and net volumes per river segment, with uncertainty",
      "Hydromorphological indicators: active width and bed mobility",
      "Sediment budget of the reach where the survey dates allow it",
      "Report on active processes, hotspots and what to monitor next, with metadata so the next survey is analysed the same way",
    ],
    inputs: [
      "Two or more surveys of the reach (LAS/LAZ point clouds or DTMs)",
      "Survey reports or control-point accuracy, if available",
      "The reach to analyse and the floods or works between surveys, if known",
    ],
  },
  {
    id: "trajectory-diagnosis",
    icon: "fas fa-route",
    title: "Hydromorphological Trajectory Diagnosis",
    tagline:
      "How the reach got where it is today, where it is heading, and where restoration will pay off.",
    diagnosis:
      "What drives the evolution of the reach, and which actions will give the river room to recover?",
    status: { label: "Available now", available: true },
    problem:
      "Before deciding where to restore, you need to understand the river's past: narrowing, incision, loss of braiding, disconnected floodplains. I reconstruct the trajectory of the reach from lidar, historical aerial photographs, long profiles and historical maps, identify the causes (sediment deficit, embankments, extraction, dams) and map the sectors with restoration potential, ranked by priority.",
    deliverables: [
      "Trajectory of the reach over decades: planform, active width and bed elevation",
      "Causes of change and current trend (incision, narrowing, recovery)",
      "Map of sectors with restoration potential and a prioritised list of actions",
      "Optional sediment budget, from existing measurements or a field campaign",
      "Report written for decision makers and for the project team",
    ],
    inputs: [
      "The reach and its management context",
      "Any lidar, historical photographs or maps, long profiles and past studies you hold",
      "Known works, gravel extraction and dams upstream",
    ],
  },
  {
    id: "hydraulic-compatibility",
    icon: "fas fa-water",
    title: "Hydraulic Compatibility Studies (Italy)",
    tagline:
      "2D flood modelling for the hydraulic compatibility study (VCI) your project needs under the flood risk management plan (PGRA).",
    diagnosis:
      "Is your project compatible with the flood hazard, and what must change to make it so?",
    status: { label: "Available now", available: true },
    problem:
      "A project in a flood-prone area needs a hydraulic compatibility study before the basin authority approves it. I run the 2D flood modelling, check hydraulic invariance and safety elevations, and write the hydraulic and hydrological reports, working with the registered engineer who signs the study. My first study, a 25-hectare solar park, received a favourable opinion from the Eastern Alps District Basin Authority.",
    deliverables: [
      "Hydraulic-grade terrain model from lidar, with channels and structures",
      "2D HEC-RAS model of the flood scenarios required (e.g. 100-year event)",
      "Flood extent, depth, velocity and hazard maps, before and after the project",
      "Hydraulic safety elevation and check that hazard does not increase for neighbouring areas",
      "Hydrological and hydraulic reports, ready for the signing engineer",
    ],
    inputs: [
      "Project location and layout (site plan)",
      "Project description: what will be built, such as structures, earthworks, fences and drainage",
      "GIS files of the proposed layout (shapefiles or similar), at its current design stage",
    ],
  },
  {
    id: "restoration-scenarios",
    icon: "fas fa-diagram-project",
    title: "Restoration Scenarios & Flood Risk Modelling",
    tagline:
      "Two or three restoration scenarios compared with 2D hydro-morphodynamic modelling.",
    diagnosis:
      "Which scenario gives the river room to recover while keeping flood risk under control?",
    status: { label: "From 2028", available: false },
    problem:
      "Once the diagnosis is done, the question becomes which option to build. I will compare two or three restoration scenarios (embankment setback, floodplain reconnection, sediment reintroduction) with 2D hydraulic and morphodynamic modelling, and recommend the one that best balances river recovery and flood safety. This service opens in 2028, after the morphodynamic case study I am preparing in 2027.",
    deliverables: [
      "Water depth and velocity maps for each scenario",
      "Bed evolution, erosion and deposition for each scenario",
      "Comparison of the scenarios, with calibration and uncertainty, and recommendations",
    ],
    inputs: [
      "A diagnosis of the reach or existing studies",
      "Terrain, bathymetry, design discharges and sediment data",
      "The scenarios under discussion",
    ],
  },
];

// Services page: stand-alone work, shown as a section of three cards under the service cards
const servicesStandalone = {
  title: "Also available as stand-alone work",
  text:
    "The modelling and lidar methods behind these services also apply beyond rivers. I can run them as a stand-alone task for your project, on your data or with a survey partner.",
  items: [
    {
      icon: "fas fa-house-flood-water",
      title: "2D Flood Modelling",
      text:
        "2D hydraulic modelling (HEC-RAS) of flood scenarios for a site, a road or a town, with depth, velocity and hazard maps.",
      applications:
        "Flood hazard maps for sites and land-use plans, flood checks for infrastructure (roads, bridges, culverts), before-and-after comparisons for any project.",
    },
    {
      icon: "fas fa-mountain",
      title: "Change Detection from Repeat Surveys",
      text:
        "What changed between two lidar, drone or photogrammetric surveys, with a level of detection so survey noise is not mistaken for real change.",
      applications:
        "Landslide and rockfall monitoring, eroding coasts, cliffs and dunes, deforming dikes and embankments, volumes for quarries, stockpiles and earthworks.",
    },
    {
      icon: "fas fa-cube",
      title: "Lidar Processing & Terrain Models",
      text:
        "From raw point clouds to terrain models ready for analysis or modelling.",
      applications:
        "Ground classification (including machine learning), DTM and DSM production, merging topography with bathymetry, conditioning terrain for hydraulic models.",
    },
  ],
};

const serviceHighlightsHeader = {
  title: "How I can help",
  description:
    "Maps are only half of the answer. Every project ends with a clear answer you can act on, whether a diagnosis of your river, a study for your permit or a stand-alone analysis, always with how confident we can be.",
};

// Home page "How I can help" cards (separate from the Services page list)
const homeServices = [
  {
    id: "river-monitoring",
    icon: "fas fa-layer-group",
    title: "River Change Monitoring from Repeat Lidar",
    tagline:
      "Active width, bed mobility, erosion and deposition from repeat surveys, with a level of detection and uncertainty for every number.",
    diagnosis:
      "Is the reach eroding, aggrading or stable, where, and how fast?",
  },
  {
    id: "trajectory-diagnosis",
    icon: "fas fa-route",
    title: "Hydromorphological Trajectory Diagnosis",
    tagline:
      "The trajectory of the reach from lidar, historical photographs and maps, with the sectors where restoration will pay off.",
    diagnosis:
      "What drives the reach, and which actions will give the river room to recover?",
  },
  {
    id: "hydraulic-compatibility",
    icon: "fas fa-water",
    title: "Hydraulic Compatibility Studies (Italy)",
    tagline:
      "2D flood modelling and reports for the VCI under the PGRA, with the registered engineer who signs the study.",
    diagnosis:
      "Is your project compatible with the flood hazard, and what must change?",
  },
];

// Home page "Why work with me" section
const whyMe = {
  title: "Why work with me",
  description:
    "Research-grade river science, delivered with the clarity and deadlines of a consultancy.",
  stats: [
    {
      value: "8+",
      label:
        "years of research in fluvial geomorphology: lidar processing, sediment and 2D hydraulics",
    },
    {
      value: "5",
      label:
        "peer-reviewed articles, including an Editors' Highlight in JGR Earth Surface (Eos, 2022)",
    },
    {
      value: "25 ha",
      label:
        "solar park assessed with 2D modelling of a 100-year flood, with a favourable opinion from the Eastern Alps District Basin Authority",
    },
    {
      value: "4",
      label: "countries of study sites: France, Italy, New Zealand, USA",
    },
    {
      value: "3",
      label:
        "working languages, English, French and Italian, for Alpine rivers in Italy, France and Switzerland",
    },
    {
      value: "100%",
      label:
        "reproducible: every result comes with code, metadata and a documented workflow",
    },
  ],
  credentials:
    "PhD in Environmental Sciences (University of Rennes) · Post-doc in river morphodynamics (University of Trento) · Lidar data specialist (Géosciences Rennes) · Hydraulic compatibility study approved by the Eastern Alps District Basin Authority",
};

// Footer (all pages)
const footerData = {
  name: "Dr. Thomas Bernard",
  tagline: "Model the river before you touch it",
  location: "Trento, Italy · Alpine rivers in Italy, France and Switzerland",
  links: [
    { label: "Services", to: "/services" },
    { label: "Terms & Privacy", to: "/legal" },
    { label: "Contact", to: "/contact" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thomas-bernard-622249152/",
      icon: "fab fa-linkedin-in",
    },
  ],
};

// Terms and Privacy pages — DRAFT, review before publishing
const legalPages = {
  title: "Terms & Privacy",
  updated: "November 2026",
  terms: {
    title: "Terms of use",
    sections: [
      {
        heading: "About this website",
        text:
          "This website presents the services and work of Thomas Bernard, hydromorphologist based in Trento, Italy. Its content is provided for general information only and does not constitute professional advice for a specific site or project.",
      },
      {
        heading: "Services and engagements",
        text:
          "Descriptions of services on this website are indicative. Each engagement is governed by a written proposal that defines the scope, deliverables, timeline and price, agreed before any work starts. Where national regulations require a document to be signed by a registered or licensed professional (for example for building or planning permits), that professional signs it and my work is delivered in support of their study.",
      },
      {
        heading: "Intellectual property",
        text:
          "Unless stated otherwise, texts, figures, maps and images on this website belong to Thomas Bernard. Published scientific articles remain subject to the licence of their publisher. You may share links to this website; please ask before reusing its content.",
      },
      {
        heading: "Liability and external links",
        text:
          "I take care to keep the information on this website accurate and up to date, but I cannot guarantee that it is complete or error-free. This website links to external sites (for example journals, GitHub and LinkedIn) whose content I do not control.",
      },
      {
        heading: "Contact",
        text:
          "For any question about these terms, write to thomas.bernard.consulting@gmail.com.",
      },
    ],
  },
  privacy: {
    title: "Privacy",
    sections: [
      {
        heading: "Who is responsible",
        text:
          "The data controller for this website is Thomas Bernard, Trento, Italy (thomas.bernard.consulting@gmail.com).",
      },
      {
        heading: "What this website collects",
        text:
          'This website has no user accounts and no analytics or advertising cookies. The only personal data it collects is what you choose to send through the "Work with me" form: your name, email address, organisation, the service you are interested in and your message.',
      },
      {
        heading: "Hosting and external resources",
        text:
          "The website is hosted on GitHub Pages, which may log technical data such as your IP address for security and operation of the service. Icons and scripts are loaded from public content delivery networks (cdnjs and Iconify), which receive your IP address when your browser requests these files. See the privacy policies of GitHub and of these providers for details.",
      },
      {
        heading: "When you contact me",
        text:
          'Messages sent through the "Work with me" form are delivered to my email inbox by FormSubmit (formsubmit.co), a form-to-email service. Whether you use the form, email or LinkedIn, I use your name, contact details and message only to reply and, if we work together, to prepare and carry out the project. I keep this information only as long as needed for that purpose or as required by law, and I never sell or share it for marketing.',
      },
      {
        heading: "Your rights",
        text:
          "Under the EU General Data Protection Regulation (GDPR) you can ask to access, correct or delete your personal data, or object to its use, by writing to the address above. You can also lodge a complaint with the Italian data protection authority (Garante per la protezione dei dati personali).",
      },
    ],
  },
};

const servicesProcess = {
  title: "How I work",
  steps: [
    {
      title: "Free scoping call",
      text:
        "We discuss the question you need answered and the data available. I tell you honestly whether the data can answer it.",
    },
    {
      title: "Fixed-scope proposal",
      text:
        "You receive a written proposal with deliverables, timeline and price before any work starts.",
    },
    {
      title: "Processing & review",
      text:
        "I run the analysis with a tested, documented workflow and share intermediate results for feedback.",
    },
    {
      title: "Delivery & handover",
      text:
        "GIS-ready files, figures and a technical report, with metadata so the analysis can be repeated on future surveys.",
    },
  ],
};

const servicesScopeNote =
  "I deliver my own technical analyses: river monitoring, trajectory diagnoses and 2D flood modelling. Where national rules require a licensed professional to sign a permit document (in Italy, an engineer or geologist registered with the Ordine; in Ticino, a professional registered with OTIA), I work alongside that professional, who signs it.";

// "Work with me" page: enquiry form sent to my inbox through FormSubmit
// (formsubmit.co). The first message sent triggers an activation email to
// this address: click the link in it once and the form works from then on.
const workWithMe = {
  title: "Work with me",
  description:
    "Tell me about your site, river reach or dataset and what you need to find out. I reply within two working days, in English, French or Italian.",
  email: "thomas.bernard.consulting@gmail.com",
  // Services offered in the dropdown, in addition to the ones on the Services page
  otherOptions: ["Other / not sure yet"],
  successTitle: "Thank you, your message has been sent.",
  successText: "I will get back to you within two working days.",
  privacyNote: "I agree that my details are used only to reply to my enquiry.",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "profil_1.jpg",
    description:
      "Tell me about your site, river reach or dataset and what you need to find out. I reply within two working days. Email: thomas.bernard.consulting@gmail.com",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Trento, Italy",
    locality: "Trento",
    country: "Italy",
    region: "Trentino",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.it/maps/place/Trento,+Autonomous+Province+of+Trento/@46.0804318,11.0379553,12z/data=!3m1!4b1!4m6!3m5!1s0x478276cac9ce9ddb:0x27c6a299139ff547!8m2!3d46.0673856!4d11.1267378!16zL20vMGNmcnM?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publications,
  publicationsHeader,
  outreach,
  outreachHeader,
  comicProject,
  portfolioHeader,
  toolboxProjects,
  servicesHeader,
  services,
  serviceHighlightsHeader,
  servicesProcess,
  servicesScopeNote,
  servicesStandalone,
  contactPageData,
  homeServices,
  whyMe,
  footerData,
  legalPages,
  about,
  selectedWork,
  workWithMe,
};
