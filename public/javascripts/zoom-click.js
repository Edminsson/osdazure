function showClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsMouse.clickToZoom) {
        $("#clickToZoomLbl").text("clickToZoom: PÅ");
    } else {
        $("#clickToZoomLbl").text("clickToZoom: AV");            
    }
}
function showDblClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsMouse.dblClickToZoom) {
        $("#dblClickToZoomLbl").text("dblClickToZoom: PÅ");
    } else {
        $("#dblClickToZoomLbl").text("dblClickToZoom: AV");            
    }
}
function showTouchClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsTouch.clickToZoom) {
        $("#touchClickToZoomLbl").text("clickToZoom(touch): PÅ");
    } else {
        $("#touchClickToZoomLbl").text("clickToZoom(touch): AV");            
    }
}
function showTouchDblClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsTouch.dblClickToZoom) {
        $("#touchdblClickToZoomLbl").text("dblClickToZoom(touch): PÅ");
    } else {
        $("#touchdblClickToZoomLbl").text("dblClickToZoom(touch): AV");            
    }
}
function showZoomStatusForAll() {
        showClickToZoomStatus();
        showDblClickToZoomStatus();
        showTouchClickToZoomStatus();
        showTouchDblClickToZoomStatus();
}

$(function() {
    $('#clickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsMouse.clickToZoom = !openSeadragonViewer.gestureSettingsMouse.clickToZoom;
        showZoomStatusForAll();
    });  

    $('#dblClickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsMouse.dblClickToZoom = !openSeadragonViewer.gestureSettingsMouse.dblClickToZoom;
        showZoomStatusForAll();
    });  

    $('#touchclickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsTouch.clickToZoom = !openSeadragonViewer.gestureSettingsTouch.clickToZoom;
        showZoomStatusForAll();
    });  

    $('#touchdblClickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsTouch.dblClickToZoom = !openSeadragonViewer.gestureSettingsTouch.dblClickToZoom;
        showZoomStatusForAll();
    });  
});

    