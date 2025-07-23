from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('payment/', views.payment, name='payment'),
    path('plan_payment/', views.plan_payment, name='plan_payment'),
    path('subscription/', views.subscription, name='subscription'),
    path('tos/', views.tos, name='tos'),
    #URL for MPESA Integration
    path('STK_PUSH/', views.STK_PUSH, name='STK_PUSH'),
    path('stk_push_callback', views.stk_push_callback, name='stk_push_callback')
]
