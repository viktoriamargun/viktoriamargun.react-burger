import styles from './app-content.module.css';
import BurgerIngredients from './burgeringredients/burgeringredients';
import BurgerConstructor from './burgerconstructor/burgerconstructor';

function AppContent({ ingredients }) {
    return (
      <main className={ styles.content }>
        <BurgerIngredients ingredients={ ingredients }/>
        <BurgerConstructor ingredients={ ingredients }/>
        <div id="react-modals"></div>
      </main>
    );
  }

export default AppContent;