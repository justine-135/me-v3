interface DetailInfo {
  type: 1 | 2;
  text: string;
}

export interface SectionDetailArrList {
  title?: string;
  subtitle?: string;
  year?: string;
  detail: DetailInfo[];
}
