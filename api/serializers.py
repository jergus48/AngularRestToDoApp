from rest_framework.serializers import ModelSerializer
from .models import List,Tasks,Daily
class ListSerializer(ModelSerializer):
    class Meta:
        model=List
        fields="__all__" 


class TasksSerializer(ModelSerializer):
    class Meta:
        model=Tasks
        fields="__all__" 
class DailySerializer(ModelSerializer):
    class Meta:
        model=Daily
        fields="__all__" 