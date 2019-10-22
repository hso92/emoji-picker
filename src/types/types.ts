//===============================
// @Types
//===============================
export type TYPE_EMOJI = {
  emoji: string;
  category: string;
  ja: string;
  en: string;
  unicode: string;
};
export type TYPE_INITIAL_STATE = {
  data: boolean;
  payload?: TYPE_EMOJI[];
  text?:string;
};
export type TYPE_INITIAL_TYPE = {
  type?: string;
  payload: Partial<TYPE_EMOJI[]>;
  text?: string;
};
