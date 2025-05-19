ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([384372.145759, 9144685.861878, 387300.547543, 9146680.178580]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AdmCandisarirfix_1 = new ol.format.GeoJSON();
var features_AdmCandisarirfix_1 = format_AdmCandisarirfix_1.readFeatures(json_AdmCandisarirfix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AdmCandisarirfix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdmCandisarirfix_1.addFeatures(features_AdmCandisarirfix_1);
var lyr_AdmCandisarirfix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdmCandisarirfix_1, 
                style: style_AdmCandisarirfix_1,
                popuplayertitle: 'AdmCandisarirfix',
                interactive: true,
    title: 'AdmCandisarirfix<br />\
    <img src="styles/legend/AdmCandisarirfix_1_0.png" /> Makam<br />\
    <img src="styles/legend/AdmCandisarirfix_1_1.png" /> Permukiman<br />\
    <img src="styles/legend/AdmCandisarirfix_1_2.png" /> Sawah Irigasi Teknis (LSD)<br />\
    <img src="styles/legend/AdmCandisarirfix_1_3.png" /> Sawah Tadah Hujan<br />\
    <img src="styles/legend/AdmCandisarirfix_1_4.png" /> Terminal<br />\
    <img src="styles/legend/AdmCandisarirfix_1_5.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_AdmCandisarirfix_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AdmCandisarirfix_1];
lyr_AdmCandisarirfix_1.set('fieldAliases', {'Id': 'Id', 'Penggunaan': 'Penggunaan', });
lyr_AdmCandisarirfix_1.set('fieldImages', {'Id': 'Range', 'Penggunaan': 'TextEdit', });
lyr_AdmCandisarirfix_1.set('fieldLabels', {'Id': 'no label', 'Penggunaan': 'inline label - visible with data', });
lyr_AdmCandisarirfix_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});