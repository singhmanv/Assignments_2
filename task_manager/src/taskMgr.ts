
//status - "Open", "In Process", "Done"

class tasks
{
    private taskId: number;
    private details: string ;
    private priority: number;
    private status: string;

    constructor(taskid:number, details:string, priority: number, status: string)
    {
        this.taskId = taskid;
        this.details = details;
        this.priority = priority;
        this.status = status;
    } 

    get_taskid()
    {
        return this.taskId;
    }

    get_details()
    {
        return this.details;
    }
    
    get_priority()
    {
        return this.priority;
    }

    get_status()
    {
        return this.status;
    }

    modify_details(details:string)
    {
        this.details = details;
    }

    modify_priority(priority: number)
    {
        this.priority = priority;
    }

    modify_status(status: string)
    {
        this.status = status ;
    }
};

class task_manager
{
    private static instance:task_manager;
    private task_list:tasks[];

    private constructor()
    {
        // do nothing
    }

    static create_instance() : task_manager 
    {
        if(!this.instance)
        {
            this.instance = new task_manager();
            this.instance.task_list = [];
        }
        return this.instance;
    }

    Add_task(details:string, priority:number, status:string)
    {
        let taskid:number =  this.task_list.length ? this.task_list[this.task_list.length - 1].get_taskid() + 1 : 1;
        this.task_list[this.task_list.length ] = new tasks(taskid,details,priority,status);
    }

    /*display_task() -- how to overload a function in class
    {

    } */

    display_task(taskid:number = 0)
    {
        if(taskid == 0)
        {
            this.task_list.forEach(element => {
                console.log("TaskId --" + element.get_taskid() + "-- Details --" + element.get_details() + "-- Priority --" + element.get_priority() + "-- status --" + element.get_status() );
            });
        }
        else
        {
            this.task_list.forEach(element => {
                if(taskid == element.get_taskid())
                    console.log("TaskId --" + element.get_taskid() + "-- Details --" + element.get_details() + "-- Priority --" + element.get_priority() + "-- status --" + element.get_status() );
            });
        }
    }

    find_task(taskId:number)
    {
        let idx:number = -1;
        this.task_list.forEach((element,index) => {
            if(taskId == element.get_taskid())
            { 
               console.log("TaskId --" + element.get_taskid() + "-- Details --" + element.get_details() + "-- Priority --" + element.get_priority() + "-- status --" + element.get_status() );
                idx = index;
            }
        });

        return idx;
    }

    remove_task(taskId:number)
    {
        let index = this.find_task(taskId);
        if(index != -1)
        {
            this.display_task();
            this.task_list.splice(index,1);
            console.log("After deletion ----");
            this.display_task();
        }
        else
        {
            console.log("Item not found.");
        }
    }

    change_task_status(taskId:number, status:string)
    {
        let index = this.find_task(taskId);
        if(index != -1)
        {
            this.display_task(taskId);
            this.task_list[index].modify_status(status);
            console.log("status modified ----");
            this.display_task(taskId);
        }
        else
        {
            console.log("Item not found.");
        }
    }

    sort_on_priority()
    {
        this.display_task();
        this.task_list.sort((n1,n2) => {
            if (n1.get_priority() > n2.get_priority()) {
                return 1;
            }
        
            if (n1.get_priority() < n2.get_priority()) {
                return -1;
            }
        
            return 0;
        });

        console.log("---------------------------------------------------")
        this.display_task();
    }
};


let tm_obj: task_manager = task_manager.create_instance();
tm_obj.Add_task("Paint",4,"In process");
tm_obj.Add_task("Scheduler",1,"Open");
tm_obj.Add_task("VLC",1,"Open");
tm_obj.Add_task("Visual Studio",2,"In process");
tm_obj.Add_task("Visual Code",1,"In process");
tm_obj.Add_task("Pdf reader",3,"In process");
tm_obj.display_task();
//tm_obj.display_task(1);

//tm_obj.change_task_status(1,"Close");

//tm_obj.remove_task(1);

//console.log("sorting");
//tm_obj.sort_on_priority();
console.log("-------------------------------------------------------------");
let tm_obj1: task_manager = task_manager.create_instance();
tm_obj1.display_task();

