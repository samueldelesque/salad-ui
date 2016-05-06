import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './demo'
import glob from '../../lib/glob.js'
import './demo.scss'

if(!glob.DM_ENV) glob.DM_ENV = {}
glob.DM_ENV['form/input-text'] = {}

ReactDOM.render(<Demo/>, document.getElementById('react-root'));
