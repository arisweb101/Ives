var common = {

  isSource:true,
  isTarget:true,
  scroll: true,
  connector: "Straight",
  DragOptions : { cursor: 'grab', zIndex:2000 },
  cssClass: 'source-endpoint',
  paintStyle:{ radius:15 },
  connectorOverlays:[ 
  [ "Arrow", { width:30, length:15, location:0.95, id:"arrow" } ],
  ],
  deleteEndpointsOnDetach:false ,
  connectorStyle:{ strokeStyle:"#00ceff", lineWidth:3 },
  connectorHoverStyle:{ lineWidth:1 },
}

var endsource = { 
  isTarget:true,
  maxConnections:-1,
  connector: "Straight",
  DragOptions : { cursor: 'grab', zIndex:2000 },
  cssClass: 'source-endpoint',
  paintStyle:{ radius:15 },
  connectorOverlays:[ 
  [ "Arrow", { width:30, length:15, location:0.95, id:"arrow" } ],
  ],
  deleteEndpointsOnDetach:false ,
  connectorStyle:{ strokeStyle:"red", lineWidth:3 },
  connectorHoverStyle:{ lineWidth:1 },
};

var endtarget = { 
  isTarget:true,
  maxConnections:-1,
  connector: "Straight",
  DragOptions : { cursor: 'grab', zIndex:2000 },
  cssClass: 'source-endpoint',
  paintStyle:{ radius:15 },
  connectorOverlays:[ 
  [ "Arrow", { width:30, length:15, location:0.95, id:"arrow" } ],
  ],
  deleteEndpointsOnDetach:false ,
  connectorStyle:{ strokeStyle:"#00ceff", lineWidth:3 },
  connectorHoverStyle:{ lineWidth:1 },
};

var num = {

  isSource:true,
  isTarget:true,
  scroll: true,
  connector: "Straight",
  DragOptions : { cursor: 'grab', zIndex:2000 },
  cssClass: 'menu-num-endpoint',
  hoverClass: 'source-endpoint-hover',
  paintStyle: {
    strokeStyle: "green", fillStyle: "green", radius: 20, lineWidth: 1
  },
  connectorOverlays:[ 
  [ "Arrow", { width:30, length:15, location:0.95, id:"arrow" } ],
  ],
  deleteEndpointsOnDetach:false ,
  connectorStyle:{ strokeStyle:"#00ceff", lineWidth:3 },
  connectorHoverStyle:{ lineWidth:1 },
}

var minScale = 0.4;
var maxScale = 2;
var incScale = 5;
var plumb = null;
var $container = $(".drop-container");
$diagram = $container.find(".diagram");
var $panzoom = null;

