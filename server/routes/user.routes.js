import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users/admin/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, userCtrl.list)

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .post(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateTotalViews)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)


router.param('userId', userCtrl.userByID)

export default router
