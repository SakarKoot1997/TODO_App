angular.module('addSchedule').component('addSchedule', {
    templateUrl: 'addschedule/add-schedule.template.html',
    controller: function addScheduleController($scope, storage, $mdDialog) {
        this.calendarDate = new Date();
        //this.calendarDate.setUTCFullYear(2021, 3, 11);
        
        this.toAdd = '';
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        this.temp = this.calendarDate.toLocaleDateString("en-US", options);

        this.getScheduleFunction = function() {
            this.temp = this.calendarDate.toLocaleDateString("en-US", options);
            return storage.getToDo(this.temp,'addpage');
        }

        this.removeItem = function(toRemove) {
            this.temp = this.calendarDate.toLocaleDateString("en-US", options);
            storage.removeToDo(this.temp,toRemove);
            
        }

        this.addToDo = function() {
            this.temp = this.calendarDate.toLocaleDateString("en-US", options);
            storage.addToDo(this.temp,this.toAdd);
        }
;
        $scope.clearall = function() {
            storage.clearAll(this.temp);
        };
        this.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            $scope.temp = this.calendarDate.toLocaleDateString("en-US", options);
            
            var confirm = $mdDialog.confirm()
                  .title('Confirm delete all tasks?')
                  .textContent('Once deleted, You canot recover your tasks.')
                  .ariaLabel('Delete All Tasks')
                  .targetEvent(ev)
                  .ok('Confirm')
                  .cancel('NO! Take me back');
        
            $mdDialog.show(confirm).then(function() {
   
                $scope.clearall();

            }, function() {
              console.log("cancle");
            });
          };

    }
});