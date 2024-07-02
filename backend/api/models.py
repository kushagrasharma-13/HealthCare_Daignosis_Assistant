from django.db import models
from django.contrib.auth.models import User

class HealthData(models.Model):
    name = models.CharField(max_length=50, default='None')
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=10, null=True, blank=True)
    medical_history = models.TextField(null=True, blank=True)