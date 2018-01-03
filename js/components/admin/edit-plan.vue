<template>

      <div class="row edit">
      <div id="delete-campaign"  class="modal fade ivr" role="dialog">
  <div class="modal-dialog">
  <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" data-dismiss="modal" class="close">
          <img src="images/ivr/close.png" width="20">
        </button>
        <h4 class="modal-title">Are you sure you want to <br> delete this campaign?</h4>
      </div>
      <div class="modal-body">
          <form action="">
            <div class="group-layer">
                <div class="text-center enterpass">Enter password to confirm</div>
                <div class="form-group">
                     
                          <input value="" class="form-control" placeholder="*******" type="password"> 
   
                  </div>
             </div>
            <div class="row text-left">
                <button type="button" class="trans-br-bt cancel pull-left" data-dismiss="modal">Cancel</button>
                 <button type="button" class="blue-bt continue pull-right"  data-dismiss="modal">Continue</button></div>
          </form>
        </div>
      </div>
    </div>
</div>

            <section class="content-header">
                <h2 class="col-md-5 pull-text ">Edit Campaign</h2>
            </section>
            <section>
              <div class="admsettings info-box">
                <div class="setfield col-md-8"> 
                  <div class="txt-group">
                   <div class="col-md-3 nopadding fd-left">Shortcode</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="98711" value=""> </div>
                  <div class="clear"></div>
                  </div>
                  <div class="txt-group">
                   <div class="col-md-3 nopadding fd-left">Campaign Name</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="Bill Reminder" value=""> </div>
                  <div class="clear"></div>
                  </div>
                   <div class="txt-group">
                  <div class="col-md-3 nopadding fd-left">Application</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="IVR" value=""> </div>
                  <div class="clear"></div>
                  </div>
                  <div class="txt-group">
                   <div class="col-md-3 nopadding fd-left">Version 2.0</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="2.0" value=""> </div>
                  <div class="clear"></div>
                  </div>
                 
                    <div class="col-md-3 nopadding fd-left">Access</div>
                     <div class="col-md-3 nopadding">
                     <div class="ch-list">
                     <input checked="checked" name="save" id="save" value="save" type="checkbox"> <label for="save">Save</label>
                     </div>
                      <div class="ch-list"><input name="tm" id="delete" value="delete" type="checkbox"> <label for="delete">Delete</label></div>
                       <div class="ch-list"><input name="settings" id="settings" value="" type="checkbox"> <label for="settings">Settings</label></div>
                     </div>
                      </div>
              </div>
            </section>  
            <section>
            <div class="row text-left admsettings col-md-12 nopadding">
            <button type="button" class="trans-br-bt cancel">Cancel</button> 
            <button type="button" class="blue-bt save">Save</button>
            <div class="col-md-3 pull-right delete">
              <button type="button" data-toggle="modal" data-target="#delete-campaign"  class="trans-br-bt delete"><img src="/images/main/Delete.svg" width="12">   Delete</button></div>
            </div>
            </section>
      </div>       

</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<script type="text/javascript">
    $(function () {
         $('#time').datetimepicker({
                    format: 'LT'
               });
        $('#datefrom').datetimepicker({
            format: "MMMM DD,YYYY"
        });
        
        $('#dateto').datetimepicker({
            format: "MMMM DD,YYYY",
            useCurrent: false //Important! See issue #1075
          });
        $("#datefrom").on("dp.change", function (e) {
            $('#dateto').data("DateTimePicker").minDate(e.date);

        });
        $("#dateto").on("dp.change", function (e) {
            $('#datefrom').data("DateTimePicker").maxDate(e.date);
        });
    });
</script>