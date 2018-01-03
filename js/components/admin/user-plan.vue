<template>
      <div class="row">
            <section class="content-header">
                <h2 class="col-md-5 pull-text">User Plan</h2>
                  <a href="/add-new-plan"><button type="button" class="blue-bt padlr20 clear pull-left">Add New Plan</button></a>
            </section>
            <section>
              <table class="table admtable table-bordered">
                 <thead>
                    <tr>
                      <td class="edit"></td>
                      <td class="num">No.</td>
                      <td class="col-md-3">Plan</td>
                      <td class="col-md-3">Date Created</td>
                      <td class="col-md-3">Created By</td>
                      <td class="col-md-3">Status</td>
                   </tr>
                   </thead>
                 <tbody>
                    <tr>
                    <td class="edit"><a href="/edit-plan"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">001</td>
                      <td class="col-md-3">Basic</td>
                      <td class="col-md-3">July 10, 2017 2:00 PM</td>
                      <td class="col-md-3">Administrator</td>
                      <td class="col-md-3">Active</td>
                   </tr>
                    <tr>
                    <td class="edit"><a href="/edit-plan"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">002</td>
                      <td class="col-md-3">Premium Plan</td>
                      <td class="col-md-3">July 10, 2017 3:00 PM</td>
                      <td class="col-md-3">Administrator</td>
                      <td class="col-md-3">Active</td>
                   </tr>
                    <tr>
                    <td class="edit"><a href="/edit-plan"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">003</td>
                      <td class="col-md-3">Enterprise Plan</td>
                      <td class="col-md-3">July 10, 2017 4:00 PM</td>
                      <td class="col-md-3">Administrator</td>
                      <td class="col-md-3">Active</td>
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

