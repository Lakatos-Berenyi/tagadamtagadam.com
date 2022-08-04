TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_62349987_68AC_81AD_41AF_9B73F300BD92",
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 111,
  "hfov": 360,
  "hfovMin": 77,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_62349987_68AC_81AD_41AF_9B73F300BD92_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 306,
       "width": 612,
       "url": "media/panorama_62349987_68AC_81AD_41AF_9B73F300BD92_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7, this.camera_7A3A209B_68FC_9FA5_41A4_888020CFD618); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_64B02F53_68B3_82A5_4181_9449AD3349B7",
      "maps": [
       {
        "hfov": 35.81,
        "yaw": 9.41,
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 31,
           "url": "media/panorama_62349987_68AC_81AD_41AF_9B73F300BD92_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -33.29
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 9.41,
        "hfov": 35.81,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 62,
           "url": "media/panorama_62349987_68AC_81AD_41AF_9B73F300BD92_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -33.29
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_66E19677_68B4_836C_4187_C96521A1D33A",
      "class": "LensFlarePanoramaOverlay",
      "bleaching": 0.7,
      "yaw": -1.65,
      "pitch": 2
     }
    ]
   }
  ],
  "vfov": 180,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": 107.94,
    "panorama": {
     "id": "panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7",
     "class": "Panorama",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 306,
          "width": 612,
          "url": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_658027F4_68B4_8163_41D4_2477C69E5CBE",
         "maps": [
          {
           "hfov": 28.68,
           "yaw": -75.76,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_0_HS_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -60.82
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "gfgfgfg"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -75.76,
           "hfov": 28.68,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 100,
              "width": 100,
              "url": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -60.82
          }
         ]
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_62349987_68AC_81AD_41AF_9B73F300BD92, this.camera_7A2C20B5_68FC_9FED_41CE_0EA780F5FE9C); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_643029E7_68B4_816D_41BC_365D20B16F99",
         "maps": [
          {
           "hfov": 29.73,
           "yaw": 107.94,
           "image": {
            "levels": [
             {
              "height": 28,
              "width": 25,
              "url": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_0_HS_1_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -44.41
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 107.94,
           "hfov": 29.73,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "levels": [
             {
              "height": 57,
              "width": 51,
              "url": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -44.41
          }
         ]
        },
        {
         "bleachingDistance": 0.4,
         "id": "overlay_6531F948_68B4_8EA3_41C7_87ABED02BDAC",
         "class": "LensFlarePanoramaOverlay",
         "bleaching": 0.7,
         "yaw": -134.82,
         "pitch": 43.41
        },
        {
         "inertia": false,
         "id": "panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "image": {
          "levels": [
           {
            "height": 850,
            "width": 850,
            "url": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "angle": 0,
         "rotate": false
        }
       ]
      }
     ],
     "vfov": 180,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 9.41,
       "panorama": "this.panorama_62349987_68AC_81AD_41AF_9B73F300BD92",
       "yaw": 107.94,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "label": "istockphoto-650857986-612x612",
     "thumbnailUrl": "media/panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_t.jpg"
    },
    "yaw": 9.41,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "label": "istockphoto-576740268-612x612",
  "thumbnailUrl": "media/panorama_62349987_68AC_81AD_41AF_9B73F300BD92_t.jpg"
 },
 {
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_62349987_68AC_81AD_41AF_9B73F300BD92_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -0.71,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.94
    },
    {
     "targetYaw": -52.94,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -19.65
    },
    {
     "targetYaw": 21.88,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -33.76
    },
    {
     "targetYaw": -44.47,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -52.12
    },
    {
     "targetYaw": 57.18,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -63.41
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "manualRotationSpeed": 1720,
  "initialPosition": {
   "hfov": 93,
   "yaw": -96.72,
   "class": "PanoramaCameraPosition",
   "pitch": 5.01
  }
 },
 "this.panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 154.12,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -49.29
    },
    {
     "targetYaw": 105.18,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.94
    },
    {
     "targetYaw": -22.82,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -23.41
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -152,
   "class": "PanoramaCameraPosition",
   "pitch": -30.59
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_62349987_68AC_81AD_41AF_9B73F300BD92_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_62349987_68AC_81AD_41AF_9B73F300BD92",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7_camera",
    "media": "this.panorama_63AC91BE_68AD_81DC_41D9_BB0B9743EAE7",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)"
   }
  ]
 },
 {
  "fieldOfViewOverlayOutsideOpacity": 0,
  "image": {
   "levels": [
    {
     "height": 520,
     "width": 688,
     "url": "media/map_78A684B3_68B5_87E5_41C4_A60ECD2D27D7.jpeg",
     "class": "ImageResourceLevel"
    },
    {
     "height": 260,
     "grayscale": true,
     "width": 344,
     "url": "media/map_78A684B3_68B5_87E5_41C4_A60ECD2D27D7_lq.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "label": "Untitled",
  "maximumZoomFactor": 1.2,
  "width": 688,
  "id": "map_78A684B3_68B5_87E5_41C4_A60ECD2D27D7",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "class": "Map",
  "height": 520,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "minimumZoomFactor": 0.5,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "thumbnailUrl": "media/map_78A684B3_68B5_87E5_41C4_A60ECD2D27D7_t.jpg"
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "id": "playList_7A30B08A_68FC_9FA7_41B8_1A437CA895F9",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_78A684B3_68B5_87E5_41C4_A60ECD2D27D7",
    "class": "MapPlayListItem"
   }
  ]
 },
 {
  "id": "playList_7A30A08A_68FC_9FA7_41A3_8F552115D785",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_78A684B3_68B5_87E5_41C4_A60ECD2D27D7",
    "class": "MapPlayListItem"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_7A3A209B_68FC_9FA5_41A4_888020CFD618",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -152,
     "pitchSpeed": 5.48,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 10,
     "easing": "cubic_in_out",
     "targetPitch": -30.59
    },
    {
     "targetYaw": 154.12,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -49.29
    },
    {
     "targetYaw": 105.18,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.94
    },
    {
     "targetYaw": -22.82,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -23.41
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -72.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_7A2C20B5_68FC_9FED_41CE_0EA780F5FE9C",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -96.72,
     "pitchSpeed": 13.12,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 25.35,
     "easing": "cubic_in_out",
     "targetPitch": 5.01
    },
    {
     "targetYaw": -0.71,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.94
    },
    {
     "targetYaw": -52.94,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -19.65
    },
    {
     "targetYaw": 21.88,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -33.76
    },
    {
     "targetYaw": -44.47,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -52.12
    },
    {
     "targetYaw": 57.18,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -63.41
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "manualRotationSpeed": 1720,
  "initialPosition": {
   "hfov": 93,
   "yaw": -170.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderRadius": 0,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 5,
  "toolTipFontSize": 12,
  "playbackBarProgressBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "paddingLeft": 0,
  "height": "100%",
  "progressRight": 0,
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarLeft": 0,
  "width": "100%",
  "progressLeft": 0,
  "progressOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "transitionDuration": 500,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadWidth": 6,
  "top": 0,
  "minWidth": 100,
  "minHeight": 50,
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "id": "MainViewer",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "left": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "toolTipDisplayTime": 600,
  "progressBottom": 0,
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "toolTipFontFamily": "Arial"
 },
 {
  "toolTipBorderRadius": 3,
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderRadius": 0,
  "class": "ViewerArea",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "paddingLeft": 0,
  "height": "42.614%",
  "progressRight": 0,
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarLeft": 0,
  "width": "31.397%",
  "progressLeft": 0,
  "progressOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "transitionDuration": 500,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadWidth": 6,
  "top": "6.82%",
  "minWidth": 1,
  "minHeight": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "id": "MapViewer",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "toolTipDisplayTime": 600,
  "right": "5.12%",
  "progressBottom": 2,
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "toolTipFontFamily": "Arial"
 }
], 
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "class": "Player",
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "scrollBarWidth": 10,
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "creationPolicy": "delayed",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "horizontalAlign": "left",
 "minWidth": 20,
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player423"
 },
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_7A30A08A_68FC_9FA7_41A3_8F552115D785.set('selectedIndex', 0)",
 "contentOpaque": false
})