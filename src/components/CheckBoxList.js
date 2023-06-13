import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import CheckBox from './CheckBox';

const CheckBoxList = ({data}) => {
  const [checked, setChecked] = React.useState(
    new Array(data.length).fill(false),
  );

  const handleOnChange = position => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item,
    );

    setChecked(updatedCheckedState);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <CheckBox
            onPress={() => handleOnChange(index)}
            title={item}
            isChecked={checked[index]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },

  checkbox: {
    alignSelf: 'flex-start',
    display: 'flex',
  },
  item: {},
});

CheckBoxList.defaultProps = {
  data: [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ],
};

CheckBoxList.propTypes = {
  data: PropTypes.array,
};

export default CheckBoxList;
