import {injectDeps} from 'react-simple-di';
import {initContext} from './configs/context';
import {initRoutes} from './configs/routes.jsx';
import actions from './actions';
import MainLayout from '/client/components/layouts.main/index.jsx';

const context = initContext();

/*
  Here, we inject actions globally (?) to layouts
*/
const LayoutCtx = injectDeps(context, actions)(MainLayout);

initRoutes(LayoutCtx);
