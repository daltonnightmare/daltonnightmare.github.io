from . import views
from django.urls import path

urlpatterns = [
 			path("<str:name>", views.greet, name='hello'),
 			path("", views.home, name= 'home')
]