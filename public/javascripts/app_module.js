// Load and execute an external JS resource whose URL depends on a configuration 
// variable specific to a domain/account
 
CloudFlare.define(
    '<appKey>',
    ['<appKey>/config'],
    function(config) {
 
        // config will be an object containing any configurations that will be
        // stored by CloudFlare, specific to app + domain combo
 
        // build the URL for your JS resource
        var url = '//<hostname>/<path>' + config.someVariable;
 
        // load and execute file
        CloudFlare.require([url]);
 
        // if you need to execute other code after the file has been loaded, use this instead
        CloudFlare.require([url], function() {
            // call some function that is made availabe by the other file
            var instance = Something();
            instance.start(config.someConfigVar)
        });
 
    }
);