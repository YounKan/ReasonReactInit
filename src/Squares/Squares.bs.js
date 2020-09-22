/* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */
'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function FetchedDogPictures(Props) {

  var countSquares = Props.count;
  var tmpAll = [];
  var tmpRow = [];
  var squares = Belt_Array.range(1, countSquares);
  Belt_Array.forEach(squares, (function (x) {
    var imageStyle = {
      height: "120px",
      margin: "18px",
      width: "120px",
      backgroundColor: getRandomColor(),
      backgroundSize: "cover",
      borderRadius: "8px",
      boxShadow: "0px 4px 16px rgb(200, 200, 200)"
    };
    tmpAll[x - 1] =
      React.createElement("div", {
        key: "squares child" + x,
        style: imageStyle
      })

    if (x % 3 === 0) {
      tmpRow[(x / 3) - 1] = React.createElement("div", {
        key: "squares row" + x,
        style: {
          display: "flex",
          margin: "18px",
          alignItems: "center",
          justifyContent: "center"
        }
      }, Belt_Array.slice(tmpAll, x - 3, 3));
    } else if (squares.length - x == 0) {
      var countRow = ((tmpRow.length) * 3)
      tmpRow[tmpRow.length] = React.createElement("div", {
        key: "squares row" + x,
        style: {
          display: "flex",
          height: "120px",
          alignItems: "center",
          justifyContent: "center"
        }
      }, Belt_Array.slice(tmpAll, countRow, squares.length - countRow));
    }
  }))

  return React.createElement("div", {
    style: {
      alignItems: "center",
      justifyContent: "center"
    }
  }, tmpRow);
}

var make = FetchedDogPictures;

exports.make = make;
/* react Not a pure module */
