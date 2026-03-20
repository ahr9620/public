// =============================================================================
// ASHTON REEDER — PROJECT DIRECTORY
// Edit this file directly, or run: node editor.js
// =============================================================================
//
// STRUCTURE
// ---------
// DATA.center        — the index/bio node (desc shown in the right panel)
// DATA.practices[]   — practice area nodes (id, label, tag, desc, projects[])
//   projects[]       — project nodes (id, label, desc, featured?, media?, children[])
//     children[]     — third-level nodes (id, label, desc)
//     media {}       — enables lightbox: { tag, details[], images[] }
//       images[]     — { src, caption, wide? }
// DATA.crossLinks[]  — { source: id, target: id } — dashed cross-practice edges
// =============================================================================

const DATA = {
  center: {
    id: "me",
    label: "Ashton Reeder",
    type: "center",
    tag: "Index",
    desc: "Ashton is a technologist and researcher from Gig Harbor, Washington, working at the edges of data, computation, and the environment.\n\nHe is currently a candidate in the Masters of Interactive Media program at NYU's Tisch School of the Arts and a researcher at the Department of Research, and is a former Research Affiliate of the University of Utah.\n\nHis work is always in flux, but is currently focused on subverting surveillance infrastructure, probing emerging technologies, and using maps to question power.",
    items: [],
  },
  practices: [
    {
      id: "questiontech",
      label: "Questioning Technology",
      tag: "Practice Area",
      desc: "Critical inquiry into the social, political, and environmental consequences of technological systems. Asking who technology serves and who it harms.",
      projects: [
        {
          id: "p-planetary",
          label: "Planetary Computation",
          desc: "The age of the internet has brought forth an extremely complex set of interconnected digital parts, an idea known as Planetary Computation. An ever growing complex network based around mineral extraction and cross continental digital infrastructure being furthered by the advance of Artificial Intelligence.",
          featured: true,
          media: {
            tag: "Questioning Technology",
            details: [
              {
                label: "Year",
                value: "2025",
              },
              {
                label: "Medium",
                value: "Data visualization, field documentation",
              },
              {
                label: "Location",
                value: "Photoworks Glen Echo, Maryland",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/planetary_computation/1.jpg",
                caption: "Exhibition View 1",
                wide: true,
              },
              {
                type: "text",
                content: "This project spans three geographies: Ashburn, Virginia with a focus on the physical embodiment of data, the monolithic warehouses and cooling systems that house our collective digital memory; The Bay Area, California, the ground zero of artificial intelligence where venture capital flows reshape entire neighborhoods while displacement pushes communities to the margins; and Nevada, a place where environments are being altered by the demand for minerals to fuel computational infrastructure, where ancient lake beds become lithium extraction sites and the desert bears the scars of our digital appetites.",
              },
              {
                type: "image",
                src: "images/planetary_computation/2.jpg",
                caption: "Exhibition View 2",
              },
              {
                type: "image",
                src: "images/planetary_computation/3.jpg",
                caption: "Exhibition View 3",
              },
            ],
          },
        },
      ],
    },
    {
      id: "wastenetworks",
      label: "Waste Networks",
      tag: "Practice Area",
      desc: "——",
      projects: [
        {
          id: "p-aliaga",
          label: "Shipbreaking",
          desc: "The Aliağa shipyard in Turkey is the largest EU-sanctioned facility for large ship recycling, yet it has drawn international concern over hazardous working conditions and environmental risks. As part of a broader investigation into global shipbreaking practices, I documented the sitethrough drone-based photogrammetry, vessel identification, and ship tracking techniques. These methods help trace the eastward movement of decommissioned vessels and reveal how cost cutting measures in the global shipping industry often come at the expense of worker safety and environmental stewardship.",
          media: {
            tag: "Field Research",
            details: [
              {
                label: "Location",
                value: "Aliaga, Türkiye",
              },
              {
                label: "Year",
                value: "2024",
              },
              {
                label: "Methods",
                value: "Field Research, Photography, AIS Tracking",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/shipbreaking/1.png",
                caption: "3D scan",
                wide: true,
              },
              {
                type: "text",
                content: "Photogrammetry drone scan of the shipyard, represented in a point cloud.",
              },
              {
                type: "image",
                src: "images/shipbreaking/2.jpg",
                caption: "High Resolution Panoramic",
              },
              {
                type: "text",
                content: "Large-scale panoramic taken from a fishing boat.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "surveillance",
      label: "Surveillance",
      tag: "Practice Area",
      desc: "——",
      projects: [
        {
          id: "p-dataveillance",
          label: "Dataveillance",
          desc: "Surveillance practices in the United States continue to expand amid limited regulatory oversight. As corporate and law enforcement interests increasingly intersect in the development and deployment of monitoring technologies, the broader social implications often remain underexamined. This research uses my personal dataset as a case study to illustrate the vast scale of data collection. The information is presented through immersive, scroll-based data visualizations designed to convey the magnitude and complexity of contemporary surveillance systems.",
          media: {
            tag: "Critical Research",
            details: [
              {
                label: "Year",
                value: "2022",
              },
              {
                label: "Medium",
                value: "Data visualization, Cartography",
              },
              {
                label: "Location",
                value: "Salt Lake City, Utah",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/dataveillance/1.jpg",
                caption: "Installation View",
                wide: true,
              },
              {
                type: "image",
                src: "images/dataveillance/2.jpg",
                caption: "Map of CCTV Cameras in SLC",
                wide: true,
              },
            ],
          },
        },
        {
          id: "p-surveilling",
          label: "Surveilling the Surveillors",
          desc: "Obscuring CEO's residences with a pixel filter that decays with net worth increases. Aimed at individuals who primarily sell their user's data for profit.",
          media: {
            tag: "Surveillance",
            details: [
              {
                label: "Year",
                value: "2025",
              },
              {
                label: "Medium",
                value: "Code, Photography",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/surveilling_the_surveillors/1.png",
                caption: "Mark Zuckerberg - Meta - $265 Billion",
              },
              {
                type: "image",
                src: "images/surveilling_the_surveillors/2.png",
                caption: "Peter Thiel - Palantir - $23 Billion",
              },
              {
                type: "text",
                content: "This series focuses entirely on individuals whose net worths rely on selling user data as a commodity. Photos are updated with live net worth data based on asset appreciation. As they net worth approaches $1 Trillion, the blur fades.",
              },
              {
                type: "image",
                src: "images/surveilling_the_surveillors/4.jpg",
                caption: "Installation View",
              },
            ],
          },
        },
        {
          id: "p-workshop-download",
          label: "Workshop: Download Yourself",
          desc: "",
          media: {
            tag: "Workshop",
            details: [
              {
                label: "Year",
                value: "2026",
              },
              {
                label: "Format",
                value: "Workshop",
              },
              {
                label: "Location",
                value: "New York University",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/workshop_download_yourself/1.jpg",
                caption: "——",
              },
              {
                type: "text",
                content: "Teaching how to request your personal data from tech companies and translate it into a series of personal data visualizations. Concluding with a ritual in which participants send in deletion requests to clear their digital footprints.",
              },
              {
                type: "image",
                src: "images/workshop_download_yourself/2.jpg",
                caption: "——",
              },
              {
                type: "text",
                content: "Part of an ongoing series of workshops and lessons about subverting surveillance capitalism and navigating data protocols.",
              },
            ],
          },
        },
        {
          id: "p-feat-atlas",
          label: "An Atlas of Border Technology",
          desc: "Mapping and documenting instances of border technologies in New Mexico and Texas.",
          featured: true,
          media: {
            tag: "Cartography",
            details: [
              {
                label: "Year",
                value: "2025—",
              },
              {
                label: "Medium",
                value: "Cartography, data visualization",
              },
              {
                label: "Status",
                value: "In progress",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/1.jpeg",
                caption: "Book Cover and Field Guide",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/2.jpeg",
                caption: "Page Spread",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/4.png",
                caption: "First 50 Pages",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/10.jpg",
                caption: "Aerostat System, Deming, NM",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/3.jpg",
                caption: "Field Identification Guide",
              },
              {
                type: "text",
                content: "A field guide for navigating tech in border zones. These are some of the more common instances of surveillance technology with key technological capabilities.",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/5.png",
                caption: "Sensors Mapped with Ranges using turf.js",
                wide: true,
              },
              {
                type: "text",
                content: "A digital mapping platform for locating and adding extra layers of information to the infrastructure along the border area.",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/6.jpg",
                caption: "Integrated Surveillance Tower (IST) El Paso, TX",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/9.png",
                caption: "Diagram of Anduril Lattice System",
              },
              {
                type: "image",
                src: "images/an_atlas_of_border_technology/7.png",
                caption: "Mapping Progress So Far",
              },
            ],
          },
        },
      ],
    },
    {
      id: "geospatial",
      label: "Geospatial Hijinx",
      tag: "Practice Area",
      desc: "Subverting and playing with spatial data — encryption, simulation, and mapping as tools of investigation, mischief, and critique.",
      projects: [
        {
          id: "p-encryption",
          label: "Geospatial Encryption Protocol",
          desc: "Going on a walk to open a website in an effort to build hyper-local digital platforms.",
          media: {
            tag: "Geospatial",
            details: [
              {
                label: "Year",
                value: "2026",
              },
              {
                label: "Medium",
                value: "Community Technology",
              },
            ],
            blocks: [],
          },
          wip: true,
        },
        {
          id: "p-epstein",
          label: "Mapping Epstein",
          desc: "Using LLMs to map the expansive reach of Epstein by pulling, and subsequently mapping, any location in the 3,000,000 pages of documents provided by the Department of Justice.",
          featured: true,
          media: {
            tag: "Geospatial Investigation",
            details: [
              {
                label: "Year",
                value: "2026",
              },
              {
                label: "Medium",
                value: "Cartography, LLM extraction, OSINT",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/mapping_epstein/1.jpg",
                caption: "Map Overview",
                wide: true,
              },
              {
                type: "text",
                content: "A dashboard view lets users search for document references spatially. This allows for a quicker identification of both the global reach of Epstein but also the intricacies in what/where was mentioned at local levels.",
              },
              {
                type: "image",
                src: "images/mapping_epstein/2.jpg",
                caption: "Email Pop-up",
              },
              {
                type: "text",
                content: "I am currently wrapping up some bugs in the code, but will upload an external link here as soon as possible.",
              },
            ],
          },
        },
        {
          id: "p-datacenter",
          label: "Data Center Typologies",
          desc: "A collection of satellite imagery of data centers.",
          media: {
            tag: "Geospatial",
            details: [
              {
                label: "Year",
                value: "——",
              },
              {
                label: "Medium",
                value: "Satellite imagery",
              },
              {
                label: "Status",
                value: "——",
              },
            ],
            blocks: [],
          },
          wip: true,
        },
        {
          id: "p-targets",
          label: "Targets",
          desc: "Sygils made for the sky — targets carved into the landscape perpetuating the military industrial complex.",
          media: {
            tag: "Geospatial",
            details: [
              {
                label: "Year",
                value: "——",
              },
              {
                label: "Medium",
                value: "——",
              },
              {
                label: "Status",
                value: "——",
              },
            ],
            blocks: [],
          },
          wip: true,
        },
        {
          id: "p-workshop-geolocate",
          label: "Workshop: How to Geolocate (almost) Anything",
          desc: "A one day workshop teaching participants geolocation techniques. Starting with an image, identifying features, then writing scripts to be processed in OverpassTurbo, and ultimately location using Google Earth.",
          media: {
            tag: "Workshop",
            details: [
              {
                label: "Year",
                value: "2025",
              },
              {
                label: "Format",
                value: "Workshop",
              },
              {
                label: "Location",
                value: "New York University",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/workshop_how_to_geolocate_almost_anything/1.jpg",
                caption: "OverpassTurbo Demo",
                wide: true,
              },
              {
                type: "text",
                content: "Introduction to scripting in OverpassTurbo.",
              },
              {
                type: "image",
                src: "images/workshop_how_to_geolocate_almost_anything/2.jpg",
                caption: "Using Maps as a Research Tool",
                wide: true,
              },
              {
                type: "text",
                content: "Introducing participants to mapping tools as research practices. Showing my collections and points of interest as examples of the power of Google Maps.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "techaesthetics",
      label: "Tech Aesthetics",
      tag: "Practice Area",
      desc: "Exploring the visual and material culture of technology — how interfaces, devices, and digital systems carry aesthetic, ideological, and political meaning.",
      projects: [
        {
          id: "p-billboards",
          label: "AI Billboards",
          desc: "A drive through Silicon Valley capturing all billboards along the way.",
          media: {
            tag: "Tech Aesthetics",
            details: [
              {
                label: "Year",
                value: "——",
              },
              {
                label: "Location",
                value: "Silicon Valley, California",
              },
              {
                label: "Medium",
                value: "Documentary photography",
              },
            ],
            blocks: [],
          },
          wip: true,
        },
        {
          id: "p-howcomputerssee",
          label: "How Computers See",
          desc: "An experiment in layering computer vision models. How far can we push computer vision? At what points are the systems overloaded with data? Algorithms tested on photos taken in, and near, environments and towns necessary for the production of modern technology and computation.",
          media: {
            tag: "Tech Aesthetics",
            details: [
              {
                label: "Year",
                value: "2026—",
              },
              {
                label: "Medium",
                value: "Computer vision, Photography",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/how_computers_see/2.jpg",
                caption: "Tonopah, Nevada",
                wide: true,
              },
              {
                type: "text",
                content: "Taking numerous computer vision algorithms at once, layering them, and seeing how future computers may observe the world.",
              },
              {
                type: "image",
                src: "images/how_computers_see/1.jpg",
                caption: "Pahrump, Nevada",
                wide: true,
              },
              {
                type: "text",
                content: "Making these algorithms visible makes the biases observable--no computer is ever 100%, yet AI models speak as if everything is certain.",
              },
            ],
          },
        },
        {
          id: "p-sphere",
          label: "The Sphere",
          desc: "Documenting the absurdity of The Sphere in Vegas, the epitome of hypermedia futures.",
          media: {
            tag: "Photography",
            details: [
              {
                label: "Location",
                value: "Las Vegas, Nevada",
              },
              {
                label: "Year",
                value: "2025",
              },
              {
                label: "Medium",
                value: "Editorial Photography",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/the_sphere/2.jpg",
                caption: "Las Vegas Strip context",
              },
              {
                type: "image",
                src: "images/the_sphere/3.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/1.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/4.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/5.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/6.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/7.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/8.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/the_sphere/9.jpg",
                caption: "——",
              },
            ],
          },
        },
      ],
    },
    {
      id: "communitytech",
      label: "Community Technology",
      tag: "Practice Area",
      desc: "Designing and building technology in service of communities — centering accessibility, environmental justice, and public accountability.",
      projects: [
        {
          id: "p-borderless",
          label: "Borderless Data Initiative",
          desc: "Infrastructure and tooling for cross-border community connection.",
          media: {
            tag: "Community Technology",
            details: [
              {
                label: "Year",
                value: "2025–present",
              },
              {
                label: "Location",
                value: "Washington, D.C.",
              },
              {
                label: "Medium",
                value: "Network infrastructure, open data",
              },
            ],
            blocks: [
              {
                type: "text",
                content: "An ongoing collaborative project focusing on distributing e-sims and internet connection to journalists, and their networks, in conflict zones.",
              },
            ],
          },
        },
        {
          id: "p-airquality",
          label: "Experiments in Air Quality",
          desc: "An ongoing research area looking at air quality and the limited access to clean air around the globe.",
          media: {
            tag: "Community Technology",
            details: [
              {
                label: "Year",
                value: "——",
              },
              {
                label: "Medium",
                value: "Data installation, real-time sensors",
              },
              {
                label: "Status",
                value: "——",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/experiments_in_air_quality/1.jpg",
                caption: "A wearable device for crowdsourcing community air quality data.",
                wide: true,
              },
              {
                type: "image",
                src: "images/experiments_in_air_quality/2.jpg",
                caption: "A live",
              },
            ],
          },
          wip: true,
        },
        {
          id: "p-encryption-c",
          label: "Geospatial Encryption Protocol",
          desc: "Going on a walk to open a website in an effort to build hyper-local digital platforms.",
          media: {
            tag: "Geospatial Hijinx",
            details: [
              {
                label: "Year",
                value: "2026",
              },
              {
                label: "Location",
                value: "Berlin",
              },
            ],
            blocks: [],
          },
          wip: true,
        },
      ],
    },
    {
      id: "unfiltered",
      label: "Government & Infrastructure",
      tag: "Practice Area",
      desc: "——",
      projects: [
        {
          id: "p-pageantry",
          label: "American Pageantry",
          desc: "American military hitting the streets for President Trump's birthday parade.",
          media: {
            tag: "Photography",
            details: [
              {
                label: "Year",
                value: "2025",
              },
              {
                label: "Medium",
                value: "Editorial Photography",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/american_pageantry/1.jpg",
                caption: "——",
                wide: true,
              },
              {
                type: "image",
                src: "images/american_pageantry/3.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/8.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/9.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/4.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/5.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/6.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/10.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/2.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/11.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/12.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/13.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/14.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/15.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/16.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/17.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/18.jpg",
                caption: "——",
              },
              {
                type: "image",
                src: "images/american_pageantry/19.jpg",
                caption: "——",
              },
            ],
          },
        },
        {
          id: "p-fabricated",
          label: "Fabricated Landscapes",
          desc: "A photo project documenting the growth of urban environments throughout Asia.",
          media: {
            tag: "Government & Infrastructure",
            details: [
              {
                label: "Year",
                value: "2023",
              },
              {
                label: "Medium",
                value: "Photography, Research",
              },
              {
                label: "Exhibited",
                value: "Tacoma, WA 2024",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/fabricated_landscapes/3.jpg",
                caption: "Dubai, U.A.E.",
                wide: true,
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/4.jpg",
                caption: "Seoul, Korea",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/5.jpg",
                caption: "Shanghai, China",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/6.jpg",
                caption: "Shanghai, China",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/7.jpg",
                caption: "Dubai, U.A.E.",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/8.jpg",
                caption: "Hong Kong, HK",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/9.jpg",
                caption: "Hong Kong, HK",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/10.jpg",
                caption: "Baku, Azerbaijan",
              },
              {
                type: "image",
                src: "images/fabricated_landscapes/11.jpg",
                caption: "——",
              },
            ],
          },
        },
        {
          id: "p-kakhovka",
          label: "Kakhovka Dam — Quantifying Terror",
          desc: "On June 6, 2023, the destruction of the Kakhovka Dam in southern Ukraine released billions of gallons of water, flooding towns along the Dnieper River and killing at least 59 people. Ukrainian and international officials have accused Russia of deliberately targeting the dam, part of a broader pattern of strikes on civilian infrastructure.",
          media: {
            tag: "Government & Infrastructure",
            details: [
              {
                label: "Year",
                value: "2023",
              },
              {
                label: "Medium",
                value: "Digital Reconstruction, Data Visualization",
              },
              {
                label: "Location",
                value: "Ukraine",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/kakhovka_dam_quantifying_terror/1.png",
                caption: "Timeline with Missile Strikes",
                wide: true,
              },
              {
                type: "text",
                content: "Timeline representing the amount of Russian strikes on civilian infrastructure, red circles are civilian fatalities and yellow circles are child fatalities.",
              },
              {
                type: "image",
                src: "images/kakhovka_dam_quantifying_terror/2.png",
                caption: "3D Recreation of the dam",
                wide: true,
              },
              {
                type: "text",
                content: "Digital reconstruction of the Khakovka Dam.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "featured",
      label: "Featured Work",
      tag: "Featured",
      desc: "——",
      projects: [
        {
          id: "p-feat-planetary",
          label: "Planetary Computation",
          desc: "The age of the internet has brought forth an extremely complex set of interconnected digital parts, an idea known as Planetary Computation. An ever growing complex network based around mineral extraction and cross continental digital infrastructure being furthered by the advance of Artificial Intelligence.",
          media: {
            tag: "Questioning Technology",
            details: [
              {
                label: "Year",
                value: "2025",
              },
              {
                label: "Medium",
                value: "Data visualization, field documentation",
              },
              {
                label: "Location",
                value: "Glen Echo Photoworks, Maryland",
              },
            ],
            blocks: [
              {
                type: "image",
                src: "images/planetary_computation/1.jpg",
                caption: "Exhibition View 1",
                wide: true,
              },
              {
                type: "text",
                content: "This project spans three geographies: Ashburn, Virginia with a focus on the physical embodiment of data, the monolithic warehouses and cooling systems that house our collective digital memory; The Bay Area, California, the ground zero of artificial intelligence where venture capital flows reshape entire neighborhoods while displacement pushes communities to the margins; and Nevada, a place where environments are being altered by the demand for minerals to fuel computational infrastructure, where ancient lake beds become lithium extraction sites and the desert bears the scars of our digital appetites.",
              },
              {
                type: "image",
                src: "images/planetary_computation/2.jpg",
                caption: "Exhibition View 2",
              },
              {
                type: "image",
                src: "images/planetary_computation/3.jpg",
                caption: "Exhibition View 3 - Data Center Typologies",
              },
            ],
          },
          wip: true,
        },
      ],
    },
    {
      id: "teaching",
      label: "Teaching",
      tag: "Practice Area",
      desc: "Teaching design, computation, and critical research methods. Working across architecture, planning, and interactive media programs.",
      projects: [
        {
          id: "p-uofu",
          label: "Workshops",
          desc: "Workshops I've Taught!",
          children: [
            {
              id: "pp-download-yourself",
              label: "Download Yourself",
              desc: "NYU - How to request your data from tech companies, what to do with it, and how to delete it.",
            },
            {
              id: "pp-how-to-geolocated-almost-anything",
              label: "How to Geolocated (almost) Anything",
              desc: "NYU - How to use mapping tools for research and locating where a picture is from.",
            },
            {
              id: "pp-digital-data-collection",
              label: "Digital Data Collection",
              desc: "UofU - How to build custom microcontrollers for collecting digital data in the physical world.",
            },
            {
              id: "pp-physical-data-collection",
              label: "Physical Data Collection",
              desc: "UofU - Practices for collecting and display.",
            },
          ],
        },
        {
          id: "p-nyu",
          label: "Speculative Syllabi",
          desc: "Courses I want to teach.",
          children: [],
        },
      ],
    },
    {
      id: "information",
      label: "Information",
      tag: "CV",
      desc: "Ashton Reeder — he/him. New York, NY. ashhreeder@gmail.com / ashtonreeder.com",
      projects: [
        {
          id: "p-info-education",
          label: "Education",
          desc: "NYU — MA Interactive Media, 2026. University of Utah — BS Multidisciplinary Design + BS International Studies, 2022. Minor in Urban Ecology.",
          children: [
            {
              id: "pp-edu-nyu",
              label: "NYU — MA Interactive Media",
              desc: "Master of Arts, Interactive Media. New York University, 2026.",
            },
            {
              id: "pp-edu-uofu-design",
              label: "U of Utah — Multidisciplinary Design",
              desc: "Bachelor of Science, Multidisciplinary Design. Thesis: The Case Against Dataveillance. 2022.",
            },
            {
              id: "pp-edu-uofu-intl",
              label: "U of Utah — International Studies",
              desc: "Bachelor of Science, International Studies / Development & Sustainability. Thesis: Shrinking Lake, Growing Problems. 2022.",
            },
          ],
        },
        {
          id: "p-info-experience",
          label: "Experience",
          desc: "Computational Designer at Material Investigations, Project Lead at Borderless Data Initiative, Research Affiliate at U of Utah, and more.",
          children: [
            {
              id: "pp-exp-borderless",
              label: "Borderless Data Initiative",
              desc: "Project Lead, 2025–present. Washington, D.C. Anonymous internet connections for 40+ journalists in conflict zones. Distributed hundreds of GB of data across Middle East and Sub-Saharan Africa.",
            },
            {
              id: "pp-exp-material",
              label: "Material Investigations",
              desc: "Computational Designer / Researcher, 2023–present. Istanbul, Türkiye. Founded Material Investigations; field research on vessel decommissioning; 3D mapping for drone defense in Ukraine; Kakhovka Dam model; Fabricated Landscapes publication.",
            },
            {
              id: "pp-exp-uofu-ra",
              label: "U of Utah — Research Affiliate",
              desc: "Research Affiliate, 2023. Salt Lake City. Design Technology Research Fellowship. Workshops on computer vision, remote sensing, VR/AR. Collaborated with the International Rescue Committee.",
            },
            {
              id: "pp-exp-dml",
              label: "Digital Matters Lab",
              desc: "Undergraduate Research Intern, 2022. Salt Lake City. Independent digital humanities research on corporate surveillance. Large-scale data visualizations from personal data requests.",
            },
            {
              id: "pp-exp-ta",
              label: "U of Utah — Teaching Assistant",
              desc: "Teaching Assistant, 2021. College of Architecture and Planning. Workshops on systems mapping, microcontrollers, volumetric cinema.",
            },
          ],
        },
        {
          id: "p-info-exhibitions",
          label: "Exhibitions & Publications",
          desc: "Solo exhibitions and publications including Fabricated Landscapes.",
          children: [
            {
              id: "pp-ex-3",
              label: "Planetary Computation — Exhibition",
              desc: "Solo Exhibition, Glen Echo, Maryland. 2025.",
            },
            {
              id: "pp-ex-1",
              label: "Fabricated Landscapes — Book",
              desc: "Published by Material Investigations, 2024.",
            },
            {
              id: "pp-ex-2",
              label: "Fabricated Landscapes — Exhibition",
              desc: "Solo Exhibition, 5222 STW, Tacoma, Washington. 2024.",
            },
            {
              id: "pp-ex-4",
              label: "Senior Design Exhibit",
              desc: "University of Utah, Salt Lake City. 2022.",
            },
          ],
        },
        {
          id: "p-info-awards",
          label: "Awards & Residencies",
          desc: "Artist in Residence at Photoworks, Researcher in Residence at Arthere Istanbul, Steve Jobs Archive Fellowship Finalist, and more.",
          children: [
            {
              id: "pp-aw-1",
              label: "Artist in Residence — Photoworks",
              desc: "Glen Echo, Maryland. 2025.",
            },
            {
              id: "pp-aw-2",
              label: "Researcher in Residence — Arthere",
              desc: "Istanbul, Türkiye. 2024.",
            },
            {
              id: "pp-aw-3",
              label: "Steve Jobs Archive Fellowship — Finalist",
              desc: "Cupertino, California. 2023.",
            },
            {
              id: "pp-aw-4",
              label: "Design Technology Research Fellowship",
              desc: "University of Utah. 2023.",
            },
            {
              id: "pp-aw-5",
              label: "TA Excellence Award",
              desc: "University of Utah. 2023.",
            },
            {
              id: "pp-aw-6",
              label: "Project of Excellence — Oxford",
              desc: "Map The System, University of Oxford. 2022.",
            },
            {
              id: "pp-aw-8",
              label: "Guinness World Record",
              desc: "Largest MMORPG Minecraft Server. 2017.",
            },
          ],
        },
      ],
    },
  ],
  crossLinks: [
    {
      source: "p-atlas",
      target: "geospatial",
    },
    {
      source: "p-dataveillance",
      target: "questiontech",
    },
    {
      source: "p-borderless",
      target: "communitytech",
    },
    {
      source: "p-workshop-download",
      target: "questiontech",
    },
    {
      source: "p-workshop-download",
      target: "techaesthetics",
    },
    {
      source: "p-planetary",
      target: "wastenetworks",
    },
    {
      source: "p-planetary",
      target: "surveillance",
    },
    {
      source: "p-planetary",
      target: "geospatial",
    },
    {
      source: "p-planetary",
      target: "techaesthetics",
    },
    {
      source: "p-feat-atlas",
      target: "questiontech",
    },
    {
      source: "p-feat-atlas",
      target: "geospatial",
    },
    {
      source: "p-feat-atlas",
      target: "techaesthetics",
    },
    {
      source: "p-feat-atlas",
      target: "communitytech",
    },
    {
      source: "p-encryption",
      target: "communitytech",
    },
    {
      source: "p-aliaga",
      target: "unfiltered",
    },
    {
      source: "p-workshop-geolocate",
      target: "teaching",
    },
    {
      source: "p-surveilling",
      target: "questiontech",
    },
  ],
};
