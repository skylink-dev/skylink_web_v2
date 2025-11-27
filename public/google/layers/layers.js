var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_cbe_wards_map_20241coimbatore_ward_boundary_1 = new ol.format.GeoJSON();
var features_cbe_wards_map_20241coimbatore_ward_boundary_1 = format_cbe_wards_map_20241coimbatore_ward_boundary_1.readFeatures(json_cbe_wards_map_20241coimbatore_ward_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cbe_wards_map_20241coimbatore_ward_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cbe_wards_map_20241coimbatore_ward_boundary_1.addFeatures(features_cbe_wards_map_20241coimbatore_ward_boundary_1);
var lyr_cbe_wards_map_20241coimbatore_ward_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cbe_wards_map_20241coimbatore_ward_boundary_1, 
                style: style_cbe_wards_map_20241coimbatore_ward_boundary_1,
                popuplayertitle: 'cbe_wards_map_2024 (1) — coimbatore_ward_boundary',
                interactive: true,
                title: 'cbe_wards_map_2024 (1) — coimbatore_ward_boundary'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_cbe_wards_map_20241coimbatore_ward_boundary_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_cbe_wards_map_20241coimbatore_ward_boundary_1];
lyr_cbe_wards_map_20241coimbatore_ward_boundary_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'townname': 'townname', 'towncensuscode2011': 'towncensuscode2011', 'town_lgd_code': 'town_lgd_code', 'ward_lgd_code': 'ward_lgd_code', 'ward_lgd_name': 'ward_lgd_name', 'sourcewardname': 'sourcewardname', 'sourcewardcode': 'sourcewardcode', 'state': 'state', 'zone': 'zone', 'st_area(shape)': 'st_area(shape)', 'st_length(shape)': 'st_length(shape)', });
lyr_cbe_wards_map_20241coimbatore_ward_boundary_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'TextEdit', 'townname': 'TextEdit', 'towncensuscode2011': 'TextEdit', 'town_lgd_code': 'TextEdit', 'ward_lgd_code': 'TextEdit', 'ward_lgd_name': 'TextEdit', 'sourcewardname': 'TextEdit', 'sourcewardcode': 'TextEdit', 'state': 'TextEdit', 'zone': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_length(shape)': 'TextEdit', });
lyr_cbe_wards_map_20241coimbatore_ward_boundary_1.set('fieldLabels', {'id': 'no label', 'Name': 'hidden field', 'description': 'no label', 'timestamp': 'no label', 'begin': 'hidden field', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'objectid': 'inline label - always visible', 'townname': 'no label', 'towncensuscode2011': 'no label', 'town_lgd_code': 'no label', 'ward_lgd_code': 'no label', 'ward_lgd_name': 'no label', 'sourcewardname': 'header label - always visible', 'sourcewardcode': 'no label', 'state': 'no label', 'zone': 'no label', 'st_area(shape)': 'no label', 'st_length(shape)': 'no label', });
lyr_cbe_wards_map_20241coimbatore_ward_boundary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});