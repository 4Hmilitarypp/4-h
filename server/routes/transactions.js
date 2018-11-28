const transactionController = require('../controllers/transactions')

const { catchErrors } = require('../handlers/errorHandlers')

function setupTransactionRoutes(router) {
  router.get('/', transactionController.getTransactions)
  router.post('/', catchErrors(transactionController.createTransaction))
  router.delete('/:id', catchErrors(transactionController.deleteTransaction))
}

module.exports = setupTransactionRoutes
