<template>
      <div class="row">
            <section class="content-header">
                <h2 class="col-md-5 pull-text">Accounts</h2>
                  <a href="/add-account"><button type="button" class="blue-bt padlr20 clear pull-left">Add Accounts</button></a>
            </section>
            <section>
              <table class="table admtable table-bordered">
                 <thead>
                    <tr>
                      <td class="edit"></td>
                      <td class="num">No.</td>
                      <td class="col-md-3">Full Name</td>
                      <td class="col-md-3">Email</td>
                      <td class="col-md-3">Role</td>
                      <td class="col-md-3">Status</td>
                   </tr>
                   </thead>
                 <tbody>
                    <tr>
                    <td class="edit"><a href="/edit-account"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">1</td>
                      <td class="col-md-3">John Vincent Doe</td>
                      <td class="col-md-3">johndoe@gmail.com</td>
                      <td class="col-md-3">Administrator</td>
                      <td class="col-md-3">Active</td>
                   </tr>
                    <tr>
                    <td class="edit"><a href="/edit-account"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">1</td>
                      <td class="col-md-3">John Vincent Doe</td>
                      <td class="col-md-3">johndoe@gmail.com</td>
                      <td class="col-md-3">Administrator</td>
                      <td class="col-md-3">Active</td>
                   </tr>
                    <tr>
                    <td class="edit"><a href="/edit-account"><img src="/images/main/edit-icon.jpg"></a></td>
                      <td class="num">1</td>
                      <td class="col-md-3">John Vincent Doe</td>
                      <td class="col-md-3">johndoe@gmail.com</td>
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

