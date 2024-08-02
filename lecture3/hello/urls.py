from . import views
from django.urls import path

urlpatterns = [
 path('<str:var>', views.hello, name='hello')
]