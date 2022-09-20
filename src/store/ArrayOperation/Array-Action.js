import React from 'react';
import * as actions from './Array-Action-Types';

export const addChar = Viewpayload => {
  return {
    type: actions.ADD_CHAR,
    payload: {
      name: Viewpayload,
    },
  };
};
export const removeChar = payload => {
  return {
    type: actions.REMOVE_CHAR,
    payload: payload,
  };
};
export const removeAll = () => {
  return {
    type: actions.REMOVE_ALL,
  };
};
export const insertChar = payload => {
  return {
    type: actions.INSERT_CHAR,
    payload,
  };
};
export const updateChar = payload => {
  debugger;
  return {
    type: actions.UPDATE_CHAR,
    payload,
  };
};
