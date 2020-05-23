var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_COMMUNE_0 = new ol.format.GeoJSON();
var features_COMMUNE_0 = format_COMMUNE_0.readFeatures(json_COMMUNE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_COMMUNE_0.addFeatures(features_COMMUNE_0);var lyr_COMMUNE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_0, 
                style: style_COMMUNE_0,
                title: '<img src="styles/legend/COMMUNE_0.png" /> COMMUNE'
            });var format_TRONCONCOURSEAU_1 = new ol.format.GeoJSON();
var features_TRONCONCOURSEAU_1 = format_TRONCONCOURSEAU_1.readFeatures(json_TRONCONCOURSEAU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRONCONCOURSEAU_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TRONCONCOURSEAU_1.addFeatures(features_TRONCONCOURSEAU_1);var lyr_TRONCONCOURSEAU_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRONCONCOURSEAU_1, 
                style: style_TRONCONCOURSEAU_1,
                title: '<img src="styles/legend/TRONCONCOURSEAU_1.png" /> TRONCON COURS EAU'
            });var format_PARCELLE_2 = new ol.format.GeoJSON();
var features_PARCELLE_2 = format_PARCELLE_2.readFeatures(json_PARCELLE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELLE_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PARCELLE_2.addFeatures(features_PARCELLE_2);var lyr_PARCELLE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARCELLE_2, 
                style: style_PARCELLE_2,
                title: '<img src="styles/legend/PARCELLE_2.png" /> PARCELLE'
            });var format_BATIMENT_3 = new ol.format.GeoJSON();
var features_BATIMENT_3 = format_BATIMENT_3.readFeatures(json_BATIMENT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATIMENT_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BATIMENT_3.addFeatures(features_BATIMENT_3);var lyr_BATIMENT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATIMENT_3, 
                style: style_BATIMENT_3,
                title: '<img src="styles/legend/BATIMENT_3.png" /> BATIMENT'
            });var format_Centrebourg_4 = new ol.format.GeoJSON();
var features_Centrebourg_4 = format_Centrebourg_4.readFeatures(json_Centrebourg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrebourg_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centrebourg_4.addFeatures(features_Centrebourg_4);var lyr_Centrebourg_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrebourg_4, 
                style: style_Centrebourg_4,
                title: '<img src="styles/legend/Centrebourg_4.png" /> Centre bourg'
            });var format_PrimtreOPAH_5 = new ol.format.GeoJSON();
var features_PrimtreOPAH_5 = format_PrimtreOPAH_5.readFeatures(json_PrimtreOPAH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtreOPAH_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PrimtreOPAH_5.addFeatures(features_PrimtreOPAH_5);var lyr_PrimtreOPAH_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimtreOPAH_5, 
                style: style_PrimtreOPAH_5,
                title: '<img src="styles/legend/PrimtreOPAH_5.png" /> Périmètre OPAH'
            });
var group_Sisteron = new ol.layer.Group({
                                layers: [lyr_COMMUNE_0,lyr_TRONCONCOURSEAU_1,lyr_PARCELLE_2,lyr_BATIMENT_3,lyr_Centrebourg_4,],
                                title: "Sisteron"});

