import { Router } from 'express'
import * as liaisonController from '../controllers/liaisons'

import { catchErrors } from '../handlers/errorHandlers'

const setupLiaisonRoutes = (router: Router) => {
  router
    .route('/')
    .get(catchErrors(liaisonController.getLiaisons))
    .post(catchErrors(liaisonController.createLiaison))
    .put(catchErrors(liaisonController.updateLiaison))
  router.route('/:id').delete(catchErrors(liaisonController.deleteLiaison))
}
export default setupLiaisonRoutes
