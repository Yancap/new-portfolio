import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowPromptAnimationService {

  constructor() { }

  animate(canvas: HTMLCanvasElement){
    console.log("SSSS");

    const context = canvas.getContext("2d");
    context?.rect(20,20,150,50);
    context?.stroke();
  }
}
