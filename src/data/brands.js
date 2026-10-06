// Brand data for the redesign (home brands tabs and the brand pages); same brands, logos,
// descriptions and truck models as the current pages/TruckBrands, TractorBrands, PartsBrands and BrandDetails

export const partsBrands = [
  { name: 'Valvoline', logo: '/images/part_brand/valvoline-logo.png', description: 'High-performance Valvoline lubricants and engine oils' },
  { name: 'Valeo', logo: '/images/part_brand/valeo-logo.png', description: 'Premium Valeo Clutches, assemblies and components' },
  { name: 'LUK Clutches', logo: '/images/part_brand/luk-clutches-logo.jpg', description: 'Reliable LUK Clutches assemblies and components' },
  { name: 'Wabco', logo: '/images/part_brand/wabco-logo.png', description: 'Advanced Wabco vehicle control systems and parts' },
  { name: 'Delux Bearing', logo: '/images/part_brand/delux-bearing-logo.jpg', description: 'Durable Delux Bearing products for various vehicles' },
  { name: 'TVS-Girling', logo: '/images/part_brand/tvs-girling-logo.jpg', description: 'Quality TVS-Girling components and spare parts' },
  { name: 'emmbros AXLE', logo: '/images/part_brand/emmbros-logo.jpg', description: 'Precision Emmbros Axle assemblies and solutions' },
  { name: 'Meritor', logo: '/images/part_brand/meritor-logo.jpg', description: 'Renowned Meritor axles and vehicular drivetrain parts' },
  { name: 'Everest Genuine Parts', logo: '/images/part_brand/everest-logo.png', description: 'Genuine Everest replacement and maintenance parts' },
  { name: 'Remsons', logo: '/images/part_brand/remsons-logo.png', description: 'Reliable Remsons cables and control systems' },
  { name: 'Fras-le (ASK)', logo: '/images/part_brand/ask-fras-le-logo.png', description: 'Trusted Fras-le (ASK) brake lining and friction materials' },
  { name: 'Toyota Genuine Parts', logo: '/images/part_brand/toyota-genuine-parts-logo.png', description: 'Genuine Toyota replacement and maintenance parts' },
  { name: 'Ford Parts', logo: '/images/part_brand/ford-logo.jpg', description: 'Trusted Ford replacement and maintenance parts' },
  { name: 'Royal Enfield', logo: '/images/part_brand/royal-enfield-logo.jpg', description: 'Trusted Royal Enfield replacement and maintenance parts' },
]

