import * as React from "react";
import { Hero } from "../hero";

import { Injector } from "@angular/core";
import { HeroService } from "../hero.service";
import { Heroes } from "./heroes-view";

interface IProps {
  injector: Injector;
}

interface IState {
  heroes: Hero[];
}

export class HeroesContainer extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { heroes: [] };

    // window.setInterval(() => console.log("STILL ALIVE"), 1000);
  }

  heroService: HeroService;

  componentDidMount() {
    this.heroService = this.props.injector.get(HeroService);

    this.getHeroes();
  }

  componentWillUnmount() {
    console.log("UNMOUNTY");
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.setState({ heroes: heroes });
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      const heroes = this.state.heroes;
      heroes.push(hero);
      this.setState({ heroes: heroes });
    });
  }

  delete(hero: Hero): void {
    const heroes = this.state.heroes.filter(h => h !== hero);
    this.setState({ heroes: heroes });
    this.heroService.deleteHero(hero).subscribe();
  }

  render() {
    return (
      <Heroes
        heroes={this.state.heroes}
        addHero={i => this.add(i)}
        removeHero={i => this.delete(i)}
      />
    );
  }
}
