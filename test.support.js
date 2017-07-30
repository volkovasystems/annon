
"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "annon",
              			"path": "annon/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/annon.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"annon": "annon"
              		}
              	@end-include
              */

var assert = require("assert");



//: @client:
var annon = require("./annon.support.js");
//: @end-client






//: @client: 

describe("annon", function () {

	describe("`annon( function( ){ } )`", function () {
		it("should be equal to true", function () {

			assert.equal(annon(function () {}), true);

		});
	});

	describe("`annon( function( ){ } )`", function () {
		it("should be equal to true", function () {

			assert.equal(annon(function () {}), true);

		});
	});

	describe("\"annon( \"\" )\"", function () {
		it("should be equal to true", function () {

			assert.equal(annon(""), true);

		});
	});

	describe("\"annon( function hello( ){ } )\"", function () {
		it("should be equal to false", function () {

			assert.equal(annon(function hello() {}), false);

		});
	});

	describe("\"annon( \"test\" )\"", function () {
		it("should be equal to false", function () {

			assert.equal(annon("test"), false);

		});
	});

});


//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYW5ub24iLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJoZWxsbyJdLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7QUFFekJBLFVBQVUsMkJBQVYsRUFBdUMsWUFBTztBQUM3Q0MsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLFlBQVcsQ0FBRyxDQUFyQixDQUFkLEVBQXVDLElBQXZDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxZQUFPLENBQUcsQ0FBakIsQ0FBZCxFQUFtQyxJQUFuQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsK0JBQTJCLFlBQU87QUFDbENDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFcENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxFQUFQLENBQWQsRUFBMkIsSUFBM0I7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLCtDQUE2QyxZQUFPO0FBQ3BEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQTNCLENBQWQsRUFBNkMsS0FBN0M7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFILG1DQUErQixZQUFPO0FBQ3RDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sTUFBUCxDQUFkLEVBQStCLEtBQS9COztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBLENBMUNEOzs7QUE2Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJhbm5vblwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJhbm5vbi90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYW5ub24uZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJhbm5vblwiOiBcImFubm9uXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IGFubm9uID0gcmVxdWlyZSggXCIuL2Fubm9uLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5cclxuZGVzY3JpYmUoIFwiYW5ub25cIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggXCJgYW5ub24oIGZ1bmN0aW9uKCApeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbm5vbiggZnVuY3Rpb24oICl7IH0gKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBhbm5vbiggZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFubm9uKCAoICkgPT4geyB9ICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiYW5ub24oIFwiXCIgKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbm5vbiggXCJcIiApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImFubm9uKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbm5vbiggZnVuY3Rpb24gaGVsbG8oICl7IH0gKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiYW5ub24oIFwidGVzdFwiIClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFubm9uKCBcInRlc3RcIiApLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblx0XHJcbn0gKTtcclxuXHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
