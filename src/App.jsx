import './App.css'
import Button from './components/Button'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Tienda de productos" />
      <Button texto="Login" />      
    </div>
  )
}

export default App
