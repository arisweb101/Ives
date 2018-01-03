<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>IVES - Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="{{ asset('/components/themes/bootstrap/css/bootstrap.css') }}">
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('/components/themes/dist/css/AdminLTE.css') }}">
  <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
        page. However, you can choose any other skin. Make sure you
        apply the skin class to the body tag so the changes take effect.
  -->
  <link rel="stylesheet" href="{{ asset('/components/themes/dist/css/skins/skin-blue.css') }}">

  <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
   

  @stack('styles')

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

</head>
<!--
BODY TAG OPTIONS:
=================
Apply one or more of the following classes to get the
desired effect
|---------------------------------------------------------|
| SKINS         | skin-blue                               |
|               | skin-black                              |
|               | skin-purple                             |
|               | skin-yellow                             |
|               | skin-red                                |
|               | skin-green                              |
|---------------------------------------------------------|
|LAYOUT OPTIONS | fixed                                   |
|               | layout-boxed                            |
|               | layout-top-nav                          |
|               | sidebar-collapse                        |
|               | sidebar-mini                            |
|---------------------------------------------------------|
-->
<body class="hold-transition skin-blue sidebar-mini">
  @include('layouts.ivr.modal')
<div class="ivr-wrapper">

  <!-- Header -->
    @include('layouts.ivr.header')
    @include('layouts.ivr.sidebar') 
   
    <div class="ivr-content-wrapper" id="app">
    
     
     @yield('components')
     @yield('content')
   
    </div><!-- /.content-wrapper -->

    <!-- Footer -->

</div>
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 2.2.3 -->

<script src="{{ asset('/js/app.js') }}"></script>
<script src="{{ asset('/js/init.js') }}"></script>
<script src="{{ asset('/js/main.js') }}"></script>

<!-- Bootstrap 3.3.6 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="{{ asset('/components/themes/dist/js/app.min.js') }}"></script>

<!-- Pan Zoom and JSPlumb-->
<script src="{{ asset('/components/jquery.panzoom/dist/js/jquery.panzoom.js') }}"></script>
<script src="{{ asset('/components/jquery.panzoom/dist/js/jquery.mousewheel.js') }}"></script>
<script src="{{ asset('/components/jsplumb/dist/js/jsplumb.min.js') }}"></script>
<script src="{{ asset('/components/jquery.panzoom/dist/js/dagre.min.js') }}"></script>

<script src="{{ asset('/js/ivr.js') }}"></script>

@stack('components')
<!-- Optionally, you can add Slimscroll and FastClick plugins.
     Both of these plugins are recommended to enhance the
     user experience. Slimscroll is required when using the
     fixed layout. -->
</body>
</html>