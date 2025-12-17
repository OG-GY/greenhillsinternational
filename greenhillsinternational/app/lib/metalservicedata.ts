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
  subdomains?: Array<{
    title: string;
    description: string;
  }>;
};

export const metalDomains: MetalDomainDetail[] = [
  {
    id: 'scrap',
    iconName: 'Package',
    title: 'Comprehensive Scrap & Recyclables Trading',
    summary: 'Complete scrap trading solutions covering ferrous, non-ferrous, plastic, wood, e-waste, rubber, and mixed industrial materials.',
    path: '/metal/scrap',
    description: 'Green Hills Metals provides full-scope trading of industrial scrap and recyclable materials, covering collection, segregation, processing, recycling, import, export, and resale.',
    subdomains: [
      { title: 'Ferrous Scrap', description: 'Iron-based scrap including steel, cast iron, structural steel, machinery scrap, demolition scrap, vehicle bodies, and industrial offcuts, recycled into new steel products.' },
      { title: 'Non-Ferrous Scrap', description: 'Aluminium, copper, brass, bronze, zinc, nickel, lead, stainless steel, and mixed alloy scrap sourced from industrial, automotive, electrical, and construction sectors.' },
      { title: 'Wire & Cable Scrap', description: 'Insulated, armoured, and unarmoured copper and aluminium cables recovered from electrical systems, power networks, telecom infrastructure, and industrial equipment.' },
      { title: 'Electronic & Electrical Scrap (E-Waste)', description: 'End-of-life electronics such as computers, mobile phones, servers, household appliances, circuit boards, transformers, and electronic components containing recoverable metals.' },
      { title: 'Plastic Scrap & Polymers', description: 'Recyclable plastics including PET, HDPE, LDPE, PVC, PP, ABS, mixed plastics, and industrial polymer waste.' },
      { title: 'Rubber & Tyre Scrap', description: 'Used tyres, industrial rubber products, conveyor belts, and rubber waste recycled into crumb rubber, fuel, construction materials, and secondary rubber products.' },
      { title: 'Wood & Timber Scrap', description: 'Pallets, lumber waste, sawdust, plywood, MDF, and construction wood reclaimed for reuse, recycling, or energy recovery.' },
      { title: 'Mixed Industrial Scrap', description: 'Heterogeneous industrial waste such as damaged inventory, obsolete machinery parts, production rejects, factory waste, and construction debris.' },
      { title: 'Secondary Raw Materials', description: 'Processed scrap, shredded metals, baled plastics, and sorted recyclables used as feedstock for manufacturing and metal production.' }
    ],
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
    description: 'Green Hills Metals trades a broad range of virgin, recycled, and semi-finished non-ferrous metals used across high-growth industrial sectors.',
    subdomains: [
      { title: 'Aluminium & Aluminium Alloys', description: 'Ingots, billets, sheets, plates, coils, extrusions, and scrap aluminium for construction, packaging, transportation, and manufacturing.' },
      { title: 'Copper & Copper Alloys', description: 'Copper cathodes, rods, wires, strips, and brass/bronze alloys for electrical, plumbing, electronics, and industrial applications.' },
      { title: 'Zinc, Lead & Nickel', description: 'Primary and secondary metals used in galvanizing, batteries, alloys, and industrial manufacturing.' },
      { title: 'Specialty & High-Performance Alloys', description: 'Titanium, magnesium, nickel-based alloys, and specialty metals for aerospace, medical, marine, energy, and advanced engineering sectors.' },
      { title: 'Automotive Non-Ferrous Metals & Components', description: 'Aluminium body panels, engine components, copper radiators, heat exchangers, and reusable automotive parts.' },
      { title: 'Electronic-Grade Metals', description: 'High-purity non-ferrous metals and scrap used in electronics, electrical systems, and precision manufacturing.' }
    ],
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
    description: 'Steel trading forms a core pillar of Green Hills Metals’ operations, serving infrastructure, construction, and industrial markets.',
    subdomains: [
      { title: 'Carbon & Alloy Steel', description: 'Structural, mild, and alloy steel products for fabrication and heavy industry.' },
      { title: 'Structural Steel & Reinforcement', description: 'Beams, columns, angles, channels, joists, and reinforcement bars (rebar) for buildings and infrastructure.' },
      { title: 'Steel Sheets, Plates & Coils', description: 'Hot-rolled, cold-rolled, galvanized, and coated sheets and plates for shipbuilding, machinery, and manufacturing.' },
      { title: 'Stainless Steel Products', description: 'Industrial, food-grade, medical, and chemical-grade stainless steel sheets, pipes, and components.' },
      { title: 'Steel Pipes & Tubes', description: 'Seamless and welded pipes and tubes for oil & gas, plumbing, mechanical, and industrial systems.' },
      { title: 'Automotive Steel Metals & Components', description: 'Steel chassis parts, body panels, engine blocks, surplus components, and scrap from end-of-life vehicles.' },
      { title: 'New, Surplus & Recycled Steel', description: 'Primary steel products, excess inventory, and recycled steel materials.' }
    ],
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
    description: 'This domain covers both primary metal feedstocks and secondary raw materials used in metal production.',
    subdomains: [
      { title: 'Iron Ore & Pellets', description: 'Iron ore lumps, fines, and pellets supplied to steel mills and foundries.' },
      { title: 'Bauxite and alumina', description: 'Aluminium ore and refined alumina for smelters and metal producers.' },
      { title: 'Copper & Base-Metal Concentrates', description: 'Concentrates and ores used in refining and smelting operations.' },
      { title: 'Ferrous & Non-Ferrous Scrap as Feedstock', description: 'Secondary raw materials supplementing primary ore supply.' },
      { title: 'Ferroalloys & Pig Iron', description: 'Ferrochrome, ferromanganese, ferrosilicon, pig iron, and foundry alloys.' },
      { title: 'Industrial Minerals & Fluxes', description: 'Silica, limestone, and other additives used in metallurgical and industrial processes.' }
    ],
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
    description: 'Green Hills Metals trades shipping and industrial containers to support global logistics, storage, and modular infrastructure.',
    subdomains: [
      { title: 'New Shipping Containers', description: 'Factory-new 20ft, 40ft, and high-cube dry containers.' },
      { title: 'Used & Refurbished Containers', description: 'Pre-owned containers inspected, repaired, and certified for reuse.' },
      { title: 'Refrigerated (Reefer) Containers', description: 'Temperature-controlled containers for food, pharmaceuticals, and cold-chain logistics.' },
      { title: 'Specialized Containers', description: 'Open-top, flat-rack, tank containers, and custom cargo units.' },
      { title: 'Container Modifications', description: 'Office containers, storage units, accommodation modules, and custom conversions.' },
      { title: 'Container Accessories & Parts', description: 'CSC plates, locking systems, generator sets, and fittings.' },
      { title: 'Container Leasing & Logistics', description: 'Leasing, positioning, transportation, and fleet management services.' }
    ],
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
    title: 'Metal Wires, Rods & Cables Trading',
    summary: 'Conductive and structural wire products including copper, aluminium conductors, steel wire, specialty cables, and mesh.',
    path: '/metal/wires',
    description: 'This domain supports construction, energy, telecom, and industrial manufacturing.',
    subdomains: [
      { title: 'Copper Conductors & Cables', description: 'Electrical wires, power cables, busbars, and grounding systems.' },
      { title: 'Aluminium Conductors', description: 'Overhead conductors, power cables, and industrial wiring.' },
      { title: 'Steel Wires & Wire Rods', description: 'High-carbon, galvanized, stainless, and specialty wires for industrial and structural use.' },
      { title: 'Specialty & Industrial Cables', description: 'Multi-core, control, telecom, automotive, and aerospace cables.' },
      { title: 'Wire Mesh & Fencing Products', description: 'Reinforcement mesh, fencing wire, security barriers, and industrial mesh panels.' }
    ],
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
    description: 'Green Hills Metals supplies metal packaging and storage solutions for industrial and commercial use.',
    subdomains: [
      { title: 'Steel Drums & Barrels', description: 'Open-head and tight-head drums for chemicals, petroleum, lubricants, and hazardous materials.' },
      { title: 'Tinplate Cans & Pails', description: 'Food-grade and industrial tin-coated steel cans for food, beverages, paints, and coatings.' },
      { title: 'Industrial Storage Tanks & IBCs', description: 'Large tanks and intermediate bulk containers for oils, chemicals, and industrial fluids.' },
      { title: 'Gas Cylinders & Pressure Containers', description: 'Specialized containers for industrial gases and pressurized materials.' },
      { title: 'Custom Metal Packaging Solutions', description: 'OEM containers, crates, and application-specific metal packaging.' },
      { title: 'Packaging Inspection & Recycling Services', description: 'Reconditioning, quality checks, reuse, and recycling programs supporting sustainability.' }
    ],
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
