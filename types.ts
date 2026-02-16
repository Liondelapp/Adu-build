
export interface ADUPlan {
  type: 'Detached' | 'Garage Conversion' | 'Attached' | 'JADU';
  sqft: number;
  estimatedCost: string;
  timeline: string;
  description: string;
  pros: string[];
}

export interface RecommendationResponse {
  plans: ADUPlan[];
  zoningAdvice: string;
  nextSteps: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
}
