let express = require('express')
let router = express.Router();

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

router.get('/protected',(req,res) => {

    if(req.session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
        res.redirect('form.html')
});
module.exports = router;