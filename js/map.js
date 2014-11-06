/**
 * Created by ben3029 on 11/6/14.
 */

var map;

require(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer",
    "dijit/form/Button",
    "dojo/domReady!"], function(Map,ArcGISDynamicMapServiceLayer,Button) {
    map = new Map("map", {
        basemap: "satellite",
        center: [-76.030, 36.745], // longitude, latitude
        zoom: 11
    });

    var parcellayer = new ArcGISDynamicMapServiceLayer("https://gismaps.vbgov.com/arcgis/rest/services/Basemaps/PropertyInformation_VBgov/MapServer", {
        "id": "parcellayer",
        "opacity": 1
    });
    map.addLayer(parcellayer);

    var footPrintLayer = new ArcGISDynamicMapServiceLayer("https://gismaps.vbgov.com/arcgis/rest/services/Basemaps/Structures_and_Physical_Features/MapServer", {
        "id": "footPrintLayer",
        "opacity": 1
    });
    map.addLayer(footPrintLayer);

});
