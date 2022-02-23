from django.shortcuts import render

def index(request):
  return render(request, 'pages/home/index.html')

def components(request):
  return render(request, 'components/index.html')