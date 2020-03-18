/*
 * @Date: 2020-03-19 00:50:29
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-19 02:39:40
 */
import React, { Component } from 'react';
import {
  ViewStyle,
} from 'react-native'
import SvgUri from '../../../lib/react-native-svg-uri';
import svgs from '../../assets/svgs.js';

export default class Svg extends Component{
  render() {
    const {
      icon,
      color,
      size,
      style,
    } = this.props;
    let svgXmlData = svgs[icon];

    if (!svgXmlData) {
      let err_msg = `没有"${icon}"这个icon，请下载最新的icomoo并 npm run build-js`;
      throw new Error(err_msg);
    }
    return (
      <SvgUri
        width={size}
        height={size}
        svgXmlData={svgXmlData}
        fill={color}
        style={style}
      />
    )
  }
}