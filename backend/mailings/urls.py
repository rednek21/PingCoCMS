from django.urls import path

from .views import UserActivationMailingVerifyAPIView, UserPasswordResetEmail

app_name = 'mailings'

urlpatterns = [
    path('mailings/set_verify_true/', UserActivationMailingVerifyAPIView.as_view(), name='mailing_varify'),
]
