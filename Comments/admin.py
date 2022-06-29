from django.contrib import admin
from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('title', 'author')
    list_filter = ('title',)
    search_fields = ('title', 'created')


admin.site.register(Question, QuestionAdmin)
# Register your models here.
