import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class TasksService {


    constructor(private http: HttpClient) { }

    getList(id: any) {
        return this.http.get('http://127.0.0.1:8000/api/lists/' + id + '/')
    }
    addTask(name: string, id: any) {

        return this.http.post('http://127.0.0.1:8000/api/lists/' + id + '/create/', { name: name });
    }
    getListName(id: any) {
        return this.http.get('http://127.0.0.1:8000/api/lists/' + id + '/name/')
    }
    deleteTask(task: any) {

        return this.http.delete('http://127.0.0.1:8000/api/tasks/' + task.id + '/delete/');
    }
    UpdateTask(task: any) {

        return this.http.put('http://127.0.0.1:8000/api/tasks/' + task.id + '/update/', task);
    }


}