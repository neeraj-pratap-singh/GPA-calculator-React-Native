import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { HeaderComponent } from '../../components';

const Information: React.FC = () => {
  const { t } = useTranslation(['example', 'information']);
  const { Fonts, Gutters, Layout, darkMode: isDark } = useTheme();

  return (
    <>
      <HeaderComponent title={'Information'} showInfoIcon={false} />
      <ScrollView
        style={[Layout.fill, Layout.backgroundColorWhite]} // Add a background color for visibility
        contentContainerStyle={[
          Layout.colCenter,
          Layout.justifyContentBetween,
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
          {/* Add more content here if needed */}
        </View>
      </ScrollView>
    </>
  );
};

export default Information;
