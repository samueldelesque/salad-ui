# SaladUI

The goal of this repo is to provide shared UI components used by Dailymotion React apps (Settings, Channel Page etc.).

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




### stylesheet

```
// styles.js
import Stylesheet from 'salad-ui.stylesheet'

export default Stylesheet.create({
  container: {
    borderRadius: 5,
  }
})

// component.js
import styles from './styles'
render(){
  <div style={styles.container}></div>
}


// Output:
<div style="-webkit-border-radius: 5px, border-radius: 5px [...]"></div>
```
