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
  title: "Thomas Bernard",
  logo_name: "ThomasBernard",
  nickname: "Geospatial Analysis for Natural Hazards & Water",
  subTitle:
    "Lidar and 3D terrain analysis, change detection and 2D hydraulic modelling for landslides, floods and rivers. PhD in geomorphology and remote sensing, turning survey data into quantified, decision-ready results.",
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
        "Technical support to engineers and geologists preparing hydraulic compatibility studies: terrain preparation, 2D modelling and mapping.",
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
    "I started in research at the University of Rennes, where I completed a PhD on repeat airborne lidar and hydraulic simulation, then worked as a geospatial and lidar data engineer. As a post-doctoral researcher in hydromorphology at the University of Trento, I managed an applied research project on river morphodynamics. In 2026 I carried out 2D flood modelling for a hydraulic compatibility assessment with Vesta Energy. I now offer lidar processing, change detection and hydraulic modelling services for natural hazards and water.",
  header_image_path: "experience.svg",
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
          title: "Geospatial & LiDAR Data Engineer ",
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
    {
      title: "Internships",
      experiences: [
        {
          title: "Natural risk & Earth Observation intern",
          company: "University of Rennes",
          company_url: "https://www.univ-rennes.fr/",
          logo_path: "Logo_Rennes.png",
          duration: "Jan 2018 - Jun 2018",
          location: "Rennes, France",
          description: [
            "Volumetric Analysis of Co-seismic Landslides in the Kaikoura Region (New Zealand) Using LiDAR and Pléiades Satellite Imagery\n",
            "• Production of 3D point clouds and Digital elevation models\n",
            "• Production of a pipeline to detect landslides\n",
            "• Statistical analysis of landslides\n",
          ],
          color: "#000000",
        },
        {
          title: "Academic Research Intern in Geomorphology",
          company: "University of Rennes",
          company_url: "https://www.univ-rennes.fr/",
          logo_path: "Logo_Rennes.png",
          duration: "May 2017 - Jun 2017",
          location: "Rennes, France",
          description: [
            "Relationship between fracturing, topography and erosion \n",
            "• Production of a pipeline to detect fractures from 3D Lidar point cloud\n",
            "• Topographic change detection from 3D point clouds\n",
            "• Statistical analysis of fractures and erosion\n",
          ],
          color: "#ee3c26",
        },
      ],
    },
  ],
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
  title: "Publications",
  description:
    "Peer-reviewed articles, doctoral research, and scientific contributions.",
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
  title: "Scientific Communications in international conferences",
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

// Services Page
const servicesHeader = {
  title: "Services",
  description:
    "I turn repeat lidar surveys and terrain data into quantified, uncertainty-aware answers: how much ground moved, where sediment went, and what the terrain means for water. Every project runs on a tested, reproducible processing toolbox, so results can be checked, repeated and updated with the next survey.",
  ctaTitle: "Have a site, a river reach or a dataset in mind?",
  ctaText:
    "Send me a short description and what data you have. I will reply within two working days with a first assessment.",
  ctaButton: "Discuss your project",
};

