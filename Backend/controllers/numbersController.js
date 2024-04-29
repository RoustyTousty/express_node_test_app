const numbers = [1, 4, 5, 7]

const getNumbers =  (req, res) => {
    res.send(numbers);
}

const getNumberById =  (req, res) => {
    const id = req.params.id
    if (id && id < 4 && id > -1) {
        res.send({num: numbers[id]})
        return
    }
    res.send({msg: "No such element!"})
}

module.exports = {getNumbers, getNumberById}