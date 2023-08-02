import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

const Weighted: React.FC = () => {
  const { t } = useTranslation(['example', 'information']);
  const { Fonts, Gutters, Layout, darkMode: isDark } = useTheme();

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
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding,
        ]}
      >
        <View>
          <Text style={[Fonts.titleRegular]}>{t('information:title')}</Text>
          <Text
            style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin]}
          >
            {t('information:subtitle')}
          </Text>
          <Text style={[Fonts.textSmall, Fonts.textLight]}>
            {t('information:description')}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Weighted;
