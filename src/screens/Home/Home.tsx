import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // <-- add this line
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  const { t } = useTranslation(['example', 'welcome']);
  const { Common, Fonts, Gutters, Layout, darkMode: isDark } = useTheme();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        <Brand height={300} width={300} />
      </View>
      <View
        style={[
          Layout.fill,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding,
        ]}
      >
        <View>
          <Text style={[Fonts.titleRegular]}>{t('welcome:title')}</Text>
          <Text
            style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin]}
          >
            {t('welcome:subtitle')}
          </Text>
          <Text style={[Fonts.textSmall, Fonts.textLight]}>
            {t('welcome:description')}
          </Text>
        </View>

        <View
          style={[
            Layout.row,
            Layout.justifyContentAround,
            Layout.fullWidth,
            Gutters.smallTMargin,
          ]}
        >
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => navigation.navigate("Weighted")}
          >
            <Icon
              name="calculator" // <-- choose appropriate icon name
              size={34}
              color={isDark ? '#A6A4F0' : '#44427D'}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => navigation.navigate("Unweighted")}
          >
            <Icon
              name="calculator-variant" // <-- choose appropriate icon name
              size={34}
              color={isDark ? '#A6A4F0' : '#44427D'}
            />
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => navigation.navigate("Information")}
          >
            <Icon
              name="information" // <-- choose appropriate icon name
              size={34}
              color={isDark ? '#A6A4F0' : '#44427D'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
