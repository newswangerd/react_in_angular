import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router } from "@angular/router";
import { InjectorContext } from "./injector-context";
import { Link } from "./link";

interface IProps {
  heroes: any[];
  addHero: (hero) => void;
  removeHero: (hero) => void;
}

interface IState {
  newHero: string;
}

export class Heroes extends React.Component<IProps, IState> {
  router: Router;

  constructor(props) {
    super(props);
    this.state = {
      newHero: ""
    };
  }

  render() {
    return (
      <div className="heroes-view-wrapper">
        <h2>My Heroes</h2>

        <div>
          <label>
            Hero name:
            <input onChange={e => this.setState({ newHero: e.target.value })} />
          </label>
          <button onClick={() => this.props.addHero(this.state.newHero)}>
            add
          </button>
        </div>

        <ul className="heroes">
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id}>
                <Link to={"/detail/" + hero.id}>
                  <span className="badge">{hero.id}</span> {hero.name}
                </Link>
                <button
                  className="delete"
                  title="delete hero"
                  onClick={() => this.props.removeHero(hero)}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// export class HeroesView {
//   static init(heroes, injector, addHero, removeHero) {
//     ReactDOM.render(
//       <InjectorContext.Provider value={{ injector: injector }}>
//         <Heroes heroes={heroes} addHero={addHero} removeHero={removeHero} />
//       </InjectorContext.Provider>,
//
//       document.getElementById("react-container")
//     );
//   }
// }
