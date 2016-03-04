import { injectDeps } from 'react-simple-di';
import { initContext } from './configs/context';
import actions from './actions';

/* import routes */
import { initRoutes } from './configs/routes.jsx';

/* import layouts */
import MainLayout from '/client/components/layouts.main/index.jsx';

const context = initContext();

const MainLayoutCtx = injectDeps(context, actions)(MainLayout);
initRoutes(MainLayoutCtx);
