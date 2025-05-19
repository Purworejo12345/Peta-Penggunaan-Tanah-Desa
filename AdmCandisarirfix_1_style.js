var size = 0;
var placement = "point";
function categories_AdmCandisarirfix_1(
  feature,
  value,
  size,
  resolution,
  labelText,
  labelFont,
  labelFill,
  bufferColor,
  bufferWidth,
  placement
) {
  var valueStr =
    value !== null && value !== undefined ? value.toString() : "default";
  switch (valueStr) {
    case "Makam":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.3)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(255,125,125,0.3)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Permukiman":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.3)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(255,125,125,0.3)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Sawah Irigasi Teknis (LSD)":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.3)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(200,225,100,0.3)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Sawah Tadah Hujan":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.3)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(200,225,100,0.3)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    case "Terminal":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.3)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(255,190,0,0.3)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
    default:
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.3)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(152,0,67,0.3)" }),
          text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth
          ),
        }),
      ];
      break;
  }
}

var style_AdmCandisarirfix_1 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("Penggunaan");
  var labelFont = "10px, sans-serif";
  var labelFill = "#000000";
  var bufferColor = "";
  var bufferWidth = 0;
  var textAlign = "left";
  var offsetX = 0;
  var offsetY = 0;
  var placement = "point";
  if ("" !== null) {
    labelText = String("");
  }

  var style = categories_AdmCandisarirfix_1(
    feature,
    value,
    size,
    resolution,
    labelText,
    labelFont,
    labelFill,
    bufferColor,
    bufferWidth,
    placement
  );

  return style;
};
