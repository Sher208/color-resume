interface PositionItem {
  id: number;
  date: string;
  post: string;
  descriptions: DescriptionItem[];
  mediaLinks?: string[];
}

interface DescriptionItem {
  id: number;
  content: string;
}

export interface WorkCompany {
  id: number;
  name: string;
  website?: string;
  positions: PositionItem[];
}
