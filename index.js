var couchbase = require('couchbase');
//var cluster = new couchbase.Cluster('couchbase://23.23.64.181:11211?detailed_errcodes=1');
var cluster = new couchbase.Cluster('http://23.23.64.181:8091?detailed_errcodes=1');
var bucket = cluster.openBucket('grocery-sync');
bucket.upsert('testdoc', {name:'Frank'}, function(err, result) {
  if (err) throw err;

  bucket.get('testdoc', function(err, result) {
    if (err) throw err;

    console.log(result.value);
    // {name: Frank}
  });
});
