// Icon imports removed - using iconName strings instead

export type MetalDomainDetail = {
  id: string;
  iconName: 'Package' | 'Zap' | 'Building2' | 'Mountain' | 'Container' | 'Cable' | 'Drum';
  title: string;
  summary: string;
  path: string;
  description: string;
  capabilities: string[];
  benefits: string[];
  specifications?: Array<{
    label: string;
    value: string;
  }>;
  applications: string[];
};

export const metalDomains: MetalDomainDetail[] = [
  {
    id: 'scrap',
    iconName: 'Package',
    title: 'Comprehensive Scrap & Recyclables Trading',
    summary: 'Complete scrap trading solutions covering ferrous, non-ferrous, plastic, wood, e-waste, rubber, and mixed industrial materials.',
    path: '/metal/scrap',
    description: 'We offer comprehensive scrap and recyclables trading solutions encompassing all major waste streams. From post-consumer packaging to industrial process waste, we manage ferrous scrap, non-ferrous metals, plastics, wood waste, e-waste, rubber, and mixed materials. Our sourcing network spans manufacturers, processors, collection centers, and waste management facilities globally.',
    capabilities: [
      'Ferrous scrap collection and grading',
      'Non-ferrous metal separation and processing',
      'Plastic waste sorting and baling',
      'Wood waste and biomass aggregation',
      'E-waste and electronic scrap handling',
      'Rubber recycling solutions',
      'Mixed waste stream management'
    ],
    benefits: [
      'Sustainable circular economy solutions',
      'Reduced landfill dependency',
      'Consistent supply of secondary materials',
      'Cost-effective sourcing vs virgin materials',
      'Environmental compliance and certifications',
      'Quality assurance and traceability',
      'Competitive market pricing'
    ],
    applications: [
      'Steel mill feed stocks',
      'Aluminum smelter inputs',
      'Plastic pellet production',
      'Composite material manufacturing',
      'Energy recovery and waste-to-energy projects',
      'Rubber compound production'
    ]
  },
  {
    id: 'non-ferrous',
    iconName: 'Zap',
    title: 'Non-Ferrous Metal Trading',
    summary: 'Premium trading of aluminium, copper, specialty alloys, and automotive components for aerospace and electronics industries.',
    path: '/metal/non-ferrous',
    description: 'Specializing in premium non-ferrous metal trading, we source and supply high-quality aluminium, copper, zinc, nickel, tin, and specialty alloys. Our portfolio includes primary metals, recycled secondary materials, and engineered alloys meeting stringent aerospace, automotive, and electronics specifications.',
    capabilities: [
      'Aluminum ingots and extrusions',
      'Copper cathodes and wire rods',
      'Zinc alloys and ingots',
      'Nickel briquettes and powder',
      'Specialty alloys (titanium, magnesium)',
      'Secondary aluminum and copper scrap',
      'Quality testing and certification'
    ],
    benefits: [
      'Direct mill partnerships for premium quality',
      'Competitive pricing through volume aggregation',
      'Certified supply chain traceability',
      'Aerospace and automotive compliance',
      'Custom alloy specifications available',
      'Reliable delivery schedules',
      'Technical support and material advisory'
    ],
    specifications: [
      { label: 'Purity Levels', value: '99.7% - 99.99%' },
      { label: 'Form Availability', value: 'Ingots, billets, rods, powder' },
      { label: 'Certification', value: 'ISO 9001, AS9100, NADCAP' }
    ],
    applications: [
      'Aerospace components and structures',
      'Automotive parts and engine blocks',
      'Electronics and semiconductor equipment',
      'High-performance industrial machinery',
      'Electrical wiring and conductors'
    ]
  },
  {
    id: 'steel',
    iconName: 'Building2',
    title: 'Steel & Basic Steel Products Trading',
    summary: 'Comprehensive ferrous materials including structural steel, sheets, plates, stainless steel, and pipes for global infrastructure.',
    path: '/metal/steel',
    description: 'Our steel trading operations cover the complete spectrum of ferrous products. From structural grades to stainless varieties, we supply hot-rolled, cold-rolled, and coated steel products meeting international standards. Our relationships with major mills ensure consistent quality and competitive pricing.',
    capabilities: [
      'Structural steel beams and angles',
      'Hot-rolled and cold-rolled coils',
      'Steel plates and sheets',
      'Stainless steel products (304, 316, 430)',
      'Galvanized and coated steel',
      'Steel pipes and tubes',
      'Reinforced steel bars (rebar)'
    ],
    benefits: [
      'Access to major global steel mills',
      'Full range of grades and specifications',
      'Competitive international pricing',
      'Reliable supply consistency',
      'Technical documentation and certifications',
      'Customized cutting and processing services',
      'Long-term contracts with price stability'
    ],
    specifications: [
      { label: 'Grades Available', value: 'A36, S355, S460, Stainless 304/316' },
      { label: 'Coatings', value: 'Bare, Galvanized, Paint, PVC' },
      { label: 'Standards', value: 'ASTM, DIN, EN, JIS' }
    ],
    applications: [
      'Building and construction infrastructure',
      'Bridge and infrastructure projects',
      'Automotive and machinery manufacturing',
      'Shipbuilding and marine applications',
      'Power plant and industrial equipment'
    ]
  },
  {
    id: 'ores',
    iconName: 'Mountain',
    title: 'Metal Ores & Raw Materials Trading',
    summary: 'Primary feedstocks including iron ore, bauxite, alumina, ferroalloys, and industrial minerals for metal production worldwide.',
    path: '/metal/ores',
    description: 'We trade in essential raw materials and ores that serve as primary feedstocks for global metal production. Our portfolio includes iron ore, bauxite, alumina, ferroalloys, and specialized industrial minerals sourced from major mining regions worldwide.',
    capabilities: [
      'Iron ore (pellets, fines, lumps)',
      'Bauxite and alumina',
      'Ferroalloys (FeSi, FeMn, FeNi)',
      'Chrome ore and concentrate',
      'Manganese ore',
      'Copper concentrate and cathodes',
      'Industrial minerals sourcing'
    ],
    benefits: [
      'Direct mine relationships for competitive pricing',
      'Consistent feedstock quality',
      'Large volume availability',
      'Reliable long-term supply agreements',
      'Technical expertise and market analysis',
      'Efficient logistics and shipping',
      'Environmental and regulatory compliance'
    ],
    specifications: [
      { label: 'Iron Ore Grade', value: '65% - 72% Fe content' },
      { label: 'Bauxite Grade', value: '45% - 50% Al2O3' },
      { label: 'Shipping', value: 'Bulk vessel, containerized, or breakbulk' }
    ],
    applications: [
      'Integrated steel mills',
      'Aluminum smelters',
      'Specialty metal production',
      'Chemical and pharmaceutical industries',
      'Glass and ceramic manufacturing'
    ]
  },
  {
    id: 'containers',
    iconName: 'Container',
    title: 'Cargo Containers Trading',
    summary: 'New, used, and specialized shipping containers with modifications, accessories, and comprehensive logistics services.',
    path: '/metal/containers',
    description: 'We supply and trade in new, used, and specialized shipping containers. Our inventory includes standard 20ft and 40ft containers, high-cube variants, and custom-modified units for specialized cargo. We also offer container accessories, refurbishment services, and logistics coordination.',
    capabilities: [
      '20ft and 40ft standard containers',
      '40ft high-cube containers',
      'Specialized containers (reefers, open-tops, flats)',
      'Used container sales and leasing',
      'Container modifications and customization',
      'Refurbishment and repair services',
      'Container accessories and hardware'
    ],
    benefits: [
      'Competitive pricing on new and used stock',
      'Rapid availability and delivery',
      'Custom modification capabilities',
      'Reliable supply from major manufacturers',
      'Quality inspection and certification',
      'Flexible purchase or lease options',
      'Logistics coordination services'
    ],
    specifications: [
      { label: 'Capacity', value: '20ft (33cbm), 40ft (67cbm), 40HC (76cbm)' },
      { label: 'Material', value: 'Steel frame, plywood, corrugated metal' },
      { label: 'Condition', value: 'New, Grade A used, Grade B used' }
    ],
    applications: [
      'International shipping and logistics',
      'Cargo storage and warehousing',
      'Mobile office and site facilities',
      'Emergency relief and temporary housing',
      'Specialized cargo transportation',
      'Container depots and terminal operations'
    ]
  },
  {
    id: 'wires',
    iconName: 'Cable',
    title: 'Metal Wires Trading',
    summary: 'Conductive and structural wire products including copper, aluminium conductors, steel wire, specialty cables, and mesh.',
    path: '/metal/wires',
    description: 'Comprehensive metal wire and cable trading covering electrical conductors, structural wire products, and specialty applications. We supply copper wire, aluminum conductors, galvanized steel wire, and engineered cable products meeting international electrical and mechanical standards.',
    capabilities: [
      'Copper wire and rods',
      'Aluminum conductors and cables',
      'Steel wire and ropes',
      'Galvanized wire products',
      'Stainless steel wire',
      'Specialty high-strength wires',
      'Cable assemblies and terminators'
    ],
    benefits: [
      'Premium conductor quality and purity',
      'Wide gauge and specification range',
      'Electrical properties certification',
      'Competitive bulk pricing',
      'Technical specification support',
      'Reliable delivery schedules',
      'Traceability and certification'
    ],
    specifications: [
      { label: 'Conductivity', value: '58-62 S/m for copper' },
      { label: 'Gauge Range', value: '0.5mm - 10mm diameter' },
      { label: 'Certifications', value: 'IEC 60228, ASTM B3, ASTM B33' }
    ],
    applications: [
      'Electrical power transmission and distribution',
      'Industrial machinery and automation',
      'Construction and structural reinforcement',
      'Telecommunications infrastructure',
      'Automotive electrical systems',
      'Consumer electronics manufacturing'
    ]
  },
  {
    id: 'packaging',
    iconName: 'Drum',
    title: 'Metal Cans & Industrial Containers Trading',
    summary: 'Industrial packaging solutions including steel drums, tinplate cans, storage tanks, and custom metal packaging.',
    path: '/metal/packaging',
    description: 'We specialize in industrial metal packaging solutions for chemical, automotive, and consumer goods industries. Our portfolio includes standard steel drums, tinplate cans, intermediate bulk containers (IBCs), and custom-engineered metal packaging tailored to specific containment requirements.',
    capabilities: [
      '55-gallon steel drums',
      '30-liter and 10-liter containers',
      'Tinplate cans and lids',
      'Intermediate bulk containers (IBC)',
      'Pails and buckets',
      'Custom metal containers',
      'Closures, lids, and sealing systems'
    ],
    benefits: [
      'Durable and reusable packaging',
      'UN-certified for hazardous materials',
      'Cost-effective per-unit economics',
      'Environmental sustainability through reuse',
      'Quality assurance and leak-testing',
      'Bulk supply capacity',
      'Custom branding and printing'
    ],
    specifications: [
      { label: 'Steel Grade', value: 'Commercial quality (DQ), Drawing quality deep (DQD)' },
      { label: 'Coating', value: 'Uncoated, epoxy-lined, phenolic-lined' },
      { label: 'Certifications', value: 'UN, DOT, IATA, IMO certified' }
    ],
    applications: [
      'Chemical storage and transportation',
      'Petroleum product packaging',
      'Lubricants and oils containment',
      'Paint and coating packaging',
      'Automotive fluid storage',
      'Food industry packaging',
      'Hazardous goods containment'
    ]
  }
];

export const getMetalDomainBySlug = (slug: string): MetalDomainDetail | undefined => {
  return metalDomains.find((domain) => domain.id === slug);
};

export const getAllMetalDomainSlugs = (): string[] => {
  return metalDomains.map((domain) => domain.id);
};
