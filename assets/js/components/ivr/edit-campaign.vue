<template>

      <div class="row">
            <section class="content-header">
                <h2 class="col-md-5 pull-text">Settings</h2>
            </section>
            <section>
              <div class="admsettings info-box">
                <div class="setfield col-md-8"> 
                  <div class="col-md-3 nopadding fd-left">Campaign Name</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="" value="Sample Campaign 1"> </div>
                  <div class="clear"></div>
                </div>
                 <div class="setfield col-md-8">
                  <div class="col-md-3 nopadding fd-left">Service Type</div>
                  <div class="col-md-3 nopadding">
                    <div class="ch-list">
                     <input type="checkbox" checked name="sms" id="sms" value="">
                      <label for="sms">SMS</label>
                      </div>
                      <div class="ch-list">
                     <input type="checkbox" name="voice" id="voice" value="">
                      <label for="voice">Voice</label>
                      </div>
                  </div>
                  <div class="clear"></div>
                </div>
                 <div class="setfield col-md-8">
                  <div class="col-md-3 nopadding fd-left">Brand Participation</div>
                    <div class="col-md-3 nopadding">
                      <div class="ch-list">
                      <input type="checkbox" checked name="sms" id="sms" value="">
                      <label for="sms">Globe</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox"  name="tm" id="tm" value="">
                      <label for="tm">TM</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox" name="smart" id="smart" value="">
                      <label for="smart">Smart</label>
                      </div>
                      <div class="ch-list">
                     <input type="checkbox" name="sun" id="sun" value="">
                      <label for="sun">Sun</label>
                      </div>
                    </div>
                    <div class="col-md-3 nopadding">
                      <div class="ch-list">
                      <input type="checkbox"  name="g-landline" id="g-landline" value="">
                      <label for="g-landline">Globe Landline</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox"  name="s-landline" id="s-landline" value="">
                      <label for="s-landline">Smart Landline</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox" name="b-landline" id="b-landline" value="">
                      <label for="b-landline">Bayantel Landline</label>
                      </div>
                   </div>
                  <div class="clear"></div>
                </div>
                 <div class="setfield col-md-8">
                  <div class="col-md-3 nopadding fd-left">Short Code</div>
                  <div class="col-md-3 nopadding">487035083</div>
                  <div class="clear"></div>
                </div>
                 <div class="setfield col-md-8">
                  <div class="col-md-3 nopadding fd-left">Call Volume</div>
                  <div class="col-md-3 nopadding"><input type="text" placeholder="" value=""> </div>     
                <div class="clear"></div>
                </div>
              </div>
           </section>
             <section class="content-header">
                <h2 class="col-md-5 pull-text">Schedule</h2>
            </section>
            <section>
              <div class="admsettings info-box">
                <div class="setfield-nobr col-md-8">
                  <div class="col-md-2 nopadding fd-left">Time</div>
                    <div class="col-md-2 nopadding">
                       <div class="col-sm-6 nopadding">
            <div class="form-group">
                <div class='input-group date' id='time'>
                    <input type='text' class="form-control time" />
                    <span class="input-group-addon time-icon" >
                        <span class="glyphicon"><img src="/images/main/time-arrow.png" width="20"></span>
                    </span>
                </div>
            </div>
        </div>
        
                   </div>
                  <div class="clear"></div>
                </div>
                <div class="setfield-nobr col-md-8 nopadding">
                   <div class="col-md-2 nopadding fd-left">Date</div>
                    <div class="dateto col-md-10 nopadding">
                        <div class="col-md-4 nopadding">
                            <div class="form-group">
                                <div class="input-group date" id="datefrom">
                                    <input type='text' class="date-field form-control" />
                                    <span class="input-group-addon calendar-icon">
                                        <span class="glyphicon "><img src="images/main/calendar.svg" alt="" width="14"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1 nopadding text-center to">To</div>
                        <div class="col-md-4 nopadding">
                            <div class="form-group">
                                <div class='input-group date' id='dateto'>
                                    <input type='text' class="date-field form-control" />
                                    <span class="input-group-addon calendar-icon">
                                        <span class="glyphicon calendar-icon"><img src="images/main/calendar.svg" width="14" alt=""></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                      </div>
                    <div class="clear"></div>
                  <div class="setfield-nobr col-md-8 nopadding">
                    <div class="col-md-2 nopadding fd-left">&nbsp;</div>
                    <div class="col-md-3 nopadding">
                      <div class="ch-list">
                      <input type="checkbox" checked name="monday" id="monday" value="">
                      <label for="monday">Monday</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox"  name="tue" id="tuesday" value="">
                      <label for="tuesday">Tuesday</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox" name="wed" id="wednesday" value="">
                      <label for="wednesday">Wednesday</label>
                      </div>
                      <div class="ch-list">
                     <input type="checkbox" name="thursday" id="thursday" value="">
                      <label for="thursday">Thursday</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox" name="friday" id="friday" value="">
                      <label for="friday">Friday</label>
                      </div>
                   </div>
                    <div class="col-md-3 nopadding">
                     <div class="ch-list">
                     <input type="checkbox" name="saturday" id="saturday" value="">
                      <label for="saturday">Saturday</label>
                      </div>
                       <div class="ch-list">
                     <input type="checkbox" name="sunday" id="sunday" value="">
                      <label for="sunday">Sunday</label>
                      </div>
                    </div>
                </div>
              </div>
              </div>
           </section>
             <section class="content-header">
                <h2 class="col-md-5 pull-text">Upload CSV</h2>
            </section>
            <section>
              <div class="admsettings info-box">
                <div class="setfield-nobr col-md-8">
                  <div class="form-group">
                  <input type="file" name="img[]" class="file">
                  <div class="input-group col-md-5">
                    <input type="text" class="form-control upload input-lg" disabled value="Choose File...">
                    <span class="input-group-btn">
                      <button class="browse btn input-lg" type="button">Upload</button>
                    </span>
                    </div>
                     <div class="exceed">*file should not exceed 100mb</div>
                </div>
              </div>
              </div>
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