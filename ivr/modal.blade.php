<!-- ASSIGNED DTMF -->
<div id="dtmf-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Assigned DTMF</h4>
      </div>
      <div class="modal-body">
          <form action="">
              <div class="group-layer">
             <div class="ivr-titles">Title</div>
            <input type="text" placeholder="" value="Sample Menu 1">
            </div>
            <div class="group-layer">
            <div class="ivr-titles">Message</div>
            <textarea placeholder="Enter Message"></textarea>
            </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add" id="add-dtmf" data-dismiss="modal">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>

<!-- SOUND CLIP -->
<div id="soundclip-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Soundclip</h4>
      </div>
      <div class="modal-body">
          <form action="">
          <div class="group-layer">
             <div class="ivr-titles">Title</div>
            <input type="text" placeholder="" value="Sample Soundclip 1">
            </div>
            <div class="group-layer">
                <div class="ivr-titles">MP3 File</div>
                <div class="form-group">
                    <input name="img[]" class="file" type="file">
                      <div class="input-group">
                          <input disabled="disabled" value="" class="form-control upload input-lg" placeholder="Choose File..." type="text"> 
                          <span class="input-group-btn"><button type="button" class="browse btn input-lg">Upload</button></span>
                      </div>
                  </div>
             </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add" id="add-sound" data-dismiss="modal">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>

<!-- TEXT TO SPEECH -->
<div id="ttspeech-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Text-to-Speech</h4>
      </div>
      <div class="modal-body">
          <form action="">
          <div class="group-layer">
            <div class="ivr-titles">Title</div>
            <input type="text" placeholder="" value="Sample Text-to-Speech 1">
            </div>
            <div class="group-layer">
            <div class="ivr-titles">Message</div>
            <textarea placeholder="Enter Message"></textarea>
            </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add" id="add-ttspeech" data-dismiss="modal">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>


<!-- VARIABLE -->
<div id="variable-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Variable</h4>
      </div>
      <div class="modal-body">
          <form action="">
          <div class="group-layer">
             <div class="ivr-titles">Title</div>
                <input type="text" placeholder="" value="Customer Name">
            </div>
            <div class="group-layer">
            <div class="ivr-titles">Variable</div>
                <input type="text" class="form-control" placeholder="Name" aria-describedby="basic-addon1">
              </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>

<!-- REPEAT IVR -->
<div id="repeativr-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Assigned DTMF</h4>
      </div>
      <div class="modal-body">
          <form action="">
          <div class="group-layer">
             <div class="ivr-titles">Title</div>
            <input type="text" placeholder="" value="Sample Menu 1">
            </div>
            <div class="group-layer">
            <div class="ivr-titles">Message</div>
            <textarea placeholder="Enter Message"></textarea>
            </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>


<!-- TRANSFER CALL -->
<div id="transfercall-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Transfer Call</h4>
      </div>
      <div class="modal-body">
          <form action="">
            <div class="group-layer">
                <div class="ivr-titles">Title</div>
                <input type="text"  class="form-control"  placeholder="" value="Transfer to Billing">
            </div>
            <div class="group-layer">
                <div class="ivr-titles">Number</div>
                <div class="input-group">
                   <span class="input-group-addon" id="basic-addon1">+63</span>
                   <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add" id="add-tc" data-dismiss="modal">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>

<!-- SEND SMS -->
<div id="sendsms-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Send SMS</h4>
      </div>
      <div class="modal-body">
          <form action="">
          <div class="group-layer">
             <div class="ivr-titles">Title</div>
            <input type="text" placeholder="Title" value="">
            </div>
            <div class="group-layer">
            <div class="ivr-titles">Message</div>
            <textarea placeholder="Enter Message"></textarea>
            </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add" id="add-sms" data-dismiss="modal">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>


<!-- DROP CALL -->
<div id="dropcall-modal" class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Add Assigned DTMF</h4>
      </div>
      <div class="modal-body">
          <form action="">
             <div class="ivr-titles">Title</div>
            <input type="text" placeholder="" value="Sample Menu 1">
            <div class="ivr-titles">Message</div>
            <textarea placeholder="Enter Message"></textarea>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt add">Add</button></div>
          </form>
        </div>
      </div>
    </div>
</div>














