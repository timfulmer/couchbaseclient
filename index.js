var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase-development01.geoviewer.io');
// var bucket = cluster.openBucket('beer-sample');
var bucket = cluster.openBucket('grocery-sync');
bucket.upsert('testdoc', {name:'Frank'}, function(err, result) {
  if (err) throw err;

  bucket.get('testdoc', function(err, result) {
    if (err) throw err;

    console.log(result.value);
    // => {name: Frank}
    // success!!
    process.exit(0);
  });
});
