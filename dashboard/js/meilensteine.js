/*

  Meilensteine Trendanalyse

*/

var sollGraph = [
          [gd(2016, 0, 2), gd(2016, 0, 2)], [gd(2017, 3, 1), gd(2017, 3, 30)]];

var ms1 = [
  [gd(2016, 0, 1), gd(2016, 1, 1)], [gd(2016, 1, 1), gd(2016, 1, 1)]];

var ms2 = [
  [gd(2016, 0, 1), gd(2016, 4, 20)], [gd(2016, 2, 15), gd(2016, 4, 20)], [gd(2016, 3, 1), gd(2016, 5, 20)], [gd(2016, 5, 10), gd(2016, 5, 20)]];

var ms3 = [
  [gd(2016, 0, 1), gd(2016, 8, 20)], [gd(2016, 2, 15), gd(2016, 8, 20)], [gd(2016, 3, 1), gd(2016, 9, 20)], [gd(2016, 5, 10), gd(2016, 9, 20)], [gd(2016, 5, 20), gd(2016, 9, 11)], [gd(2016, 8, 23), gd(2016, 9, 11)]];

var dataset = [
   { label: "Soll", data: sollGraph },
   { label: "MS1", data: ms1 },
   { label: "MS2", data: ms2 },
   { label: "MS3", data: ms3 },
];

var options = {
     series: {
         lines: {
             show: true
         },
         points: {
             radius: 3,
             fill: true,
             show: true
         }
     },

     xaxis: {
         mode: "time",
         tickSize: [31, "day"],
         tickLength: 1,
         axisLabel: "2016/2017",
         axisLabelUseCanvas: true,
         axisLabelFontSizePixels: 12,
         axisLabelFontFamily: 'Verdana, Arial',
         axisLabelPadding: 10
     },



   yaxes: [{
         axisLabel: "2016/2017",
         mode: "time",
         tickSize: [31, "day"],
         axisLabelUseCanvas: true,
         axisLabelFontSizePixels: 12,
         axisLabelFontFamily: 'Verdana, Arial',
         axisLabelPadding: 3,

     }, {
         position: "left",
         axisLabelUseCanvas: true,
     }
   ],
     legend: {
         noColumns: 0,
         labelBoxBorderColor: "#000000",
         position: "nw"
     },
     grid: {
         color: "#999999",
         hoverable: true,
         clickable: true,
         tickColor: "#D4D4D4",
         borderWidth:0
     },
     tooltip: true,
     tooltipOpts: {
         content: "x: %x, y: %y"
     },
     colors: ["#FF0000", "#0022FF"]
 };


       function gd(year, month, day) {
           return new Date(year, month, day).getTime();
       }

       var previousPoint = null, previousLabel = null;
       var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


 $.plot($("#meilenstein-trendanalyse"), dataset, options);
$("#meilenstein-trendanalyse").UseTooltip();
