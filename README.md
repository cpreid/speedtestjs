# speedtestjs
Test user's bandwidth in JavaScript

### Create new speed tester
```
var speed = UserSpeed({
    // REQUIRED: image source url
    src: 'http: //host.com/some-image.jpg', 
    
    // REQUIRED: size of the image in any unit
    size: 100,
    
    // OPTIONAL [default: 4000]: interval of measurement in milliseconds
    interval: 4000
});
```

### Bind an onUpdate listener
```
/**
* value passed back is in the same unit that was provided in `UserSpeed()` call
*/
speed.onUpdate(function(kbps) {
    console.log((kbps * 8) + 'kbps' + ', ' + kbps + 'KBps');
});
```
### Retreive the current bandwidth on demand
```
speed.get();
```
### Kill the bandwidth measurement
```
speed.kill();
```
