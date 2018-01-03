<template>

      <div class="row edit">
            <section class="content-header">
                <h2 class="col-md-5 pull-text ">Add New Campaign</h2>
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
            <div class="row text-left admsettings">
            <button type="button" class="trans-br-bt cancel">Cancel</button> 
            <button type="button" class="blue-bt save">Save</button></div>
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