


import { Component } from '@angular/core';
import { ListService } from './lists.service';
@Component({
    selector: 'list-component',
    templateUrl: './lists.component.html',
    styleUrls: []
})
export class ListComponent {
    lists: any = [{ name: "default" }];
    name = "";
    currentDate: Date = new Date();



    constructor(private ListService: ListService) {
        setInterval(() => {
            this.currentDate = new Date();
        }, 30000);
    }

    ngOnInit() {
        this.GetData()

    }


    setValue(form: any) {

        this.ListService.addList(form.name).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);
        this.name = ""

    }

    GetData() {
        this.ListService.getLists().subscribe(data => { this.lists = data })
    }

    OnDelete(list: any) {
        this.ListService.deleteList(list).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);

    }

}