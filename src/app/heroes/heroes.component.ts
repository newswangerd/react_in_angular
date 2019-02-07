import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Injector } from "@angular/core";
import { Render } from "./react/render-react";
import { HeroesContainer } from "./react/heroes-container";

@Component({
  selector: "app-heroes",
  template: "<div #reactContainer></div>",
  styles: [""]
})
export class HeroesComponent implements OnInit, OnDestroy {
  constructor(private injector: Injector) {}

  @ViewChild("reactContainer")
  reactContainer: ElementRef;

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
