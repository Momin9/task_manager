from django.contrib import admin

from tasks.models import Task


# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "description", "is_completed", "created_at", "updated_at")
    search_fields = ("id", "title")
    list_editable = ("title", "description", "is_completed")
    readonly_fields = ("id", 'created_at', 'updated_at')


admin.site.register(Task, TaskAdmin)
