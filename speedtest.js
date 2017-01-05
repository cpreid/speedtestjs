(function() {

    /**

    Usage:

    // provide an image and its size in KB
    var speed = UserSpeed({
        src: 'http://img.timeinc.net/time/photoessays/2008/trees/franklin_trees_01.jpg',
        size: 206
    });

    speed.onUpdate(function(kbps) {
        console.log((kbps * 8) + 'kbps' + ', ' + kbps + 'KBps');
    });

    **/

    window.UserSpeed = function(userFile) {
        var current = 0,
            intvl = 4000,
            onUpdate,
            over,
            dlFile = userFile || {
                'src': 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 
                'size': 13.2            
            }

        var timeDownload = function(file_url) {
            var loadImg = new Image,
                start = new Date;    
            loadImg.src = file_url;
            return new Promise(function(resolve, reject) {
                loadImg.onload = function(e, t) {
                    var diff = (new Date).getTime() - start.getTime();
                    resolve(diff);
                }
            });
        }        

        var measureHandler = function(millisec) {
            var new_kbps = (dlFile.size / (millisec / 1000)).toFixed(2),
                old_kbps = current;                
            current = new_kbps;
            if(new_kbps !== old_kbps && typeof onUpdate === 'function') {
                onUpdate.call(null, current);
            }        
        }
        
        // initialize speed measurement
        var init = function() {
            over = setInterval(function() {        
                timeDownload(dlFile.src + '?v=' + (new Date).getTime()).then(measureHandler);
            }, intvl);
        }
        
        init();

        /**
        * api: 
        * get // onUpdate // kill // start
        */
        return {
            get: function() {
                return current;
            },
            onUpdate: function(fcn) {
                onUpdate = fcn;
            },
            kill: function() {
                clearInterval(over);
            },
            start: function() {
                init();
            }
        }
    }    

})();