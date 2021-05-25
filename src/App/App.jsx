import { styles } from './styles'
import 'antd/dist/antd.css';
import Router from '../Router/Router';
import './App.css';
import AppLayout from '../Layouts/AppLayout'

function App() {
  return (
    <>
      <AppLayout>
            <Router />
      </AppLayout>
    </>
  );
}

export default App;
