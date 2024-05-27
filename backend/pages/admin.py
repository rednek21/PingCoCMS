from django.contrib import admin
from streamfield.fields import StreamField

from .models import Page


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'url')
    prepopulated_fields = {"url": ("title",)}
    # formfield_overrides = {
    #     StreamField: {'widget': StreamFieldAdmin},
    # }