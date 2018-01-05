<template>
      <div class="row">
            <section class="content-header">
                <h2 class=" pull-text">Call Summary</h2>
                <div class="filters">
                <div class="col-md-3 reports-dd nopadding">
                    <select class="minimal">
                      <option>Answered Calls</option>
                    </select>
                </div>
                <div class="admsettings datefrom col-md-7 nopadding"> 
                   <div class="col-md-12 nopadding">
                      <div class="col-md-2 nopadding text-center to">Date from</div>
                      <div class="dateto col-md-10 nopadding">
                          <div class="col-md-5 nopadding">
                              <div class="form-group">
                                  <div id="datefrom" class="input-group date">
                                  <input class="date-field form-control" type="text"> 
                                  <span class="input-group-addon calendar-icon">
                                  <span class="glyphicon "><img src="images/main/calendar.svg" alt="" width="14"></span>
                                  </span>
                                  </div>
                              </div>
                          </div> 
                          <div class="col-md-1 nopadding text-center to">To</div> 
                          <div class="col-md-5 nopadding">
                              <div class="form-group">
                                  <div id="dateto" class="input-group date">
                                  <input class="date-field form-control" type="text"> 
                                  <span class="input-group-addon calendar-icon">
                                      <span class="glyphicon calendar-icon">
                                          <img src="images/main/calendar.svg" alt="" width="14">
                                      </span>
                                  </span>
                                  </div>
                              </div>
                          </div>
                      </div> 
               </div>
               </div>
               <div class="refresh">
                      <a href=""><img src="images/main/Refresh.svg" width="25"></a>
               </div>
               </div>
            </section>
            <div class="scrollerbar">
            <section>
              <table class="table admtable table-bordered">
                 <thead>
                    <tr>
                      <td class="num">No.</td>
                      <td class="datetime col-md-2">Date / Time</td>
                      <td class="user col-md-2">User</td>
                      <td class="message col-md-2">Message</td>
                      <td class="volume col-md-2">Volume</td>
                      <td class="processed col-md-2">Processed</td>
                      <td class="environment col-md-2">Environment</td>
                   </tr>
                   </thead>
                 <tbody>
                    <tr>
                     
                      <td class="num">1</td>
                      <td class="">July, 10 2017 &nbsp; 2:00 PM</td>
                       <td class="">John Vincent</td>
                          <td class="">Bill Reminder</td>
                          <td class=""></td>
                           <td class=""></td>
                            <td class=""></td>
                     
                   </tr>
                   <tr>
                      
                      <td class="num">2</td>
                      <td class="">July, 11 2017 &nbsp; 3:30 PM</td>
                       <td class="">Juan</td>
                          <td class="">Sample Campaign</td>
                          <td class=""></td>
                           <td class=""></td>
                            <td class=""></td>
                   </tr>
                   <tr>
                     
                      <td class="num">3</td>
                       <td class="">July, 12 2017 &nbsp; 11:00 PM</td>
                        <td class="">Carla</td>
                         <td class="">Untitled</td>
                          <td class=""></td>
                           <td class=""></td>
                            <td class=""></td>
                   </tr>
                   </tbody>
            </table>
            </section>
           </div>
          <button type="button" class="blue-bt padlr20">Download CSV</button>
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

