
const assert = require( "assert" );
const annon = require( "./annon.js" );

assert.equal( annon( function( ){ } ), true, "should be true" );
assert.equal( annon( function hello( ){ } ), false, "should be false" );
assert.equal( annon( "test" ), false, "should be false" );
assert.equal( annon( "123" ), true, "should be true" );
assert.equal( annon( "" ), true, "should be true" );

console.log( "ok" );
