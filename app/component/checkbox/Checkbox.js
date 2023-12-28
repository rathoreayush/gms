import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import colors from 'const/encolor';
import PropTypes from 'prop-types';

function CustomCheckbox({checked, onToggle,}) {
    return (
        <CheckBox
            disabled={false}
            value={checked}
            onValueChange={onToggle}
        />
    );
}

CustomCheckbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };
export default CustomCheckbox;
