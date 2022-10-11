import { IRouteProps } from "../library/RotueProp";
import CardpackSelectScreen from "../screens/cardpackSelect/cardpackSelect";
import EndGameScreen from "../screens/endGame/endGame";
import HomeScreen from "../screens/Home/Home";
import InstructionScreen from "../screens/Instruction/instruction";
import PlayerTurnScreen from "../screens/playerTurn/playerTurn";
import ScoreScreen from "../screens/scores/scores";
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
  {
    name: "instruction",
    component: InstructionScreen,
  },
  {
    name: "playerTurn",
    component: PlayerTurnScreen,
  },
  {
    name: "scores",
    component: ScoreScreen,
  },
  {
    name: "endGame",
    component: EndGameScreen,
  },
];

export default routes;
