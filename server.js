var express = require( 'express' );
var path = require( 'path' );
var app = express();

app.use( express.json() );
app.use( express.urlencoded( {extended: false} ) );
app.use( express.static( path.join( __dirname, 'dist', 'my1stngp' ) ) );

var PORT = process.env.PORT || 3000;

app.listen( PORT, function () {
    console.log( 'Server started at  http://localhost:' + PORT );
} );
