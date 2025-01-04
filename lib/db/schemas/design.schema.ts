export interface SuggestedItem {
  id: string;
  name: string;
  category?: string;
}

export interface DesignSchema {
  pillars: SuggestedItem[];
  categories: Record<string, SuggestedItem[]>;
  activities: Record<string, SuggestedItem[]>;
}