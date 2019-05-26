/*canvas*/
var canvas = document.getElementById("large-header");

canvas.onmousemove=function() {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/20) {
            for(var y = 0; y < height; y = y + height/20) {
                var px = x + Math.random()*width/20;
                var py = y + Math.random()*height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j];
                if(!(p1=== p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k]=== undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    
};




/* modal*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target=== modal) {
    modal.style.display = "none";
  }
};






var app = angular.module("Demo",["ngRoute"]);
app.config(function($routeProvider) {
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
  




   
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dott");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}