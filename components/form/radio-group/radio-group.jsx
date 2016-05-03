import React from 'react';
import Radio from '../radio/radio.jsx';

export default class RadioGroup extends React.Component {
  static defaultProps = {selected: null}
  render() {
    var renderedChildren = React.Children.map(this.props.children, (child) => {
        if (child !== null && child.type == Radio) {
          child = React.cloneElement(child, {name: this.props.name, onChange: this.props.onChange, selected: this.props.selected === child.props.value})
        }
        return child;
      });
    return (
      <div>
        {renderedChildren}
      </div>
    );
  }
}
