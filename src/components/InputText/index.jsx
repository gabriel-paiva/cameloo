import React, { memo } from 'react';
import { TextInput } from 'react-native';
import colors from '../../utils/colors';

import { Container } from './styles';

export const InputText = memo(
  ({
    maxWidth,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    showPasswordIconVisibility,
    icon,
    placeholder,
    ...rest
  }) => {
    return (
      <Container
        maxWidth={maxWidth}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginTop={marginTop}
        showPasswordIconVisibility={showPasswordIconVisibility}
        style={{ borderBottomWidth: 2, borderBottomColor: colors.orange }}
      >
        {icon && showPasswordIconVisibility ? (
          <>
            <TextInput
              placeholderTextColor={colors.black}
              placeholder={placeholder}
              style={{
                color: colors.black,
                width: '80%',
                paddingLeft: 18,
                paddingRight: 18,
                paddingTop: 18,
                paddingBottom: 18,
              }}
              {...rest}
            />
            {icon}
          </>
        ) : (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#2A2C4D50"
            style={{
              color: colors.black,
              width: '100%',
              paddingLeft: 18,
              paddingRight: 18,
              paddingTop: 18,
              paddingBottom: 18,
              outlineStyle: 'none',
            }}
            {...rest}
          />
        )}
      </Container>
    );
  }
);
