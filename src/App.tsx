import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import './App.css'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'

function App() {

  // dnd code
  const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
      }),
      useSensor(TouchSensor)
  );

  const handleDragStart = () => {
    
  }

  return (
    <div className='min-h-screen'>
      <div className='container flex flex-col items-center'>
        <div className='bg-white my-8 rounded-lg shadow max-w-5xl grid divide-y'>
          <header className='text-2xl'>Showcase</header>
          <DndContext 
          sensors={sensors} 
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          >
            <div>
              Image Gallery
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  )
}

export default App
