from rest_framework import routers
from .api import  TaskViewSet,TaskCreate

router = routers.DefaultRouter()

router.register('api/task',TaskViewSet,'tasks')
router.register('api/task-create',TaskCreate,'create')

urlpatterns = router.urls

