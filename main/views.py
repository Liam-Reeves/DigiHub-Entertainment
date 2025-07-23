from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def login_view(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')

def payment(request):
    return render(request, 'payment.html')

def plan_payment(request):
    return render(request, 'plan_payment.html')

def subscription(request):
    return render(request, 'subscription.html')

def tos(request):
    return render(request, 'TOS.html')
