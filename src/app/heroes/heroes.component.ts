import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Injector } from "@angular/core";
import { Render } from "./render-react";
import { HeroesContainer } from "./heroes-container";

@Component({
  selector: "app-heroes",
  template: "<div #reactContainer></div>",
  styles: [""]
})
export class HeroesComponent implements OnInit, OnDestroy {
  constructor(private injector: Injector) {}

  @ViewChild("reactContainer")
  reactContainer: ElementRef;

  con = document.getElementById("react-container");

  ngOnInit() {
    Render.init(
      this.injector,
      HeroesContainer,
      this.reactContainer.nativeElement
    );
  }

  ngOnDestroy() {
    Render.unmount(this.reactContainer.nativeElement);
  }
}
