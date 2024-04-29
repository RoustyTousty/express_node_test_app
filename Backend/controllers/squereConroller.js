const squereForm = (req, res) => {
    try{
        const num = req.body.num;
        if (!num || !parseInt(num)){throw Error(message = "yas error")}
        res.send({num_squared: num * num});
    }catch(err) {
        res.status(400).send("Error");
    }
}

module.exports = {squereForm}