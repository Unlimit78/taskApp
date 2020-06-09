from .models import Task
from rest_framework import viewsets,permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer

class TaskCreate(APIView):
    def post(self,request):
        task = request.data.get('task')
        serializer = TaskSerializer(data=task)
        if serializer.is_valid(raise_exception=True):
            task_saved = serializer.save()
        return Response({"success":"Tasks '{}' created successfully".format(task_saved.title)})