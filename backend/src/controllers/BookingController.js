const Booking = require('../models/Booking');
module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const boooking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await boooking.populate('spot').populate('user').execPopulate();

        return res.json(boooking);
    }
}