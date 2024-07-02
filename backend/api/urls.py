from django.urls import path
from .views import healthdataViewSet, health_recommendation

urlpatterns = [
    path('healthdata/', healthdataViewSet.as_view()),
    path('health-recommendation/', health_recommendation,)
]