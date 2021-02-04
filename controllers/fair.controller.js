const Controller        = require('./controller');

class FairController extends Controller {

    constructor(req, res) {
        super(req, res);
    }
    
    index() {
		this.page_params.PAGE.title = "Fairness App";
        this.page_params.PAGE.view = "index";

        this.res.render("layouts/fair.layout.ejs", this.page_params);
    }
}
module.exports = FairController;