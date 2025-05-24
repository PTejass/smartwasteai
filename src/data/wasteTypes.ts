import { WasteType } from './types';

export const wasteTypes: WasteType[] = [
  {
    id: 'plastic-bottles',
    name: 'Plastic Bottles',
    description: 'PET or HDPE bottles used for beverages and household products',
    category: 'recyclable',
    generalDisposal: 'Rinse and place in recycling bin. Remove caps if required.',
    tips: 'Flatten bottles to save space in your recycling bin.'
  },
  {
    id: 'paper',
    name: 'Paper',
    description: 'Newspapers, magazines, office paper, envelopes',
    category: 'recyclable',
    generalDisposal: 'Place in paper recycling bin or mixed recycling depending on local guidelines.',
    tips: 'Remove any plastic windows from envelopes before recycling.'
  },
  {
    id: 'glass',
    name: 'Glass Containers',
    description: 'Bottles and jars made of glass',
    category: 'recyclable',
    generalDisposal: 'Rinse and place in glass recycling bin. Remove lids and caps.',
    tips: 'Don\'t put broken glass in recycling - wrap it and place in general waste.'
  },
  {
    id: 'food-waste',
    name: 'Food Waste',
    description: 'Fruit and vegetable scraps, coffee grounds, eggshells',
    category: 'compostable',
    generalDisposal: 'Place in compost bin or food waste collection if available.',
    tips: 'Avoid putting meat, dairy, or oily foods in home compost bins.'
  },
  {
    id: 'batteries',
    name: 'Batteries',
    description: 'Disposable and rechargeable batteries',
    category: 'hazardous',
    generalDisposal: 'Take to a battery recycling point or hazardous waste collection.',
    tips: 'Tape the terminals of lithium batteries before disposal to prevent fire hazards.'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Phones, computers, televisions, and other electronic devices',
    category: 'hazardous',
    generalDisposal: 'Take to an e-waste recycling center or return to retailer.',
    tips: 'Wipe personal data before disposing of devices with storage.'
  },
  {
    id: 'plastic-bags',
    name: 'Plastic Bags',
    description: 'Grocery bags, produce bags, plastic film',
    category: 'recyclable',
    generalDisposal: 'Return to grocery store collection points. Not accepted in most curbside recycling.',
    tips: 'Reuse bags when possible before recycling them.'
  },
  {
    id: 'cardboard',
    name: 'Cardboard',
    description: 'Shipping boxes, cereal boxes, packaging',
    category: 'recyclable',
    generalDisposal: 'Break down boxes and place in recycling bin.',
    tips: 'Remove any tape, staples, or excessive shipping labels.'
  },
  {
    id: 'light-bulbs',
    name: 'Light Bulbs',
    description: 'Incandescent, CFL, LED, and fluorescent bulbs',
    category: 'hazardous',
    generalDisposal: 'CFLs and fluorescents should be taken to hazardous waste collection. LEDs and incandescents often go in general waste.',
    tips: 'Some hardware stores offer light bulb recycling programs.'
  }
];