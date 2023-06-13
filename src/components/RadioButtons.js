import React from 'react';
import _ from 'lodash';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import {theme} from '../core/theme';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import {faCircleCheck as faCircleCheckRegular} from '@fortawesome/free-regular-svg-icons';

const RadioButtons = ({data}) => {
  const [list, setList] = React.useState(data);
  const onClick = indexProp => {
    const filteredData = list.reduce((acc, next, index) => {
      acc = acc.concat({...next, value: indexProp === index});
      return acc;
    }, []);

    setList(filteredData);
  };

  return (
    <View>
      {list.map((item, index) => {
        return (
          <View>
            <TouchableOpacity
              style={[
                styles.childRow,
                styles.button,
                item.value ? styles.btnActive : styles.btnInActive,
              ]}
              onPress={() => onClick(index)}
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
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 47,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
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
  childHr: {
    height: 1,
    backgroundColor: theme.colors.surface,
    width: '100%',
  },
});

export default RadioButtons;