jsPlumb.ready(function() {
  plumb = jsPlumb.getInstance({
    PaintStyle: { strokeWidth: 1 },
    Anchors: [["Left","Right","Bottom"], ["Top","Bottom"]],
    Container: $diagram,
  });

  var dg = new dagre.graphlib.Graph();
  dg.setGraph({nodesep:30,ranksep:30,marginx:50,marginy:50});
  dg.setDefaultEdgeLabel(function() { return {}; });

  plumb.getAllConnections()
  .forEach(function(edge) {dg.setEdge(edge.source.id,edge.target.id);});
  dagre.layout(dg);
  var graphInfo = dg.graph();
  dg.nodes().forEach(
    function(n) {
      var node = dg.node(n);
      var top = Math.round(node.y-node.height/2)+'px';
      var left = Math.round(node.x-node.width/2)+'px';
      $('#' + n).css({left:left,top:top});
    });
  plumb.repaintEverything();
  _.defer(function(){
    $panzoom = $container.find('.panzoom').panzoom({
      minScale: 0.7,
      maxScale: 1.2,
      increment: incScale,
      cursor: "",
      disablePan: true,

    }).on("panzoomstart",function(e,pz,ev){
      $panzoom.css("cursor","move");
    })
    .on("panzoomend",function(e,pz){
      $panzoom.css("cursor","");
    });
    $panzoom.parent().on('mousewheel.focal', function (e) {
      e.preventDefault();
      var delta = e.delta || e.originalEvent.wheelDelta;
      var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
      $panzoom.panzoom('zoom', zoomOut, {
        increment: 0.1,
        decrement: 0.1,
        animate: true,
        focal: e
      });
    })
    .on("mousedown touchstart",function(ev){
      var matrix = $container.find(".panzoom").panzoom("getMatrix");
      var offsetX = matrix[4];
      var offsetY = matrix[5];
      var dragstart = {x:ev.pageX,y:ev.pageY,dx:offsetX,dy:offsetY};
      $(ev.target).css("cursor","move");
      $(this).data('dragstart', dragstart);
    })
    .on("mousemove touchmove", function(ev){
      var dragstart = $(this).data('dragstart');
      if(dragstart)
      {
        var deltaX = dragstart.x-ev.pageX;
        var deltaY = dragstart.y-ev.pageY;
        var matrix = $container.find(".panzoom").panzoom("getMatrix");
        matrix[4] = parseInt(dragstart.dx)-deltaX;
        matrix[5] = parseInt(dragstart.dy)-deltaY;
        $container.find(".panzoom").panzoom("setMatrix",matrix);
      }
    })
    .on("mouseup touchend touchcancel", function(ev){
      $(this).data('dragstart',null);
      $(ev.target).css("cursor","");
    });
  });


  jsPlumb.addEndpoint("start", { 
    anchor : 'Bottom',
    maxConnections: 1,
  }, common)
  jsPlumb.draggable(start);  
});


