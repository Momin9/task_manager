from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import TaskViewSet, register, login_view, logout_view, index

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('api/', include(router.urls)),
    path('register/', register, name='register'),
    path('', index, name='index'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
]
