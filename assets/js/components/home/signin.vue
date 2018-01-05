<template>

<!-- Modal -->
<div id="signin" class="modal fade" role="dialog">
   <div class="col-md-3 pull-left logo-signin"><img src="/images/logo.jpg"></div>
   <button type="button" class="close" data-dismiss="modal"><img src="images/Close.svg" width="30"></button>
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
         <h3 class="modal-title">Sign in to your Account</h3>
      </div>
      <div class="modal-body">
        <form action="">
            <input type='text' placeholder="Email Address">
            <input type='text' placeholder="Password">
            <div class="row"> 
                <div class="col-md-6 pull-left nopadding">  
                    <input type="checkbox" name="fordCheckBox" id="remember" value="remember">
                      <label for="remember">Remember Me</label>
                </div>
                <div class="col-md-6 pull-right text-right nopadding"> 
                    <a href="">Forgot Password?</a>
                </div>
            </div>
            <div class="row">
                <button type="button" class="blue-bt">Sign In</button>
                <div class="or">or</div>
                <button type="button" class="trans-br-bt"><span class="g-icon"><img src="/images/Google.svg"></span>Sign in with Google</button>
            </div>
            <div class="row">
              <div class="col-md-12 terms"><a href="">Terms of Service</a> &nbsp; | &nbsp;  <a href="">Privacy Policy</a></div>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>

</template>