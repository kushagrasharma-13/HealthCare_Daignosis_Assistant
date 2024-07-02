from rest_framework import serializers
from . models import HealthData

class HealthdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthData
        exclude = ['user']