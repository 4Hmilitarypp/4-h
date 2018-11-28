import { Router } from 'express'
import * as webinarController from '../controllers/webinars'

import { catchErrors } from '../handlers/errorHandlers'

const setupWebinarRoutes = (router: Router) => {
  router
    .route('/')
    .get(catchErrors(webinarController.getWebinars))
    .post(catchErrors(webinarController.createWebinar))
    .put(catchErrors(webinarController.updateWebinar))
  router.route('/:id').delete(catchErrors(webinarController.deleteWebinar))
}
export default setupWebinarRoutes
