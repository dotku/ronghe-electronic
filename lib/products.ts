export interface Product {
  id: string;
  name: string;
  category: 'data-cables' | 'wireless-chargers' | 'wall-chargers';
  material: string;
  function: string;
  maxPower: string;
  colors?: string[];
  description?: string;
  image?: string;
}

export const products: Product[] = [
  // Data Cables
  {
    id: 'RH-CA-120',
    name: 'Ultra-thin Flat Data Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-C: 60W/100W/240W, C-L:30W',
    colors: ['Black', 'Pink', 'White', 'Blue', 'Grey'],
    description: 'Ultra-thin flat design for easy storage and tangle-free use'
  },
  {
    id: 'UJ-CA-79',
    name: 'Lanyard Data Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-C:60W, C-L:30W',
    colors: ['Purple', 'Pink', 'Blue', 'White', 'Black']
  },
  {
    id: 'RH-CA-124',
    name: 'Press and Rebound Data Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-C: 60W',
    colors: ['Black', 'White']
  },
  {
    id: 'RH-CA-80',
    name: 'Key Chain Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-L:30W, C-C: 60W',
    colors: ['Black', 'Pink', 'Blue', 'White', 'Purple']
  },
  {
    id: 'RH-CA-74',
    name: 'Key Chain Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-L:30W, C-C: 60W',
    colors: ['White', 'Black', 'Green', 'Blue']
  },
  {
    id: 'RH-CA-72',
    name: 'Lanyard Data Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-C:60W, C-L:30W',
    colors: ['Pink', 'Blue', 'Green', 'White', 'Black']
  },
  {
    id: 'RH-CA-97',
    name: 'USB Data Cable',
    category: 'data-cables',
    material: 'TPE + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-C:5V/3A, A-L:5V/2.4A, C-L:30W, C-C:60W/100W/240W',
    colors: ['Purple', 'Blue', 'Pink']
  },
  {
    id: 'RH-CA-101',
    name: 'USB Data Cable',
    category: 'data-cables',
    material: 'TPE + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-C:5V/3A, A-L:5V/2.4A, C-L:30W, C-C:60W/100W/240W',
    colors: ['Purple', 'Pink', 'Blue']
  },
  {
    id: 'RH-CA-123',
    name: 'Intelligent Power-Off Display Data Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-C: 100W, A-L:15W, C-C: 100W, C-L:30W',
    colors: ['Black', 'White']
  },
  {
    id: 'RH-CA-07',
    name: 'Power Display Zinc Nylon Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-M:5V/2A, A-C:11V/6A, A-L:5V/2.4A, C-L:30W, C-C:100W/240W',
    colors: ['Black', 'Grey']
  },
  {
    id: 'RH-CA-67',
    name: 'Transparent USB Data Cable',
    category: 'data-cables',
    material: 'Aluminum Alloy + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-L:5V/2.4A, A-C:5V/3A, C-L:30W, C-C:60W/100W/240W',
    colors: ['Blue', 'Pink', 'Black', 'White', 'Purple']
  },
  {
    id: 'RH-CA-77',
    name: 'Magnetic Data Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-C:5V/3A, C-C:60W/100W/240W, A-L:5V/2.4A, C-L:30W',
    colors: ['Black', 'Pink', 'Blue', 'Purple']
  },
  {
    id: 'RH-CA-84',
    name: '4 in 1 Power Display Cable',
    category: 'data-cables',
    material: 'Aluminum Alloy + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-C:5V/3A, C-C:60W, A-L:5V/2.4A, C-L:30W',
    colors: ['Black', 'White']
  },
  {
    id: 'XC-CA-05U',
    name: 'Top-Speed Series USB 4.0 Magnetic Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'Charging + 20Gbps/40Gbps/80Gbps',
    maxPower: 'C-C: 240W + 20Gbps + 4K, C-C: 240W + 40Gbps + 8K',
    colors: ['Black']
  },
  {
    id: 'RH-CA-85',
    name: '6 in 1 USB TO TYPE-C & TYPE-C TO Lightning Zinc PD Cable',
    category: 'data-cables',
    material: 'Zinc Alloy + Silicone',
    function: 'Charging + Data Sync',
    maxPower: 'A-C:15W, A-L:12W, C-C:60W/240W, C-L:30W',
    colors: ['Black', 'Purple']
  },
  {
    id: 'RH-CA-96',
    name: 'USB TO TYPE-C & TYPE-C TO Lightning Zinc PD Cable',
    category: 'data-cables',
    material: 'Zinc Alloy + Nylon',
    function: 'Charging + Data Sync',
    maxPower: 'A-C: 15W, A-L:12W, C-L:30W, C-C:60W/240W',
    colors: ['Black', 'White']
  },
  {
    id: 'RH-CA-12',
    name: 'USB C to MagSafe 3 140W Adapter',
    category: 'data-cables',
    material: 'Aluminum',
    function: 'Charging',
    maxPower: '140W'
  },
  {
    id: 'RH-CA-30',
    name: 'USB-C to MagSafe 3 140W Fast Charging Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'Only Charging',
    maxPower: '288V/5A 140W Max',
    colors: ['Black']
  },
  {
    id: 'RH-CA-81',
    name: '2 IN 1 TO C 240W+140W Magsafe 3 Cable',
    category: 'data-cables',
    material: 'Aluminum Alloy + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C TO Magsafe3: 140W Max, C TO C: 240W Max',
    colors: ['Black']
  },
  {
    id: 'XC-CA-05',
    name: 'Top-Speed Series USB 4.0 Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'Charging + 20Gbps/40Gbps/80Gbps',
    maxPower: 'C-C: 240W + 20Gbps + 4K, C-C: 240W + 40Gbps + 8K',
    colors: ['Black']
  },
  {
    id: 'RH-CA-86',
    name: 'USB 4.0 240W Power Display Cable',
    category: 'data-cables',
    material: 'Aluminum Alloy + Nylon',
    function: 'Charging + 40Gbps',
    maxPower: 'C-C:240W',
    colors: ['Black', 'White']
  },
  {
    id: 'XC-CA-11',
    name: 'Top-Speed Series Lightning to DC3.5mm Audio Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'MFI Male to DC Female, Call + in-Line Control + Listening + Music, MFI Male to DC Male, Expand Audio',
    maxPower: '',
    colors: ['Black']
  },
  {
    id: 'RH-CA-27',
    name: 'Top-Speed Series USB-C to DC3.5mm Audio Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'C Male to DC Female, Call + in-Line Control + Listening + Music, C Male to DC Male, Expand Audio',
    maxPower: '',
    colors: ['Black', 'White']
  },
  {
    id: 'RH-CA-122',
    name: 'Power Display Data Cable',
    category: 'data-cables',
    material: 'Zinc + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'A-C: 66W, A-L: 12W, C-C: 100W, C-L: 30W',
    colors: ['Black', 'White']
  },
  {
    id: 'RH-CA-20',
    name: '3 in 1 Retractable USB Data Cable',
    category: 'data-cables',
    material: 'ABS Cover + Aluminum + TPE Cable',
    function: 'Charging + 480Mbps',
    maxPower: 'A-M:5V/2A, A-C:5V/3A, A-L:5V/2.4A, A-M:5V/2A, A-C:11V/6A, A-L:5V/2.4A, C-M:+ C + L and C-C + C, C-C + L',
    colors: ['Black', 'White', 'Pink', 'Blue', 'Purple']
  },
  {
    id: 'RH-CA-21',
    name: '3 in 1 Retractable USB Data Cable',
    category: 'data-cables',
    material: 'ABS Cover + Aluminum + TPE Cable',
    function: 'Charging + 480Mbps',
    maxPower: 'A-M:5V/2A, A-C:5V/3A, A-L:5V/2.4A, A-M:5V/2A, A-C:11V/6A, A-L:5V/2.4A, C-M:+ C + L and C-C + C, C-C + L',
    colors: ['Black', 'White', 'Pink', 'Blue', 'Purple']
  },
  {
    id: 'RH-CA-83',
    name: '3 in 1 Silicone Retractable Cable',
    category: 'data-cables',
    material: 'Silicone Cover + TPE',
    function: 'Charging + 480Mbps',
    maxPower: 'A-M:5V/2A, A-C:5V/3A, A-L:5V/2.4A, A-M:5V/2A, A-C:11V/6A, A-L:5V/2.4A, C-M:+ C + L and C-C + C, C-C + L',
    colors: ['Blue', 'White', 'Purple']
  },
  {
    id: 'RH-CA-90',
    name: '5 in 1 Storage Box With Retractable Cable',
    category: 'data-cables',
    material: 'ABS + Aluminum + TPE + PC',
    function: 'Cable Storage/Charging/Memory Card/Adapter/Data Transmission, All in One Multifunction Storage Box',
    maxPower: 'A-M:5V/2A, A-C:5V/3A, A-L:5V/2.4A, C-C:60W, C-L:30W, C-M:10W',
    colors: ['Red', 'Black', 'Orange', 'Blue', 'Green', 'Purple']
  },
  {
    id: 'RH-CA-88',
    name: '2 in 1 C TO C+ C 100W Data Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-C1/C2:100W Max, C-C1 + C2:100W Max (Intelligent Allocation)',
    colors: ['Black', 'Blue', 'Grey']
  },
  {
    id: 'RH-CA-89',
    name: '2 in 1 C TO C+ L 100W Data Cable',
    category: 'data-cables',
    material: 'Aluminum + Nylon',
    function: 'Charging + 480Mbps',
    maxPower: 'C-C:100W Max, C-L:30W Max, C-C + L:9V/3A(Intelligent Allocation)',
    colors: ['Black', 'Blue', 'Grey']
  },
  {
    id: 'RH-CA-125',
    name: 'Adapter Series',
    category: 'data-cables',
    material: 'Aluminum',
    function: 'Charging + 480Mbps + Supports USB Flash Drive Reading',
    maxPower: '',
    colors: ['Black', 'White']
  },

  // Wireless Chargers
  {
    id: 'YC-WH113',
    name: '25W Qi2.2/15W Qi2.1 Phone Wireless Charger',
    category: 'wireless-chargers',
    material: 'Aluminum + PC/Aluminum + Glass',
    function: 'Wireless Charging',
    maxPower: '15W/25W',
    colors: ['Black', 'Pink', 'Grey', 'White', 'Purple', 'Gold']
  },
  {
    id: 'YC-WH112',
    name: '25W Qi2.2/15W Qi2.1 Car Wireless Charger with Retractable Cable',
    category: 'wireless-chargers',
    material: 'Plastic Shell + PC + 1M TPE Cable',
    function: 'Wireless Charging',
    maxPower: '15W/25W',
    colors: ['Black', 'Grey']
  },
  {
    id: 'YC-WH006-A',
    name: '15W Car Wireless Charger With Retractable Cable',
    category: 'wireless-chargers',
    material: 'PC + Aluminum + Glass',
    function: 'Wireless Charging',
    maxPower: '15W',
    colors: ['Black', 'Purple']
  },
  {
    id: 'YC-WH114',
    name: '25W Qi2.2 Car Wireless Charger',
    category: 'wireless-chargers',
    material: 'PC',
    function: 'Wireless Charging',
    maxPower: '15W/25W'
  },
  {
    id: 'YC-WH046',
    name: '2 in 1 Retractable Cable with iWatch Charger',
    category: 'wireless-chargers',
    material: 'ABS + Aluminum Alloy',
    function: 'Charging for Mobile Phones and Apple Watch',
    maxPower: 'C-C: 100W, C-L: 30W, iWatch 2.5W',
    colors: ['Green', 'White', 'Black', 'Purple', 'Blue']
  },
  {
    id: 'YC-WH091',
    name: '25W Qi2.2/15W Qi2.1 Folding Wireless Charger With Fan Cooling',
    category: 'wireless-chargers',
    material: 'PC + Aluminum + Glass',
    function: 'Wireless Charging, Built in fan fast cooling, improve charging efficiency',
    maxPower: '15/25W',
    colors: ['Black', 'Silver', 'White']
  },
  {
    id: 'YC-WH092B',
    name: '25W Qi2.2/15W Qi2.1 Car Wireless Charger with With Fan Cooling',
    category: 'wireless-chargers',
    material: 'PC + Aluminum + Glass',
    function: 'Wireless Charging, Built in fan fast cooling, improve charging efficiency',
    maxPower: '15W/25W',
    colors: ['White', 'Black', 'Grey']
  },
  {
    id: 'YC-WH092A',
    name: '25W Qi2.2/15W Qi2.1 Car Wireless Charger with Fan Cooling',
    category: 'wireless-chargers',
    material: 'PC + Aluminum + Glass',
    function: 'Wireless Charging Built in fan fast cooling, improve charging efficiency',
    maxPower: '15W/25W',
    colors: ['Black', 'White']
  },
  {
    id: 'YC-WH037',
    name: '3 IN 1 Watch Wireless Charger',
    category: 'wireless-chargers',
    material: 'ABS + Aluminum + Nylon',
    function: 'Wireless Charging',
    maxPower: 'C-W: 2.5W, C-C: 100W, C-L:27W'
  },
  {
    id: 'YC-WH040',
    name: '2 IN 1 Watch Wireless Charger',
    category: 'wireless-chargers',
    material: 'ABS + Aluminum + Nylon',
    function: 'Wireless Charging',
    maxPower: 'C-W: 2.5W/5W, C-C:100W'
  },
  {
    id: 'YC-WH121',
    name: '5W iWatch Wireless Charger',
    category: 'wireless-chargers',
    material: 'Aluminum + PC + Nylon',
    function: 'Wireless Charging',
    maxPower: '5W'
  },
  {
    id: 'YC-WH068',
    name: '2 IN 1 Watch Wireless Charger',
    category: 'wireless-chargers',
    material: 'PC + Aluminum + Nylon',
    function: 'Wireless Charging',
    maxPower: 'C-W: 2.5W, C-C: 60W'
  },
  {
    id: 'YC-WH069',
    name: '2 IN 1 Samsung watch Wireless Charger',
    category: 'wireless-chargers',
    material: 'PC + Aluminum + Nylon',
    function: 'Wireless Charging',
    maxPower: 'C-W: 2.5W, C-C: 60W, C-L: 27W'
  },
  {
    id: 'YC-WH022A',
    name: '15W Qi2 2 IN 1 Folding Wireless Charger',
    category: 'wireless-chargers',
    material: 'Aluminum + PC',
    function: 'Wireless Charging',
    maxPower: '15W for Mobile Phone, 5W for Airpods',
    colors: ['Black', 'White', 'Grey']
  },
  {
    id: 'YC-WH022B',
    name: '15W Qi2 2 IN 1 Folding Wireless Charger',
    category: 'wireless-chargers',
    material: 'Aluminum + PC',
    function: 'Wireless Charging',
    maxPower: '15W for Mobile Phone, 2.5W for Apple Watch'
  },
  {
    id: 'YC-DB024',
    name: '2.5W iWatch Wireless Charger With Cable',
    category: 'wireless-chargers',
    material: 'PC + ABS + Silicone + TPE',
    function: 'Wireless Charging',
    maxPower: 'C-W: 2.5W, C-C:60W'
  },
  {
    id: 'YC-WH070',
    name: 'Zinc Apple Watch Charger',
    category: 'wireless-chargers',
    material: 'Zinc',
    function: 'Wireless Charging',
    maxPower: '2.5W'
  },
  {
    id: 'YC-WH119',
    name: '5W Watch Wireless Charger With Retractable Cable',
    category: 'wireless-chargers',
    material: 'PC + Aluminum',
    function: 'Wireless Charging',
    maxPower: '5W'
  },
  {
    id: 'HB-80A',
    name: 'Magnetic Phone Folding Holder',
    category: 'wireless-chargers',
    material: 'Zinc',
    function: 'Phone Bracket',
    maxPower: 'N/A'
  },
  {
    id: 'HB-90B',
    name: 'Magnetic Phone Folding Holder',
    category: 'wireless-chargers',
    material: 'Zinc + ABS + PC',
    function: 'Phone Bracket',
    maxPower: 'N/A'
  },
  {
    id: 'HB-90C',
    name: 'Magnetic Phone Folding Holder',
    category: 'wireless-chargers',
    material: 'Zinc + ABS + PC',
    function: 'Phone Bracket',
    maxPower: 'N/A'
  },

  // Wall Chargers
  {
    id: 'TC-108CA65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Black']
  },
  {
    id: 'TC-108C65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Black']
  },
  {
    id: 'TC-097CA20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-097CA30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-097CC45G',
    name: '45W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '45W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-097CC65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-097CC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-104AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-106AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-106C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['Black']
  },
  {
    id: 'TC-106C25G',
    name: '25W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '25W',
    colors: ['Black']
  },
  {
    id: 'TC-106C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['Black']
  },
  {
    id: 'TC-087AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['Blue', 'Green', 'Pink', 'White', 'Purple', 'Light Blue']
  },
  {
    id: 'TC-087AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['Blue', 'Green', 'Pink', 'White', 'Purple', 'Light Blue']
  },
  {
    id: 'TC-087AC35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W',
    colors: ['Blue', 'Green', 'Pink', 'White', 'Purple', 'Light Blue']
  },
  {
    id: 'TC-087C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W'
  },
  {
    id: 'TC-087C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-087C35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W'
  },
  {
    id: 'TC-087C65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Green', 'White', 'Blue', 'Pink']
  },
  {
    id: 'TC-087CC65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W'
  },
  {
    id: 'TC-087CA65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W'
  },
  {
    id: 'TC-107AC30G',
    name: '30W Wall Charger with Cable',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-107AC45G',
    name: '45W Wall Charger with Cable',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '45W'
  },
  {
    id: 'TC-107CC45G',
    name: '45W Wall Charger with Cable',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '45W'
  },
  {
    id: 'TC-107CA65G',
    name: '65W Wall Charger with Cable',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W'
  },
  {
    id: 'TC-107C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-107C45G',
    name: '45W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '45W'
  },
  {
    id: 'TC-107AC45G',
    name: '45W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '45W'
  },
  {
    id: 'TC-107CC45G',
    name: '45W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '45W'
  },
  {
    id: 'TC-095C65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Pink', 'White', 'Green', 'Blue']
  },
  {
    id: 'TC-095CC65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W'
  },
  {
    id: 'TC-095AC65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Pink', 'White', 'Green', 'Blue']
  },
  {
    id: 'TC-095CA65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Pink', 'White', 'Green', 'Blue']
  },
  {
    id: 'TC-101AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['Blue', 'Green', 'Purple', 'White', 'Grey', 'Light Blue']
  },
  {
    id: 'TC-101AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['Blue', 'Green', 'Purple', 'White', 'Grey', 'Light Blue']
  },
  {
    id: 'TC-101AC35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W',
    colors: ['Blue', 'Green', 'Purple', 'White', 'Grey', 'Light Blue']
  },
  {
    id: 'TC-101C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W'
  },
  {
    id: 'TC-101C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-101C35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W'
  },
  {
    id: 'TC-102AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['Green', 'Blue', 'Pink', 'Purple', 'White', 'Grey']
  },
  {
    id: 'TC-102AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['Green', 'Blue', 'Pink', 'Purple', 'White', 'Grey']
  },
  {
    id: 'TC-102AC35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W',
    colors: ['Green', 'Blue', 'Pink', 'Purple', 'White', 'Grey']
  },
  {
    id: 'TC-102C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W'
  },
  {
    id: 'TC-102C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-102C35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W'
  },
  {
    id: 'TC-105C65G',
    name: '65W Super Mini Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['Black', 'Orange']
  },
  {
    id: 'TC-92C30G',
    name: '30W Super Mini Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White', 'Yellow']
  },
  {
    id: 'TC-92C35G',
    name: '35W Super Mini Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W',
    colors: ['White', 'Yellow']
  },
  {
    id: 'TC-082AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['Pink', 'Blue', 'Purple', 'Green', 'White', 'Light Blue']
  },
  {
    id: 'TC-082AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['Pink', 'Blue', 'Purple', 'Green', 'White', 'Light Blue']
  },
  {
    id: 'TC-082AC35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W',
    colors: ['Pink', 'Blue', 'Purple', 'Green', 'White', 'Light Blue']
  },
  {
    id: 'TC-082C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W'
  },
  {
    id: 'TC-082C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-082C35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W'
  },
  {
    id: 'TC-095AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['Pink', 'Blue', 'Purple', 'Green', 'White', 'Light Blue']
  },
  {
    id: 'TC-095AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['Pink', 'Blue', 'Purple', 'Green', 'White', 'Light Blue']
  },
  {
    id: 'TC-095AC35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W',
    colors: ['Pink', 'Blue', 'Purple', 'Green', 'White', 'Light Blue']
  },
  {
    id: 'TC-095C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W'
  },
  {
    id: 'TC-095C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W'
  },
  {
    id: 'TC-095C35G',
    name: '35W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '35W'
  },
  {
    id: 'TC-075CA100G',
    name: '100W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '100W',
    colors: ['Black', 'White']
  },
  {
    id: 'TC-075CA140G',
    name: '140W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '140W',
    colors: ['Black', 'White']
  },
  {
    id: 'TC-069AC65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-069CA65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-069C65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-069CC65G',
    name: '65W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '65W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-103AC20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-103AC30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-103C20G',
    name: '20W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '20W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-103C30G',
    name: '30W Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White', 'Black']
  },
  {
    id: 'TC-064CH65',
    name: '65W Wall Charger with HDMI',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging + HDMI 4K/60Hz HD Audio/Video Projection',
    maxPower: '65W',
    colors: ['White', 'Black']
  },
  {
    id: 'P30D',
    name: '30W PD Wall Charger',
    category: 'wall-chargers',
    material: 'Fireproof PC',
    function: 'Fast Charging',
    maxPower: '30W',
    colors: ['White']
  }
];

export function getProductsByCategory(category: 'data-cables' | 'wireless-chargers' | 'wall-chargers') {
  return products.filter(p => p.category === category);
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
