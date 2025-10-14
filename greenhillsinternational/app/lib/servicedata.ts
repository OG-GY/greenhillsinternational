import architecturalDesign from '../assets/services/architectural-design.jpg';
import structuralEngineering from '../assets/services/structural-engineering.jpg';
import mepSystems from '../assets/services/mep-systems.jpg';
import bimVisualization from '../assets/services/bim-visualization.jpg';
import luxuryVilla from '../assets/services/luxury-villa.jpg';
import commercialBuilding from '../assets/services/commercial-building.jpg';
import industrialFacility from '../assets/services/industrial-facility.jpg';
import renovation from '../assets/services/renovation.jpg';
import designBuild from '../assets/services/design-build.jpg';
import interiorFitout from '../assets/services/interior-fitout.jpg';
import facade from '../assets/services/facade.jpg';
import landscaping from '../assets/services/landscaping.jpg';
import maintenance from '../assets/services/maintenance.jpg';
import modular from '../assets/services/modular.jpg';
import smartSolutions from '../assets/services/smart-solutions.jpg';
import specialtyTrades from '../assets/services/specialty-trades.jpg';
import sitePreparation from '../assets/services/site-preparation.jpg';
import temporaryWorks from '../assets/services/temporary-works.jpg';
import valueAdded from '../assets/services/value-added.jpg';
import waterproofing from '../assets/services/waterproofing.jpg';

export type ServiceSection = {
  title: string;
  description: string;
  imageSrc: typeof architecturalDesign;
  imageAlt: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: ServiceSection[];
};

