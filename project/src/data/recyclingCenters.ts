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
      name: 'Bangalore E-Waste Center',
      address: '321 Electronic City, Bangalore 560100',
      phone: '080-2555-0321',
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