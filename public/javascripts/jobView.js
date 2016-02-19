
 (function() {

   var app = angular.module('JobOut');
   app.directive('job', function() {
     var directive = {};
     directive.restrict = 'E';
     directive.replace = true;
     directive.templateUrl =  "/templates/_listJobView.html";

     return directive;
   });
 console.log("hello");
 }());

