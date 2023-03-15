from django.shortcuts import render
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from .models import List,Tasks,Daily
from .serializers import ListSerializer,TasksSerializer, DailySerializer
@api_view(['GET'])
def routes(request):
     routes = [
        {
            'Endpoint': '/lists/',
            'method': 'GET',
            'name': None,
            
            'description': 'lists'
        },
        {
            'Endpoint': '/lists/id',
            'method': 'GET',
            'name': None,
            
            'description': 'list '
        },
        {
            'Endpoint': '/lists/create/',
            'method': 'POST',
            'name': {'name': ""},
            
            'description': 'Creates  list'
        },
        
        {
            'Endpoint': '/lists/id/delete/',
            'method': 'DELETE',
            'name': None,
            
            'description': 'Deletes  List'
        },
        {
            'Endpoint': '/tasks/id/delete/',
            'method': 'DELETE',
            'name': None,
            'text': None,
            'description': 'Deletes  Task'
        },
        {
            'Endpoint': '/lists/id/create/',
            'method': 'POST',
            'name': {'name': ""},
            
            'description': 'Creates  task'
        },
    ]
     return Response(routes)
#Lists
@api_view(['GET'])
def getLists(request):
    lists=List.objects.all().order_by('-created')
    serializer=ListSerializer(lists,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getListName(request,pk):
    list=List.objects.get(id=pk)
    serializer=ListSerializer(list,many=False)
    return Response(serializer.data)
@api_view(['POST'])
def createList(request):
    data=request.data
    list=List.objects.create(name=data['name'])
    serializer=ListSerializer(list,many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteList(request,pk):
    list=List.objects.get(id=pk)
    list.delete()
    
    return Response('List was deleted')
#Tasks
@api_view(['GET'])
def getList(request,pk):
    tasks=List.objects.get(id=pk).tasks.all().order_by('-created')
    serializer=TasksSerializer(tasks,many=True)
    return Response(serializer.data)
@api_view(['PUT'])
def updateTask(request,pk):
    task=Tasks.objects.get(id=pk)
    data=request.data
    serializer=TasksSerializer(instance=task,data=data)
    if serializer.is_valid():
        serializer.save()
        
    
    return Response(serializer.data)
@api_view(['POST'])
def createTask(request,pk):
    data=request.data 
    
    task=List.objects.get(id=pk).tasks.create(name=data['name'])
    serializer=TasksSerializer(task,many=False)
    return Response(serializer.data)
@api_view(['DELETE'])
def deleteTask(request,pk):
    task=Tasks.objects.get(id=pk)
    task.delete()
    
    return Response('Task was deleted')
#Daily
@api_view(['GET'])
def getDailies(request):
    dailies=Daily.objects.all().order_by('time')
    serializer=DailySerializer(dailies,many=True)
    return Response(serializer.data)
@api_view(['PUT'])
def updateDaily(request,pk):
    daily=Daily.objects.get(id=pk)
    data=request.data
    serializer=DailySerializer(instance=daily,data=data)
    if serializer.is_valid():
        serializer.save()
        
    
    return Response(serializer.data)
@api_view(['POST'])
def createDaily(request):
    
    data=request.data
    daily=Daily.objects.create(name=data['name'],time=data['time'])
    serializer=DailySerializer(daily,many=False)
    return Response(serializer.data)
@api_view(['DELETE'])
def deleteDaily(request,pk):
    daily=Daily.objects.get(id=pk)
    daily.delete()
    
    return Response('Daily task was deleted')


