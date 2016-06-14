import React from 'react';
import Radio from '../radio/radio';

export default class RadioGroup extends React.Component {
  static defaultProps = {selected: null}
  render() {
    var renderedChildren = React.Children.map(this.props.children, (child) => {
        if (child !== null && child.type == Radio) {
          child = React.cloneElement(child, {name: this.props.name, onChange: this.props.onChange, selected: this.props.selected === child.props.value, disabled:this.props.disabled})
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
