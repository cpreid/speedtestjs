# speedtestjs
Test user's bandwidth in JavaScript

### Initialization config object parameters

| Param      | type   | details                                  |
|------------|--------|------------------------------------------|
| src        | string | image source url                         |
| size       | float  | size of the image in any unit            |
| interval   | int    | interval of measurement in milliseconds  |

### Create new speed tester
```
var speed = UserSpeed({
    src: 'http: //host.com/some-image.jpg',
    size: 100
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
