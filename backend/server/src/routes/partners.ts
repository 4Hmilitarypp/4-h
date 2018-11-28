import { Router } from 'express'
import * as partnerController from '../controllers/partners'
import { catchErrors } from '../handlers/errorHandlers'

const setupPartnerRoutes = (router: Router) => {
  router
    .route('/')
    .get(catchErrors(partnerController.getPartners))
    .post(catchErrors(partnerController.createPartner))
    .put(catchErrors(partnerController.updatePartner))
  router.route('/:id').delete(catchErrors(partnerController.deletePartner))
}

export default setupPartnerRoutes
