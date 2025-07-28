import CirculoDeColor from './componentes/CirculoDeColor';
import ControlColor from './componentes/ControlColor';

function App() {
  return (
    <div>
      <h1>Selector de color</h1>
      <CirculoDeColor></CirculoDeColor>
      <ControlColor nombreColor="Rojo"></ControlColor>
      <ControlColor nombreColor="Azul"></ControlColor>
      <ControlColor nombreColor="Verde"></ControlColor>
    </div>
  );
}

export default App;