lyr_COMMUNE_0.setVisible(true);lyr_TRONCONCOURSEAU_1.setVisible(true);lyr_PARCELLE_2.setVisible(true);lyr_BATIMENT_3.setVisible(true);lyr_Centrebourg_4.setVisible(true);lyr_PrimtreOPAH_5.setVisible(true);
var layersList = [baseLayer,group_Sisteron,lyr_PrimtreOPAH_5];
lyr_COMMUNE_0.set('fieldAliases', {'id': 'id', 'insee_com': 'insee_com', 'code_com': 'code_com', 'nom_com': 'nom_com', });
lyr_TRONCONCOURSEAU_1.set('fieldAliases', {'id': 'id', 'insee_com': 'insee_com', 'texte': 'texte', 'section': 'section', });
lyr_PARCELLE_2.set('fieldAliases', {'id': 'id', 'insee_com': 'insee_com', 'section': 'section', 'code_com': 'code_com', 'numparc': 'numparc', 'coar': 'coar', 'idu': 'idu', 'indp': 'indp', 'indp_code': 'indp_code', 'supf': 'supf', 'tex': 'tex', 'num': 'num', 'num_fe_cad': 'num_fe_cad', });
lyr_BATIMENT_3.set('fieldAliases', {'id': 'id', 'insee_com': 'insee_com', 'dur': 'dur', 'dur_code': 'dur_code', 'section': 'section', });
lyr_Centrebourg_4.set('fieldAliases', {'id': 'id', 'Zones': 'Zones', });
lyr_PrimtreOPAH_5.set('fieldAliases', {'id': 'id', 'insee_com': 'insee_com', 'section': 'section', 'code_com': 'code_com', 'numparc': 'numparc', 'coar': 'coar', 'idu': 'idu', 'indp': 'indp', 'indp_code': 'indp_code', 'supf': 'supf', 'tex': 'tex', 'num': 'num', 'num_fe_cad': 'num_fe_cad', 'Occupation': 'Occupation', });
lyr_COMMUNE_0.set('fieldImages', {'id': 'TextEdit', 'insee_com': 'TextEdit', 'code_com': 'TextEdit', 'nom_com': 'TextEdit', });
lyr_TRONCONCOURSEAU_1.set('fieldImages', {'id': 'TextEdit', 'insee_com': 'TextEdit', 'texte': 'TextEdit', 'section': 'TextEdit', });
lyr_PARCELLE_2.set('fieldImages', {'id': 'TextEdit', 'insee_com': 'TextEdit', 'section': 'TextEdit', 'code_com': 'TextEdit', 'numparc': 'TextEdit', 'coar': 'TextEdit', 'idu': 'TextEdit', 'indp': 'TextEdit', 'indp_code': 'TextEdit', 'supf': 'TextEdit', 'tex': 'TextEdit', 'num': 'TextEdit', 'num_fe_cad': 'TextEdit', });
lyr_BATIMENT_3.set('fieldImages', {'id': 'TextEdit', 'insee_com': 'TextEdit', 'dur': 'TextEdit', 'dur_code': 'TextEdit', 'section': 'TextEdit', });
lyr_Centrebourg_4.set('fieldImages', {'id': 'TextEdit', 'Zones': 'TextEdit', });
lyr_PrimtreOPAH_5.set('fieldImages', {'id': 'TextEdit', 'insee_com': 'TextEdit', 'section': 'TextEdit', 'code_com': 'TextEdit', 'numparc': 'TextEdit', 'coar': 'TextEdit', 'idu': 'TextEdit', 'indp': 'TextEdit', 'indp_code': 'TextEdit', 'supf': 'TextEdit', 'tex': 'TextEdit', 'num': 'TextEdit', 'num_fe_cad': 'TextEdit', 'Occupation': 'TextEdit', });
lyr_COMMUNE_0.set('fieldLabels', {});
lyr_TRONCONCOURSEAU_1.set('fieldLabels', {});
lyr_PARCELLE_2.set('fieldLabels', {});
lyr_BATIMENT_3.set('fieldLabels', {});
lyr_Centrebourg_4.set('fieldLabels', {});
lyr_PrimtreOPAH_5.set('fieldLabels', {'id': 'inline label', 'insee_com': 'inline label', 'section': 'inline label', 'code_com': 'inline label', 'numparc': 'inline label', 'coar': 'inline label', 'idu': 'inline label', 'indp': 'inline label', 'indp_code': 'inline label', 'supf': 'inline label', 'tex': 'inline label', 'num': 'inline label', 'num_fe_cad': 'inline label', 'Occupation': 'inline label', });
lyr_PrimtreOPAH_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});