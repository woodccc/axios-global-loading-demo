const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
	ctx.body = ['user1', 'user2']
	
})

module.exports = router
