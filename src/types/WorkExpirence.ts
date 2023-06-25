interface Position {
  date: string;
  post: string;
  description: string;
  mediaLinks?: string;
}

export interface WorkCompany {
  name: string;
  website?: string;
  position: Position[];
}
