import router from '@adonisjs/core/services/router'
import LoginController from '#controllers/login_controller'
import AuthMiddleware from '#middleware/auth_middleware'

const loginController = new LoginController()
const authMiddleware = new AuthMiddleware()

router.get('/', async () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router.get('/usuarios', loginController.index.bind(loginController))
    router.post('/logout', loginController.logout.bind(loginController))
  })
  .use([authMiddleware.handle.bind(authMiddleware)])

router.post('/register', loginController.store.bind(loginController))
router.post('/login', loginController.login.bind(loginController))
