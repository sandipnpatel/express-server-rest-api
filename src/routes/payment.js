import { Router } from 'express';

const router = Router();

router.get('/status/:merchantId/:orderId', (req, res) => {
    console.log(`Received payment status request for merchant '${req.params.merchantId}' and order '${req.params.orderId}'.`)
    return res.send({ merchantId: 1000, orderId: 1, amount: 100.00, currency: 'EUR', status: 100});
});

export default router;
