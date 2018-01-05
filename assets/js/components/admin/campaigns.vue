<template>
      <div class="row">
            <section class="content-header">
                <h2 class="col-md-5 pull-text">Campaigns</h2>
                  <a href="/add-new-campaign"><button type="button" class="blue-bt padlr20 clear pull-left">Add New Campaign</button></a>
            </section>
            </section>
            <section>
              <table class="table admtable table-bordered">
                 <thead>
                    <tr>
                      <td class="edit"></td>
                      <td class="num">No.</td>
                      <td class="campname">Campaign Name</td>
                      <td class="lteditedby">Last Edited</td>
                       <td class="lteditedby">Last Edited By</td>
                   </tr>
                   </thead>
                 <tbody>
                    <tr>
                      <td class="edit"><a href="/edit-admin-campaign"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">1</td>
                      <td class="campname">Bill Reminder</td>
                      <td class="lteditedby">July 10, 2017 <span class="time">2:00 PM</span></td>
                      <td class="lteditedby">John Vincent Doe</td>
                   </tr>
                   <tr>
                       <td class="edit"><a href="/edit-admin-campaign"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">2</td>
                      <td class="campname">Sample Campaign 2</td>
                      <td class="lteditedby">July 11, 2017 <span class="time">3:30 PM</span></td>
                      <td class="lteditedby">Juan Dela Cruz</td>
                   </tr>
                   <tr>
                       <td class="edit"><a href="/edit-admin-campaign"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">3</td>
                      <td class="campname">Untitled</td>
                      <td class="lteditedby">July 11, 2017 <span class="time">11:00 AM</span></td>
                      <td class="lteditedby">Katrina Rada</td>
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

