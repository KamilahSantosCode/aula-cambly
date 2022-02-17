import ListTutors from "../pages/list-tutors"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Layout} from '../components/layout'
import '../assets/card.css'
import '../assets/paginaTutores.css'

export const App = () => {
  return (
    <Layout>
    <ListTutors/>
    </Layout>
  )
}
