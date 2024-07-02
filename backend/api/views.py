from rest_framework import generics
from .models import HealthData
from .serializers import HealthdataSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import form_reponse, concise_report

class healthdataViewSet(generics.ListAPIView):
    queryset = HealthData.objects.all()
    serializer_class = HealthdataSerializer

@api_view(['POST'])
def health_recommendation(request):
    user_data = request.data
    medical_history = ''
    if 'name' in user_data:
        try:
            user = HealthData.objects.get(name=user_data['name'])
            medical_history = user.medical_history
        except HealthData.DoesNotExist:
            user = HealthData(
                name=user_data['name'],
                age=user_data['age'],
                gender=user_data['gender'],
                medical_history=''
            )
            user.save()
    response = form_reponse(user_data['age'], user_data['gender'], user_data['symptoms'], medical_history)
    print(response)
    user.medical_history = concise_report(response)
    user.save()
    return Response(response)

