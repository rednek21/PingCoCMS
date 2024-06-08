# pages/urls.py
from django.urls import path
from .views import page_view

app_name = 'pages'

urlpatterns = [
    path('<slug:url>/', page_view, name='page-view'),
]
