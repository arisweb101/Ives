<template>

<!-- Modal -->
<div id="profile-setup" class="modal fade" role="dialog">
   <button type="button" class="close" data-dismiss="modal"><img src="images/Close.svg" width="30"></button>
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
         <h3 class="modal-title">Profile Setup</h3>
      </div>
      <div class="modal-body">
        <form action="">
        <div class="col-md-12">
          <div class="row">
            <h2 class="blue-title">Basic Details</h2>
           
            <div class="col-md-6 nopadding txt-field">
             <label>First Name</label><input type="text" placeholder="" value="">
             </div>
            <div class="col-md-6 nopadding txt-field">
            <label>Last Name</label><input type="text" placeholder="" value="">
            </div>
             <div class="col-md-6 nopadding txt-field">
            <label>Email</label><input type="text" placeholder="" value="">
            </div>
             <div class="col-md-6 nopadding txt-field">
            <label>Mobile No.</label><input type="text" placeholder="" value="">
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
           <div class="row text-center">
              <button type="button" class="blue-bt">Save Profile</button>
            </div>   
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>