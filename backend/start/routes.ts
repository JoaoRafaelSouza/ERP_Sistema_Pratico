import router from '@adonisjs/core/services/router'
import UsuariosController from '#controllers/usuarios_controller'
import AuthMiddleware from '#middleware/AuthMiddleware'

const usuariosController = new UsuariosController()
const authMiddleware = new AuthMiddleware()

router.get('/', async () => {
  return { hello: 'world' }
})

router
  .get('/usuarios', usuariosController.index.bind(usuariosController))
  .use([authMiddleware.handle.bind(authMiddleware)])

router.post('/register', usuariosController.store.bind(usuariosController))
router.post('/login', usuariosController.login.bind(usuariosController))

router
  .post('/logout', usuariosController.logout.bind(usuariosController))
  .use([authMiddleware.handle.bind(authMiddleware)])
