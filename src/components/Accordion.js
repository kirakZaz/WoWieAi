import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons/faChevronUp';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';
import {faCircleCheck as faCircleCheckRegular} from '@fortawesome/free-regular-svg-icons';
import {theme} from '../core/theme';
import _ from 'lodash';

const Accordion = ({data}) => {
  const [list, setList] = React.useState(data);
  const [expanded, setExpanded] = React.useState(null);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = index => () => {
    if (index === expanded) {
      setExpanded(null);
      return;
    }

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(index);
  };

  const onClick = (index, indexGlobal) => {
    const updatedData = list.map((mappedItem, mappedIndex) => {
      if (indexGlobal === mappedIndex) {
        const u = mappedItem.data.map((dataItem, dataIndex) => {
          return dataIndex === index
            ? {
                ...mappedItem.data[index],
                value: !mappedItem.data[index].value,
              }
            : {...mappedItem.data[dataIndex]};
        });

        return {...mappedItem, data: [...u]};
      } else {
        return {...mappedItem};
      }
    });

    setList(updatedData);
  };

  return list.map((itemGlobal, indexGlobal) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.row}
          onPress={toggleExpand(indexGlobal)}
        >
          <Text style={[styles.title, styles.font]}>{itemGlobal.title}</Text>
          <Text style={styles.iconArrow}>
            {expanded === indexGlobal ? (
              <FontAwesomeIcon
                color={theme.colors.white}
                size={12}
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                color={theme.colors.white}
                size={12}
                icon={faChevronDown}
              />
            )}
          </Text>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {expanded === indexGlobal && (
          <ScrollView>
            <FlatList
              data={itemGlobal.data}
              numColumns={1}
              scrollEnabled={false}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.childRow,
                        styles.button,
                        item.value ? styles.btnActive : styles.btnInActive,
                      ]}
                      onPress={() => onClick(index, indexGlobal)}
                    >
                      <Text style={[styles.innerText, styles.itemInActive]}>
                        {_.startCase(item.key)}
                      </Text>

                      {item.value ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          color={theme.colors.primary}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          onPress={() => {}}
                          color={theme.colors.secondary}
                        />
                      )}
                    </TouchableOpacity>
                    <View style={styles.childHr} />
                  </View>
                );
              }}
            />
          </ScrollView>
        )}
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
  },
  iconArrow: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  itemActive: {
    fontSize: 16,
    color: theme.colors.primary,
  },
  itemInActive: {
    fontSize: 16,
    color: theme.colors.text,
  },
  btnActive: {
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  btnInActive: {
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 46,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
  },
  parentHr: {
    height: 1,
    color: theme.colors.surface,
    width: '100%',
  },
  childHr: {
    height: 1,
    backgroundColor: theme.colors.surface,
    width: '100%',
  },
  colorActive: {
    borderColor: theme.colors.secondary,
  },
  colorInActive: {
    borderColor: theme.colors.secondary,
  },
});

export default Accordion;
