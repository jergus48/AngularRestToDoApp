import { ListComponent } from './Lists/lists.component'
import { AppComponent } from './app.component'
import { TasksComponent } from './Tasks/tasks.component'
import { DailyComponent } from './Daily/daily.component'
import { HomeComponent } from './Home/home.component'
export const RoutingTable = [

    { path: 'lists', component: ListComponent },
    { path: 'daily-tasks', component: DailyComponent },
    { path: 'lists/:id', component: TasksComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' },


]