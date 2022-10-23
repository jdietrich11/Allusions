import React from "react";
import { View, Text } from "react-native";

import Header from "../../helper/header/header";
import { IStackScreenProps } from "../../library/StackScreenProps";
import { rules } from "../../data/rules";
import Rules from "../../helper/rules/rules";

import fastRulesStyles from "./fastRules.styles";

const FastRulesScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation, name, route } = props;
  return (
    <View style={fastRulesStyles.rulesPageContainer}>
      <Header name={name} navigation={navigation} route={route} />
      <View style={fastRulesStyles.rulesContainer}>
        {rules.map((ruleGroup) => (
          <View style={fastRulesStyles.roundContainer}>
            <Text
              style={fastRulesStyles.roundTitleText}
            >{`Round ${ruleGroup.id}`}</Text>
            <Rules
              rules={{
                id: ruleGroup.id,
                rules: ruleGroup.rules,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default FastRulesScreen;
