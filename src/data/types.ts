export interface WasteType {
  id: string;
  name: string;
  description: string;
  category: 'recyclable' | 'compostable' | 'hazardous' | 'general';
  generalDisposal: string;
  tips?: string;
}

export interface LocationWasteInfo {
  disposalMethod?: string;
  locationNote?: string;
  specialInstructions?: string;
}

export interface LocationSpecificInfo {
  [wasteId: string]: LocationWasteInfo;
}

export interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  acceptedItems: string[];
}

export interface AllLocationsInfo {
  [location: string]: LocationSpecificInfo;
}

export interface RecyclingCentersInfo {
  [location: string]: RecyclingCenter[];
}