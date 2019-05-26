/// <eference path="angular.min.js" />
var app = angular.module("Demo",["ngRoute"])
                 .config(function ($routeProvider) {
                    $routeProvider
                      .when("/", {
                         templateUrl: "home.html"
                     })
                     .when("/professional", {
                         templateUrl: "professional.html",
                         controller: "professionalController"
                     })
                     .when("/logsign", {
                         templateUrl: "logsign.html",
                         controller: "logsignController"
                     })
                     .when("/painting", {
                         templateUrl: "service.html",
                         controller: "paintingController"
                     })
                     .when("/carpenter", {
                         templateUrl: "service.html",
                         controller: "carpenterController"
                     })
                     .when("/plumber", {
                         templateUrl: "service.html",
                         controller: "plumberController"
                     })
                     .when("/ceiling", {
                         templateUrl: "service.html",
                         controller: "ceilingController"
                     })
                     .when("/floor", {
                         templateUrl: "service.html",
                         controller: "floorController"
                     })
                     .when("/cleaning", {
                         templateUrl: "service.html",
                         controller: "cleaningController"
                     })
                     .when("/laundry", {
                         templateUrl: "service.html",
                         controller: "laundryController"
                     })
                     .when("/pool", {
                         templateUrl: "service.html",
                         controller: "poolController"
                     })
                     .when("/construction", {
                         templateUrl: "service.html",
                         controller: "constructionController"
                     })
                     .when("/kitchen", {
                         templateUrl: "service.html",
                         controller: "kitchenController"
                     })
                     .when("/interior", {
                         templateUrl: "service.html",
                         controller: "interiorController"
                     })
                     .when("/renovation", {
                         templateUrl: "service.html",
                         controller: "renovationController"
                     })
                     .when("/cook", {
                         templateUrl: "service.html",
                         controller: "cookController"
                     })
                     .when("/maid", {
                         templateUrl: "service.html",
                         controller: "maidController"
                     })
                     .when("/babysitter", {
                         templateUrl: "service.html",
                         controller: "babyController"
                     })
                     .when("/security", {
                         templateUrl: "service.html",
                         controller: "securityController"
                     })
                     .when("/hair", {
                         templateUrl: "service.html",
                         controller: "hairController"
                     })
                     .when("/makeup", {
                         templateUrl: "service.html",
                         controller: "makeupController"
                     })
                     .when("/spa", {
                         templateUrl: "service.html",
                         controller: "spaController"
                     })
                     .when("/fever", {
                         templateUrl: "service.html",
                         controller: "feverController"
                     })
                     .when("/dentist", {
                         templateUrl: "service.html",
                         controller: "dentistController"
                     })
                     .when("/blood", {
                         templateUrl: "service.html",
                         controller: "bloodController"
                     })
                     .when("/study", {
                         templateUrl: "service.html",
                         controller: "studyController"
                     })
                     .when("/cooktutor", {
                         templateUrl: "service.html",
                         controller: "cooktutorController"
                     })
                     .when("/cartutor", {
                         templateUrl: "service.html",
                         controller: "cartutorController"
                     })
                     .when("/ac", {
                         templateUrl: "service.html",
                         controller: "acController"
                     })
                     .when("/tv", {
                         templateUrl: "service.html",
                         controller: "tvController"
                     })
                     .when("/electritian", {
                         templateUrl: "service.html",
                         controller: "electritianController"
                     })
                     .when("/birthday", {
                         templateUrl: "service.html",
                         controller: "birthdayController"
                     })
                     .when("/wedding", {
                         templateUrl: "service.html",
                         controller: "weddingController"
                     })
                     .when("/decorate", {
                         templateUrl: "service.html",
                         controller: "decorateController"
                     })
                     .when("/gym", {
                         templateUrl: "service.html",
                         controller: "gymController"
                     })
                     .when("/yoga", {
                         templateUrl: "service.html",
                         controller: "yogaController"
                     })
                     .when("/old", {
                         templateUrl: "service.html",
                         controller: "oldController"
                     })
                     .otherwise({
                                 redirectTo: "/"
                     });
                 })
                         .controller("carpenterController",function ($scope) {
                             $scope.message = "carpenter";
                             $scope.image = "interior/carpenter.jpg";
                          })
                          .controller("plumberController",function ($scope) {
                             $scope.message = "Plumber";
                             $scope.image = "interior/plumber.jpeg";
                          })
                          .controller("paintingController",function ($scope) {
                             $scope.message = "Painting";
                             $scope.image = "interior/painter.jpg";
                          })
                          .controller("ceilingController",function ($scope) {
                             $scope.message = "ceiling";
                             $scope.image = "interior/ceiling.jpg";
                          })
                          .controller("floorController",function ($scope) {
                             $scope.message = "floor";
                             $scope.image = "interior/floor.jpg";
                          })
                          .controller("cleaningController",function ($scope) {
                             $scope.message = "house cleaning";
                             $scope.image = "housekeeping/clean.jpg";
                          })
                          .controller("laundryController",function ($scope) {
                             $scope.message = "laundry";
                             $scope.image = "housekeeping/laundry.jpg";
                          })
                          .controller("poolController",function ($scope) {
                             $scope.message = "pool";
                             $scope.image = "housekeeping/pool.png";
                          })
                          .controller("constructionController",function ($scope) {
                             $scope.message = "building construction";
                             $scope.image = src="construction/construction.jpg";
                          })
                          .controller("kitchenController",function ($scope) {
                             $scope.message = "kitchen";
                             $scope.image = "construction/kitchen.jpg";
                          })
                          .controller("interiorController",function ($scope) {
                             $scope.message = "interior design";
                             $scope.image = "construction/interior.jpg";
                          })
                          .controller("renovationController",function ($scope) {
                             $scope.message = "Renovation";
                             $scope.image = "construction/renovation.jpg";
                          })
                          .controller("cookController",function ($scope) {
                             $scope.message = "cook";
                             $scope.image = "worksec/cook.jpg";
                          })
                          .controller("maidController",function ($scope) {
                             $scope.message = "maid";
                             $scope.image = "worksec/maid.jpg";
                          })
                          .controller("securityController",function ($scope) {
                             $scope.message = "security";
                             $scope.image = "worksec/security.jpg";
                          })
                          .controller("babyController",function ($scope) {
                             $scope.message = "baby sitter";
                             $scope.image = "worksec/babysitter.png";
                          })
                          .controller("hairController",function ($scope) {
                             $scope.message = "hair design";
                             $scope.image = "salon/hair.png";
                          })
                          .controller("makeupController",function ($scope) {
                             $scope.message = "makeup";
                             $scope.image = "salon/makeup.jpg";
                          })
                          .controller("spaController",function ($scope) {
                             $scope.message = "spa";
                             $scope.image = "salon/spa.jpg";
                          })
                          .controller("feverController",function ($scope) {
                             $scope.message = "fever checkup";
                             $scope.image = "health/fever.jpg";
                          })
                          .controller("dentistController",function ($scope) {
                             $scope.message = "dentist";
                             $scope.image = "health/kid-at-dentist-300x300.jpg";
                          })
                          .controller("bloodController",function ($scope) {
                             $scope.message = "blood test";
                             $scope.image = "health/blood.jpg";
                          })
                          .controller("studyController",function ($scope) {
                             $scope.message = "study tutor";
                             $scope.image = "tutor/tutor.jpg";
                          })
                          .controller("cooktutorController",function ($scope) {
                             $scope.message = "cook tutor";
                             $scope.image = "tutor/cook.jpg";
                          })
                          .controller("cartutorController",function ($scope) {
                             $scope.message = "car tutor";
                             $scope.image = "tutor/car.jpg";
                          })
                          .controller("acController",function ($scope) {
                             $scope.message = "ac repair";
                             $scope.image = "appliances/ac-repair.jpg";
                          })
                          .controller("tvController",function ($scope) {
                             $scope.message = "tv repair";
                             $scope.image = "appliances/tv.jpg";
                          })
                          .controller("electritianController",function ($scope) {
                             $scope.message = "electritian";
                             $scope.image = "appliances/elec.jpg";
                          })
                          .controller("birthdayController",function ($scope) {
                             $scope.message = "birthday party";
                             $scope.image = "party/bithday.jpg";
                          })
                          .controller("weddingController",function ($scope) {
                             $scope.message = "wedding party";
                             $scope.image = "party/wedding.jpg";
                          })
                          .controller("decorateController",function ($scope) {
                             $scope.message = "decoration";
                             $scope.image = "party/decorate.jpg";
                          })
                          .controller("gymController",function ($scope) {
                             $scope.message = "gym trainer";
                             $scope.image = "fitness/trainer.jpg";
                          })
                          .controller("yogaController",function ($scope) {
                             $scope.message = "yoga trainer";
                             $scope.image = "fitness/yoga.jpg";
                          })
                          .controller("oldController",function ($scope) {
                             $scope.message = "olg age fitness";
                             $scope.image = "fitness/old.jpg";
                          });
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
       }
   };