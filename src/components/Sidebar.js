import React from 'react';
import PropTypes from 'prop-types';

import {ScrollView, StyleSheet, View} from 'react-native';
import Accordion from './Accordion';
import Paragraph from './Paragraph';
import RadioButtons from './RadioButtons';
import {IconButton} from 'react-native-paper';
import {theme} from '../core/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAnglesLeft} from '@fortawesome/free-solid-svg-icons/faAnglesLeft';

const Sidebar = ({data, type, icon, iconPosition, title}) => {
  const [isSidebarOpened, setIsSidebarOpened] = React.useState(false);

  const onToggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  const iconPositionFromTop = () => {
    const defaultTop = 44;
    const iconPositionCalc = defaultTop * iconPosition;

    switch (iconPosition) {
      case 1:
        return iconPositionCalc;
      case 2:
        return iconPositionCalc + iconPosition;
      case 3:
        return iconPositionCalc + iconPosition;
      default:
        return defaultTop;
    }
  };

  return (
    <View
      style={
        isSidebarOpened
          ? styles.sidebarWrapperOpened
          : styles.sidebarWrapperClosed
      }
    >
      <View
        style={[
          styles.slideButton,
          isSidebarOpened
            ? styles.sideBarOpenedSlideButton
            : styles.sideBarClosedSlideButton,
          {top: iconPositionFromTop()},
        ]}
      >
        <IconButton
          onPress={onToggleSidebar}
          size={13}
          icon={({size, color}) => {
            return isSidebarOpened ? (
              <FontAwesomeIcon
                icon={faAnglesLeft}
                color={theme.colors.white}
                size={size}
              />
            ) : (
              <FontAwesomeIcon icon={icon} color={theme.colors.white} />
            );
          }}
        />
      </View>

      <View
        style={[
          styles.sideBar,
          isSidebarOpened ? styles.sideBarOpened : styles.sideBarClosed,
        ]}
      >
        <Paragraph
          style={[
            styles.globalTitle,
            type === 'accordion'
              ? {
                  backgroundColor: theme.colors.white,
                  color: theme.colors.secondary,
                }
              : {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.white,
                },
          ]}
        >
          {title}
        </Paragraph>

        <ScrollView>
          {type === 'accordion' ? (
            <Accordion data={data} />
          ) : (
            <RadioButtons data={data} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

Sidebar.defaultProps = {
  type: 'accordion',
  icon: faAnglesLeft,
  iconPosition: 1,
};

Sidebar.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.number,
};
const styles = StyleSheet.create({
  globalTitle: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textAlign: 'left',
    paddingVertical: 10,
    fontSize: 18,
    paddingLeft: 10,
  },
  sidebarWrapperOpened: {
    zIndex: 10000,
  },
  sidebarWrapperClosed: {
    zIndex: 1,
  },
  sideBar: {
    position: 'absolute',
    height: '100%',
    width: 250,
    backgroundColor: theme.colors.background,
    paddingBottom: 20,
    flex: 1,
    top: 0,
  },
  sideBarOpened: {
    left: 0,
  },
  sideBarClosed: {
    left: -250,
    display: 'none',
  },
  slideButton: {
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    left: 280,
    backgroundColor: theme.colors.primary,
  },
  sideBarOpenedSlideButton: {
    left: 250,
  },
  sideBarClosedSlideButton: {
    left: 0,
  },
});

export default Sidebar;
