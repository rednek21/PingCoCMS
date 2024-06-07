# streamblocks/admin.py

from django.contrib import admin
from streamfield.admin import StreamBlocksAdmin

from streamblocks.models import RichText, ImageWithText

admin.site.unregister(RichText)


@admin.register(RichText)
class RichTextBlockAdmin(StreamBlocksAdmin, admin.ModelAdmin):
    pass
