from django.urls import path

from .views import UserActivationMailingVerifyAPIView

app_name = 'mailings'

urlpatterns = [
    # path('mailings/set_verify_true/<str:username>', UserActivationMailingVerifyAPIView.as_view(), name='mailing_varify'),
    path('mailings/set_verify_true/', UserActivationMailingVerifyAPIView.as_view(), name='mailing_varify'),
]
