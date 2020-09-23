'use strict';

var React = require("react");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Belt_Int = require("bs-platform/lib/js/belt_Int.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function Squares(Props) {
  var children = Props.children;
  var count = Belt_Int.fromString(children);
  var countSquares = count !== undefined ? count : 0;
  var squares = Belt_Array.range(1, countSquares);
  return React.createElement("div", {
              style: {
                alignItems: "center",
                justifyContent: "center"
              }
            }, Belt_Array.mapWithIndex(squares, (function (i, x) {
                    var imageStyleRow = {
                      display: "flex",
                      margin: "18px",
                      alignItems: "center",
                      justifyContent: "center"
                    };
                    if (x % 3 === 0) {
                      return React.createElement("div", {
                                  key: String(x),
                                  style: imageStyleRow
                                }, React.createElement("div", {
                                      style: {
                                        backgroundColor: "rgb(" + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ")"))))),
                                        backgroundPosition: "center",
                                        height: "120px",
                                        margin: "18px",
                                        width: "120px",
                                        backgroundSize: "cover",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 16px rgb(200, 200, 200)"
                                      }
                                    }), React.createElement("div", {
                                      style: {
                                        backgroundColor: "rgb(" + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ")"))))),
                                        backgroundPosition: "center",
                                        height: "120px",
                                        margin: "18px",
                                        width: "120px",
                                        backgroundSize: "cover",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 16px rgb(200, 200, 200)"
                                      }
                                    }), React.createElement("div", {
                                      style: {
                                        backgroundColor: "rgb(" + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ")"))))),
                                        backgroundPosition: "center",
                                        height: "120px",
                                        margin: "18px",
                                        width: "120px",
                                        backgroundSize: "cover",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 16px rgb(200, 200, 200)"
                                      }
                                    }));
                    }
                    if ((countSquares - x | 0) !== 0) {
                      return null;
                    }
                    var countRow = Math.imul(x / 3 | 0, 3);
                    if ((x - countRow | 0) === 1) {
                      return React.createElement("div", {
                                  key: String(x),
                                  style: imageStyleRow
                                }, React.createElement("div", {
                                      style: {
                                        backgroundColor: "rgb(" + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ")"))))),
                                        backgroundPosition: "center",
                                        height: "120px",
                                        margin: "18px",
                                        width: "120px",
                                        backgroundSize: "cover",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 16px rgb(200, 200, 200)"
                                      }
                                    }));
                    } else {
                      return React.createElement("div", {
                                  key: String(x),
                                  style: imageStyleRow
                                }, React.createElement("div", {
                                      style: {
                                        backgroundColor: "rgb(" + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ")"))))),
                                        backgroundPosition: "center",
                                        height: "120px",
                                        margin: "18px",
                                        width: "120px",
                                        backgroundSize: "cover",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 16px rgb(200, 200, 200)"
                                      }
                                    }), React.createElement("div", {
                                      style: {
                                        backgroundColor: "rgb(" + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ("," + (String(Js_math.random_int(0, 255)) + ")"))))),
                                        backgroundPosition: "center",
                                        height: "120px",
                                        margin: "18px",
                                        width: "120px",
                                        backgroundSize: "cover",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 16px rgb(200, 200, 200)"
                                      }
                                    }));
                    }
                  })));
}

var make = Squares;

exports.make = make;
/* react Not a pure module */
