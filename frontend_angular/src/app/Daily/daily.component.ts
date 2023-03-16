import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DailyService } from './daily.service';
import { TimeWithoutSecondsPipe } from './withoutseconds.pipe';
@Component({
    selector: 'Daily-Tasks',
    templateUrl: './daily.component.html',

})
export class DailyComponent {
    userId: any;
    tasks: any = [];
    currentDate: Date = new Date();
    List: any = { name: "default" };
    model = { name: "", time: "" };





    constructor(private route: ActivatedRoute, private service: DailyService) {
        setInterval(() => {
            this.currentDate = new Date();
        }, 30000);
    }

    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        this.GetData()


    }
    GetData() {
        this.service.getDailies().subscribe(data => { this.tasks = data })
        setTimeout(() => {
            this.tasks.forEach((task: any) => {

                if (task.complete == true && task.lastchecked.slice(0, 10) != this.currentDate.toISOString().slice(0, 10)) {
                    task.complete = false;
                    task.lastchecked = null
                    this.service.UpdateTask(task).subscribe()
                }
            });
        }, 100);




    }
    setValue(form: any) {

        this.service.addDaily(form.name, form.time).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);
        this.model.name = ""
        this.model.time = ""

    }
    OnDelete(task: any) {
        this.service.deleteDaily(task).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);

    }
    UpdateTask(task: any) {
        task.complete = !task.complete
        console.log(task.complete)
        if (task.complete === true) { task.lastchecked = this.currentDate; }

        else {
            task.lastchecked = null
        }

        this.service.UpdateTask(task).subscribe()
    }


}