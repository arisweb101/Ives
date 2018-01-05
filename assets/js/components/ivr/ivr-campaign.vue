<template>
      <div class="row">
            <section class="content-header">
                <h2 class="col-md-5 pull-text">Campaigns</h2>
                   <!--<div class="col-md-4 pull-right text-right"> Updated as of July 10, 2017</div>-->
            </section>
            <section>
              <table class="table admtable table-bordered">
                 <thead>
                    <tr>
                      <td class="edit"></td>
                      <td class="num">No.</td>
                      <td class="campname">Campaign Name</td>
                      <td class="ltedited">Last Edited</td>
                   </tr>
                   </thead>
                 <tbody>
                    <tr>
                      <td class="edit"><a href="/edit-campaign"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">1</td>
                      <td class="campname">Bill Reminder</td>
                      <td class="ltedited">July 10, 2017 <span class="time">2:00 PM</span></td>
                   </tr>
                   <tr>
                       <td class="edit"><a href="/edit-campaign"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">2</td>
                      <td class="campname">Sample Campaign 2</td>
                      <td class="ltedited">July 11, 2017 <span class="time">3:30 PM</span></td>
                   </tr>
                   <tr>
                       <td class="edit"><a href="/edit-campaign"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">3</td>
                      <td class="campname">Untitled</td>
                      <td class="ltedited">July 11, 2017 <span class="time">11:00 AM</span></td>
                   </tr>
                   </tbody>
            </table>
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

