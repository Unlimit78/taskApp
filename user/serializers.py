from rest_framework import serializers
from .models import  taskUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = taskUser
        fields = '__all__'

