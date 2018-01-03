<!-- Left side column. contains the sidebar -->
<aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
            <div class="text-center image">
                <img src="{{ asset("/components/themes/dist/img/user2-160x160.jpg") }}" class="img-circle" alt="User Image" />
            </div>
            <div class="text-center info">
                <p>John Vincent</p>
                <!-- Status -->
                <a href="/my-profile">Edit Profile</a>
            </div>
        </div>

        <!-- search form (Optional) -->
        <!-- <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search..."/>
<span class="input-group-btn">
  <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
</span>
            </div>
        </form>-->
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <div class="clear">




        <ul class="sidebar-menu tree" data-widget="tree"">
            <li><a href="/admin" class="dashboard-menu"><div class="icon"></div><span>Dashboard</span></a></li>
            <li class="treeview">
                <a href="#" class="ivr-menu">
                   <div class="icon"></div>
                   <span>IVR Campaign</span>
                   <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="/ivr-campaign" class="admin-menu">Campaigns</a></li>
                    <li><a href="/ivr-tree">IVR Tree</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#" class="reports-menu">
                    <div class="icon"></div>
                    <span>Reports</span>
                     <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="/call-summary">Call Summary</a></li>
                    <li><a href="/selected-option">Selected Option</a></li>
                    <li><a href="/sms-summary">SMS Summary</a></li>
                </ul>
            </li>
             <li class="treeview">
                <a href="#" class="plan-menu">
                    <div class="icon"></div>
                    <span>Plan Settings</span>
                     <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">Setting 1</a></li>
                    <li><a href="#">Setting 2</a></li>
                </ul>
            </li>
             <li class="treeview">
                <a href="#" class="admin-menu">
                    <div class="icon"></div>
                    <span>Admin</span>
                     <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="/accounts" class="admin-menu">Accounts</a></li>
                    <li><a href="/campaigns">Campaigns</a></li>
                    <li><a href="/user-plan">User Plan</a></li>
                    <li><a href="caller-ids">Caller IDs</a></li>
                </ul>
            </li>
        </ul><!-- /.sidebar-menu -->
        </div>
    </section>
    <!-- /.sidebar -->
</aside>