import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class ListService {


    constructor(private http: HttpClient) { }

    getLists() {
        return this.http.get('http://127.0.0.1:8000/api/lists/')
    }
    addList(name: string) {

        return this.http.post('http://127.0.0.1:8000/api/lists/create/', { name: name });
    }
    deleteList(list: any) {

        return this.http.delete('http://127.0.0.1:8000/api/lists/' + list.id + '/delete/');
    }

}