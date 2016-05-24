import StyleSheet, { defaults } from '../../../lib/stylesheet/stylesheet'

const styles = {
  list: {
    preview: {
      marginBottom: 20,
      display: 'flex',
    },
    image: {
      width: 162,
      height: 90,
    },
    text: {
      flex: 1,
      paddingLeft: 20,
      lineHeight: 1.2,
      height: '2.4rem'
    },
    title: {
      marginBottom: 10,
    },
  },
  grid: {
    preview: {

    },
    image: {
      width: '100%',
      height: 100,
    },
    text: {
    },
    title: {
      marginTop: 10,
      marginBottom: 10,
      lineHeight: 1.2,
      height: '2.4rem'
    },
  },
  after: {
    clear: 'both',
    display: 'table',
  }
}

export default styles
