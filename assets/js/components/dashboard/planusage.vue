<template>
       <div class="col-md-4 plan-usage">
              <div class="box box-solid box-default ">
              <div class="box-header">
                <h3 class="box-title">Plan Usage</h3>
              </div><!-- /.box-header -->
              <div class="box-body">
                <div class="info-box">
             <span class="info-box-icon"><img src="/images/main/SMSOutbound.svg"></span>
              <div class="info-box-content">
                <span class="info-box-text">SMS Outbound</span>
                <span class="info-box-number">
                    <span class="number-sms">
                    6
                    </span>
                   
                    <span class="number-sms-total">
                     / 10
                    </span>
                </span>
              </div><!-- /.info-box-content -->
            </div>
            <div class="info-box">
             <span class="info-box-icon"><img src="/images/main/SMSInbound.svg"></span>
              <div class="info-box-content">
                <span class="info-box-text">SMS Inbound</span>
                <span class="info-box-number">
                    <span class="number-sms">
                    10
                    </span>
                   
                    <span class="number-sms-total">
                     / 10
                    </span>
                </span>
              </div><!-- /.info-box-content -->
            </div>
              </div>
              </div>
            <div class="clear"></div>
        </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

