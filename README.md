HumanElapsed  
======================  

A small module that translates seconds to elapsed (human) time 

## Try it in your browser
Just go to [Runkit](https://npm.runkit.com/human-elapsed) and click run

## Usage

```
const HumanElapsed = require('human-elapsed')

HumanElapsed(10) // '10 seconds'
HumanElapsed(60) // '1 minute'
HumanElapsed(71) // '2 minutes 1 second'
HumanElapsed(1000122) // '11 days 13 hours 48 minutes 42 seconds'
```
