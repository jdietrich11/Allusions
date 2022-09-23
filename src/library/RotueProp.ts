import { IStackScreenProps } from "./StackScreenProps";

export interface IRouteProps {
  component: React.FunctionComponent<IStackScreenProps>;
  name: string;
}