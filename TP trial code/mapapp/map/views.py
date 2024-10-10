import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def index(request):
    return render(request, 'map/index.html')


@csrf_exempt
def save_coordinates(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        lat = data.get('lat')
        lng = data.get('lng')
        print(f"Received coordinates: Latitude={lat}, Longitude={lng}")
        return JsonResponse({'status': 'success'})

