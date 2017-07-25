
const assert = require( "assert" );
const annon = require( "./annon.js" );

assert.equal( annon( function( ){ } ), true, "should return true" );

assert.equal( annon( ( ) => { } ), true, "should return true" );

assert.equal( annon( "" ), true, "should return true" );

assert.equal( annon( function hello( ){ } ), false, "should return false" );

assert.equal( annon( "test" ), false, "should return false" );

console.log( "ok" );
