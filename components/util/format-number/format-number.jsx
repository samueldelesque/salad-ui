import React, {Component, PropTypes} from 'react';
import numeral from 'numeral'
import classNames from 'classnames'

export default class FormatNumber extends Component {
  static defaultFormat = '0,0'
  static shortFormat = '0[.]0a'

  static defaultProps = {
    value: 0,
    short: false
  }

  render() {
    return (
      <span className={classNames('utils_format-number', this.props.className)}>
        {numeral(this.props.value).format(this.props.short ? this.shortFormat : this.defaultFormat )}
      </span>
    );
  }
}
