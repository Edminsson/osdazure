function showClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsMouse.clickToZoom) {
        $("#clickToZoomLbl").text("clickToZoom är aktiverat");
    } else {
        $("#clickToZoomLbl").text("clickToZoom är inaktiverat");            
    }
}
function showDblClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsMouse.dblClickToZoom) {
        $("#dblClickToZoomLbl").text("dblClickToZoom är aktiverat");
    } else {
        $("#dblClickToZoomLbl").text("dblClickToZoom är inaktiverat");            
    }
}
function showTouchClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsTouch.clickToZoom) {
        $("#touchClickToZoomLbl").text("clickToZoom(touch) är aktiverat");
    } else {
        $("#touchClickToZoomLbl").text("clickToZoom(touch) är inaktiverat");            
    }
}
function showTouchDblClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsTouch.dblClickToZoom) {
        $("#touchdblClickToZoomLbl").text("dblClickToZoom(touch) är aktiverat");
    } else {
        $("#touchdblClickToZoomLbl").text("dblClickToZoom(touch) är inaktiverat");            
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

    