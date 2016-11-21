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

$(function() {
    $('#clickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsMouse.clickToZoom = !openSeadragonViewer.gestureSettingsMouse.clickToZoom;
        showClickToZoomStatus();
        showDblClickToZoomStatus();
    });  

    $('#dblClickToZoomBtn').on('click', function() {
        openSeadragonViewer.gestureSettingsMouse.dblClickToZoom = !openSeadragonViewer.gestureSettingsMouse.dblClickToZoom;
        showClickToZoomStatus();
        showDblClickToZoomStatus();
    });  
});

    