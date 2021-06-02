angular.module('ngCalendar',  [
                'ngRoute',
                'navBar',
                'homePage',
                'addSchedule',
                'viewSchedule',
                "kendo.directives"
                ]);
angular.module('ngCalendar')
	.controller('calendarController', function calendarController($scope) {
    });



angular.module('ngCalendar')
    .service('storage', function(){
        this.todo = [
            {
                date: 'April 17, 2021',
                tasks: [
                    {
                        task:'Task 1',
                        status: false
                    },
                    {
                        task:'task 2',
                        status: false
                    }
                
                ]
            },
            {
                date: 'April 11, 2021',
                tasks: [
                    {
                        task:'Task 1',
                        status: false
                    },
                    {
                        task:'task 2',
                        status: false
                    }
                
                ]
            }
        ];

        this.addToDo = function(dt, toAdd){
            for(day in this.todo) {
                if(this.todo[day].date == dt) {
                    this.todo[day].tasks.push(
                        {
                            task: toAdd,
                             status: false
                    });
                    return;
                }
            }
            this.todo.push({
                date: dt,
                tasks: [
                    {
                        task:toAdd,
                        status: false
                    }],
                })
        };

        this.getToDo = function(date) {
           for(day in this.todo) {
               if(this.todo[day].date == date) {
                   return this.todo[day];
               }
           }
           return -1;
        }

        this.removeToDo = function(date,toRemove) {
            var j = 0;
            for(day in this.todo) {
                if(this.todo[day].date == date) {
                    var i = this.todo[day].tasks.indexOf(toRemove);
                    this.todo[day].tasks.splice(i,1);
                    if(this.todo[day].tasks.length == 0)
                    {
                        delete this.todo[day];
                        console.log(j,'ToRemove Indx',this.todo);
                        this.todo.splice(j,1);
                    }
                    
                }
                j+=1;
            }
        }

        this.getAllSchedule = function() {
            return this.todo;
        }

        this.clearAll = function(date) {
            var j = 0;
            for(day in this.todo) {
                if(this.todo[day].date == date) {
                    delete this.todo[day];
                    this.todo.splice(j,1);
                }
            j+=1;
	    }
            
        }
    });

