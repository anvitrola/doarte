const verifySignUp = require("../middleware/verifySignUp");
const controller = require("../controllers/auth.controller");

module.exports = app => {
    
    app.use((_, res,next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
        
    app.post("/api/auth/signUp", verifySignUp, controller.signUp);
    app.post("/api/auth/signIn", controller.signIn)
};