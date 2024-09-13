import fs from 'fs';
import axios from 'axios';
import { states } from './items';

export function formatName(name: string): string {
  return name.replace(/ /g, '%20');
}

export async function getItemPrice(name: string, state): Promise<number> {
  const nm = `${name} (${states[state]})`
  const { data } = await axios.get(`http://csgobackpack.net/api/GetItemPrice/?currency=PLN&id=${formatName(nm)}&time=7&icon=1`);
  return data.average_price;
}