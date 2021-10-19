from django.urls import path,include
from .views import ArticleView,MyTokenObtainPairView,CustomUserCreate,LogoutAndBlacklistRefreshTokenForUserView
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

router = routers.DefaultRouter()
router.register('articles',ArticleView,basename='articles')

urlpatterns = [
    path('user/create/',CustomUserCreate.as_view(),name='create_user'),
    path('blacklist/',LogoutAndBlacklistRefreshTokenForUserView.as_view(),name='blacklist'),
    path('token/obtain',MyTokenObtainPairView.as_view(),name='token_obtain'),
    path('token/refresh',TokenRefreshView.as_view(),name='token_refresh'),
    path('',include(router.urls))
]
