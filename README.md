# speedtestjs
Test user's bandwidth in JavaScript

### Create new speed tester
```
var speed = UserSpeed({
    src: 'http://host.com/some-image.jpg',
    size: 100 // any unit of filesize you'd like. ~100Kb is most accurate gauge
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
