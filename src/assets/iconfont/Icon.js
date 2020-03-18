/* eslint-disable */

import React from 'react';

import Iconmy from './Iconmy';
import Iconhome from './Iconhome';
import Iconsuitcase from './Iconsuitcase';
import Icondiscover from './Icondiscover';

export const Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'my':
      return <Iconmy {...rest} />;
    case 'home':
      return <Iconhome {...rest} />;
    case 'suitcase':
      return <Iconsuitcase {...rest} />;
    case 'discover':
      return <Icondiscover {...rest} />;
  }

  return null;
};

export default Icon;
