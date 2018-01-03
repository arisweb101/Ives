<template>
        <div class="col-md-8 call-stats">
                <div class="box box-solid box-default ">
              <div class="box-header">
                <h3 class="box-title">Call Statistics</h3>
              </div><!-- /.box-header -->
              <div class="box-body">
              <div class="row">
                  <div class="select-month">
                      <div class="col-md-3 pull-left nopadding">
                          <a href="">
                          <span class="LeftArrow"><img src="images/main/LeftArrow.svg"></span> 
                          <span class="prevmonth">Jun</span>
                          </a>
                      </div>
                      <div class="col-md-6 nopadding text-center selected-month">July</div>
                      <div class="col-md-3 pull-right text-right nopadding">
                         <a href="">
                         <span class="nextmonth">Aug</span>
                          <span class="RightArrow"><img src="images/main/LeftArrow.svg"></span> 
                        </a>
                      </div>
                  </div>
              </div>
              <div class="row"></div>
                <div class="progress-group">
                    <span class="progress-text">Answered</span>
                    <span class="progress-number">760</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style="width: 76%"></div>
                    </div>
                  </div>
                       <div class="progress-group">
                    <span class="progress-text">Unanswered</span>
                    <span class="progress-number">200</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style="width: 20%"></div>
                    </div>
                  </div>
                       <div class="progress-group">
                    <span class="progress-text">Rejected/Busy</span>
                    <span class="progress-number">300</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style="width: 30%"></div>
                    </div>
                  </div>
                       <div class="progress-group">
                    <span class="progress-text">Unrechable</span>
                    <span class="progress-number">120</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style="width: 12%"></div>
                    </div>
                  </div>
                </div>
              </div><!-- /.box-body -->
            </div><!-- /.box -->
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

