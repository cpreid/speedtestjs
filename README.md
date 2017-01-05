# speedtestjs
Test user's bandwidth in JavaScript

### Initialization config object parameters

| parameter | type   | details                                            | required | default |
|-----------|--------|----------------------------------------------------|----------|---------|
| src       | string | image source url used for measuring request timing | yes      |         |
| size      | float  | size of the image in any unit                      | yes      |         |
| interval  | int    | interval of measurement in milliseconds            | no       | 4000    |

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
