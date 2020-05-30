from django.db import models
from user.models import taskUser

STATUS_CHOICES = (
        ('not done','Not done'),
        ('in progress','In progress'),
        ('done','Done')
    )

class Task(models.Model):
    order_id =models.IntegerField(verbose_name='order number',default=1)
    title =models.CharField(max_length=250,verbose_name='task-title')
    body = models.TextField(verbose_name='task-body')
    user = models.ForeignKey(taskUser, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=15,choices=STATUS_CHOICES,default='not done')
    class Meta:
        ordering=('-order_id',)
    def __str__(self):
        return self.title
