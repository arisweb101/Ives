<template>

      <div class="row edit">
            <section class="content-header">
                <h2 class="col-md-5 pull-text ">Edit Plan</h2>
            </section>
            <section>
              <div class="admsettings info-box">
                <div class="setfield col-md-8"> 
                  <div class="txt-group">
                   <div class="col-md-3 nopadding fd-left">Shortcode</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="001" value=""> </div>
                  <div class="clear"></div>
                  </div>
                  <div class="txt-group">
                   <div class="col-md-3 nopadding fd-left">Plan</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="Premium Plan" value=""> </div>
                  <div class="clear"></div>
                  </div>
                   <div class="txt-group">
                  <div class="col-md-3 nopadding fd-left">Date Created</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="July 10, 2017 2:00 PM" value=""> </div>
                  <div class="clear"></div>
                  </div>
                 
                 <div class="txt-group">
                 <div class="col-md-3 nopadding fd-left">Role</div> 
                 <div class="col-md-3 nopadding">
                 <select>
                 <option>Administrator</option>
                  <option>Client</option>
                  </select>
                  </div>
                  <div class="clear"></div></div>
                   <div class="txt-group">
                   <div class="col-md-3 nopadding fd-left">Status</div>
                    <div class="col-md-3 nopadding">
                    <select class="status">
                    <option>Active</option>
                     <option>Inactive</option>
                     </select>
                     </div>
                      <div class="clear"></div></div>
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