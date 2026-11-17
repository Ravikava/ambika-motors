// Brand data for the home brands tabs and the brand pages (brands, logos, descriptions and truck models)
//
// Images are WebP, trimmed to the subject on a white or transparent background, at twice the size the site
// shows them: truck photos up to 800 × 400 px, logos up to 700 × 240 px. For a new photo or logo, keep it close
// to those sizes (a few tens of KB) so the pages stay fast; JPG or PNG files work too.

export const partsBrands = [
  { name: 'Valvoline', logo: '/images/part_brand/valvoline-logo.webp', description: 'High-performance Valvoline lubricants and engine oils' },
  { name: 'Valeo', logo: '/images/part_brand/valeo-logo.webp', description: 'Premium Valeo Clutches, assemblies and components' },
  { name: 'LUK Clutches', logo: '/images/part_brand/luk-clutches-logo.webp', description: 'Reliable LUK Clutches assemblies and components' },
  { name: 'Wabco', logo: '/images/part_brand/wabco-logo.webp', description: 'Advanced Wabco vehicle control systems and parts' },
  { name: 'Delux Bearing', logo: '/images/part_brand/delux-bearing-logo.webp', description: 'Durable Delux Bearing products for various vehicles' },
  { name: 'TVS-Girling', logo: '/images/part_brand/tvs-girling-logo.webp', description: 'Quality TVS-Girling components and spare parts' },
  { name: 'emmbros AXLE', logo: '/images/part_brand/emmbros-logo.webp', description: 'Precision Emmbros Axle assemblies and solutions' },
  { name: 'Meritor', logo: '/images/part_brand/meritor-logo.webp', description: 'Renowned Meritor axles and vehicular drivetrain parts' },
  { name: 'Everest Genuine Parts', logo: '/images/part_brand/everest-logo.webp', description: 'Genuine Everest replacement and maintenance parts' },
  { name: 'Remsons', logo: '/images/part_brand/remsons-logo.webp', description: 'Reliable Remsons cables and control systems' },
  { name: 'Fras-le (ASK)', logo: '/images/part_brand/ask-fras-le-logo.webp', description: 'Trusted Fras-le (ASK) brake lining and friction materials' },
  { name: 'Toyota Genuine Parts', logo: '/images/part_brand/toyota-genuine-parts-logo.webp', description: 'Genuine Toyota replacement and maintenance parts' },
  { name: 'Ford Parts', logo: '/images/part_brand/ford-logo.webp', description: 'Trusted Ford replacement and maintenance parts' },
  { name: 'Royal Enfield', logo: '/images/part_brand/royal-enfield-logo.webp', description: 'Trusted Royal Enfield replacement and maintenance parts' },
]

