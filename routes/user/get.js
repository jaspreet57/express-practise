module.exports = function(req, res){
    res.send('user got. ID: ' + req.params.id);
}