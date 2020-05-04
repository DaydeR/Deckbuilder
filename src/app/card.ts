export interface Card {
  name: string;
  mana_cost: string;
  cmc: number;
  type_line: string;
  main_type: string;
  oracle_text: string;
  image_uris: {
	[key: string]: string
  };
  power: number;
  toughness: number;
  loyalty: number;
  count: number[];
}