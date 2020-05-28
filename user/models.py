from django.db import models
from django.contrib.auth.models import AbstractUser



class taskUser(AbstractUser):
    model_pic = models.ImageField(upload_to='media/',default='media/default.png',blank=True,verbose_name='image')
    date_of_birth = models.DateField(default='2000-08-29',blank=True)
    about = models.TextField(default='',blank=True)
    class Meta:
        pass
