export interface ITimelineData {
  id: number | string;
  label1: string;
  label2?: string;
  title: string;
  company?: string;
  url?: string;
  description?: string;
  tags?: string[];
  image_url?: string;
}

export interface IDevData {
  name: string;
  title: string;
  description: string;
}
