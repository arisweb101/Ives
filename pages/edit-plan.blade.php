@push( "styles" )
  <link rel="stylesheet" href="{{ asset('/components/datetimepicker/build/css/bootstrap-datetimepicker.min.css') }}" />
@endpush

 @extends('layouts.admin.main-temp')

@section( "content")
     <edit-plan></edit-plan>
@endsection

@push( "scripts" )
<script src="{{ asset('/js/datepicker.js') }}"></script>
<script type="text/javascript" src="{{ asset('/components/moment/min/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/components/datetimepicker/build/js/bootstrap-datetimepicker.min.js') }}"></script>
@endpush