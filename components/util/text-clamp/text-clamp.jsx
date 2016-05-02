import React, {PropTypes, Component} from 'react'

import clamp from 'clamp-js'

export default class TextClamp extends Component {
  static propTypes = {
    clamp: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    splitOnChars: PropTypes.array,
    useNativeClamp: PropTypes.bool,
    truncationChar: PropTypes.string
  }
  static defaultProps = {
    useNativeClamp: false
  }
  componentDidMount() {
    let clampOptions = ['clamp', 'useNativeClamp', 'truncationChar', 'truncationHTML', 'useNativeClamp', 'splitOnChars']
    let options = clampOptions.forEach((option) => {
      if (this.props[option]) {
        clampOptions[option] = this.props[option]
      }
    })
    clamp(this.refs.text, clampOptions)
  }
  render() {
    return (
      <div ref="text" className="utils_text-clamp" dangerouslySetInnerHTML={{__html: this.props.children}}></div>
    )
  }
}
