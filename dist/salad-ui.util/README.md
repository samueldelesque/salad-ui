# SaladUI

SaladUI provides a collection of simple React Components to build Universal apps.

### Usage

```
import Salad from 'salad-ui'
render(){
   return <Salad.Form.Autocomplete/>
}

// Or

import { Autocomplete } from 'salad-ui.form'
render(){
   return <Autocomplete/>
}
```


### Contents

The kit includes:

- Lib: a few utilies functions including childrenWithProps, currencyToSymbol, f (fetch wrapper), glob (window or global, with some tools), numberToString, polyfill, sso.
- Util: a collection of simple components such as Alert, TagList, Button, TextClamp.
- Form: simple <form> elements wrapped with basic styling and customizable via props - Input, Radio, Checkbox.
- Icon: Icons in svg format (compiled by React)
- Stylesheet: a simple way to maintain js stylesheets
- Chart: Area, CirclePie and BarMetric


### Stylesheet

```
// styles.js
import Stylesheet, { defaults } from 'salad-ui.stylesheet'

export default Stylesheet.create({
  container: {
    borderRadius: 5,
    margin: defaults.padding.md,
  }
})

// component.js
import styles from './styles'
render(){
  <div style={styles.container}></div>
}


// Output:
<div style="-webkit-border-radius: 5px; border-radius: 5px [...]"></div>
```
