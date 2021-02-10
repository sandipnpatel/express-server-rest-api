import { Router } from 'express';

const router = Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /payment/status
 * @group payment - Get payment order status
 * @param {string} merchantId.query.required - merchant Id 
 * @param {string} orderId.query.required - order Id
 * @returns {object} 200 - A json of order detail
 * @returns {Error}  default - Unexpected error
 * @produces application/json
 */
router.get('/status', (req, res) => {
    console.log(`Received payment status request for merchant '${req.query.merchantId}' and order '${req.query.orderId}'.`)
    return res.send({ merchantId: req.query.merchantId, orderId: req.query.orderId, amount: 100.00, currency: 'EUR', status: 100});
});

export default router;
