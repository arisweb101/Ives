<template>
                  <div class="box box-solid box-default ">
              <div class="box-body profile">
                <div class="col-md-3 text-right">
                  <div class="change-photo">
                    <div class="user-panel">
                      <div class="text-center image">
                          <img src="/components/themes/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
                      </div>
                      <div class="text-center info">
                          <!--<p>John Vincent</p>-->
                          <!-- Status -->
                          <a href="#">Change Photo</a>
                      </div>
                  </div>

                  </div>
                </div>
                <div class="col-md-8">
                    <!-- Modal -->
                  <div id="profile-setup" role="dialog">
                    
                    <div class="modal-dialog">
                      <!-- Modal content-->
                      <div class="modal-content">
                         <div class="modal-body">
                          <form action="">
                          <div class="col-md-12">
                            <div class="row">
                              <h2 class="blue-title">Basic Details</h2>
                             
                              <div class="col-md-6 nopadding txt-field">
                               <label>First Name</label><input type="text" placeholder="John Vincent" value="">
                               </div>
                              <div class="col-md-6 nopadding txt-field">
                              <label>Last Name</label><input type="text" placeholder="Doe" value="">
                              </div>
                               <div class="col-md-6 nopadding txt-field">
                              <label>Email</label><input type="text" placeholder="johndoe@gmail.com" value="">
                              </div>
                               <div class="col-md-6 nopadding txt-field">
                              <label>Mobile No.</label><input type="text" placeholder="+63 9172345678" value="">
                              </div>           
                            </div>
                               <div class="row">
                              <h2 class="blue-title">Company Details</h2>
                             
                              <div class="col-md-6 nopadding txt-field">
                               <input type="text" placeholder="Designation" value="">
                               </div>
                              <div class="col-md-6 nopadding txt-field">
                              <input type="text" placeholder="Company" value="">
                              </div>
                               <div class="col-md-8 nopadding txt-add">
                              <input type="text" placeholder="Company Address" value="">
                              </div>
                               <div class="col-md-4 nopadding">
                              <input type="text" placeholder="Industry" value="">
                              </div>  
                            </div>
                             <div class="row">
                              <h2 class="blue-title">Password</h2>
                               <div class="col-md-6 nopadding txt-field">
                              <input type="text" placeholder="******" value="">
                              </div>
                             </div>
                             <div class="row text-left">
                                <button type="button" class="trans-br-bt cancel">Cancel</button>
                                <button type="button" class="blue-bt save">Save Profile</button>
                              </div>   
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

