<template>
     <div class="col-md-5 pull-right text-right">
      <profile-setup></profile-setup>
            <form action="" class="createAccount">
                <h2>Create An Account</h2>
                <input type="text" class="txtfield" placeholder="Email Address">
                <input type="text" class="txtfield" placeholder="Mobile No.">
                <input type="text" class="txtfield" placeholder="Set Password">
                <input type="text" class="txtfield" placeholder="Confirm Password">
                <button type="button" class="blue-bt" id="create-account-bt" data-toggle="modal" data-target="#profile-setup">Create Account</button>
                <br>
                <div class="col-md-12 terms">
                    <div class="col-md-12"><a href="">Terms of Service</a> &nbsp; | &nbsp;  <a href="">Privacy Policy</a></div>
                </div>
            </form>
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
