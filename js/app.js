/**
 * Created by 王天硕 on 2016/1/29.
 */
var invite=angular.module('invite',['ngRoute','ngAnimate']);

invite.config(function($routeProvider){
    $routeProvider.when('/question1',{
        templateUrl: 'question1.html',
        controller: 'question1'
    }).when('/question2',{
        templateUrl: 'question2.html',
        controller: 'question2'
    }).otherwise({
        redirectTo: '/question1'
    })
});