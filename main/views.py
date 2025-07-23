from django.shortcuts import render
from django.http import HttpResponse


from django_daraja.mpesa.core import MpesaClient

def home (request):
    return render(request, 'home.html')

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

#VIEWS FOr MPESA Integration
def STK_PUSH(request):
    if request.method == 'POST':
        cl = MpesaClient()
        phone_number = request.POST.get('phone_number')
        amount = request.POST.get('amount')
        try:
            amount = int(amount)
        except ValueError:
            return HttpResponse("Amount must be an integer", status=400)
        account_reference = '7936829'
        transaction_desc = 'NETFLIX SUBSCRIPTION BITCH'
        callback_url = 'https://api.darajambili.com/express-payment'
        response = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
         
        return HttpResponse(response)

    else:
        return HttpResponse('Invalid request', status=400)


   
def stk_push_callback(request):
        data = request.body
        
        return HttpResponse("STK Push in Django NIgga")
