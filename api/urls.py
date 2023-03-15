from django.urls import path
from django.views.generic import TemplateView
from . import views
urlpatterns = [
    
    path('',views.routes,name='routes'),

    path('lists/',views.getLists,name='lists'),
    path('lists/create/',views.createList,name='createList'),
    path('lists/<str:pk>/',views.getList,name='list'),
    path('lists/<str:pk>/name/',views.getListName,name='listName'),
    path('lists/<str:pk>/create/',views.createTask,name='createtask'),
    path('tasks/<str:pk>/delete/',views.deleteTask,name='deleteTask'),
    path('tasks/<str:pk>/update/',views.updateTask,name='updateTask'),
    path('lists/<str:pk>/delete/',views.deleteList,name='deleteList'),

    path('daily/',views.getDailies,name='dailies'),
    path('daily/create/',views.createDaily,name='createdaily'),
    path('daily/<str:pk>/delete/',views.deleteDaily,name='deleteDaily'),
    path('daily/<str:pk>/update/',views.updateDaily,name='updateDaily'),]
