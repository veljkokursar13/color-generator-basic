import Form from './components/Form'
import ColorList from './components/ColorList'
import { useState } from 'react'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
      toast.success('Color generated successfully!')
    } catch (error) {
      toast.error('Please enter a valid color!')
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} toast={toast} />
      <ToastContainer position='top-center' />
    </main>
  )
};

export default App;
