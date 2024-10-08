import styles from './app-content.module.css';
import BurgerIngredients from './burgeringredients/burgeringredients';
import BurgerConstructor from './burgerconstructor/burgerconstructor';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function AppContent({ ingredients }) {
    return (
      <main className={ styles.content }>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />          
        </DndProvider>
      </main>
    );
  }

export default AppContent;