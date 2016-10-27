$(function() {

    var imageInfo = {};

    var viewer = window.openSeadragonViewer = OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl: 'lib/openseadragon/images/',
        crossOriginPolicy: 'anonymous'
    });

    function laddaBild(infoUri) {
        $.ajax({
            url: infoUri,
            dataType: "json"
        }).done(function(data) {
            imageInfo.width = data.width;
            imageInfo.height = data.height;
            console.log('Bildinfo:(w, h)', imageInfo.width, imageInfo.height);
            laddaTile(data);
        }).fail(function(error) {
            alert('Det uppstod ett fel');
        });
    }

    function laddaTile(info) {
        viewer.close();
        viewer.addTiledImage({
            tileSource: info,
            x: info.x,
            y: info.y,
            height: info.height,
            success: function(i) {
                viewer.viewport.goHome(true);
            } 
        }); 
    }

    var dataUri1 = 'https://iiif.riksarkivet.se/arkis!C0000268_00001/info.json';
    var dataUri2 = 'https://iiif.riksarkivet.se/arkis!C0000268_00015/info.json';
    laddaBild(dataUri1);    

    $('#laddabild1').on('click', function() {
        laddaBild(dataUri1);
    });
    $('#laddabild2').on('click', function() {
        laddaBild(dataUri2);
    });    
    $('#setmaxzoomlevel').on('click', function() {
        maxvalue = $('#maxzoomlevel').val();
        maxvalue = maxvalue.trim() ? maxvalue : null;
        openSeadragonViewer.viewport.maxZoomLevel = maxvalue;
    });    

});