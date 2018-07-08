module.exports = {
    getOptions: {},
    postOptions: {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'content-type': 'application/json'  // Is set automatically
        }
    },
    putOptions: {},
    deleteOptions: {}
}