import { IRouteProps } from "../library/RotueProp";
import CardpackSelectScreen from "../screens/cardpackSelect/cardpackSelect";
import HomeScreen from "../screens/Home/Home";
import TeamsScreen from "../screens/Teams/Teams";

const routes: IRouteProps[] = [
  {
    name: "home",
    component: HomeScreen,
  },
  {
    name: "teams",
    component: TeamsScreen,
  },
  {
    name: "cardpackSelect",
    component: CardpackSelectScreen,
  },
];

export default routes;
