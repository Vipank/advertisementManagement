import {ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './themes/theme';
import Sidebar from './components/Sidebar/Sidebar';
import classNames from 'classnames';
import Appbar from './components/Appbar/Appbar';
import Main from './components/Main/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className = {classNames("makeFlex","App")}>
        <Sidebar/>
        <div className={classNames("flexColumn")}>
          <Appbar/>
          <Main/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
