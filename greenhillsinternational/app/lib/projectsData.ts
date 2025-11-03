import { StaticImageData } from 'next/image';
import luxuryTowerExterior from '@/app/assets/hero-1.jpg';
import luxuryTowerInterior from '@/app/assets/hero-2.jpg';
import corporateHQExterior from '@/app/assets/hero-3.jpg';
import corporateHQInterior from '@/app/assets/construction-excellence.jpg';
import penthouseExterior from '@/app/assets/hero-2.jpg';
import penthouseInterior from '@/app/assets/hero-1.jpg';
import mixedUseExterior from '@/app/assets/hero-3.jpg';
import mixedUseInterior from '@/app/assets/construction-excellence.jpg';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  heroImage: StaticImageData;
  overview: {
    description: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  sections: Array<{
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    reverse: boolean;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
  servicesIntro: string;
}

export const projects: Record<string, ProjectData> = {
  'luxury-tower': {
    id: 'luxury-tower',
    title: 'Luxury Residential Tower',
    category: 'Residential',
    location: 'Downtown District',
    heroImage: luxuryTowerExterior,
    overview: {
      description: 'A prestigious 45-story luxury residential tower featuring state-of-the-art amenities and panoramic city views. This landmark development combines sophisticated design with premium construction quality, offering residents an unparalleled living experience in the heart of the downtown district.',
      stats: [
        { label: 'Completion', value: '2023' },
        { label: 'Size', value: '120,000 sq ft' },
        { label: 'Units', value: '85 Residences' },
      ],
    },
    sections: [
      {
        title: 'Architectural Excellence',
        description: 'The tower showcases contemporary architecture with floor-to-ceiling glass facades, creating a striking presence in the skyline. Our construction team executed complex structural engineering to ensure both aesthetic appeal and seismic resilience, incorporating advanced building technologies throughout.',
        imageSrc: luxuryTowerExterior,
        imageAlt: 'Luxury tower exterior architecture',
        reverse: false,
      },
      {
        title: 'Premium Interior Spaces',
        description: 'The grand lobby features Italian marble flooring, custom lighting fixtures, and double-height ceilings. Each residence includes premium finishes, smart home technology, and expansive windows. Common areas include a rooftop infinity pool, fitness center, residents\' lounge, and 24/7 concierge services.',
        imageSrc: luxuryTowerInterior,
        imageAlt: 'Luxury tower interior lobby',
        reverse: true,
      },
    ],
    servicesIntro: 'This project showcased our expertise across multiple disciplines:',
    services: [
      {
        title: 'Construction & Structure',
        description: 'Complete structural engineering, foundation work, and high-rise construction management ensuring superior quality and safety standards.',
      },
      {
        title: 'Interior Fit-Out',
        description: 'Luxury interior design and execution including custom millwork, premium finishes, and sophisticated lighting systems throughout all residential units.',
      },
      {
        title: 'MEP Systems',
        description: 'State-of-the-art mechanical, electrical, and plumbing installations with smart building automation and energy-efficient systems.',
      },
      {
        title: 'Facade Engineering',
        description: 'Premium glass curtain wall systems with advanced thermal performance and weather resistance tailored for UAE climate conditions.',
      },
    ],
  },
  'corporate-hq': {
    id: 'corporate-hq',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Business Park',
    heroImage: corporateHQExterior,
    overview: {
      description: 'A cutting-edge corporate headquarters designed to foster innovation and collaboration. This 6-story commercial complex features modern architecture, flexible workspace design, and advanced building systems, setting a new standard for commercial developments in the region.',
      stats: [
        { label: 'Completion', value: '2024' },
        { label: 'Size', value: '95,000 sq ft' },
        { label: 'Capacity', value: '800+ Employees' },
      ],
    },
    sections: [
      {
        title: 'Modern Architecture',
        description: 'The building features a sleek glass and steel exterior with strategic sun shading elements. Our construction approach emphasized sustainable building practices, incorporating energy-efficient systems and green building certifications. The design promotes natural light throughout the workspace while maintaining thermal comfort.',
        imageSrc: corporateHQExterior,
        imageAlt: 'Corporate headquarters exterior',
        reverse: false,
      },
      {
        title: 'Collaborative Workspaces',
        description: 'The interior showcases open-plan offices with flexible meeting spaces, executive suites, conference rooms, and collaborative zones. Features include raised flooring for cable management, acoustic ceiling systems, and integrated technology infrastructure. The building includes a cafeteria, fitness center, and outdoor terraces.',
        imageSrc: corporateHQInterior,
        imageAlt: 'Corporate office interior spaces',
        reverse: true,
      },
    ],
    servicesIntro: 'This project demonstrated our comprehensive commercial construction capabilities:',
    services: [
      {
        title: 'Design-Build',
        description: 'Integrated design and construction approach from concept to completion, ensuring seamless coordination and optimized project delivery timelines.',
      },
      {
        title: 'MEP Engineering',
        description: 'Advanced HVAC systems with zone controls, comprehensive electrical infrastructure, and efficient plumbing systems designed for commercial operations.',
      },
      {
        title: 'Smart Building Solutions',
        description: 'Integrated building management systems, access control, security, and energy monitoring platforms for optimal operational efficiency.',
      },
      {
        title: 'Interior Fit-Out',
        description: 'Complete office interior design and construction including partition systems, flooring, ceiling work, and furniture coordination.',
      },
    ],
  },
  'premium-penthouse': {
    id: 'premium-penthouse',
    title: 'Premium Penthouse',
    category: 'Residential',
    location: 'Waterfront',
    heroImage: penthouseExterior,
    overview: {
      description: 'An exclusive waterfront penthouse that redefines luxury living. This stunning residence features panoramic views, bespoke interiors, and premium finishes throughout. Every detail was meticulously crafted to create an exceptional living environment that combines elegance with modern comfort.',
      stats: [
        { label: 'Completion', value: '2024' },
        { label: 'Size', value: '8,500 sq ft' },
        { label: 'Bedrooms', value: '4 + Maid\'s' },
      ],
    },
    sections: [
      {
        title: 'Spectacular Outdoor Living',
        description: 'The expansive terrace offers breathtaking waterfront views with custom outdoor furniture, integrated lighting, and landscaped gardens. Our construction team installed premium decking, glass railings, and outdoor kitchen facilities. The space seamlessly connects indoor and outdoor living areas through floor-to-ceiling sliding doors.',
        imageSrc: penthouseExterior,
        imageAlt: 'Penthouse terrace with waterfront views',
        reverse: false,
      },
      {
        title: 'Exquisite Interior Design',
        description: 'The interior showcases the finest materials including imported marble, custom millwork, and designer lighting fixtures. The open-plan living areas feature double-height ceilings and panoramic windows. Master suite includes walk-in closets, spa-like bathroom, and private balcony. Smart home automation controls lighting, climate, security, and entertainment systems.',
        imageSrc: penthouseInterior,
        imageAlt: 'Luxury penthouse living room',
        reverse: true,
      },
    ],
    servicesIntro: 'This exclusive project highlighted our luxury residential expertise:',
    services: [
      {
        title: 'Interior Design & Fit-Out',
        description: 'Bespoke interior design with premium materials, custom furniture, and artisan craftsmanship. Every detail tailored to client specifications.',
      },
      {
        title: 'Architectural Design',
        description: 'Custom architectural modifications and enhancements to maximize views, natural light, and spatial flow throughout the residence.',
      },
      {
        title: 'Smart Home Integration',
        description: 'Comprehensive home automation system including lighting, climate control, security, audio-visual, and shade management with mobile app control.',
      },
      {
        title: 'Facade & Glazing',
        description: 'Floor-to-ceiling glass installations with advanced thermal performance, UV protection, and acoustic insulation for optimal comfort.',
      },
    ],
  },
  'mixed-use': {
    id: 'mixed-use',
    title: 'Mixed-Use Development',
    category: 'Mixed-Use',
    location: 'City Center',
    heroImage: mixedUseExterior,
    overview: {
      description: 'A vibrant mixed-use complex combining retail, residential, and commercial spaces in the heart of the city. This transformative development creates a live-work-play environment with ground-floor retail, mid-level offices, and upper residential units, all designed to foster a thriving urban community.',
      stats: [
        { label: 'Completion', value: '2023' },
        { label: 'Size', value: '180,000 sq ft' },
        { label: 'Composition', value: 'Retail + Office + Residential' },
      ],
    },
    sections: [
      {
        title: 'Urban Integration',
        description: 'The building\'s contemporary facade integrates seamlessly with the urban landscape while creating a distinctive architectural presence. Our construction approach balanced complex multi-use requirements, including separate service access, parking facilities, and vertical circulation systems. Green terraces and retail frontage activate the street level.',
        imageSrc: mixedUseExterior,
        imageAlt: 'Mixed-use development exterior',
        reverse: false,
      },
      {
        title: 'Multi-Functional Spaces',
        description: 'The interior showcases premium retail spaces with high ceilings and modern finishes, attracting international brands. Office floors feature flexible layouts with natural light and contemporary amenities. Residential units offer modern living spaces with quality finishes and building amenities. Central atrium provides natural light and creates visual connectivity between levels.',
        imageSrc: mixedUseInterior,
        imageAlt: 'Mixed-use development interior retail space',
        reverse: true,
      },
    ],
    servicesIntro: 'This complex project showcased our ability to manage diverse construction requirements:',
    services: [
      {
        title: 'Commercial Construction',
        description: 'Complete structural and architectural construction integrating retail, office, and residential components with separate systems and access points.',
      },
      {
        title: 'Structural Engineering',
        description: 'Complex structural design accommodating varying floor loads, large retail spans, and residential requirements within a unified building system.',
      },
      {
        title: 'MEP Systems',
        description: 'Separate mechanical, electrical, and plumbing systems for each use type with central building management and energy-efficient operations.',
      },
      {
        title: 'Design Coordination',
        description: 'Comprehensive design coordination managing multiple stakeholders, building codes, and functional requirements across all development phases.',
      },
    ],
  },
};

export const getProjectById = (id: string): ProjectData | undefined => {
  return projects[id];
};

export const getAllProjects = (): ProjectData[] => {
  return Object.values(projects);
};
