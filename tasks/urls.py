from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, index, UserRegistrationView
from django.urls import path, include


router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/register/', UserRegistrationView.as_view(), name='register'),
    path('', index, name='index'),
]