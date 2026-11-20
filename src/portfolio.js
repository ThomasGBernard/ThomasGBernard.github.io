/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thomas Bernard | Geospatial Analysis for Natural Hazards & Water",
  description:
    "Geospatial analysis for natural hazards and water: lidar processing, 3D change detection, sediment budgets and 2D hydraulic modelling for landslides, floods, rivers and infrastructure. Based in Trento, Italy.",
  og: {
    title: "Thomas Bernard | Geospatial Analysis for Natural Hazards & Water",
    type: "website",
    url: "https://thomasgbernard.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Geospatial Analysis for Natural Hazards & Water",
  logo_name: "Thomas Bernard, PhD",
  nickname: "",
  subTitle:
    "Lidar quality control and processing, 3D change detection and 2D hydraulic modelling for landslides, floods and rivers. I don't stop at the map: you get a clear diagnosis of what the data shows, how reliable it is, and what it means for your project.",
  // Shown under the hero text: makes the international scope explicit
  international: {
    text:
      "Based in Trento, Italy · Projects in Italy, France, Switzerland and across Europe",
    languages: ["English", "Français", "Italiano", "Deutsch (basic)"],
  },
  // PDF stored in public/ so it is served at the root of the site
  resumeLink: "/Thomas_Bernard_Resume.pdf",
  portfolio_repository:
    "https://github.com/ThomasGBernard/ThomasGBernard.github.io",
  githubProfile: "https://github.com/ThomasGBernard",
  heroBackgroundAlt:
    "Aerial drone view of a braided sandy river with vegetated islands",
  heroBackgroundCaption: "Loire River, France (drone survey)",
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
        "• Developed synoptic 3D landslide inventories and volume estimates from repeat lidar (Earth Surface Dynamics, 2021) and hydro-geomorphic metrics combining topography and 2D hydraulics (JGR Earth Surface, 2022, top cited article 2022–2023).",
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
      subtitle: "- Dr. Florent Poux",
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
    "I started in research at the University of Rennes, where I completed a PhD on repeat airborne lidar and hydraulic simulation, then worked as a geospatial and lidar data specialist. As a post-doctoral researcher in hydromorphology at the University of Trento, I managed an applied research project on river morphodynamics. In 2026 I carried out 2D flood modelling for a hydraulic compatibility assessment with Vesta Energy. I now offer lidar processing, change detection and hydraulic modelling services for natural hazards and water.",
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
            "• Technical documentation: Preparation of engineering reports (hydrological and hydraulic reports) to demonstrate hydraulic invariance and the absence of any increase in hydraulic hazard for neighboring areas.",
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
            "• 1D/2D hydraulic and sediment transport modelling (numerical and physical)\n",
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
  subtitle: "Geomorphologist and geospatial analyst, PhD",
  description:
    "I started in research at the University of Rennes, where I completed a PhD on repeat airborne lidar and hydraulic simulation, then worked as a geospatial and lidar data specialist. As a post-doctoral researcher in hydromorphology at the University of Trento, I managed an applied research project on river morphodynamics, and in 2026 I carried out 2D flood modelling for a hydraulic compatibility assessment with Vesta Energy. Today I help engineers, authorities and researchers turn lidar and terrain data into a clear diagnosis.",
  languagesText:
    "Based in Trento, working in English, French and Italian (basic German) for clients in Italy, France, Switzerland and across Europe.",
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
        "Nativ, R., Lague, D., Leroy, P., Guerit, L., Bernard, T., Letard, M., ... & Steer, P. (EGUsphere preprint, in review).",
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
        "Bernard, T. G., Davy, P., & Lague, D. (Journal of Geophysical Research: Earth Surface - Top cited article 2022-2023).",
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
    "Peer-reviewed articles, conference presentations and science communication in fluvial morphodynamics, 3D lidar processing and natural hazards.",
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
    "A few examples of what the data can tell you, from landslide volumes to river landscapes.",
  moreLink: { text: "See the full portfolio →", to: "/portfolio" },
  data: [
    {
      id: "oso",
      image: require("./assets/images/projects/oso.jpg"),
      imageAlt:
        "Map of elevation change at the Oso landslide: lowering in red at the source, deposits in blue on the valley floor",
      tag: "Case study · USA",
      title: "Oso landslide: sediment budget from repeat lidar",
      text:
        "3.94 Mm³ left the source area, consistent with the published USGS estimate, with water surfaces mapped and excluded.",
      link: "/oso/index.html",
      linkText: "Open the interactive case study",
    },
    {
      id: "landslides-3d",
      image: require("./assets/images/home/hero_landslide_change.jpg"),
      imageAlt:
        "Map of erosion and deposition from earthquake-triggered landslides, detected by comparing repeat airborne lidar surveys",
      tag: "Research · Earth Surface Dynamics, 2021",
      title: "Earthquake-triggered landslides: 3D inventory and volumes",
      text:
        "Erosion and deposition measured landslide by landslide from repeat airborne lidar, separating real change from survey noise.",
      link: "https://esurf.copernicus.org/articles/9/1013/2021/",
      linkText: "Read the article",
    },
    {
      id: "hydro-geomorphic",
      image: require("./assets/images/home/expertise_hydraulics.jpg"),
      imageAlt:
        "Map of a river catchment classified into hillslopes, channels and floodplains",
      tag: "Research · JGR Earth Surface, 2022 (top cited)",
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
    "I turn lidar surveys and terrain data into quantified, uncertainty-aware answers, and I don't stop at the map: every project ends with a written diagnosis of what is happening on your site, how confident we can be, and what to do next. I work in English, French and Italian, for clients in Italy, France, Switzerland and on EU-funded projects.",
  ctaTitle: "Have a site, a river reach or a dataset in mind?",
  ctaText:
    "Send me a short description and what data you have. I will reply within two working days with a first assessment.",
  ctaButton: "Discuss your project",
};

const services = [
  {
    id: "lidar-qc",
    icon: "fas fa-clipboard-check",
    title: "Lidar (Point Cloud) Quality Check",
    tagline:
      "An independent audit of a lidar or UAV delivery before you accept it.",
    diagnosis:
      "Is the delivery fit for purpose, and what must the provider fix?",
    status: { label: "Available now", available: true },
    problem:
      "A lidar or UAV survey has been delivered and you need to know whether it meets the specification before you accept and pay for it. I audit the data independently against the contract requirements and tell you clearly what is acceptable, what is not, and what the provider should correct.",
    deliverables: [
      "Acceptance report with a clear pass / fail / to-fix verdict per requirement",
      "Point density and coverage maps, data gaps and voids",
      "Classification check (ground, vegetation, buildings, noise) against ASPRS classes",
      "Flight-line overlap and vertical consistency, with accuracy against control points if available",
    ],
    inputs: [
      "Point clouds (LAS/LAZ) and the survey specification or contract requirements",
      "Survey report and control points, if available",
    ],
    clients:
      "Contracting authorities receiving lidar surveys, surveying companies, engineering firms, GIS teams.",
    methods:
      "Automated QA/QC pipeline, strip-alignment analysis, density and classification statistics (Python, PDAL, LAStools, CloudCompare).",
  },
  {
    id: "lidar-processing",
    icon: "fas fa-mountain",
    title: "Lidar Processing",
    tagline:
      "From raw point clouds to analysis-ready terrain and surface models.",
    diagnosis:
      "Which surface can you trust for your analysis, and where are its limits?",
    status: { label: "Available now", available: true },
    problem:
      "You have raw or partly processed point clouds and need clean, reliable terrain models for design, mapping or modelling. I classify the data, build the surfaces you need and document where they are reliable and where they are not.",
    deliverables: [
      "Ground classification and noise filtering, including machine-learning classification",
      "DTM, DSM and canopy height model at the resolution you need",
      "Merging of dry lidar with bathymetry or cross-sections for river corridors",
      "Quality mask showing data source and reliability across the area",
      "Tiled, reprojected, cloud-optimized outputs (GeoTIFF, LAZ) for GIS use",
    ],
    inputs: [
      "Point clouds (LAS/LAZ) from airborne, UAV, topo-bathymetric or photogrammetric surveys",
      "Target coordinate system, resolution and intended use",
    ],
    clients:
      "Engineering and geology firms, surveying companies, public authorities, forestry and hydropower operators, research projects.",
    methods:
      "Cloth-simulation and progressive ground filtering, machine-learning point classification, PDAL / LAStools / CloudCompare, Python pipelines.",
  },
  {
    id: "change-detection",
    icon: "fas fa-layer-group",
    title: "Change Detection & Sediment Budget",
    tagline:
      "Erosion, deposition and landslide volumes from repeat surveys, with their uncertainty.",
    diagnosis:
      "What really moved, how much, and is it real change or survey noise?",
    status: { label: "Available now", available: true },
    problem:
      "You have two or more lidar, UAV or photogrammetric surveys of the same area and need to know what changed, where, and by how much. I co-register the surveys, separate real change from survey error, and deliver volumes you can defend in a report or a monitoring plan.",
    deliverables: [
      "Co-registered DTMs on a common grid (Cloud-Optimized GeoTIFF)",
      "Elevation-change maps (DoD and/or M3C2) with a level of detection",
      "Erosion, deposition and net volumes per zone or river segment, with uncertainty (CSV + GeoPackage)",
      "Technical report interpreting the changes: active processes, hotspots and what to monitor next",
      "Metadata for every output, so the analysis can be repeated with the next survey",
    ],
    inputs: [
      "Point clouds (LAS/LAZ) or DTMs for each survey date",
      "Survey reports or control-point accuracy, if available",
      "Zones of interest (polygons) or the river reach to analyse",
    ],
    clients:
      "Engineering and geology firms, river basin authorities, public works and forestry services, hydropower and infrastructure operators, research projects.",
    methods:
      "Stable-area ICP co-registration, DEM of Difference, M3C2 / M3C2-EP, spatially variable error and level of detection, 4D change analysis for time series (Python, PDAL, py4dgeo, CloudCompare, QGIS).",
  },
  {
    id: "hydraulic-support",
    icon: "fas fa-water",
    title: "2D Hydraulic & Sediment Transport Modelling Support",
    tagline:
      "Hydraulic-grade terrain, 2D flood and morphodynamic simulations for engineers and planners.",
    diagnosis:
      "Where does the water go, how deep and fast, and how will the riverbed respond?",
    status: { label: "Available now", available: true },
    problem:
      "A 2D model is only as good as its terrain and set-up. I prepare the topography (including merging lidar with bathymetry or cross-sections), build and run the hydraulic or sediment transport model, and turn the results into clear maps and a written interpretation. I can deliver the complete study, or work alongside the engineer or geologist who signs it where a licensed signature is required.",
    deliverables: [
      "Hydraulic-grade DTM with channel bathymetry and a data-source/quality mask",
      "2D model set-up in HEC-RAS 2D or BASEMENT, ready for review",
      "Flood extent, depth, velocity and hazard maps for the scenarios requested (e.g. 100-year event)",
      "Bed evolution, erosion and deposition patterns from sediment transport simulations",
      "Technical note on terrain, boundary conditions, sensitivity and what the results mean for the site",
      "Complete flood or sediment study report, e.g. flood studies, input to flood-risk plans (PPRi) and water-law files (dossiers loi sur l'eau) in France, or cantonal hazard maps in Switzerland",
    ],
    inputs: [
      "Lidar or DTM of the area, and any bathymetric surveys or cross-sections",
      "Design discharges or hydrographs, sediment data if available, and the scenarios to simulate",
    ],
    clients:
      "In Italy: engineering firms and registered professionals preparing hydraulic compatibility studies. In France, Switzerland and EU projects: complete flood and sediment studies for public authorities, river restoration projects, hydropower operators and engineering consultancies.",
    methods:
      "Terrain conditioning and wet/dry fusion, HEC-RAS 2D, BASEMENT (hydrodynamics and morphodynamics), GraphFlood for rapid screening.",
  },
];

const serviceHighlightsHeader = {
  title: "How I can help",
  description:
    "Maps are only half of the answer. Each service ends with a written diagnosis: what is happening on your site, how confident we can be, and what to do next.",
};

// Home page "How I can help" cards (separate from the Services page list)
const homeServices = [
  {
    id: "lidar-qc",
    icon: "fas fa-clipboard-check",
    title: "Lidar (Point Cloud) Quality Check",
    tagline:
      "An independent audit of a lidar or UAV delivery before you accept it: density, coverage, classification, flight-line alignment and gaps.",
    diagnosis:
      "Is the delivery fit for purpose, and what must the provider fix?",
  },
  {
    id: "lidar-processing",
    icon: "fas fa-mountain",
    title: "Lidar Processing",
    tagline:
      "From raw point clouds to analysis-ready terrain: ground classification, DTM, DSM, canopy height and merging with bathymetry.",
    diagnosis:
      "Which surface can you trust for your analysis, and where are its limits?",
  },
  {
    id: "change-detection",
    icon: "fas fa-layer-group",
    title: "Change Detection & Sediment Budget",
    tagline:
      "Erosion, deposition and landslide volumes from repeat surveys, with a level of detection and uncertainty for every number.",
    diagnosis:
      "What really moved, how much, and is it real change or survey noise?",
  },
  {
    id: "hydraulic-support",
    icon: "fas fa-water",
    title: "2D Hydraulic & Sediment Transport Modelling Support",
    tagline:
      "Hydraulic-grade terrain and 2D flood and morphodynamic simulations: complete studies, or modelling support for the engineer or geologist who signs a permit study.",
    diagnosis:
      "Where does the water go, how deep and fast, and how will the riverbed respond?",
  },
];

// Home page "Why work with me" section
const whyMe = {
  title: "Why work with me",
  description:
    "Research-grade methods, delivered with the clarity and deadlines of a consultancy.",
  stats: [
    {
      value: "8+",
      label: "years of lidar processing and river modelling",
    },
    {
      value: "5",
      label:
        "scientific articles, including a top-cited paper in JGR Earth Surface (2022–2023)",
    },
    {
      value: "25 ha",
      label:
        "solar park assessed with 2D modelling of a 100-year flood (PGRA compliance)",
    },
    {
      value: "4",
      label: "countries of study sites: France, Italy, New Zealand, USA",
    },
    {
      value: "4",
      label: "working languages: English, French, Italian, German (basic)",
    },
    {
      value: "100%",
      label:
        "reproducible: every result comes with code, metadata and a documented workflow",
    },
  ],
  credentials:
    "PhD in Environmental Sciences (University of Rennes) · Post-doc in river morphodynamics (University of Trento) · Industry experience in lidar data processing and hydraulic compatibility studies",
};

// Footer (all pages)
const footerData = {
  name: "Dr. Thomas Bernard",
  tagline: "From geospatial data to diagnosis",
  location: "Trento, Italy · Projects in Italy, France, Switzerland and the EU",
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
  updated: "October 2026",
  terms: {
    title: "Terms of use",
    sections: [
      {
        heading: "About this website",
        text:
          "This website presents the services and work of Thomas Bernard, geospatial and hydraulic analyst based in Trento, Italy. Its content is provided for general information only and does not constitute professional advice for a specific site or project.",
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
  "I deliver and sign my own technical studies: lidar analyses, change detection, and flood and sediment transport modelling. Where national rules require a licensed professional to sign a permit document (in Italy an engineer or geologist registered with the Ordine, in Austria a Ziviltechniker, in some Swiss cantons a REG-registered engineer), I work alongside that professional, who signs it.";

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
  contactPageData,
  homeServices,
  whyMe,
  footerData,
  legalPages,
  about,
  selectedWork,
  workWithMe,
};
