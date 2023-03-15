from django.db import models


# Create your models here.

class List(models.Model):
    
    name = models.CharField(max_length=200)
    created=models.DateTimeField(  auto_now_add=True)
    def _str_(self):
        return self.name

class Tasks(models.Model):
    todolist = models.ForeignKey(List, on_delete=models.CASCADE,related_name="tasks", null=True)
    name = models.CharField(max_length=300)
    complete = models.BooleanField(default=False,null=False)
    end_date = models.CharField(null=True, blank=True,max_length=25)
    created=models.DateTimeField(  auto_now_add=True)
    

    def __str__(self):
        return self.name








class Daily(models.Model):
    
    name = models.CharField(max_length=300,null=True)
    complete = models.BooleanField(default=False)
    time = models.TimeField(null=True)
    lastchecked=models.DateTimeField(null=True,blank=True )

    def __str__(self):
        return self.name