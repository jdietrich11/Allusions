import { IRouteProps } from "../library/RotueProp";
import HomeScreen from "../screens/Home/Home";
import TeamsScreen from "../screens/Teams/Teams";

const routes: IRouteProps[] = [
  {
    name: 'home',
    component: HomeScreen
  },
  {
    name: 'teams',
    component: TeamsScreen
  }
]

export default routes;