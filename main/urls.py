from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('payment/', views.payment, name='payment'),
    path('plan_payment/', views.plan_payment, name='plan_payment'),
    path('subscription/', views.subscription, name='subscription'),
    path('tos/', views.tos, name='tos'),
]
