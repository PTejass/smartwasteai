import { AllLocationsInfo } from './types';

export const locations = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Chennai',
  'Hyderabad'
];

export const locationSpecificInfo: AllLocationsInfo = {
  'Mumbai': {
    'plastic-bottles': {
      disposalMethod: 'Place in blue dry waste bin for recycling.',
      locationNote: 'BMC mandates segregation of dry and wet waste.'
    },
    'paper': {
      disposalMethod: 'Place in dry waste bin or give to local raddiwalas.',
      locationNote: 'Many areas have scheduled raddiwala collection.'
    },
    'batteries': {
      disposalMethod: 'Take to e-waste collection centers or participating electronics stores.',
      specialInstructions: 'Never dispose of batteries in regular waste.'
    },
    'food-waste': {
      disposalMethod: 'Place in green wet waste bin for composting.',
      locationNote: 'Many housing societies have composting units.'
    }
  },
  'Delhi': {
    'plastic-bottles': {
      disposalMethod: 'Blue bin collection for recyclables.',
      locationNote: 'Return eligible bottles to recycling centers.'
    },
    'glass': {
      disposalMethod: 'Place in designated glass recycling bins.',
      locationNote: 'Available at community recycling points.'
    },
    'food-waste': {
      disposalMethod: 'Green bins for organic waste.',
      locationNote: 'NDMC promotes home composting.'
    }
  },
  'Bangalore': {
    'plastic-bottles': {
      disposalMethod: 'Place in dry waste bin on designated collection days.',
      locationNote: 'BBMP enforces strict waste segregation.'
    },
    'electronics': {
      disposalMethod: 'Drop off at authorized e-waste collection centers.',
      locationNote: 'E-waste rules strictly enforced in Karnataka.'
    }
  },
  'Chennai': {
    'plastic-bottles': {
      disposalMethod: 'Place in blue recycling bins.',
      locationNote: 'GCC promotes source segregation.'
    },
    'glass': {
      disposalMethod: 'Separate collection for glass waste.',
      locationNote: 'Special handling required for broken glass.'
    }
  },
  'Hyderabad': {
    'plastic-bottles': {
      disposalMethod: 'Place in designated dry waste bins.',
      locationNote: 'GHMC provides separate collection vehicles.'
    },
    'food-waste': {
      disposalMethod: 'Separate collection for wet waste.',
      locationNote: 'Many areas have biogas plants.'
    }
  }
};