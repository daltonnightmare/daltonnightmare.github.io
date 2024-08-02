from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def greet(request,  name):
	return HttpResponse(f"hello there youre {name}, what a wonderful name")

def home(request):
	return HttpResponse("hello brian")