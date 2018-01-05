
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('home-main', require( './components/home/main.vue' )); 


// With Date Picker
Vue.component('edit-campaign', require( './components/ivr/edit-campaign.vue' )); 

/** Reports **/
Vue.component('call-summary', require( './components/reports/call-summary.vue' )); 
Vue.component('selected-option', require( './components/reports/selected-option.vue' )); 
Vue.component('sms-summary', require( './components/reports/sms-summary.vue' )); 
Vue.component('add-new-campaign', require( './components/admin/add-new-campaign.vue' )); 
Vue.component('edit-admin-campaign', require( './components/admin/edit-admin-campaign.vue' )); 
Vue.component('add-account', require( './components/admin/add-account.vue' )); 
Vue.component('edit-account', require( './components/admin/edit-account.vue' )); 
Vue.component('edit-plan', require( './components/admin/edit-plan.vue' )); 
Vue.component('add-new-plan', require( './components/admin/add-new-plan.vue' )); 
Vue.component('edit-plan', require( './components/admin/edit-callerids.vue' )); 
Vue.component('add-new-plan', require( './components/admin/add-new-callerids.vue' )); 

