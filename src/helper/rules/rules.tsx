import React from "react";
import { View, Text } from "react-native";
import { RulesInt } from "../interfaces/interfaces";

import { rulesStyles } from "./rules.styles";

const Rules: React.FC<RulesInt> = (props) => {
  const { rules } = props.rules;
  return (
    <View style={rulesStyles.rulesContainer}>
      {rules.map((rule) => (
        <View style={rulesStyles.rule}>
          <Text style={rulesStyles.bltPoint}>x</Text>
          <Text style={rulesStyles.ruleText}>{rule}</Text>
        </View>
      ))}
    </View>
  );
};

export default Rules;
