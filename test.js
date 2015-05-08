console.log("Starting test of peakdet.js")
var peakdet = require('./peakdet.js');

v = []
for (var i = 0; i < 10; i += 0.001) {
  v.push(0.3 * Math.sin(i) + Math.sin(1.3 * i) + 0.9 * Math.sin(4.2 * i))
}

res = peakdet.peakdet(v, 0.5)

peaks = res.peaks
valleys = res.valleys

expected_peaks = [
  { position: 460, value: 1.5381000165436327 },
  { position: 1807, value: 1.872457308659929 },
  { position: 3315, value: -0.09225559916001935 },
  { position: 4949, value: 0.6988730951782192 },
  { position: 6345, value: 1.8403762707171079 },
  { position: 7792, value: 0.5212018771657889 },
  { position: 9409, value: 0.5487637690038405 }]

expected_valleys = [
  { position: 1102, value: 0.3612724077077437 },
  { position: 2714, value: -1.080463964158803 },
  { position: 4079, value: -1.9628742549349267 },
  { position: 5546, value: -0.2697649248456635 },
  { position: 7177, value: -0.5318850266007343 },
  { position: 8600, value: -1.6626914810439835 }]

passed = true

if (peaks.length != expected_peaks.length) {
  console.log("There aren't the right number of peaks.")
}
for (var i=0; i < expected_peaks.length; i++) {
  expected_peak = expected_peaks[i]
  peak = peaks[i]
  if (expected_peak.position != peak.position) {
    passed = false
    console.log("Peak " + i + " doesn't match")
  }
  if (expected_peak.value != peak.value) {
    passed = false
    console.log("Peak " + i + " doesn't match")
  }
}

if (valleys.length != expected_valleys.length) {
  console.log("There aren't the right number of valleys.")
}
for (var i=0; i < expected_valleys.length; i++) {
  expected_valley = expected_valleys[i]
  valley = valleys[i]
  if (expected_valley.position != valley.position) {
    passed = false
    console.log("Valley " + i + " doesn't match")
  }
  if (expected_valley.value != valley.value) {
    passed = false
    console.log("Valley " + i + " doesn't match")
  }
}

if (passed) {
  console.log("Passed tests!")
} else {
  console.log("Failed tests :-(")
}
