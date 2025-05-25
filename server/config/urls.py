# urls.py (главный)
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from recipes_api import views
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = routers.DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'dishes', views.DishViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='docs'),
]