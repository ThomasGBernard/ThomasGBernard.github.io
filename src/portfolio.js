/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thomas's Portfolio",
  description:
    "Environmental researcher and computational specialist with a PhD in Environmental Sciences, specializing in advanced Python, 3D data processing, and machine learning applied to natural hazards.",
  og: {
    title: "Thomas Bernard's Portfolio",
    type: "website",
    url: "https://thomasgbernard.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Thomas Bernard",
  logo_name: "ThomasBernard",
  nickname: "3D AI Architect | Environmental Engineer",
  subTitle:
    "Environmental researcher and computational specialist with a PhD in Environmental Sciences, specializing in advanced Python, 3D data processing, and machine learning applied to natural hazards.",
  resumeLink:
    "https://drive.google.com/drive/folders/1UGMvF2XMNS60v0s2OQcvftEFLICimIQv?usp=drive_link",
  portfolio_repository:
    "https://github.com/ThomasGBernard/ThomasGBernard.github.io",
  githubProfile: "https://github.com/ThomasGBernard",
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
      title: "Geospatial AI & 3D Processing Tools",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Processing and classification of topo-bathymetric LiDAR data using machine and deep learning.",
        "⚡ 3D data processing, photogrammetry, and generation of high-resolution Digital Terrain/Surface Models (DTM/DSM)",
        "⚡ Developing automated Python pipelines for geospatial data manipulation and spatial analysis",
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
          style: { color: "#fffefe" },
        },
      ],
    },
    {
      title: "Hydraulic & Sediment Transport Modelling",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ 1D and 2D hydraulic and sediment transport modelling for fluvial morphodynamics",
        "⚡ Simulating extreme events (e.g., 100-year floods) for floodplain mapping and infrastructure vulnerability assessment",
        "⚡ Conducting Hydraulic Compatibility Assessment Studies in compliance with environmental and technical standards",
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
      skills: [
        "⚡ Developing custom workflows for detecting topographic changes and monitoring landslides from multitemporal LiDAR data",
        "⚡ Building synoptic 3D landslide inventories and extracting geomorphic metrics for high-resolution landscape analysis",
        "⚡ Assessing natural risks in Alpine and fluvial environments through advanced geospatial mapping",
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
          style: { color: "#fffefe" },
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
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
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I began my career in academia as a geospatial engineer and researcher at the University of Rennes, where I earned my PhD in Environmental Sciences. I then expanded my international experience as a postdoctoral researcher in hydromorphology at the University of Trento, before transitioning to the private sector as a hydraulic engineering consultant for Vesta Energy. Today, I work as a 3D AI Architect, combining my foundational expertise in natural hazards with advanced machine and deep learning techniques applied to complex 3D datasets.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Hydraulic Modeling Engineer",
          company: "Vesta Energy srl",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "vesta_energy.jpg",
          duration: "Jun 2026 - Jul 2026",
          location: "Trento, TN, Italy",
          description: [
            "Project: Hydraulic Compatibility Assessment (VCI) for a 23.6 MWp agrivoltaic park.\n",
            "Description: Engineering assignment aimed at designing and certifying the safety of a solar park covering nearly 25 hectares with respect to flood risk, in strict compliance with the regulations of the Flood Risk Management Plan (PGRA).\n",
            "Key Deliverables:\n",
            " ⚡  Hydrodynamic Modeling: Two-dimensional simulation (using HEC-RAS) of 100-year flood events (TR 100 scenario) to map water levels and flow velocities.\n",
            " ⚡  Compliance and safety: Determination of the hydraulic safety elevation for the equipment.\n",
            " ⚡  Technical documentation: Preparation of engineering reports (hydrological and hydraulic reports) to demonstrate hydraulic invariance and the absence of any increase in hydraulic hazard for neighboring areas.",
          ],
          color: "#000000",
        },
        {
          title: "Post-doc researcher in Hydromorphology",
          company: "University of Trento",
          company_url: "https://www.dicam.unitn.it/",
          logo_path: "Logo_Rennes.png",
          duration: "Nov 2023 - Apr 2026",
          location: "Trento, Italy",
          description: [
            "⚡ Management of an applied research project in river morphodynamics\n",
            "⚡ 1D/2D hydraulic and sediment transport modelling(numerical and physical)\n",
            "⚡ Preparation of technical reports and coordination with international partners\n",
            "⚡ Organization of a technical workshop on the management of Alpine rivers (planning, funding, coordination)",
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
            "⚡Processing and classification of topo-bathymetric LiDAR data using machine learning\n",
            "⚡Reconstruction of river bathymetry using 2D hydraulic simulations\n",
            "⚡Production of high-resolution digital terrain models (DTMs)\n",
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
            "⚡ 2D hydraulic simulations for floodplain mapping and risk analysis\n",
            "⚡ Development of workflows for detecting topographic changes and landslides\n",
            "⚡LiDAR data processing and classification\n",
            "⚡Production of technical reports | international communication\n",
            "⚡Teaching activity > 100hours",
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
            "⚡ Production of 3D point clouds and Digital elevation models\n",
            "⚡ Production of a pipeline to detect landlsides\n",
            "⚡ Statistical analysis of landslides\n",
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
            "⚡ Production of a pipeline to detect fractures from 3D Lidar point cloud\n",
            "⚡ Topographic change detection from 3D point clouds\n",
            "⚡ Statistical analysis of fractures and erosion\n",
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
        "Nativ, R., Lague, D., Leroy, P., Guerit, L., Bernard, T., Letard, M., ... & Steer, P. (EGUsphere).",
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
    require("./assets/images/comic/case1.png"),
    require("./assets/images/comic/case2.png"),
    require("./assets/images/comic/case3.png"),
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profil_1.jpg",
    description:
      "I am available mostly on Linkedin and via email. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Trento, TN, Italy 38200",
    locality: "Trento",
    country: "Italy",
    region: "Trentino",
    postalCode: "38200",
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
  contactPageData,
};
