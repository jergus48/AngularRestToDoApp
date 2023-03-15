import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from './tasks.service';
@Component({
    selector: 'List-Look',
    templateUrl: './tasks.component.html',

})
export class TasksComponent {
    userId: any;
    tasks: any = [{ name: "default", complete: false }];
    currentDate: Date = new Date();
    List: any = { name: "default" };






    constructor(private route: ActivatedRoute, private service: TasksService) {
        setInterval(() => {
            this.currentDate = new Date();
        }, 30000);
    }

    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        this.GetData()
    }
    GetData() {
        this.service.getList(this.userId).subscribe(data => { this.tasks = data })

        this.service.getListName(this.userId).subscribe(data => { this.List = data })


    }
    setValue(name: string) {

        this.service.addTask(name, this.userId).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);

    }
    OnDelete(task: any) {
        this.service.deleteTask(task).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);

    }
    UpdateTask(task: any) {
        task.complete = !task.complete
        task.end_date = this.currentDate
        this.service.UpdateTask(task).subscribe()
    }


}