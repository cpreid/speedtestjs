(function() {
    window.UserSpeed = function(userFile) {
        var current = 0,
            intvl = 4000,
            onUpdate,
            over;

        // time the download of the 
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
            var new_kbps = (userFile.size / (millisec / 1000)).toFixed(2),
                old_kbps = current;                
            current = new_kbps;
            if(new_kbps !== old_kbps && typeof onUpdate === 'function') {
                onUpdate.call(null, current);
            }        
        }
        
        // begins the looping interval
        var init = function() {
            if(! (typeof userFile === 'object' && userFile.src && userFile.size > 0)) {
                throw 'Please provide a valid img and its size when initializing.';
            }
            
            over = setInterval(function() {        
                timeDownload(userFile.src + '?v=' + (new Date).getTime()).then(measureHandler);
            }, intvl);
        }
            
        // initialize speed measurement
        try {
            init();
        } catch(err) {
            console.log(err);
        }

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