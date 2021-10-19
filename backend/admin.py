from django.contrib import admin
from .models import Articles
from .models import CustomUser

# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser

admin.site.register(Articles)
admin.site.register(CustomUser,CustomUserAdmin)
