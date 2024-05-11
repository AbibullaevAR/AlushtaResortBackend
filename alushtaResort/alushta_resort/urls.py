from django.urls import path
from django.views.generic import TemplateView

from .views import BookingFormView

app_name = 'alushta_resort'

urlpatterns = [
    path('index', TemplateView.as_view(template_name='alushta_resort/index.html')),
    path('booking', TemplateView.as_view(template_name='alushta_resort/booking.html')),
    path('rest', TemplateView.as_view(template_name='alushta_resort/rest.html')),
    path('apartment', TemplateView.as_view(template_name='alushta_resort/apartment.html')),
    path('api/bookingForm', BookingFormView.as_view())
]