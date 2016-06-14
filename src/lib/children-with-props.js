import React from 'react'

export default function childrenWithProps(children, props={}){
  return React.Children.map(children, (child) => React.cloneElement(child, Object.assign({}, props)));
}
