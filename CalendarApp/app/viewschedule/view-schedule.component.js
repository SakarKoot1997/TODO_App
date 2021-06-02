angular.module('viewSchedule').component('viewSchedule', {
    templateUrl: 'viewschedule/view-schedule.template.html',
    controller: function viewScheduleController($scope, storage) {
          this.allschedule = storage.getAllSchedule();

          this.getGridOptions = function() {
            this.allschedule = storage.getAllSchedule();
            console.log(this.allschedule)
            var data = new kendo.data.DataSource({
              data: this.allschedule
            });
            return {
              dataSource: data,
              columns: [
                {field: "date", title:"Date"}
              ]
            };
          }
          this.getDatasource = function(item) {

            return new kendo.data.DataSource({
              data: item.tasks
            });
          };

          this.detailGridOptions = function(dataItem) {
            console.log(dataItem);
            return {
                dataSource: this.getDatasource(dataItem),
                scrollable: false,
                sortable: true,
                columns: [
                { field: "task", title:"Task", width: "156px" },
                { field: "status", title:"Status [true-Done/False-Not Done]", width: "110px" }
                ]
            };
    
    }   

}
});