export const servicesData: ServiceData[] = [
  {
    slug: 'construction',
    title: 'Construction & Turnkey Projects',
    subtitle: 'Turnkey Solutions',
    summary: 'End-to-end construction for villas, commercial buildings, and industrial facilities.',
    sections: [
      {
        title: 'Luxury Villas & Residences',
        description:
          'We specialize in crafting luxurious villas with advanced smart home systems and modern architecture tailored to client lifestyles. From bespoke designs to premium interiors, we integrate cutting-edge technology with sustainable materials to create exceptional living spaces.',
        imageSrc: luxuryVilla,
        imageAlt: 'Luxury villa with modern architecture',
      },
      {
        title: 'Commercial & Office Buildings',
        description:
          'Our commercial projects focus on functionality and aesthetics, integrating energy-efficient solutions and premium finishing. We deliver flexible workspaces that maximize productivity while maintaining architectural excellence and environmental responsibility.',
        imageSrc: commercialBuilding,
        imageAlt: 'Modern commercial office building',
      },
      {
        title: 'Light Industrial Facilities',
        description:
          'Designed for strength and efficiency, our industrial units support warehouses, factories, and logistic hubs across the UAE. We incorporate advanced climate control, security systems, and modular options for easy expansion based on evolving business needs.',
        imageSrc: industrialFacility,
        imageAlt: 'Industrial warehouse facility',
      },
      {
        title: 'Extensions & Renovations',
        description:
          'From structural upgrades to complete refurbishments, we enhance spaces with modern design and sustainable construction practices. We specialize in G+1 extensions and heritage preservation, seamlessly integrating contemporary elements with existing structures.',
        imageSrc: renovation,
        imageAlt: 'Building renovation in progress',
      },
      {
        title: 'Design–Build Packages',
        description:
          'Offering complete end-to-end solutions, we handle everything from concept to completion under one roof, ensuring cost control and quality. Our integrated approach streamlines project delivery, managing feasibility studies, design approvals, construction, and post-completion care.',
        imageSrc: designBuild,
        imageAlt: 'Architectural design and planning',
      },
    ],
  },
  {
    slug: 'design',
    title: 'Architectural & Engineering Design',
    subtitle: 'Innovative Design',
    summary: 'Innovative design services combining aesthetics, structural integrity, and sustainability.',
    sections: [
      {
        title: 'Architectural Design',
        description:
          'Our architectural services prioritize aesthetics and functionality through innovative concept layouts, elevations, and space planning. We utilize BIM-integrated designs to ensure clear coordination with all stakeholders, creating spaces that reflect brand identity and enhance user experience.',
        imageSrc: architecturalDesign,
        imageAlt: 'Modern architectural design concept',
      },
      {
        title: 'Structural Engineering',
        description:
          'We provide cutting-edge structural design including foundations, frames, slabs, and load-bearing systems optimized for the UAE\'s unique conditions. Our engineers employ advanced seismic design and geotechnical analysis, utilizing high-quality and eco-friendly building solutions.',
        imageSrc: structuralEngineering,
        imageAlt: 'Structural engineering framework',
      },
      {
        title: 'MEP Engineering',
        description:
          'Our MEP services encompass HVAC, electrical, plumbing, fire safety, and low-voltage systems designed for maximum energy efficiency. We integrate smart building solutions for automated environmental control, complemented by comprehensive energy audits for long-term sustainability.',
        imageSrc: mepSystems,
        imageAlt: 'MEP systems installation',
      },
      {
        title: 'BIM & 3D Visualization',
        description:
          'We leverage BIM models for clash detection, coordination, and cost control throughout the project lifecycle. Our realistic 3D renders and virtual tours provide clients with a clear vision of their projects before execution, utilizing augmented reality for enhanced visualization.',
        imageSrc: bimVisualization,
        imageAlt: 'BIM and 3D visualization',
      },
    ],
  },
  {
    slug: 'structural',
    title: 'Structural & Civil Works',
    subtitle: 'Foundation to Finish',
    summary: 'Comprehensive civil engineering solutions from excavation to roofing systems.',
    sections: [
      {
        title: 'Site Preparation',
        description:
          'We provide comprehensive excavation, grading, leveling, and dewatering services to prepare your site for construction. Our advanced soil stabilization techniques and environmental impact mitigation strategies ensure safe and efficient construction environments.',
        imageSrc: sitePreparation,
        imageAlt: 'Construction site excavation',
      },
      {
        title: 'Foundations & Substructure',
        description:
          'Our foundation solutions include raft, strip, and pile foundations designed to withstand specific load requirements. We construct retaining walls to ensure stability on sloped or water-prone sites, providing a solid base for your building project.',
        imageSrc: structuralEngineering,
        imageAlt: 'Foundation and structural work',
      },
      {
        title: 'Concrete & Masonry Works',
        description:
          'We deliver high-strength concrete columns, beams, slabs, and formwork meeting stringent quality standards. Our expertise includes self-compacting concrete and pre-stressed beams for enhanced load capacity, durability, and fire safety compliance.',
        imageSrc: mepSystems,
        imageAlt: 'Concrete construction work',
      },
    ],
  },
  {
    slug: 'mep',
    title: 'MEP Systems',
    subtitle: 'Building Systems Excellence',
    summary: 'Advanced mechanical, electrical, and plumbing systems designed for efficiency.',
    sections: [
      {
        title: 'Electrical Installations',
        description:
          'We design and install comprehensive electrical systems including power distribution, lighting controls, emergency backup systems, and energy-efficient solutions. Our installations meet all UAE regulations while incorporating smart technologies for optimal performance and safety.',
        imageSrc: mepSystems,
        imageAlt: 'Electrical systems installation',
      },
      {
        title: 'HVAC Systems',
        description:
          'Our HVAC solutions provide optimal climate control with energy-efficient air conditioning, ventilation, and temperature management systems. We design systems tailored to the UAE\'s demanding climate while minimizing operational costs and environmental impact.',
        imageSrc: structuralEngineering,
        imageAlt: 'HVAC system components',
      },
      {
        title: 'Plumbing & Fire Safety',
        description:
          'We install complete plumbing systems including water supply, drainage, and sanitary installations complemented by advanced fire detection, sprinkler systems, and emergency response solutions. All installations comply with UAE fire safety codes and regulations.',
        imageSrc: bimVisualization,
        imageAlt: 'Fire safety and plumbing systems',
      },
    ],
  },
  {
    slug: 'interior',
    title: 'Interior Fit-Out & Finishes',
    subtitle: 'Luxury Interiors',
    summary: 'Premium interior solutions transforming spaces into exceptional experiences.',
    sections: [
      {
        title: 'Corporate & Commercial Fit-Out',
        description:
          'We transform commercial spaces into functional and inspiring environments. From corporate offices to retail spaces, our fit-out services include partition systems, ceiling designs, premium flooring, and custom joinery that reflects your brand identity.',
        imageSrc: interiorFitout,
        imageAlt: 'Luxury corporate interior',
      },
      {
        title: 'Residential Interiors',
        description:
          'Our residential fit-out services create luxurious living spaces with attention to every detail. We provide complete interior solutions including flooring, wall finishes, custom cabinetry, lighting design, and furniture procurement for villas and apartments.',
        imageSrc: luxuryVilla,
        imageAlt: 'Luxury residential interior',
      },
      {
        title: 'Premium Finishes',
        description:
          'We specialize in high-end finishes including marble flooring, hardwood installations, designer wall coverings, and bespoke carpentry. Our craftsmanship ensures the highest standards of finish quality, creating spaces that exude elegance and sophistication.',
        imageSrc: commercialBuilding,
        imageAlt: 'Premium interior finishes',
      },
    ],
  },
  {
    slug: 'facades',
    title: 'Façades & External Works',
    subtitle: 'Architectural Excellence',
    summary: 'Architectural façades combining aesthetics with energy efficiency and durability.',
    sections: [
      {
        title: 'Curtain Wall Systems',
        description:
          'Our façade systems combine architectural aesthetics with structural integrity and energy efficiency. We specialize in curtain walls, cladding solutions, and glass systems that meet wind load requirements and thermal performance standards.',
        imageSrc: facade,
        imageAlt: 'Modern glass facade',
      },
      {
        title: 'External Works',
        description:
          'Complete external works including paving, hardscaping, boundary walls, external lighting, and drainage systems ensuring total project delivery with attention to detail and quality.',
        imageSrc: facade,
        imageAlt: 'External building works',
      },
    ],
  },
  {
    slug: 'landscaping',
    title: 'Landscaping & Outdoor Works',
    subtitle: 'Outdoor Excellence',
    summary: 'Creating stunning outdoor environments with sustainable landscaping solutions.',
    sections: [
      {
        title: 'Soft & Hard Landscaping',
        description:
          'Create stunning outdoor environments with comprehensive landscaping services including planting, turfing, irrigation, paving, decking, and pergolas for residential and commercial properties.',
        imageSrc: landscaping,
        imageAlt: 'Luxury landscaped garden',
      },
      {
        title: 'Sustainable Solutions',
        description:
          'Our sustainable landscaping incorporates native plants, water-efficient irrigation systems, and eco-friendly materials to create beautiful yet environmentally responsible outdoor spaces.',
        imageSrc: landscaping,
        imageAlt: 'Sustainable garden design',
      },
    ],
  },
  {
    slug: 'waterproofing',
    title: 'Waterproofing & Insulation',
    subtitle: 'Protection Systems',
    summary: 'Advanced protection systems ensuring long-term durability and energy efficiency.',
    sections: [
      {
        title: 'Advanced Waterproofing',
        description:
          'Protect your investment with advanced waterproofing solutions for roofs, basements, bathrooms, and external walls using premium membrane systems and liquid-applied coatings.',
        imageSrc: waterproofing,
        imageAlt: 'Waterproofing application',
      },
      {
        title: 'Thermal Insulation',
        description:
          'Our thermal insulation services improve energy efficiency through wall, roof, and acoustic insulation using materials designed to withstand UAE\'s harsh climate conditions.',
        imageSrc: waterproofing,
        imageAlt: 'Building insulation',
      },
    ],
  },
  {
    slug: 'modular',
    title: 'Modular & Prefabricated Solutions',
    subtitle: 'Fast Track Construction',
    summary: 'Fast-track construction with quality-controlled modular building systems.',
    sections: [
      {
        title: 'Modular Construction',
        description:
          'Accelerate project delivery with modular construction solutions including prefabricated cabins, portable buildings, and permanent modular structures offering up to 50% time reduction.',
        imageSrc: modular,
        imageAlt: 'Modular building construction',
      },
      {
        title: 'Quality & Flexibility',
        description:
          'Our modular solutions meet all building regulations with full MEP systems, insulation, and finishes, providing cost efficiency and flexibility for future modifications.',
        imageSrc: modular,
        imageAlt: 'Prefabricated modules',
      },
    ],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance & AMC',
    subtitle: 'Ongoing Support',
    summary: 'Comprehensive maintenance services and annual maintenance contracts for all systems.',
    sections: [
      {
        title: 'Preventive Maintenance',
        description:
          'Scheduled inspections and maintenance of HVAC systems, electrical installations, plumbing, and building equipment to prevent breakdowns and extend asset life.',
        imageSrc: maintenance,
        imageAlt: 'Building maintenance service',
      },
      {
        title: 'AMC Packages',
        description:
          'Comprehensive annual maintenance contracts covering all building systems with regular inspections, priority service, discounted repairs, and detailed reporting for facility management.',
        imageSrc: maintenance,
        imageAlt: 'Maintenance contract services',
      },
    ],
  },
  {
    slug: 'temporary',
    title: 'Temporary Works & Site Services',
    subtitle: 'Site Support',
    summary: 'Complete site establishment and temporary infrastructure for safe operations.',
    sections: [
      {
        title: 'Site Establishment',
        description:
          'Complete site establishment services including temporary fencing, hoarding, site offices, welfare facilities, storage areas, and security systems ensuring safe construction operations.',
        imageSrc: temporaryWorks,
        imageAlt: 'Construction site setup',
      },
      {
        title: 'Construction Support',
        description:
          'We provide scaffolding systems, formwork, temporary access roads, construction lighting, power distribution, water supply, and waste management solutions.',
        imageSrc: temporaryWorks,
        imageAlt: 'Site services and scaffolding',
      },
    ],
  },
  {
    slug: 'specialty',
    title: 'Specialty Trades & Custom Fabrication',
    subtitle: 'Expert Craftsmanship',
    summary: 'Expert craftsmanship in specialized construction trades and custom metalwork.',
    sections: [
      {
        title: 'Custom Metalwork',
        description:
          'Expert craftsmanship in specialized construction trades including custom metal fabrication, welding, and steel work tailored to project specifications.',
        imageSrc: specialtyTrades,
        imageAlt: 'Metal fabrication work',
      },
      {
        title: 'Specialized Services',
        description:
          'We provide specialty construction services including custom joinery, architectural metalwork, and specialized installations requiring expert craftsmanship and precision.',
        imageSrc: specialtyTrades,
        imageAlt: 'Specialty construction trades',
      },
    ],
  },
  {
    slug: 'smart',
    title: 'Smart & Sustainable Solutions',
    subtitle: 'Innovation & Sustainability',
    summary: 'Cutting-edge smart building technologies and sustainable practices.',
    sections: [
      {
        title: 'Smart Building Technologies',
        description:
          'Cutting-edge smart building technologies including automation systems, IoT sensors, and integrated control platforms for optimal building performance and user comfort.',
        imageSrc: smartSolutions,
        imageAlt: 'Smart building control system',
      },
      {
        title: 'Sustainable Practices',
        description:
          'We implement sustainable construction practices including energy-efficient systems, renewable energy integration, and green building certifications to reduce environmental impact.',
        imageSrc: smartSolutions,
        imageAlt: 'Sustainable building solutions',
      },
    ],
  },
  {
    slug: 'value-added',
    title: 'Value-Added Client Services',
    subtitle: 'Beyond Construction',
    summary: 'Project management, regulatory support, and post-handover services.',
    sections: [
      {
        title: 'Project Management',
        description:
          'Expert guidance throughout the project lifecycle including feasibility studies, cost estimation, procurement support, and comprehensive project coordination ensuring successful delivery.',
        imageSrc: valueAdded,
        imageAlt: 'Project management consultation',
      },
      {
        title: 'Regulatory Support',
        description:
          'Complete support for municipality approvals, civil defense clearances, DEWA connections, and all required building permits ensuring compliance with UAE regulations.',
        imageSrc: valueAdded,
        imageAlt: 'Regulatory approval services',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}


