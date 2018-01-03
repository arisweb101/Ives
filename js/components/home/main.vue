<template>
    <div class="container home">
         <sign-in></sign-in>
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-3 pull-left logo"><img src="/images/GlobeLabslogo.svg"></div>
                <div class="col-md-2 pull-right signin text-right"><button type="button" class="btn trans-bt btn-info btn-lg" data-toggle="modal" data-target="#signin" id="signin-bt">Sign In</button></div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="row">
            <welcome></welcome>
            <create-account></create-account>
            <div class="clear"></div>
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

