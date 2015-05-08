Peakdet is a NodeJS library for detecting peaks and valleys in data. Peakdet
takes a
[JavaScript implementation](https://gist.github.com/robseward/e0d0370dc5f72cd274f9)
of a [MATLAB script](http://billauer.co.il/peakdet.html) for detecting
peaks and packages it as a
[Node](https://nodejs.org/) library and adds a test.

## Usage

The library is in the peakdet.js file and an example of its use is:

```
var peakdet = require('./peakdet.js');

// Create the vector that we want to detect peaks in
v = []
for (var i = 0; i < 10; i += 0.001) {
  v.push(0.3 * Math.sin(i) + Math.sin(1.3 * i) + 0.9 * Math.sin(4.2 * i))
}

// Call the peakdet function, the second argument is the minimum differece
// between the peak and its surrounding points
res = peakdet.peakdet(v, 0.5)

peaks = res.peaks
valleys = res.valleys

for (var i=0; i < peaks.length; i++) {
  console.log("Peak " + peak[i])
}

for (var i=0; i < peaks.length; i++) {
  console.log("Valley " + valley[i])
}
```

## Tests

To run the suite of tests:

1. Install NodeJS.
2. Run `nodejs test.js`
3. If everything's working it should say something like `Passed tests`.

The test.ods file is a spreadsheet containing the test data.
