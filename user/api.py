from .models import taskUser
from rest_framework import viewsets,permissions
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = taskUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
