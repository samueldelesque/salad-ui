import React, {Component, PropTypes} from 'react'
import InputText from '../input-text/input-text'
import styles from './_stylesheet'

export default class Autocomplete extends Component {

  static propTypes = {
    inputPlaceholder: React.PropTypes.string,
    noSuggestionsText: React.PropTypes.string,
    isLoading: React.PropTypes.bool,
    clearOnSelect: React.PropTypes.bool,
    latency: React.PropTypes.number,
    limit: React.PropTypes.number,
    style: React.PropTypes.object,
    suggestions: React.PropTypes.array,
    handleSelectItem: React.PropTypes.func.isRequired,
    requestSuggestions: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    latency: 300,
    limit: 15,
    style: {},
    inputPlaceholder: 'Start typing',
    noSuggestionsText: 'No results',
    allowCustomText: true,
    isLoading: false,
    clearOnSelect: false,
    suggestions: [],
  }

  state = {
    inputText: '',
    typedText: '',
    currentIndex: -1,
    showSuggestions: false,
  }

  closeAutocomplete(e){
    if(e.target.className==='ac_input') {
      return;
    }
    if(this.state.showSuggestions){
      this.setState({
        showSuggestions: false
      });
    }
  }

  componentDidMount(){
    document.addEventListener('click', (e)=>this.closeAutocomplete(e), false);
  }

  componentWillUnmount(){
    document.removeEventListener('click', (e)=>this.closeAutocomplete(e), false);
  }

  handleInputClick(e) {
    if(this.props.suggestions.length > 0 && this.state.inputText !== ''){
      this.setState({
        showSuggestions: true
      })
    }
  }

  handleInputChange(value) {
    if(this.timer){
      clearTimeout(this.timer);
    }

    if(value !== '') {
      this.timer = setTimeout(() => {
        this.props.requestSuggestions(value);
        this.setState({
          showSuggestions: true
        })
      }, this.props.latency);
    }
    else {
      this.setState({
        showSuggestions: false
      })
    }

    this.setState({
      inputText: value,
      typedText: value,
      currentIndex: -1,
    });
  }

  handleInputKeyUp(e) {
    let UP = 38,
    DOWN = 40,
    ENTER = 13,
    nextIndex = -1;

    switch(e.which){

      case ENTER:
        if(this.timer) clearTimeout(this.timer);
        // Try to find selected item from index
        // otherwise return textbox text
        if(this.props.allowCustomText) this.onSelect(this.props.suggestions[this.state.currentIndex] || e.target.value)
        else this.onSelect(this.props.suggestions[this.state.currentIndex])
        break;

      case DOWN:
        if(!this.state.showSuggestions){
          return;
        }
        nextIndex = this.state.currentIndex + 1;

        if(nextIndex >= this.props.suggestions.length) {
          return;
        }

        this.setState({
          currentIndex: nextIndex,
          inputText: this.extractTextFromSelection(nextIndex),
        })
        break;

      case UP:
        if(!this.state.showSuggestions){
          return;
        }
        nextIndex = this.state.currentIndex - 1;

        if(nextIndex < 0){
          this.setState({
            inputText: this.state.typedText,
            currentIndex: -1,
          })
        }
        else {
          this.setState({
            currentIndex: nextIndex,
            inputText: this.extractTextFromSelection(nextIndex),
          })
        }
        break;

      default:
        break;

    }
  }

  extractTextFromSelection(index){
    let text = this.props.suggestions[index]
    if(typeof text === 'object' && this.props.suggestionTextKey){
      text = text[this.props.suggestionTextKey]
    }
    return text;
  }

  onSelect(item) {
    let text = item;
    if(this.state.currentIndex !== -1){
      text = this.extractTextFromSelection(this.state.currentIndex);
    }
    if(!text || text === '') {
      return;
    }

    this.setState({
      inputText: (this.props.clearOnSelect ? '' : text),
      showSuggestions: false,
    });

    if(this.props.handleSelectItem){
     this.props.handleSelectItem(item, this.state.currentIndex)
    }

    if(this.props.clearOnSelect){
      this.refs.inputBox.refs.input.focus()
    }
    else {
      this.refs.inputBox.refs.input.blur()
    }
  }

  renderSuggestions() {
    let items
    let activeStyle = Object.assign({}, styles.suggItem, {background:'#E5E5E5'})
    items = this.props.suggestions.map((item, index) => {
    return <li
        key={'suggestion.' + index}
        onMouseEnter={e=>this.setState({currentIndex: index})}
        onClick={()=>this.onSelect(item)}
        style={(this.state.currentIndex === index)? activeStyle : styles.suggItem}>
        {
          typeof(item) === 'object' && !React.Component.isPrototypeOf(item)?
          this.extractTextFromSelection(index):
          item
        }
      </li>
    }, this);

    return <ul style={styles.suggestions}>
      { items }
    </ul>
  }

  render() {
    if(this.props.suggestions.length > 0 && typeof this.props.suggestions[0] === 'object' && !this.props.suggestionTextKey) {
      console.error('No suggestionTextKey provided to Autocomplete!')
    }

    let inputProps = {
      placeholder: this.props.inputPlaceholder,
      value: this.state.inputText,
      style: this.props.style,
      //onBlur: ()=>setTimeout(()=>this.setState({showSuggestions: false}), 50),
      onClick: ::this.handleInputClick,
      onChange: ::this.handleInputChange,
      onKeyUp: ::this.handleInputKeyUp,
    }

    if(this.props.apiError && this.state.inputText === ''){
      inputProps['error'] = this.props.apiError;
    }

    return <div style={{position:'relative'}}>
      <InputText ref="inputBox" {...inputProps} />
      {(this.state.showSuggestions && !this.props.isLoading && this.props.suggestions.length > 0) ? this.renderSuggestions() : null }
    </div>
  }
}
