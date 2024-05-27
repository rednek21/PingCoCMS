from django.db import models

from streamfield.fields import StreamField
from streamblocks.models import RichText, ImageWithText


class Page(models.Model):
    title = models.CharField(max_length=200)
    stream = StreamField(
        model_list=[
            RichText,
            ImageWithText
        ],
        verbose_name="Page blocks"
    )
    url = models.SlugField(unique=True)
    meta_title = models.CharField(max_length=200, blank=True, null=True)
    meta_description = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title