const services = [
  {
    id: "change-detection",
    icon: "fas fa-layer-group",
    title: "Lidar Change Detection & Sediment Budget",
    tagline:
      "Erosion, deposition and landslide volumes from repeat surveys, with their uncertainty.",
    status: { label: "Available now", available: true },
    problem:
      "You have two or more lidar, UAV or photogrammetric surveys of the same area and need to know what changed, where, and by how much. I co-register the surveys, separate real change from survey error, and deliver volumes you can defend in a report or a monitoring plan.",
    deliverables: [
      "Co-registered DTMs on a common grid (Cloud-Optimized GeoTIFF)",
      "Elevation-change maps (DoD and/or M3C2) with a level of detection",
      "Erosion, deposition and net volumes per zone or river segment, with uncertainty (CSV + GeoPackage)",
      "Map figures and a technical report describing methods, accuracy and limits",
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
    id: "lidar-qa",
    icon: "fas fa-clipboard-check",
    title: "Lidar Data Quality Check & Terrain Models",
    tagline:
      "Check a lidar delivery before you accept it, and get terrain models ready for analysis.",
    status: { label: "Available now", available: true },
    problem:
      "A lidar or UAV delivery has arrived and you need to know whether it meets the specification, or you need clean terrain models from raw point clouds. I audit the data independently and produce analysis-ready surfaces.",
    deliverables: [
      "Acceptance report: point density and coverage, classification, flight-line consistency, gaps",
      "Ground classification and noise filtering where needed",
      "DTM, DSM and canopy height model at the resolution you need",
      "Tiled, reprojected, cloud-optimized outputs for GIS use",
    ],
    inputs: [
      "Point clouds (LAS/LAZ) and the survey specification or contract requirements",
      "Target coordinate system and resolution",
    ],
    clients:
      "Contracting authorities receiving lidar surveys, surveying companies, engineering firms, GIS teams.",
    methods:
      "Automated QA/QC pipeline, cloth-simulation ground filtering, PDAL / LAStools processing, standard ASPRS classes.",
  },
  {
    id: "hydraulic-support",
    icon: "fas fa-water",
    title: "2D Hydraulic Modelling Support",
    tagline:
      "Hydraulic-grade terrain and 2D flood simulations for engineers and planners.",
    status: { label: "On request", available: false },
    problem:
      "A 2D hydraulic model is only as good as its terrain. I prepare the topography (including merging dry lidar with bathymetry or cross-sections), build and run the 2D model, and turn results into clear depth, velocity and hazard maps, working alongside the engineer responsible for the study.",
    deliverables: [
      "Hydraulic-grade DTM with channel bathymetry and a data-source/quality mask",
      "2D model set-up in HEC-RAS 2D or BASEMENT, ready for review",
      "Flood extent, depth, velocity and hazard maps for the scenarios requested",
      "Technical note on terrain, boundary conditions and sensitivity",
    ],
    inputs: [
      "Lidar or DTM of the area, and any bathymetric surveys or cross-sections",
      "Design discharges or hydrographs and the scenarios to simulate",
    ],
    clients:
      "Engineering firms and registered professionals preparing hydraulic studies, river restoration projects, public authorities.",
    methods:
      "Terrain conditioning and wet/dry fusion, HEC-RAS 2D, BASEMENT, GraphFlood for rapid screening, WhiteboxTools.",
  },
  {
    id: "river-monitoring",
    icon: "fas fa-satellite",
    title: "River Restoration Outcome Monitoring",
    tagline:
      "Measure whether a restoration or management action changed the river.",
    status: { label: "From 2027", available: false },
    problem:
      "Restoration projects need evidence that the river responded. I compare a baseline with repeat surveys and satellite time series to quantify changes in channel form, active width, inundation and riparian vegetation.",
    deliverables: [
      "Baseline and repeat indicators: channel width, planform migration, morphological change",
      "Riparian canopy height and vegetation trends",
      "Multi-year satellite time series of the active channel",
      "Monitoring report with indicators ready for funding or regulatory reporting",
    ],
    inputs: [
      "Project area and dates of the intervention",
      "Available lidar, UAV or orthophoto surveys",
    ],
    clients:
      "River basin authorities, environmental agencies, NGOs and restoration project consortia (e.g. LIFE projects).",
    methods:
      "Multi-temporal lidar, Sentinel-2 time series from open data sources, channel-centreline indicators.",
  },
];

const serviceHighlightsHeader = {
  title: "How I can help",
  description:
    "From raw survey data to quantified answers: what changed, how much, and what it means for hazards and water.",
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
  "I provide technical data processing, modelling and analysis. Studies that must be signed by a registered professional (e.g. hydraulic compatibility studies for permits) are delivered in support of the engineer or geologist who signs them.";

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
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
  servicesHeader,
  services,
  serviceHighlightsHeader,
  servicesProcess,
  servicesScopeNote,
  contactPageData,
};
