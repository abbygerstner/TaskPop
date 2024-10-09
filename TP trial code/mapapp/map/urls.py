# map/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('save-coordinates/', views.save_coordinates, name='save_coordinates'),
]