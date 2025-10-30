const apiController = {
    version: (req, res) => {
        try {
            return res.json({ message: "1.0.0" });
        } catch (error) {
            console.log(error);
            res.json({error: error.message});
        }
    }
}

module.exports = apiController;