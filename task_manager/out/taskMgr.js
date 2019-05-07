//status - "Open", "In Process", "Done"
var tasks = /** @class */ (function () {
    function tasks(taskid, details, priority, status) {
        this.taskId = taskid;
        this.details = details;
        this.priority = priority;
        this.status = status;
    }
    tasks.prototype.get_taskid = function () {
        return this.taskId;
    };
    tasks.prototype.get_details = function () {
        return this.details;
    };
    tasks.prototype.get_priority = function () {
        return this.priority;
    };
    tasks.prototype.get_status = function () {
        return this.status;
    };
    tasks.prototype.modify_details = function (details) {
        this.details = details;
    };
    tasks.prototype.modify_priority = function (priority) {
        this.priority = priority;
    };
    tasks.prototype.modify_status = function (status) {
        this.status = status;
    };
    return tasks;
}());
;
var task_manager = /** @class */ (function () {
    function task_manager() {
        // do nothing
    }
    task_manager.create_instance = function () {
        if (!this.instance) {
            this.instance = new task_manager();
            this.instance.task_list = [];
        }
        return this.instance;
    };
    task_manager.prototype.Add_task = function (details, priority, status) {
        var taskid = this.task_list.length ? this.task_list[this.task_list.length - 1].get_taskid() + 1 : 1;
        this.task_list[this.task_list.length] = new tasks(taskid, details, priority, status);
    };
    /*display_task() -- how to overload a function in class
    {

    } */
    task_manager.prototype.display_task = function (taskid) {
        if (taskid === void 0) { taskid = 0; }
        if (taskid == 0) {
            this.task_list.forEach(function (element) {
                console.log("TaskId --" + element.get_taskid() + "-- Details --" + element.get_details() + "-- Priority --" + element.get_priority() + "-- status --" + element.get_status());
            });
        }
        else {
            this.task_list.forEach(function (element) {
                if (taskid == element.get_taskid())
                    console.log("TaskId --" + element.get_taskid() + "-- Details --" + element.get_details() + "-- Priority --" + element.get_priority() + "-- status --" + element.get_status());
            });
        }
    };
    task_manager.prototype.find_task = function (taskId) {
        var idx = -1;
        this.task_list.forEach(function (element, index) {
            if (taskId == element.get_taskid()) {
                console.log("TaskId --" + element.get_taskid() + "-- Details --" + element.get_details() + "-- Priority --" + element.get_priority() + "-- status --" + element.get_status());
                idx = index;
            }
        });
        return idx;
    };
    task_manager.prototype.remove_task = function (taskId) {
        var index = this.find_task(taskId);
        if (index != -1) {
            this.display_task();
            this.task_list.splice(index, 1);
            console.log("After deletion ----");
            this.display_task();
        }
        else {
            console.log("Item not found.");
        }
    };
    task_manager.prototype.change_task_status = function (taskId, status) {
        var index = this.find_task(taskId);
        if (index != -1) {
            this.display_task(taskId);
            this.task_list[index].modify_status(status);
            console.log("status modified ----");
            this.display_task(taskId);
        }
        else {
            console.log("Item not found.");
        }
    };
    task_manager.prototype.sort_on_priority = function () {
        this.display_task();
        this.task_list.sort(function (n1, n2) {
            if (n1.get_priority() > n2.get_priority()) {
                return 1;
            }
            if (n1.get_priority() < n2.get_priority()) {
                return -1;
            }
            return 0;
        });
        console.log("---------------------------------------------------");
        this.display_task();
    };
    return task_manager;
}());
;
var tm_obj = task_manager.create_instance();
tm_obj.Add_task("Paint", 4, "In process");
tm_obj.Add_task("Scheduler", 1, "Open");
tm_obj.Add_task("VLC", 1, "Open");
tm_obj.Add_task("Visual Studio", 2, "In process");
tm_obj.Add_task("Visual Code", 1, "In process");
tm_obj.Add_task("Pdf reader", 3, "In process");
tm_obj.display_task();
//tm_obj.display_task(1);
//tm_obj.change_task_status(1,"Close");
//tm_obj.remove_task(1);
//console.log("sorting");
//tm_obj.sort_on_priority();
console.log("-------------------------------------------------------------");
var tm_obj1 = task_manager.create_instance();
tm_obj1.display_task();
//# sourceMappingURL=taskMgr.js.map