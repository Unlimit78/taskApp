from rest_framework import routers
from .api import  TaskViewSet,taskCreate
from django.urls import path


router = routers.DefaultRouter()
urlpatterns = [
    path('api/task-create',taskCreate,name='task-create')
]
router.register('api/task',TaskViewSet,'tasks')


urlpatterns += router.urls

