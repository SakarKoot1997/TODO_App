angular.module('homePage').component('homePage', {
           templateUrl: 'homepage/home-page.template.html',
           controller: function homepageController($scope, storage, $interval) {
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
           
            this.time = new Date().toLocaleDateString("en-US", options);
            this.todaySchedule= storage.getToDo(this.time);
            console.log(this.todaySchedule['date']);
            this.removeItem = function(toRemove) {
                console.log('in remove');
                storage.removeToDo(this.time,toRemove);
                this.todaySchedule= storage.getToDo(this.time);
                console.log(this.todaySchedule);
            }
            $scope.clock = Date.now();
            var tick = function() {
                $scope.clock = Date.now();
                console.log('in Tick');
              }
            tick();
            $interval(tick, 1000);
           }
       });
