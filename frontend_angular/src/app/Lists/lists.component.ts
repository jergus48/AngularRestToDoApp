


import { Component } from '@angular/core';
import { ListService } from './lists.service';
@Component({
    selector: 'list-component',
    templateUrl: './lists.component.html',
    styleUrls: []
})
export class ListComponent {
    lists: any = [{ name: "default" }];
    showAdd = false;
    currentDate: Date = new Date();



    constructor(private ListService: ListService) {
        setInterval(() => {
            this.currentDate = new Date();
        }, 30000);
    }

    ngOnInit() {
        this.GetData()

    }
    toggleComponent() {
        this.showAdd = !this.showAdd;
    }

    setValue(name: string) {

        this.ListService.addList(name).subscribe()
        setTimeout(() => {
            this.GetData()
        }, 100);
        this.showAdd = false
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