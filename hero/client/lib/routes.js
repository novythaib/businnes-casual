/*
 * This file contains all your routes
 */

// The route / will render the template ...
FlowRouter.route('/', {
  action: function(params) {
    // ... start which is defined in start.html into the area content (specified in index.html)
    BlazeLayout.render("start", {
      area: "content"
    });
  }
});

FlowRouter.route('/about', {
  action: function(params) {
    BlazeLayout.render("about", {
      area: "content"
    });
  }
});

FlowRouter.route('/blog', {
  action: function(params) {
    BlazeLayout.render("blog", {
      area: "content"
    });
  }
});

FlowRouter.route('/contact', {
  action: function(params) {
    BlazeLayout.render("contact", {
      area: "content"
    });
  }
});
