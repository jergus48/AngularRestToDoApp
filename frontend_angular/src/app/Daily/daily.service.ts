import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class DailyService {


    constructor(private http: HttpClient) { }

    getDailies() {
        return this.http.get('http://127.0.0.1:8000/api/daily/')
    }
    addDaily(name: string, time: any) {

        return this.http.post('http://127.0.0.1:8000/api/daily/create/', { name: name, time: time });
    }
    deleteDaily(daily: any) {

        return this.http.delete('http://127.0.0.1:8000/api/daily/' + daily.id + '/delete/');
    }
    UpdateTask(daily: any) {

        return this.http.put('http://127.0.0.1:8000/api/daily/' + daily.id + '/update/', daily);
    }

}