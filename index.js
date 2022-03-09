import express from "express";
import WAValidator from "@swyftx/api-crypto-address-validator"

const app = express();
const port = 3000;

app.get("/validate_address/:currency/:address", (req, res) => {
    try {
        const {
            currency,
            address
        } = req.params;
        const valid = WAValidator.validate(address, currency);
        res.status(200).send({
            "is_valid": valid
        }).end()
    } catch (error) {
        res.status(500).send({
            "msg": "something bad happened"
        }).end()
    }
});

app.listen(port, () => console.log("listening on port"));