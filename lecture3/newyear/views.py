from django.shortcuts import render
import datetime
# Create your views here.


def NY(request):

	now = datetime.datetime.now()
	context = {
	'christmas' : now.day == 25 and now.month == 12
	}


	return render(request, 'newyear/index.html', context)