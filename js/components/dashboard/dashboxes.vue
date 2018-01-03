<template>
      <div class="row">
           <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12 dashbox">
            <div class="info-box">
              <span class="info-box-icon bg-aqua "><img src="/images/main/plan.svg"></span>
              <div class="info-box-content">
                <span class="info-box-text">Current Plan</span>
                <span class="info-box-val">Premium Plan</span>
                <span class="info-box-expires">Expires on: December 17, 2017</span>
              </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
          </div><!-- /.col -->
          <div class="col-md-4 col-sm-6 col-xs-12 dashbox">
            <div class="info-box">
              <span class="info-box-icon bg-green"><i class="fa fa-flag-o"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Wallet Balance</span>
                <span class="info-box-val">200</span>
              </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
          </div><!-- /.col -->
          <div class="col-md-4 col-sm-6 col-xs-12 dashbox">
            <div class="info-box">
              <span class="info-box-icon bg-yellow"><i class="fa fa-files-o"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Queued Blasts</span>
                <span class="info-box-val">10</span>
              </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
          </div><!-- /.col -->
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

