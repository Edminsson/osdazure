$(function() {

    var imageInfo = {};

    var viewer = window.openSeadragonViewer = OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl: 'lib/openseadragon/images/',
        crossOriginPolicy: 'anonymous'
    });

    function laddaBild(infoUri) {
        if(Modernizr.cors) {
            laddaBildMedCors(infoUri);            
        } else {
            laddaBildMedJsonp(infoUri);
        }
        //Funktion som finns i zoom-click.js
        showZoomStatusForAll();
    }

    function laddaBildMedCors(infoUri) {
        $.ajax({
            url: infoUri,
            dataType: "json"
        }).done(function(data) {
            imageInfo.width = data.width;
            imageInfo.height = data.height;
            console.log('Bildinfo:(w, h)', imageInfo.width, imageInfo.height);
            laddaTile(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            alert('Det uppstod ett fel' + textStatus + errorThrown);
        });
    }

    function laddaBildMedJsonp(infoUri) {
        var settings = {
            url: infoUri,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'imageInfoCallback'
        };
        window.imageInfoCallback = function(json) {
            laddaTile(json);
        };
        $.ajax(settings);
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
    var dataUri2 = 'https://iiif.riksarkivet.se/arkis!C0000268_00003/info.json';

    laddaBild(dataUri1);            

    $('#laddabild1').on('click', function() {
        laddaBild(dataUri1);
    });
    $('#laddabild2').on('click', function() {
        laddaBild(dataUri2);
    });    
    $('#setmaxzoomlevel').on('click', function() {
        var maxvalue = $('#maxzoomlevel').val();
        if(maxvalue.trim) {
            maxvalue = maxvalue.trim() ? maxvalue : null;
        } else {
            maxvalue = maxvalue !== "" ? maxvalue : null;
        }
        openSeadragonViewer.viewport.maxZoomLevel = maxvalue;
    });    
    $('#zoomin').on('click', function() {
        try {
            var zoom = openSeadragonViewer.viewport.getZoom(true);
            openSeadragonViewer.viewport.zoomTo(zoom * 2);
        }
        catch (err) {
            alert("getZoom error", err);
        }
    });
    $('#runGetContext2d').on('click', function() {
        var tid = new Date();
        var useTryCatch = document.getElementById('checkis').checked;
        var canvas;
        if (useTryCatch) {
            try {
                canvas = document.createElement( 'canvas' );
                canvas.getContext('2d');
                $('#meddelande').text("Canvas getContext('2d') funkar - " + tid.toLocaleTimeString());
            }
            catch (err) {
                alert("Canvas getContext error - " + tid.toLocaleTimeString(), err);
            }
        } else {
            canvas = document.createElement( 'canvas' );
            canvas.getContext('2d');            
        }
    });
    $('#settileopacity').on('click', function() {
        var tileopacity = $('#tileopacityTxt').val();
        openSeadragonViewer.world.getItemAt(0).setOpacity(Number(tileopacity));
    });    

});