/** ADD DTMF **/
$('body').on('click','#add-dtmf', function(){

  var id_dtmf = "dtmf_" + $(".mainmenu").length;
  var dtmf_temp = $(

    '<div id="' + id_dtmf + '" class="mainmenu">' +
    '<div class="features-header">' +
    '<span class="col-md-10 pull-left">Sample Menu 1</span>' +    
    '<span class="col-md-2 pull-right text-right">' + 
    '<span class="edit-icon"><a href="Javascript:void(0)" class="xicon edit" data-toggle="modal" data-target="#dtmf-modal"  title="Remove"><i class="fa fa-pencil" aria-hidden="true"></i></span></a>' +
    '<span class="delete-icon"><a href="Javascript:void(0)" class="xicon delete"  title="Remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></a>' +
    '</span>' +
    '</div>' +
    '<div class="features-body">' +
    '<div class="col-md-8 menu-message nopadding">' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis maximus neque, eget efficitur felis. Mauris molestie, nisl a sollicitudin iaculis, dui metus luctus ipsum, eu ultrices est sapien nec ipsum. Nulla augue tortor, pulvinar nec molestie id, fermentum non ex. Nulla facilisi. Fusce eget metus porttitor, molestie urna id, accumsan dui.</p>' +
    '</div>' +
    '<div class="col-md-4 num nopadding">' +
    '<ul class="menunum">' +
    '<li id="num1">1</li>' +
    '<li id="num2">2</li>' +
    '<li id="num3">3</li>' +
    '<li id="num4">4</li>' +
    '<li id="num5">5</li>' +
    '<li id="num6">6</li>' +
    '<li id="num7">7</li>' +
    '<li id="num8">8</li>' +
    '<li id="num9">9</li>' +
    '<li id="numhash">#</li>' +
    '<li id="num0">0</li>' +
    '<li id="numast">*</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>' 
    );

  dtmf_temp.appendTo('.diagram');

  if (id_dtmf == "dtmf_0" ) {
    $("#add-dtmf").hide();
  }

  var num1 = $(".mainmenu #num1");
  var num2 = $(".mainmenu #num2");
  var num3 = $(".mainmenu #num3");
  var num4 = $(".mainmenu #num4");
  var num5 = $(".mainmenu #num5");
  var num6 = $(".mainmenu #num6");
  var num7 = $(".mainmenu #num7");
  var num8 = $(".mainmenu #num8");
  var num9 = $(".mainmenu #num9");
  var num0 = $(".mainmenu #numhash");
  var num0 = $(".mainmenu #num0");
  var numast = $(".mainmenu #numast");

  jsPlumb.addEndpoint(dtmf_temp, {
    anchor: ["Top"],
    cssClass: "menu-endpoint"
  },common);

/* jsPlumb.addEndpoint(id_dtmf, {
anchor: ["Bottom"],
cssClass: "menu-endpoint"
},common);
*/


jsPlumb.makeTarget(id_dtmf, {
  anchor: "Top"
},endtarget);

jsPlumb.addEndpoint(num1, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num2, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num3, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num4, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num5, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num6, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num7, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num8, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num9, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(numhash, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(num0, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);

jsPlumb.addEndpoint(numast, { 
  anchor:[0.5, 0.5, 0, 2, 0, 0, "top" ],
}, num);



jsPlumb.draggable(id_dtmf);

$('body').on('click','#'+id_dtmf+' .delete', function () {
  jsPlumb.remove(id_dtmf);
  $("#add-dtmf").show();
});



})



/** ADD TEXT TO SPEECH **/
$('body').on('click','#add-ttspeech', function(){

  var id_tts = "tts_" + $(".texttospeech").length;

  var tts_temp = $(
    '<div id="' + id_tts +'" class="texttospeech">' +
    '<div class="features-header">' +
    '<span class="col-md-10 pull-left">Sample Text To Speech 1</span>' +    
    '<span class="col-md-2 pull-right text-right">' + 
    '<span class="edit-icon"><a href="Javascript:void(0)" class="xicon edit" data-toggle="modal" data-target="#ttspeech-modal"  title="Remove"><i class="fa fa-pencil" aria-hidden="true"></i></span></a>' +
    '<span class="delete-icon"><a href="Javascript:void(0)" class="xicon delete"  title="Remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></a>' +
    '</span>' +
    '</div>' +
    '<div class="features-body">' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis maximus neque, eget efficitur felis. Mauris molestie, nisl a sollicitudin iaculis, dui metus luctus ipsum, eu ultrices est sapien nec ipsum. Nulla augue tortor, pulvinar nec molestie id, fermentum non ex. Nulla facilisi. Fusce eget metus porttitor, molestie urna id, accumsan dui.</p>' +
    '</div>' +
    '</div>'
    );

  tts_temp.appendTo('.diagram');


  $('body').on('click','#'+id_tts+' .delete', function () {
    jsPlumb.remove(id_tts);
  });


  jsPlumb.addEndpoint(id_tts, {
    anchor: ["Top"],
    cssClass: "menu-endpoint"
  },common);

  jsPlumb.addEndpoint(id_tts, {
    anchor: ["Bottom"],
    cssClass: "menu-endpoint"
  },common);

  jsPlumb.makeTarget(id_tts, {
    anchor: "Top",
  },endtarget);

/*      $('#'+id_tts+'').hover(

function() { 
var textpoints = jsPlumb.getEndpoints(id_tts);
textpoints.addClass('showendpoint');
}

); */

jsPlumb.draggable(id_tts);
})




/** ADD TRANSFER CALL **/
$('body').on('click','#add-tc', function(){

  var id_tc = "tc_" + $(".transfercall").length;

  var tc_temp = $(

    '<div id="' + id_tc + '" class="transfercall">' +
    '<div class="features-header">' +
    '<span class="col-md-9 pull-left">Sample Text To Speech 1</span>' +    
    '<span class="col-md-3 pull-right text-right">' + 
    '<span class="edit-icon"><a href="Javascript:void(0)" class="xicon edit" data-toggle="modal" data-target="#transfercall-modal"  title="Remove"><i class="fa fa-pencil" aria-hidden="true"></i></span></a>' +
    '<span class="delete-icon"><a href="Javascript:void(0)" class="xicon delete"  title="Remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></a>' +
    '</span>' +
    '</div>' +
    '<div class="features-body">' +
    '<div class="group-layer">' +
    '<div class="input-group">' +
    '<span class="input-group-addon" id="basic-addon1">+63</span>' +
    '<input class="form-control" placeholder="" aria-describedby="basic-addon1" type="text">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
    );

  tc_temp.appendTo('.diagram');


  $('body').on('click','#'+id_tc+' .delete', function () {
    jsPlumb.remove(id_tc);
  });


  jsPlumb.makeTarget(id_tc, {
    anchor: "Top"
  },endtarget);

  jsPlumb.draggable(id_tc);
})



/** SEND SMS **/
$('body').on('click','#add-sms', function(){

  var id_sms = "sms_" + $(".sendsms").length;

  var sms_temp = $(
    '<div id="' + id_sms +'" class="sendsms">' +
    '<div class="features-header">' +
    '<span class="col-md-10 pull-left">Sample SMS Message</span>' +    
    '<span class="col-md-2 pull-right text-right">' + 
    '<span class="edit-icon"><a href="Javascript:void(0)" class="xicon edit" data-toggle="modal" data-target="#sendsms-modal"  title="Remove"><i class="fa fa-pencil" aria-hidden="true"></i></span></a>' +
    '<span class="delete-icon"><a href="Javascript:void(0)" class="xicon delete"  title="Remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></a>' +
    '</span>' +
    '</div>' +
    '<div class="features-body">' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis maximus neque, eget efficitur felis. Mauris molestie, nisl a sollicitudin iaculis, dui metus luctus ipsum, eu ultrices est sapien nec ipsum. Nulla augue tortor, pulvinar nec molestie id, fermentum non ex. Nulla facilisi. Fusce eget metus porttitor, molestie urna id, accumsan dui.</p>' +
    '</div>' +
    '</div>'
    );

  sms_temp.appendTo('.diagram');


  $('body').on('click','#'+id_sms+' .delete', function () {
    jsPlumb.remove(id_sms);
  });

  jsPlumb.makeTarget(id_sms, {
    anchor: "Top"
  },endtarget);

  jsPlumb.draggable(id_sms);
})


/** SOUND CLIP **/
$('body').on('click','#add-sound', function(){

  var id_sound = "sound_" + $(".soundclip").length;

  var sound_temp = $(
    '<div id="' + id_sound + '" class="soundclip">' +
    '<div class="features-header">' +
    '<span class="col-md-9 pull-left">Sample SoundClip 1</span>' +    
    '<span class="col-md-3 pull-right text-right">' + 
    '<span class="edit-icon"><a href="Javascript:void(0)" class="xicon edit" data-toggle="modal" data-target="#soundclip-modal"  title="Remove"><i class="fa fa-pencil" aria-hidden="true"></i></span></a>' +
    '<span class="delete-icon"><a href="Javascript:void(0)" class="xicon delete"  title="Remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></a>' +
    '</span>' +
    '</div>' +
    '<div class="features-body">' +
    '<div class="group-layer">' +
    '<div class="col-md-11 nopadding">' +
    '<input class="form-control" placeholder="" aria-describedby="basic-addon1" type="text" value="testsoundclip.mp3">' +
    '</div>' +
    '<div class="col-md-1 sound nopadding">' +
    '<span><img src="images/ivr/sound.png" width="20"></span>' +
    '</div>' +  
    '</div>' +
    '</div>' +
    '</div>'
    );

  sound_temp.appendTo('.diagram');

  $('body').on('click','#'+id_sound+' .delete', function () {
    jsPlumb.remove(id_sound);
  });

  jsPlumb.makeTarget(id_sound, {
    anchor: "Top"
  },endtarget);

  jsPlumb.draggable(id_sound);
})



$('.dropdown-toggle').dropdown();