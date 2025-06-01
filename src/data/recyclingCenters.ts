import { RecyclingCentersInfo } from './types';

export const recyclingCenters: RecyclingCentersInfo = {
  'Mumbai': [
    {
      id: 'mum-1',
      name: 'Mumbai Waste Management Center',
      address: '123 Andheri East, Mumbai, Maharashtra 400069',
      phone: '022-2555-0123',
      hours: 'Mon-Sat: 8AM-6PM',
      acceptedItems: ['Electronics', 'Batteries', 'Metal', 'Paper', 'Plastic']
    },
    {
      id: 'mum-2',
      name: 'Dharavi Recycling Center',
      address: '456 Dharavi, Mumbai, Maharashtra 400017',
      phone: '022-2555-0456',
      hours: 'Mon-Sun: 7AM-7PM',
      acceptedItems: ['Plastic', 'Metal', 'Paper', 'Glass']
    }
  ],
  'Delhi': [
    {
      id: 'del-1',
      name: 'Delhi Recycling Hub',
      address: '789 Nehru Place, New Delhi 110019',
      phone: '011-4555-0789',
      hours: 'Mon-Fri: 9AM-5PM',
      acceptedItems: ['Paper', 'Plastic', 'Glass', 'Electronics']
    }
  ],
  'Bangalore': [
    {
      id: 'blr-1',
      name: 'Zolopik',
      address: '58, 22nd Main Rd, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
      phone: '097434 40440',
      hours: 'Tue-Sat: 8AM-4:30PM',
      acceptedItems: ['Electronics', 'Paper', 'Organic', 'Mobile Phones','Plastic Materials']
    },
    {
      id: 'blr-2',
      name: 'Ewaste Hub',
      address: 'No 3, Oppo Hombegowda Ground, Bus Stop, 191/42, 10th Cross, Lakkasandra Extension, Wilson Garden, Bengaluru, Karnataka 560027',
      phone: '090663 19066',
      hours: 'Tue-Sat: 8AM-4:30PM',
      acceptedItems: ['Electronics', 'Batteries', 'Computers', 'Mobile Phones']
    }
  ],
  'Chennai': [
    {
      id: 'chn-1',
      name: 'Chennai Green Center',
      address: '654 Anna Nagar, Chennai 600040',
      phone: '044-2555-0654',
      hours: 'Mon-Sat: 9AM-6PM',
      acceptedItems: ['Metal', 'Electronics', 'Paper', 'Plastic']
    }
  ],
  'Hyderabad': [
    {
      id: 'hyd-1',
      name: 'Hyderabad Recycling Station',
      address: '987 Gachibowli, Hyderabad 500032',
      phone: '040-2555-0987',
      hours: 'Mon-Fri: 7AM-5PM',
      acceptedItems: ['Paper', 'Plastic', 'Metal', 'Glass']
    }
  ]
};