import Grid from './grid/grid'
import GridPreview from './grid-preview/grid-preview'
import List from './list/list'
import ListPreview from './list-preview/list-preview'

import Radium from 'radium'

export default {
  Grid: Radium(Grid),
  GridPreview: Radium(GridPreview),
  List: Radium(List),
  ListPreview: Radium(ListPreview),
}
