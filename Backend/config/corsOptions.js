const allowedOrigins = ['http://loclhost:5000', 'http://127.0.0.1:5500']

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed!"))
        }
    },
    optionsSuccessStatus: 200,
}

module.exports = corsOptions;