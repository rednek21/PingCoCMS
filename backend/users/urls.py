from django.urls import path

from users.views import UserListAPIView, UserRetrieveAPIView, UserRetrieveUpdateAPIView, UserDestroyAPIView

app_name = 'users'

urlpatterns = [
    path('users/', UserListAPIView.as_view(), name='users_list'),
    path('users/<int:pk>/', UserRetrieveAPIView.as_view(), name='users_retrieve'),
    path('users/<int:pk>/update/', UserRetrieveUpdateAPIView.as_view(), name='users_update'),
    path('users/<int:pk>/destroy/', UserDestroyAPIView.as_view(), name='users_destroy'),
]