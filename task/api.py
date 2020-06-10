from .models import Task
from rest_framework import viewsets,permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TaskSerializer

from rest_framework.decorators import api_view

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer

@api_view(['POST'])
def taskCreate(request):
	serializer = TaskSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)