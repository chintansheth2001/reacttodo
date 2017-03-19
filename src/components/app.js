import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import { createStyleSheet } from 'jss-theme-reactor'
import customPropTypes from 'material-ui/utils/customPropTypes'
import Paper from 'material-ui/Paper'
import Layout from 'material-ui/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styleSheet = createStyleSheet('FullWidthLayout', (theme) => ({
  root: {
    flexGrow: 1,
    height: 400,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => (
  <MuiThemeProvider>
    <Layout container gutter={24}>
      <Layout item xs={6} >
        <Paper style={{fontFamily:"arial", padding:'10px'}}>
          <h1>React ToDos App</h1>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Paper>  
      </Layout>  
    </Layout>
  </MuiThemeProvider>
)
export default App
