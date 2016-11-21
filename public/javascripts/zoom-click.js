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
        $("#touchclickToZoomBtn").text("clickToZoom(touch) är aktiverat");
    } else {
        $("#touchclickToZoomBtn").text("clickToZoom(touch) är inaktiverat");            
    }
}
function showTouchDblClickToZoomStatus() {
    if(openSeadragonViewer.gestureSettingsTouch.dblClickToZoom) {
        $("#touchdblClickToZoomBtn").text("dblClickToZoom(touch) är aktiverat");
    } else {
        $("#touchdblClickToZoomBtn").text("dblClickToZoom(touch) är inaktiverat");            
    }
}
function showStatusForAll() {
        showClickToZoomStatus();
        showDblClickToZoomStatus();
        showTouchClickToZoomStatus();
        showTouchDblClickToZoomStatus();
}

$(function() {
    $('#clickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsMouse.clickToZoom = !openSeadragonViewer.gestureSettingsMouse.clickToZoom;
        showStatusForAll();
    });  

    $('#dblClickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsMouse.dblClickToZoom = !openSeadragonViewer.gestureSettingsMouse.dblClickToZoom;
        showStatusForAll();
    });  

    $('#touchclickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsTouch.clickToZoom = !openSeadragonViewer.gestureSettingsTouch.clickToZoom;
        showStatusForAll();
    });  

    $('#touchdblClickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsTouch.dblClickToZoom = !openSeadragonViewer.gestureSettingsTouch.dblClickToZoom;
        showStatusForAll();
    });  
});

    