export const truckBrands = [
  {
    name: 'Tata',
    slug: 'tata',
    logo: '/images/truck-brand/tata-logo.webp',
    description: 'Complete range of genuine Tata truck parts for export',
    models: [
      { name: 'Tata Ace', image: '/images/Trucks/Tata/tata-ace.webp' },
      { name: 'Tata 407', image: '/images/Trucks/Tata/tata-407.webp' },
      { name: 'Tata 709', image: '/images/Trucks/Tata/tata-709.webp' },
      { name: 'Tata 909', image: '/images/Trucks/Tata/tata-909.webp' },
      { name: 'Tata 1109', image: '/images/Trucks/Tata/tata-1109.webp' },
      { name: 'Tata 1613', image: '/images/Trucks/Tata/tata-1613.webp' },
      { name: 'Tata 2518', image: '/images/Trucks/Tata/tata-2518.webp' },
      { name: 'Tata 3118', image: '/images/Trucks/Tata/tata-3118.webp' },
      { name: 'Tata Signa', image: '/images/Trucks/Tata/tata-5530-signa.webp' },
      { name: 'Tata 5530 Prima', image: '/images/Trucks/Tata/tata-5530.webp' },
    ],
  },
  {
    name: 'Ashok Leyland',
    slug: 'ashok-leyland',
    logo: '/images/truck-brand/ashok-leyland-logo.webp',
    description: 'Export-quality Ashok Leyland truck components',
    models: [
      { name: 'Ashok Leyland Dost', image: '/images/Trucks/Ashok Leyland/ashok-leyland-dost.webp' },
      { name: 'Ashok Leyland 1615', image: '/images/Trucks/Ashok Leyland/ashok-leyland-1615.webp' },
      { name: 'Ashok Leyland 2518', image: '/images/Trucks/Ashok Leyland/ashok-leyland-2518.webp' },
      { name: 'Ashok Leyland 3120', image: '/images/Trucks/Ashok Leyland/ashok-leyland-3120.webp' },
      { name: 'Ashok Leyland 4018', image: '/images/Trucks/Ashok Leyland/ashok-leyland-4018.webp' },
      { name: 'Ashok Leyland AVTR', image: '/images/Trucks/Ashok Leyland/ashok-leyland-avtr.webp' },
    ],
  },
  {
    name: 'BharatBenz',
    slug: 'bharatbenz',
    logo: '/images/truck-brand/bharat-benz-logo.webp',
    description: 'Complete BharatBenz truck parts catalog for export',
    models: [
      { name: 'BharatBenz 1015R', image: '/images/Trucks/Bharat Benz/bharat-benz-1015R.webp' },
      { name: 'BharatBenz 1217R', image: '/images/Trucks/Bharat Benz/bharat-benz-1217R.webp' },
      { name: 'BharatBenz 1917R', image: '/images/Trucks/Bharat Benz/bharat-benz-1917R.webp' },
      { name: 'BharatBenz 1926C', image: '/images/Trucks/Bharat Benz/bharat-benz-1926C.webp' },
      { name: 'BharatBenz 2832CM', image: '/images/Trucks/Bharat Benz/bharat-benz-2832CM.webp' },
      { name: 'BharatBenz 3532CM', image: '/images/Trucks/Bharat Benz/bharat-benz-3532CM.webp' },
      { name: 'BharatBenz 3832R', image: '/images/Trucks/Bharat Benz/bharat-benz-3832R.webp' },
      { name: 'BharatBenz 5532T', image: '/images/Trucks/Bharat Benz/bharat-benz-5532T.webp' },
    ],
  },
  {
    name: 'Mahindra',
    slug: 'mahindra',
    logo: '/images/truck-brand/mahindra-logo.webp',
    description: 'Genuine Mahindra truck parts and accessories',
    models: [
      { name: 'Mahindra Scorpio', image: '/images/Trucks/Mahindra/mahindra-scorpio.webp' },
      { name: 'Mahindra Bolero Pickup', image: '/images/Trucks/Mahindra/mahindra-bolero-pick-up.webp' },
      { name: 'Mahindra Furio', image: '/images/Trucks/Mahindra/mahindra-furio.webp' },
      { name: 'Mahindra Blazo', image: '/images/Trucks/Mahindra/mahindra-blazo.webp' },
    ],
  },
  {
    name: 'Eicher',
    slug: 'eicher',
    logo: '/images/truck-brand/eicher-logo.webp',
    description: 'High-quality Eicher truck parts for global markets',
    models: [
      { name: 'Eicher 11.10', image: '/images/Trucks/Eicher/eicher-1110.webp' },
      { name: 'Eicher 20.16', image: '/images/Trucks/Eicher/eicher-2016.webp' },
      { name: 'Eicher 25.16', image: '/images/Trucks/Eicher/eicher-2516.webp' },
      { name: 'Eicher Jumbo', image: '/images/Trucks/Eicher/eicher-jumbo.webp' },
    ],
  },
  {
    name: 'ISUZU',
    slug: 'isuzu',
    logo: '/images/truck-brand/isuzu-logo.webp',
    description: 'Complete ISUZU truck parts catalog for export',
    models: [
      { name: 'ISUZU V-Cross', image: '/images/Trucks/ISUZU/isuzu-v-cross.webp' },
      { name: 'ISUZU NPR', image: '/images/Trucks/ISUZU/isuzu-npr.webp' },
      { name: 'ISUZU NQR', image: '/images/Trucks/ISUZU/isuzu-nqr.webp' },
      { name: 'ISUZU FTR', image: '/images/Trucks/ISUZU/isuzu-ftr.webp' },
    ],
  },
]

export const tractorBrands = [
  { name: 'Farmtrac', logo: '/images/tractor-brand/farmtrac-logo.webp', description: 'Complete range of genuine Farmtrac tractor parts for export' },
  { name: 'Force', logo: '/images/tractor-brand/force-logo.webp', description: 'Export-quality Force tractor components' },
  { name: 'John Deere', logo: '/images/tractor-brand/john-deere-logo.webp', description: 'Complete range of genuine John Deere tractor parts for export' },
  { name: 'Mahindra', logo: '/images/truck-brand/mahindra-logo.webp', description: 'Complete Mahindra tractor parts catalog for export' },
  { name: 'New Holland', logo: '/images/tractor-brand/new-holland-logo.webp', description: 'Genuine New Holland tractor parts and accessories' },
  { name: 'SML', logo: '/images/tractor-brand/sml-logo.webp', description: 'High-quality SML tractor parts for global markets' },
  { name: 'Sonalika', logo: '/images/tractor-brand/Sonalika-logo.webp', description: 'Complete Sonalika tractor parts catalog for export' },
  { name: 'TAFE', logo: '/images/tractor-brand/tafe-logo.webp', description: 'Complete TAFE tractor parts catalog for export' },
]

export const getTruckBrand = (slug) => truckBrands.find((brand) => brand.slug === slug)
