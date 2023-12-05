import { Injectable } from '@angular/core';
import { asciiArtUppercaseLetters } from './ascii-art-text-data';

@Injectable({
  providedIn: 'root'
})
export class AsciiArtTextService {
  public asciiArtDict: {[key: string]: string} = asciiArtUppercaseLetters
  constructor() { }

  public getAsciiArtText(text: string) {
    const charArray = text.toUpperCase().split("")
    const textAsciiArtArray = [];

    for (const char of charArray) {
      textAsciiArtArray.push(this.asciiArtDict[char])
    }
    return textAsciiArtArray
  }
}
