import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import Game from "../../components/Game/Game";
export const PAGES = [
    {
      path: '/',
      component: WelcomeScreen,
      exact: true,
    },
    {
      path: '/game',
      component: Game,
      exact: true,
    },
  ];
  
 export default PAGES