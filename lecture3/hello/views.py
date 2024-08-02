from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def greet(request,  name):
	context = {'name': name}
	return render(request, "hello/index.html", context)

def home(request):

	return render(request, "hello/home.html")