export const truckBrands = [
  {
    name: 'Tata',
    slug: 'tata',
    logo: '/images/truck-brand/tata-logo.png',
    description: 'Complete range of genuine Tata truck parts for export',
    models: [
      { name: 'Tata Ace', image: '/images/Trucks/Tata/tata-ace.png' },
      { name: 'Tata 407', image: '/images/Trucks/Tata/tata-407.jpg' },
      { name: 'Tata 709', image: '/images/Trucks/Tata/tata-709.jpg' },
      { name: 'Tata 909', image: '/images/Trucks/Tata/tata-909.png' },
      { name: 'Tata 1109', image: '/images/Trucks/Tata/tata-1109.jpg' },
      { name: 'Tata 1613', image: '/images/Trucks/Tata/tata-1613.jpg' },
      { name: 'Tata 2518', image: '/images/Trucks/Tata/tata-2518.jpg' },
      { name: 'Tata 3118', image: '/images/Trucks/Tata/tata-3118.jpg' },
      { name: 'Tata Signa', image: '/images/Trucks/Tata/tata-5530-signa.jpg' },
      { name: 'Tata 5530 Prima', image: '/images/Trucks/Tata/tata-5530.png' },
    ],
  },
  {
    name: 'Ashok Leyland',
    slug: 'ashok-leyland',
    logo: '/images/truck-brand/ashok-leyland-logo.png',
    description: 'Export-quality Ashok Leyland truck components',
    models: [
      { name: 'Ashok Leyland Dost', image: '/images/Trucks/Ashok Leyland/ashok-leyland-dost.jpg' },
      { name: 'Ashok Leyland 1615', image: '/images/Trucks/Ashok Leyland/ashok-leyland-1615.png' },
      { name: 'Ashok Leyland 2518', image: '/images/Trucks/Ashok Leyland/ashok-leyland-2518.jpg' },
      { name: 'Ashok Leyland 3120', image: '/images/Trucks/Ashok Leyland/ashok-leyland-3120.jpg' },
      { name: 'Ashok Leyland 4018', image: '/images/Trucks/Ashok Leyland/ashok-leyland-4018.png' },
      { name: 'Ashok Leyland AVTR', image: '/images/Trucks/Ashok Leyland/ashok-leyland-avtr.jpg' },
    ],
  },
  {
    name: 'BharatBenz',
    slug: 'bharatbenz',
    logo: '/images/truck-brand/bharat-benz-logo.png',
    description: 'Complete BharatBenz truck parts catalog for export',
    models: [
      { name: 'BharatBenz 1015R', image: '/images/Trucks/Bharat Benz/bharat-benz-1015R.jpg' },
      { name: 'BharatBenz 1217R', image: '/images/Trucks/Bharat Benz/bharat-benz-1217R.jpg' },
      { name: 'BharatBenz 1917R', image: '/images/Trucks/Bharat Benz/bharat-benz-1917R.jpg' },
      { name: 'BharatBenz 1926C', image: '/images/Trucks/Bharat Benz/bharat-benz-1926C.jpg' },
      { name: 'BharatBenz 2832CM', image: '/images/Trucks/Bharat Benz/bharat-benz-2832CM.png' },
      { name: 'BharatBenz 3532CM', image: '/images/Trucks/Bharat Benz/bharat-benz-3532CM.png' },
      { name: 'BharatBenz 3832R', image: '/images/Trucks/Bharat Benz/bharat-benz-3832R.png' },
      { name: 'BharatBenz 5532T', image: '/images/Trucks/Bharat Benz/bharat-benz-5532T.jpg' },
    ],
  },
  {
    name: 'Mahindra',
    slug: 'mahindra',
    logo: '/images/truck-brand/mahindra-logo.png',
    description: 'Genuine Mahindra truck parts and accessories',
    models: [
      { name: 'Mahindra Scorpio', image: '/images/Trucks/Mahindra/mahindra-scorpio.jpg' },
      { name: 'Mahindra Bolero Pickup', image: '/images/Trucks/Mahindra/mahindra-bolero-pick-up.png' },
      { name: 'Mahindra Furio', image: '/images/Trucks/Mahindra/mahindra-furio.jpg' },
      { name: 'Mahindra Blazo', image: '/images/Trucks/Mahindra/mahindra-blazo.jpg' },
    ],
  },
  {
    name: 'Eicher',
    slug: 'eicher',
    logo: '/images/truck-brand/eicher-logo.png',
    description: 'High-quality Eicher truck parts for global markets',
    models: [
      { name: 'Eicher 11.10', image: '/images/Trucks/Eicher/eicher-1110.jpg' },
      { name: 'Eicher 20.16', image: '/images/Trucks/Eicher/eicher-2016.jpg' },
      { name: 'Eicher 25.16', image: '/images/Trucks/Eicher/eicher-2516.png' },
      { name: 'Eicher Jumbo', image: '/images/Trucks/Eicher/eicher-jumbo.png' },
    ],
  },
  {
    name: 'ISUZU',
    slug: 'isuzu',
    logo: '/images/truck-brand/isuzu-logo.png',
    description: 'Complete ISUZU truck parts catalog for export',
    models: [
      { name: 'ISUZU V-Cross', image: '/images/Trucks/ISUZU/isuzu-v-cross.jpg' },
      { name: 'ISUZU NPR', image: '/images/Trucks/ISUZU/isuzu-npr.jpg' },
      { name: 'ISUZU NQR', image: '/images/Trucks/ISUZU/isuzu-nqr.jpg' },
      { name: 'ISUZU FTR', image: '/images/Trucks/ISUZU/isuzu-ftr.jpg' },
    ],
  },
]

export const tractorBrands = [
  { name: 'Farmtrac', logo: '/images/tractor-brand/farmtrac-logo.jpg', description: 'Complete range of genuine Farmtrac tractor parts for export' },
  { name: 'Force', logo: '/images/tractor-brand/force-logo.jpg', description: 'Export-quality Force tractor components' },
  { name: 'John Deere', logo: '/images/tractor-brand/john-deere-logo.png', description: 'Complete range of genuine John Deere tractor parts for export' },
  { name: 'Mahindra', logo: '/images/truck-brand/mahindra-logo.png', description: 'Complete Mahindra tractor parts catalog for export' },
  { name: 'New Holland', logo: '/images/tractor-brand/new-holland-logo.png', description: 'Genuine New Holland tractor parts and accessories' },
  { name: 'SML', logo: '/images/tractor-brand/sml-logo.jpg', description: 'High-quality SML tractor parts for global markets' },
  { name: 'Sonalika', logo: '/images/tractor-brand/Sonalika-logo.jpg', description: 'Complete Sonalika tractor parts catalog for export' },
  { name: 'TAFE', logo: '/images/tractor-brand/tafe-logo.png', description: 'Complete TAFE tractor parts catalog for export' },
]

export const getTruckBrand = (slug) => truckBrands.find((brand) => brand.slug === slug)
