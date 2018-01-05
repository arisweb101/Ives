<template>
    <div class="dashboard">
        
        <div class="row">
             <section class="content-header">
            <h1 class="col-md-5 pull-text">Welcome back John!
            </h1>
            <!-- You can dynamically generate breadcrumbs here -->
           <div class="col-md-4 pull-right text-right"> Updated as of July 10, 2017</div>
        </section>
        </div>
        <dashboxes></dashboxes>
        <div class="row">
          <callstats></callstats>
          <planusage></planusage>
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

