import { IRouteProps } from "../library/RotueProp";
import BrowseScreen from "../screens/browse/browse";
import CardpackSelectScreen from "../screens/cardpackSelect/cardpackSelect";
import EndGameScreen from "../screens/endGame/endGame";
import FastRulesScreen from "../screens/fastRules/fastRules";
import HomeScreen from "../screens/Home/Home";
import InstructionScreen from "../screens/Instruction/instruction";
import PlayerTurnScreen from "../screens/playerTurn/playerTurn";
import ScoreScreen from "../screens/scores/scores";
import SettingsScreen from "../screens/settings/settings";
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
  {
    name: "rules",
    component: FastRulesScreen,
  },
  {
    name: "browse",
    component: BrowseScreen,
  },
  {
    name: "settings",
    component: SettingsScreen,
  },
];

export default routes;
