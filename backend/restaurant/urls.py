from django.urls import path
from . import views
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [

    path('', views.index, name='index'),

    path('booking/', views.BookingView.as_view(), name='booking'),
    path('booking/<int:pk>/', views.BookingItemView.as_view(), name='booking_item'),

    path('menu/', views.MenuView.as_view(), name='menu'),
    path('menu/<int:pk>/', views.MenuItemView.as_view(), name='menu_item'),

    path('api-auth-token/', ObtainAuthToken.as_view(), name=''),

]